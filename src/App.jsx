import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  VOCAB_TOPICS, PHRASES, GRAMMAR_SECTIONS,
  ARTIKEL_WORDS, KASUS_DRILLS, LUECKEN, QUIZ_QS
} from './data.js'
import {
  EXAM_INFO, STUDY_PLAN, HOEREN_TASKS, LESEN_TASKS,
  SPRACHB_TASKS, SCHREIBEN_PROMPTS, SCHREIBEN_PHRASES,
  SPRECHEN_DATA, B1_VOCAB
} from './dataB1.js'

// ============================================================
// CONSTANTS & HELPERS
// ============================================================
const ART_COLOR = { der: '#1557a0', die: '#8c2f62', das: '#1a7a52', pl: '#5a3e8a', v: '#555', adj: '#7c4f0a' }
const ART_BG = { der: '#e8f0fc', die: '#fce8f5', das: '#e8f5ef', pl: '#f0e8fc', v: '#f0f0f0', adj: '#fcf0e0' }
const ART_LABEL = { der: 'DER', die: 'DIE', das: 'DAS', pl: 'PLURAL', v: 'VERB', adj: 'ADJ' }

function useLocalStorage(key, init) {
  const [val, setVal] = useState(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : init } catch { return init }
  })
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(val)) } catch {} }, [key, val])
  return [val, setVal]
}

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5) }

const FADE = { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -4 }, transition: { duration: 0.18 } }

// TTS helper
function speak(text) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'de-DE'
  u.rate = 0.82
  window.speechSynthesis.speak(u)
}

// ============================================================
// GRAMMAR HIGHLIGHT HELPER (for phrases)
// ============================================================
function HighlightSentence({ text, highlights }) {
  if (!highlights || highlights.length === 0) return <span>{text}</span>
  let result = text
  const parts = []
  let remaining = text
  const sorted = [...highlights].sort((a, b) => text.indexOf(a) - text.indexOf(b))
  for (const hl of sorted) {
    const idx = remaining.indexOf(hl)
    if (idx === -1) continue
    if (idx > 0) parts.push({ text: remaining.slice(0, idx), hl: false })
    parts.push({ text: hl, hl: true })
    remaining = remaining.slice(idx + hl.length)
  }
  if (remaining) parts.push({ text: remaining, hl: false })
  return (
    <span>
      {parts.map((p, i) =>
        p.hl
          ? <span key={i} style={{ color: '#c97b00', fontWeight: 600 }}>{p.text}</span>
          : <span key={i}>{p.text}</span>
      )}
    </span>
  )
}

// ============================================================
// BOTTOM NAV
// ============================================================
const TABS = [
  { id: 'learn', label: 'Lernen', icon: '📚' },
  { id: 'practice', label: 'Üben', icon: '✏️' },
  { id: 'phrases', label: 'Sätze', icon: '💬' },
  { id: 'grammar', label: 'Grammatik', icon: '📖' },
  { id: 'quiz', label: 'Quiz', icon: '🎯' },
]

function BottomNav({ tab, setTab }) {
  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: 480,
      background: '#fff', borderTop: '1px solid #e5e5ea',
      display: 'flex', height: 64,
      paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      zIndex: 100,
    }}>
      {TABS.map(t => (
        <button key={t.id} onClick={() => setTab(t.id)} style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 2, background: 'none', border: 'none',
          cursor: 'pointer', padding: '6px 0',
          color: tab === t.id ? '#c97b00' : '#aeaeb2',
          transition: 'color 0.15s',
        }}>
          <span style={{ fontSize: 20 }}>{t.icon}</span>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.3 }}>{t.label}</span>
          {tab === t.id && (
            <motion.div layoutId="nav-indicator" style={{
              position: 'absolute', bottom: 0, width: 32, height: 2,
              background: '#c97b00', borderRadius: 2,
            }} />
          )}
        </button>
      ))}
    </nav>
  )
}

// ============================================================
// B1 BOTTOM NAV
// ============================================================
const B1_TABS = [
  { id: 'plan', label: 'Plan', icon: '📋' },
  { id: 'hoeren', label: 'Hören', icon: '👂' },
  { id: 'lesen', label: 'Lesen', icon: '📖' },
  { id: 'schreiben', label: 'Schreiben', icon: '✍️' },
  { id: 'sprechen', label: 'Sprechen', icon: '🗣️' },
]

function B1BottomNav({ tab, setTab }) {
  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: 480,
      background: '#fff', borderTop: '1px solid #e5e5ea',
      display: 'flex', height: 64,
      paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      zIndex: 100,
    }}>
      {B1_TABS.map(t => (
        <button key={t.id} onClick={() => setTab(t.id)} style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 2, background: 'none', border: 'none',
          cursor: 'pointer', padding: '6px 0',
          color: tab === t.id ? '#1557a0' : '#aeaeb2',
          transition: 'color 0.15s',
        }}>
          <span style={{ fontSize: 18 }}>{t.icon}</span>
          <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: 0.3 }}>{t.label}</span>
          {tab === t.id && (
            <motion.div layoutId="b1-nav-indicator" style={{
              position: 'absolute', bottom: 0, width: 32, height: 2,
              background: '#1557a0', borderRadius: 2,
            }} />
          )}
        </button>
      ))}
    </nav>
  )
}

// ============================================================
// FLASH CARD
// ============================================================
function FlashCard({ word, cardKey, learned, onLearn }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="fc-wrap" style={{ height: 155, cursor: 'pointer', position: 'relative' }}
      onClick={() => setFlipped(f => !f)}
    >
      <div className={`fc-inner${flipped ? ' flipped' : ''}`} style={{ width: '100%', height: '100%' }}>
        {/* FRONT */}
        <div className="fc-front" style={{
          background: learned ? '#e8f5e9' : '#fff',
          border: `1px solid ${learned ? '#81c784' : '#e5e5ea'}`,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '12px 10px', textAlign: 'center', gap: 6,
        }}>
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 0.8,
            color: ART_COLOR[word.a] || '#555',
            background: ART_BG[word.a] || '#f0f0f0',
            padding: '2px 8px', borderRadius: 20,
          }}>{ART_LABEL[word.a] || word.a.toUpperCase()}</span>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#1c1c1e', lineHeight: 1.3 }}>{word.de}</span>
          {learned && <span style={{ fontSize: 10, color: '#2e7d32', fontWeight: 600 }}>✓ Gelernt</span>}
          {!learned && <span style={{ fontSize: 10, color: '#aeaeb2' }}>tippen zum Umdrehen</span>}
        </div>
        {/* BACK */}
        <div className="fc-back" style={{
          background: '#fff8e1', border: '1px solid #ffd54f',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '10px 12px', overflow: 'hidden',
        }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#7a4800', marginBottom: 4 }}>{word.en}</div>
            <div style={{ fontSize: 11, background: '#e3f2fd', color: '#0d3c7a', borderRadius: 7, padding: '5px 8px', lineHeight: 1.5, borderLeft: '3px solid #90caf9' }}>
              📐 {word.gram}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#1c1c1e', fontStyle: 'italic', marginBottom: 4 }}>„{word.ex}"</div>
            <div style={{ fontSize: 11, color: '#6b6b72', marginBottom: 6 }}>{word.exEn}</div>
            <button
              onClick={e => { e.stopPropagation(); onLearn(cardKey) }}
              style={{
                fontSize: 11, fontWeight: 700, padding: '4px 12px',
                background: learned ? '#e8f5e9' : '#fff',
                color: learned ? '#2e7d32' : '#c97b00',
                border: `1px solid ${learned ? '#81c784' : '#ffd54f'}`,
                borderRadius: 20, cursor: 'pointer',
              }}
            >{learned ? '✓ Gelernt' : '✓ Als gelernt markieren'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// LEARN TAB
// ============================================================
function LearnTab({ learned, setLearned, xp, setXP }) {
  const [topicId, setTopicId] = useState('alltag')
  const topic = VOCAB_TOPICS.find(t => t.id === topicId)
  const totalWords = VOCAB_TOPICS.reduce((s, t) => s + t.words.length, 0)
  const learnedCount = learned.length
  const pct = Math.round((learnedCount / totalWords) * 100)

  function handleLearn(key) {
    if (!learned.includes(key)) {
      setLearned(l => [...l, key])
      setXP(x => x + 10)
    }
  }

  return (
    <div style={{ padding: '0 16px 16px' }}>
      {/* Progress */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#6b6b72', marginBottom: 5 }}>
          <span>Gesamtfortschritt</span>
          <span style={{ fontWeight: 600 }}>{learnedCount} / {totalWords} Wörter</span>
        </div>
        <div style={{ height: 5, background: '#e5e5ea', borderRadius: 3, overflow: 'hidden' }}>
          <motion.div animate={{ width: `${pct}%` }} transition={{ duration: 0.5 }}
            style={{ height: '100%', background: '#2e7d32', borderRadius: 3 }} />
        </div>
      </div>

      {/* Topic pills */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 8, marginBottom: 12, scrollbarWidth: 'none' }}>
        {VOCAB_TOPICS.map(t => (
          <button key={t.id} onClick={() => setTopicId(t.id)} style={{
            flexShrink: 0, padding: '5px 13px', fontSize: 12, fontWeight: 600,
            borderRadius: 20, cursor: 'pointer', transition: 'all 0.15s',
            border: topicId === t.id ? '1.5px solid #c97b00' : '1.5px solid #e5e5ea',
            background: topicId === t.id ? '#fff8e1' : '#fff',
            color: topicId === t.id ? '#7a4800' : '#6b6b72',
          }}>{t.emoji} {t.label}</button>
        ))}
      </div>

      {/* Grammar Spotlight */}
      <div style={{
        background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 12,
        padding: '10px 14px', marginBottom: 14,
      }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#1565c0', letterSpacing: 0.8, marginBottom: 3 }}>
          📐 GRAMMATIK-TIPP: {topic.gramSpotlight.title}
        </div>
        <div style={{ fontSize: 13, color: '#0d3c7a', lineHeight: 1.5 }}>{topic.gramSpotlight.rule}</div>
      </div>

      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {topic.words.map((w, i) => {
          const key = `${topicId}-${i}`
          return (
            <FlashCard key={key} word={w} cardKey={key}
              learned={learned.includes(key)} onLearn={handleLearn} />
          )
        })}
      </div>
    </div>
  )
}

// ============================================================
// PRACTICE TAB
// ============================================================
function PracticeTab({ xp, setXP }) {
  const [drillType, setDrillType] = useState('artikel')

  return (
    <div style={{ padding: '0 16px 16px' }}>
      {/* Drill type selector */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {[
          { id: 'artikel', label: '🔵 Artikel' },
          { id: 'kasus', label: '📐 Kasus' },
          { id: 'luecken', label: '✏️ Lückentext' },
        ].map(d => (
          <button key={d.id} onClick={() => setDrillType(d.id)} style={{
            flex: 1, padding: '8px 4px', fontSize: 12, fontWeight: 600, borderRadius: 10,
            border: drillType === d.id ? '1.5px solid #c97b00' : '1.5px solid #e5e5ea',
            background: drillType === d.id ? '#fff8e1' : '#fff',
            color: drillType === d.id ? '#7a4800' : '#6b6b72',
            cursor: 'pointer', transition: 'all 0.15s',
          }}>{d.label}</button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={drillType} {...FADE}>
          {drillType === 'artikel' && <ArtikelDrill setXP={setXP} />}
          {drillType === 'kasus' && <KasusDrill setXP={setXP} />}
          {drillType === 'luecken' && <LueckenDrill setXP={setXP} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ---- Artikel Drill ----
function ArtikelDrill({ setXP }) {
  const [pool] = useState(() => shuffle(ARTIKEL_WORDS))
  const [idx, setIdx] = useState(0)
  const [status, setStatus] = useState(null) // null | 'ok' | 'ng'
  const [score, setScore] = useState({ ok: 0, total: 0 })
  const shakeRef = useRef(null)

  const current = pool[idx % pool.length]

  function answer(a) {
    if (status) return
    const ok = a === current.a
    setStatus(ok ? 'ok' : 'ng')
    setScore(s => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }))
    if (ok) setXP(x => x + 5)
    else if (shakeRef.current) shakeRef.current.classList.add('shake')
  }

  function next() {
    if (shakeRef.current) shakeRef.current.classList.remove('shake')
    setIdx(i => i + 1)
    setStatus(null)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: 13, color: '#6b6b72' }}>Welcher Artikel?</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#c97b00' }}>
          {score.ok}/{score.total} ✓
        </div>
      </div>

      <div ref={shakeRef} style={{
        background: status === 'ok' ? '#e8f5e9' : status === 'ng' ? '#ffebee' : '#fff',
        border: `1.5px solid ${status === 'ok' ? '#81c784' : status === 'ng' ? '#ef9a9a' : '#e5e5ea'}`,
        borderRadius: 16, padding: '28px 16px', textAlign: 'center', marginBottom: 16,
        transition: 'all 0.25s',
      }}>
        <div style={{ fontSize: 13, color: '#6b6b72', marginBottom: 6 }}>___ ?</div>
        <div style={{ fontSize: 26, fontWeight: 700, color: '#1c1c1e', marginBottom: 4 }}>{current.de}</div>
        {status && (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: ART_COLOR[current.a] }}>
              → {ART_LABEL[current.a]} {current.de}
            </div>
            <div style={{ fontSize: 12, color: '#6b6b72', marginTop: 4, lineHeight: 1.5 }}>{current.tip}</div>
          </motion.div>
        )}
      </div>

      {/* Buttons */}
      {!status ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 12 }}>
          {['der', 'die', 'das'].map(a => (
            <button key={a} onClick={() => answer(a)} style={{
              padding: '14px 0', fontSize: 16, fontWeight: 800,
              color: ART_COLOR[a], background: ART_BG[a],
              border: `1.5px solid ${ART_COLOR[a]}22`, borderRadius: 12,
              cursor: 'pointer', letterSpacing: 0.5,
            }}>{a.toUpperCase()}</button>
          ))}
        </div>
      ) : (
        <motion.button
          initial={{ scale: 0.95 }} animate={{ scale: 1 }}
          onClick={next} style={{
            width: '100%', padding: '14px', fontSize: 14, fontWeight: 700,
            background: '#c97b00', color: '#fff', border: 'none', borderRadius: 12,
            cursor: 'pointer', marginBottom: 12,
          }}>Weiter →</motion.button>
      )}

      {/* Artikel rule reminder */}
      <div style={{ background: '#f5f4f0', borderRadius: 10, padding: '10px 12px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#6b6b72', marginBottom: 5 }}>ARTIKEL-REGELN (Eselsbrücken)</div>
        <div style={{ fontSize: 12, color: '#1c1c1e', lineHeight: 1.7 }}>
          <span style={{ color: '#8c2f62', fontWeight: 600 }}>DIE</span> → Endungen: <b>-ung, -heit, -keit, -schaft, -tion, -ität, -ei</b><br />
          <span style={{ color: '#1557a0', fontWeight: 600 }}>DER</span> → Person (-er Berufe), Wochentage, Monate, Jahreszeiten<br />
          <span style={{ color: '#1a7a52', fontWeight: 600 }}>DAS</span> → Verkleinerungen (-chen, -lein), Fremdwörter, Gerundive (-en als Nomen)
        </div>
      </div>
    </div>
  )
}

// ---- Kasus Drill ----
function KasusDrill({ setXP }) {
  const [pool] = useState(() => shuffle(KASUS_DRILLS))
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState({ ok: 0, total: 0 })

  const current = pool[idx % pool.length]
  const opts = current.opts

  function answer(opt) {
    if (selected) return
    setSelected(opt)
    const ok = opt === current.blank
    setScore(s => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }))
    if (ok) setXP(x => x + 5)
  }

  function next() {
    setIdx(i => i + 1)
    setSelected(null)
  }

  const parts = current.sent.split('___')

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 13, color: '#6b6b72' }}>Richtige Form wählen</div>
          <div style={{ fontSize: 11, color: '#c97b00', fontWeight: 600 }}>Fall: {current.caseName}</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#c97b00' }}>{score.ok}/{score.total} ✓</div>
      </div>

      {/* Sentence display */}
      <div style={{
        background: '#fff', border: '1.5px solid #e5e5ea', borderRadius: 14,
        padding: '18px 16px', marginBottom: 14, textAlign: 'center',
      }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: '#1c1c1e', lineHeight: 1.6 }}>
          {parts[0]}
          <span style={{
            display: 'inline-block', minWidth: 44, padding: '0 6px',
            borderBottom: `2px solid ${selected ? (selected === current.blank ? '#2e7d32' : '#c62828') : '#c97b00'}`,
            color: selected ? (selected === current.blank ? '#2e7d32' : '#c62828') : '#c97b00',
            fontWeight: 700, margin: '0 2px',
          }}>
            {selected || '___'}
          </span>
          {parts[1]}
        </div>
      </div>

      {/* Options */}
      {!selected ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
          {opts.map(opt => (
            <button key={opt} onClick={() => answer(opt)} style={{
              padding: '13px 0', fontSize: 15, fontWeight: 700, borderRadius: 12,
              background: '#fff', border: '1.5px solid #e5e5ea',
              color: '#1c1c1e', cursor: 'pointer',
            }}>{opt}</button>
          ))}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{
            background: selected === current.blank ? '#e8f5e9' : '#ffebee',
            border: `1px solid ${selected === current.blank ? '#81c784' : '#ef9a9a'}`,
            borderRadius: 10, padding: '10px 12px', marginBottom: 10,
            fontSize: 13, color: selected === current.blank ? '#2e7d32' : '#c62828',
            fontWeight: 600,
          }}>
            {selected === current.blank ? '✓ Richtig!' : `✗ Richtig: "${current.blank}"`}
          </div>
          <div style={{
            background: '#e3f2fd', borderRadius: 10, padding: '10px 12px',
            fontSize: 12, color: '#0d3c7a', lineHeight: 1.6, marginBottom: 10,
            borderLeft: '3px solid #90caf9',
          }}>
            📐 {current.rule}
          </div>
          <button onClick={next} style={{
            width: '100%', padding: '13px', fontSize: 14, fontWeight: 700,
            background: '#c97b00', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer',
          }}>Weiter →</button>
        </motion.div>
      )}
    </div>
  )
}

// ---- Lückentext Drill ----
function LueckenDrill({ setXP }) {
  const [pool] = useState(() => shuffle(LUECKEN))
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState({ ok: 0, total: 0 })

  const current = pool[idx % pool.length]
  const parts = current.sent.split('___')

  function answer(opt) {
    if (selected) return
    setSelected(opt)
    const ok = opt === current.blank
    setScore(s => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }))
    if (ok) setXP(x => x + 5)
  }

  function next() {
    setIdx(i => i + 1)
    setSelected(null)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: 13, color: '#6b6b72' }}>Fehlende Wörter ergänzen</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#c97b00' }}>{score.ok}/{score.total} ✓</div>
      </div>

      <div style={{
        background: '#fff', border: '1.5px solid #e5e5ea', borderRadius: 14,
        padding: '18px 16px', marginBottom: 14, textAlign: 'center',
      }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#1c1c1e', lineHeight: 1.7 }}>
          {parts[0]}
          <span style={{
            display: 'inline-block', minWidth: 56, padding: '1px 8px',
            background: selected
              ? (selected === current.blank ? '#e8f5e9' : '#ffebee')
              : '#fff8e1',
            border: `1.5px solid ${selected
              ? (selected === current.blank ? '#81c784' : '#ef9a9a')
              : '#ffd54f'}`,
            borderRadius: 6, margin: '0 3px',
            color: selected
              ? (selected === current.blank ? '#2e7d32' : '#c62828')
              : '#c97b00',
            fontWeight: 700,
          }}>
            {selected || '?'}
          </span>
          {parts[1]}
        </div>
      </div>

      {!selected ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
          {current.opts.map(opt => (
            <button key={opt} onClick={() => answer(opt)} style={{
              padding: '12px 8px', fontSize: 13, fontWeight: 600, borderRadius: 12,
              background: '#fff', border: '1.5px solid #e5e5ea',
              color: '#1c1c1e', cursor: 'pointer', lineHeight: 1.3,
            }}>{opt}</button>
          ))}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{
            background: selected === current.blank ? '#e8f5e9' : '#ffebee',
            border: `1px solid ${selected === current.blank ? '#81c784' : '#ef9a9a'}`,
            borderRadius: 10, padding: '10px 12px', marginBottom: 10,
            fontSize: 13, color: selected === current.blank ? '#2e7d32' : '#c62828',
            fontWeight: 600,
          }}>
            {selected === current.blank ? '✓ Richtig!' : `✗ Die Antwort ist: „${current.blank}"`}
          </div>
          <div style={{
            background: '#e3f2fd', borderRadius: 10, padding: '10px 12px',
            fontSize: 12, color: '#0d3c7a', lineHeight: 1.6, marginBottom: 10,
            borderLeft: '3px solid #90caf9',
          }}>
            📐 {current.rule}
          </div>
          <button onClick={next} style={{
            width: '100%', padding: '13px', fontSize: 14, fontWeight: 700,
            background: '#c97b00', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer',
          }}>Weiter →</button>
        </motion.div>
      )}
    </div>
  )
}

// ============================================================
// PHRASES TAB
// ============================================================
function PhrasesTab() {
  const [catIdx, setCatIdx] = useState(0)
  const cat = PHRASES[catIdx]

  return (
    <div style={{ padding: '0 16px 16px' }}>
      {/* Category pills */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 8, marginBottom: 14, scrollbarWidth: 'none' }}>
        {PHRASES.map((c, i) => (
          <button key={i} onClick={() => setCatIdx(i)} style={{
            flexShrink: 0, padding: '5px 12px', fontSize: 12, fontWeight: 600,
            borderRadius: 20, cursor: 'pointer', transition: 'all 0.15s',
            border: catIdx === i ? '1.5px solid #c97b00' : '1.5px solid #e5e5ea',
            background: catIdx === i ? '#fff8e1' : '#fff',
            color: catIdx === i ? '#7a4800' : '#6b6b72',
          }}>{c.emoji} {c.cat}</button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={catIdx} {...FADE}>
          {cat.items.map((item, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid #e5e5ea', borderRadius: 14,
              padding: '14px', marginBottom: 10,
            }}>
              {/* German sentence with highlights */}
              <div style={{ fontSize: 16, fontWeight: 600, color: '#1c1c1e', marginBottom: 4, lineHeight: 1.5 }}>
                <HighlightSentence text={item.de} highlights={item.highlights} />
              </div>
              {/* English */}
              <div style={{ fontSize: 13, color: '#6b6b72', marginBottom: 8 }}>{item.en}</div>
              {/* Grammar note */}
              <div style={{
                background: '#e3f2fd', borderLeft: '3px solid #90caf9',
                borderRadius: '0 8px 8px 0', padding: '7px 10px',
              }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: '#1565c0', letterSpacing: 0.8, marginBottom: 2 }}>
                  📐 {item.gramKey}
                </div>
                <div style={{ fontSize: 12, color: '#0d3c7a', lineHeight: 1.6 }}>{item.gramNote}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ============================================================
// GRAMMAR TAB
// ============================================================
function GrammarSection({ section, idx, openIdx, setOpenIdx }) {
  const isOpen = openIdx === idx

  return (
    <div style={{
      background: '#fff', borderRadius: 14, marginBottom: 8,
      border: '1px solid #e5e5ea', overflow: 'hidden',
    }}>
      <button onClick={() => setOpenIdx(isOpen ? -1 : idx)} style={{
        width: '100%', padding: '13px 14px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        background: isOpen ? '#fff8e1' : '#fff', border: 'none', cursor: 'pointer',
        transition: 'background 0.15s',
      }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1c1c1e', marginBottom: 2 }}>{section.t}</div>
          <div style={{ fontSize: 11, color: '#6b6b72' }}>{section.summary}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, marginLeft: 8 }}>
          <span style={{
            fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 20,
            background: section.b1 ? '#e8eaf6' : '#fff8e1',
            color: section.b1 ? '#3949ab' : '#7a4800',
          }}>{section.tag}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}
            style={{ display: 'inline-block', color: '#aeaeb2', fontSize: 14 }}>▾</motion.span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 14px 14px', borderTop: '1px solid #e5e5ea' }}
              dangerouslySetInnerHTML={{ __html: section.body }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function GrammarTab() {
  const [openIdx, setOpenIdx] = useState(0)
  const a2Sections = GRAMMAR_SECTIONS.filter(s => !s.b1)
  const b1Sections = GRAMMAR_SECTIONS.filter(s => s.b1)

  return (
    <div style={{ padding: '0 16px 16px' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#6b6b72', letterSpacing: 0.8, marginBottom: 10 }}>
        A2 GRAMMATIK
      </div>
      {a2Sections.map((s, i) => (
        <GrammarSection key={i} section={s} idx={i} openIdx={openIdx} setOpenIdx={setOpenIdx} />
      ))}
      <div style={{ fontSize: 11, fontWeight: 700, color: '#3949ab', letterSpacing: 0.8, margin: '18px 0 10px' }}>
        B1 VORSCHAU — NÄCHSTE STUFE
      </div>
      {b1Sections.map((s, i) => (
        <GrammarSection key={i + 100} section={s} idx={i + 100} openIdx={openIdx} setOpenIdx={setOpenIdx} />
      ))}
    </div>
  )
}

// ============================================================
// QUIZ TAB
// ============================================================
function QuizTab({ setXP }) {
  const [phase, setPhase] = useState('start') // start | quiz | result
  const [questions, setQuestions] = useState([])
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [results, setResults] = useState([])

  function startQuiz() {
    const shuffled = shuffle(QUIZ_QS).slice(0, 15)
    setQuestions(shuffled)
    setQIdx(0)
    setSelected(null)
    setResults([])
    setPhase('quiz')
  }

  function answer(optIdx) {
    if (selected !== null) return
    setSelected(optIdx)
    const ok = optIdx === questions[qIdx].c
    setResults(r => [...r, ok])
    if (ok) setXP(x => x + 15)
  }

  function next() {
    if (qIdx + 1 >= questions.length) {
      setPhase('result')
    } else {
      setQIdx(i => i + 1)
      setSelected(null)
    }
  }

  if (phase === 'start') {
    return (
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🎯</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#1c1c1e', marginBottom: 6 }}>Quiz — A2 testen</div>
        <div style={{ fontSize: 14, color: '#6b6b72', textAlign: 'center', marginBottom: 8 }}>15 Fragen · Vokabeln, Grammatik & Sätze</div>
        <div style={{ fontSize: 12, color: '#6b6b72', textAlign: 'center', marginBottom: 28, lineHeight: 1.6 }}>
          Jede richtige Antwort = +15 XP.<br />Grammatik-Erklärung nach jeder Frage.
        </div>
        <button onClick={startQuiz} style={{
          padding: '14px 40px', fontSize: 16, fontWeight: 700,
          background: '#c97b00', color: '#fff', border: 'none', borderRadius: 14,
          cursor: 'pointer',
        }}>Quiz starten</button>
      </div>
    )
  }

  if (phase === 'result') {
    const score = results.filter(Boolean).length
    const pct = Math.round(score / questions.length * 100)
    const msg = pct >= 90 ? 'Ausgezeichnet! 🏆' : pct >= 70 ? 'Sehr gut! ⭐' : pct >= 50 ? 'Gut gemacht! 👍' : 'Weiter üben! 💪'
    return (
      <motion.div {...FADE} style={{ padding: '0 16px', paddingTop: 32, textAlign: 'center' }}>
        <div style={{ fontSize: 60, fontWeight: 800, color: pct >= 70 ? '#2e7d32' : '#c62828', lineHeight: 1 }}>{score}/{questions.length}</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#1c1c1e', margin: '8px 0 4px' }}>{msg}</div>
        <div style={{ fontSize: 13, color: '#6b6b72', marginBottom: 24 }}>+{score * 15} XP verdient</div>

        {/* Wrong answers review */}
        {results.some(r => !r) && (
          <div style={{ textAlign: 'left', marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b6b72', letterSpacing: 0.8, marginBottom: 8 }}>FALSCH BEANTWORTET — NOCH MAL ANSEHEN:</div>
            {questions.map((q, i) => !results[i] && (
              <div key={i} style={{
                background: '#ffebee', border: '1px solid #ef9a9a', borderRadius: 12,
                padding: '10px 12px', marginBottom: 8,
              }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#c62828', marginBottom: 4 }}>{q.q}</div>
                <div style={{ fontSize: 12, color: '#2e7d32', fontWeight: 600, marginBottom: 4 }}>✓ {q.opts[q.c]}</div>
                <div style={{ fontSize: 11, color: '#6b6b72', lineHeight: 1.5 }}>{q.ex}</div>
              </div>
            ))}
          </div>
        )}

        <button onClick={startQuiz} style={{
          padding: '14px 40px', fontSize: 15, fontWeight: 700,
          background: '#c97b00', color: '#fff', border: 'none', borderRadius: 14, cursor: 'pointer',
        }}>Nochmal versuchen</button>
      </motion.div>
    )
  }

  // Quiz question
  const q = questions[qIdx]
  const progressPct = (qIdx / questions.length) * 100

  return (
    <div style={{ padding: '0 16px 16px' }}>
      {/* Progress bar */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#6b6b72', marginBottom: 5 }}>
          <span>Frage {qIdx + 1} von {questions.length}</span>
          <span>{results.filter(Boolean).length} richtig</span>
        </div>
        <div style={{ height: 4, background: '#e5e5ea', borderRadius: 2, overflow: 'hidden' }}>
          <motion.div
            animate={{ width: `${progressPct}%` }} transition={{ duration: 0.3 }}
            style={{ height: '100%', background: '#c97b00', borderRadius: 2 }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={qIdx} {...FADE}>
          {/* Question */}
          <div style={{
            background: '#fff', border: '1px solid #e5e5ea', borderRadius: 14,
            padding: '16px', marginBottom: 12,
          }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#1c1c1e', lineHeight: 1.5 }}>
              {q.q}
            </div>
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
            {q.opts.map((opt, i) => {
              let bg = '#fff', border = '#e5e5ea', color = '#1c1c1e'
              if (selected !== null) {
                if (i === q.c) { bg = '#e8f5e9'; border = '#81c784'; color = '#2e7d32' }
                else if (i === selected && i !== q.c) { bg = '#ffebee'; border = '#ef9a9a'; color = '#c62828' }
              }
              return (
                <button key={i} onClick={() => answer(i)} disabled={selected !== null} style={{
                  padding: '13px 14px', fontSize: 14, fontWeight: 500,
                  background: bg, border: `1.5px solid ${border}`, color,
                  borderRadius: 12, textAlign: 'left', cursor: selected !== null ? 'default' : 'pointer',
                  transition: 'all 0.2s', lineHeight: 1.4,
                }}>{opt}</button>
              )
            })}
          </div>

          {/* Feedback */}
          {selected !== null && (
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
              <div style={{
                background: selected === q.c ? '#e8f5e9' : '#ffebee',
                border: `1px solid ${selected === q.c ? '#81c784' : '#ef9a9a'}`,
                borderRadius: 10, padding: '10px 12px', marginBottom: 10,
                fontSize: 13, fontWeight: 600,
                color: selected === q.c ? '#2e7d32' : '#c62828',
              }}>
                {selected === q.c ? '✓ Richtig!' : '✗ Nicht ganz.'}
              </div>
              <div style={{
                background: '#e3f2fd', borderLeft: '3px solid #90caf9', borderRadius: '0 10px 10px 0',
                padding: '10px 12px', fontSize: 12, color: '#0d3c7a', lineHeight: 1.6, marginBottom: 12,
              }}>
                📐 {q.ex}
              </div>
              <button onClick={next} style={{
                width: '100%', padding: '13px', fontSize: 14, fontWeight: 700,
                background: '#c97b00', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer',
              }}>
                {qIdx + 1 >= questions.length ? 'Ergebnis sehen →' : 'Nächste Frage →'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ============================================================
// B1 — PLAN TAB (30-day study plan + exam overview)
// ============================================================
function B1PlanTab() {
  const [completedDays, setCompletedDays] = useLocalStorage('b1_plan_done', [])
  const [selectedDay, setSelectedDay] = useState(null)
  const [showExam, setShowExam] = useState(false)
  const today = completedDays.length + 1

  function toggleDay(d) {
    setCompletedDays(prev =>
      prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
    )
  }

  const weeks = [1, 2, 3, 4]

  return (
    <div style={{ padding: '0 16px 16px' }}>
      {/* Exam overview toggle */}
      <button onClick={() => setShowExam(s => !s)} style={{
        width: '100%', padding: '12px 16px', marginBottom: 16,
        background: showExam ? '#1557a0' : '#e3f2fd',
        color: showExam ? '#fff' : '#1557a0',
        border: '1px solid #90caf9', borderRadius: 12,
        fontSize: 13, fontWeight: 700, cursor: 'pointer',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span>📋 Telc B1 Prüfungsübersicht</span>
        <span>{showExam ? '▲' : '▼'}</span>
      </button>

      {showExam && (
        <motion.div {...FADE} style={{ marginBottom: 16 }}>
          <div style={{ background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 12, padding: '12px 14px', marginBottom: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1565c0', marginBottom: 8, letterSpacing: 0.8 }}>PRÜFUNGSSTRUKTUR — 300 PUNKTE GESAMT</div>
            {EXAM_INFO.sections.map((s, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, padding: '5px 0', borderBottom: '1px solid #90caf922' }}>
                <span>{s.emoji} <b>{s.name}</b> ({s.parts} Teile)</span>
                <span style={{ color: '#1557a0', fontWeight: 700 }}>{s.points} P · {s.time}</span>
              </div>
            ))}
            <div style={{ marginTop: 8, fontSize: 11, color: '#1557a0', fontWeight: 700 }}>
              Bestehen: Schriftlich ≥135/225 UND Mündlich ≥45/75
            </div>
          </div>
          {EXAM_INFO.tips.map((tip, i) => (
            <div key={i} style={{ background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 8, padding: '8px 12px', marginBottom: 6, fontSize: 12, color: '#7a4800', lineHeight: 1.5 }}>
              💡 {tip}
            </div>
          ))}
        </motion.div>
      )}

      {/* Progress bar */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#6b6b72', marginBottom: 5 }}>
          <span>30-Tage-Plan</span>
          <span style={{ fontWeight: 700 }}>{completedDays.length}/30 Tage ✓</span>
        </div>
        <div style={{ height: 6, background: '#e5e5ea', borderRadius: 3, overflow: 'hidden' }}>
          <motion.div animate={{ width: `${(completedDays.length / 30) * 100}%` }}
            style={{ height: '100%', background: '#1557a0', borderRadius: 3 }} />
        </div>
      </div>

      {weeks.map(week => (
        <div key={week} style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6b6b72', letterSpacing: 0.8, marginBottom: 8 }}>
            WOCHE {week} — {['A2 Wiederholung', 'Lesen & Sprachbausteine', 'Hören & Sprechen', 'Schreiben & Mock'][week - 1]}
          </div>
          {STUDY_PLAN.filter(d => d.week === week).map(d => {
            const done = completedDays.includes(d.day)
            const isToday = d.day === today && !done
            const open = selectedDay === d.day
            return (
              <div key={d.day} style={{ marginBottom: 6 }}>
                <button onClick={() => setSelectedDay(open ? null : d.day)} style={{
                  width: '100%', background: done ? '#e8f5e9' : isToday ? '#fff8e1' : '#fff',
                  border: `1.5px solid ${done ? '#81c784' : isToday ? '#ffd54f' : '#e5e5ea'}`,
                  borderRadius: 10, padding: '10px 12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  cursor: 'pointer', textAlign: 'left',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      background: done ? '#2e7d32' : isToday ? '#c97b00' : '#e5e5ea',
                      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700,
                    }}>{done ? '✓' : d.day}</div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#1c1c1e' }}>{d.title}</div>
                      <div style={{ fontSize: 10, color: '#6b6b72' }}>{d.focus} · +{d.xp} XP</div>
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color: '#aeaeb2' }}>{open ? '▲' : '▼'}</span>
                </button>
                {open && (
                  <motion.div {...FADE} style={{
                    background: '#f5f4f0', borderRadius: '0 0 10px 10px',
                    padding: '10px 12px', borderTop: 'none',
                  }}>
                    {d.tasks.map((task, i) => (
                      <div key={i} style={{ fontSize: 12, color: '#1c1c1e', padding: '4px 0', borderBottom: '1px solid #e5e5ea22', lineHeight: 1.5 }}>
                        {i + 1}. {task}
                      </div>
                    ))}
                    <button onClick={() => { toggleDay(d.day); setSelectedDay(null) }} style={{
                      marginTop: 10, width: '100%', padding: '9px', fontSize: 12, fontWeight: 700,
                      background: done ? '#fff' : '#1557a0',
                      color: done ? '#c62828' : '#fff',
                      border: `1.5px solid ${done ? '#ef9a9a' : '#1557a0'}`,
                      borderRadius: 8, cursor: 'pointer',
                    }}>{done ? '✗ Als unerledigt markieren' : '✓ Tag abschließen'}</button>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

// ============================================================
// B1 — HÖREN TAB
// ============================================================
function B1HoerenTab() {
  const [taskIdx, setTaskIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const task = HOEREN_TASKS[taskIdx]

  function reset() { setAnswers({}); setChecked(false); setShowTranscript(false) }
  function switchTask(i) { setTaskIdx(i); setAnswers({}); setChecked(false); setShowTranscript(false) }

  function playAudio(text) {
    setSpeaking(true)
    speak(text)
    setTimeout(() => setSpeaking(false), text.length * 55)
  }

  function stopAudio() {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
  }

  const isH3 = task.id === 'h3'

  // H1 / H2: True/False
  function renderTF() {
    const qs = task.questions
    const correct = checked ? qs.filter((q, i) => answers[i] === (q.answer ? 'R' : 'F')).length : 0
    return (
      <div>
        {qs.map((q, i) => {
          const userAns = answers[i]
          const correctAns = q.answer ? 'R' : 'F'
          const isRight = userAns === correctAns
          return (
            <div key={i} style={{
              background: checked ? (isRight ? '#e8f5e9' : '#ffebee') : '#fff',
              border: `1px solid ${checked ? (isRight ? '#81c784' : '#ef9a9a') : '#e5e5ea'}`,
              borderRadius: 10, padding: '10px 12px', marginBottom: 8,
            }}>
              <div style={{ fontSize: 13, color: '#1c1c1e', lineHeight: 1.5, marginBottom: 6 }}>{i + 1}. {q.text}</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['R', 'F'].map(opt => (
                  <button key={opt} onClick={() => !checked && setAnswers(a => ({ ...a, [i]: opt }))} style={{
                    flex: 1, padding: '7px 0', fontSize: 13, fontWeight: 700, borderRadius: 8,
                    background: userAns === opt ? (opt === 'R' ? '#e8f5e9' : '#ffebee') : '#f5f4f0',
                    border: `1.5px solid ${userAns === opt ? (opt === 'R' ? '#81c784' : '#ef9a9a') : '#e5e5ea'}`,
                    color: userAns === opt ? (opt === 'R' ? '#2e7d32' : '#c62828') : '#6b6b72',
                    cursor: checked ? 'default' : 'pointer',
                  }}>{opt === 'R' ? '✓ Richtig' : '✗ Falsch'}</button>
                ))}
              </div>
              {checked && (
                <div style={{ fontSize: 11, color: isRight ? '#2e7d32' : '#c62828', marginTop: 6, lineHeight: 1.5 }}>
                  {isRight ? '✓ ' : `✗ Richtig: ${correctAns} — `}{q.explanation}
                </div>
              )}
            </div>
          )
        })}
        {!checked ? (
          <button onClick={() => setChecked(true)} style={{
            width: '100%', padding: '13px', fontSize: 14, fontWeight: 700,
            background: '#1557a0', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer', marginTop: 8,
          }}>Antworten prüfen</button>
        ) : (
          <div style={{ background: '#e3f2fd', borderRadius: 10, padding: '12px', textAlign: 'center', marginTop: 8 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#1557a0' }}>{correct}/{qs.length}</div>
            <div style={{ fontSize: 12, color: '#6b6b72' }}>richtige Antworten</div>
            <button onClick={reset} style={{ marginTop: 8, padding: '8px 20px', fontSize: 12, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Nochmal</button>
          </div>
        )}
      </div>
    )
  }

  // H3: MCQ with individual clips
  function renderMCQ() {
    const [clipIdx, setClipIdx] = useState(0)
    const [clipAns, setClipAns] = useState(null)
    const clip = task.clips[clipIdx]

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontSize: 12, color: '#6b6b72' }}>Kurzmitteilung {clipIdx + 1} von {task.clips.length}</div>
          <div style={{ height: 4, flex: 1, background: '#e5e5ea', borderRadius: 2, margin: '0 10px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${((clipIdx) / task.clips.length) * 100}%`, background: '#1557a0', borderRadius: 2 }} />
          </div>
        </div>
        <button onClick={() => playAudio(clip.audio)} style={{
          width: '100%', padding: '14px', marginBottom: 12,
          background: speaking ? '#1557a0' : '#e3f2fd',
          color: speaking ? '#fff' : '#1557a0',
          border: '1.5px solid #90caf9', borderRadius: 12,
          fontSize: 14, fontWeight: 700, cursor: 'pointer',
        }}>{speaking ? '🔊 Spielt...' : '▶ Mitteilung abspielen'}</button>
        <div style={{ background: '#fff', border: '1px solid #e5e5ea', borderRadius: 12, padding: '14px', marginBottom: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1c1c1e', marginBottom: 12, lineHeight: 1.5 }}>{clip.question}</div>
          {clip.opts.map(opt => {
            const isSelected = clipAns === opt[0]
            const isCorrect = opt[0] === clip.answer
            let bg = '#f5f4f0', border = '#e5e5ea', color = '#1c1c1e'
            if (clipAns !== null) {
              if (isCorrect) { bg = '#e8f5e9'; border = '#81c784'; color = '#2e7d32' }
              else if (isSelected) { bg = '#ffebee'; border = '#ef9a9a'; color = '#c62828' }
            }
            return (
              <button key={opt} onClick={() => clipAns === null && setClipAns(opt[0])} style={{
                width: '100%', padding: '10px 12px', marginBottom: 6, textAlign: 'left',
                background: bg, border: `1.5px solid ${border}`, color,
                borderRadius: 8, fontSize: 13, cursor: clipAns ? 'default' : 'pointer', lineHeight: 1.4,
              }}>{opt}</button>
            )
          })}
          {clipAns !== null && (
            <div style={{ background: '#e3f2fd', borderLeft: '3px solid #90caf9', borderRadius: '0 8px 8px 0', padding: '8px 12px', fontSize: 12, color: '#0d3c7a', lineHeight: 1.5, marginTop: 6 }}>
              📐 {clip.explanation}
            </div>
          )}
        </div>
        {clipAns !== null && (
          clipIdx + 1 < task.clips.length ? (
            <button onClick={() => { setClipIdx(i => i + 1); setClipAns(null) }} style={{
              width: '100%', padding: '13px', fontSize: 14, fontWeight: 700,
              background: '#1557a0', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer',
            }}>Nächste Mitteilung →</button>
          ) : (
            <div style={{ background: '#e8f5e9', border: '1px solid #81c784', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#2e7d32' }}>Hören Teil 3 abgeschlossen! 🎉</div>
              <button onClick={() => { setClipIdx(0); setClipAns(null) }} style={{ marginTop: 8, padding: '8px 20px', fontSize: 12, fontWeight: 700, background: '#2e7d32', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Nochmal</button>
            </div>
          )
        )}
      </div>
    )
  }

  return (
    <div style={{ padding: '0 16px 16px' }}>
      {/* Task selector */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 14, overflowX: 'auto', paddingBottom: 4 }}>
        {HOEREN_TASKS.map((t, i) => (
          <button key={t.id} onClick={() => switchTask(i)} style={{
            flexShrink: 0, padding: '6px 12px', fontSize: 11, fontWeight: 700, borderRadius: 20,
            background: taskIdx === i ? '#1557a0' : '#fff',
            color: taskIdx === i ? '#fff' : '#6b6b72',
            border: `1.5px solid ${taskIdx === i ? '#1557a0' : '#e5e5ea'}`,
            cursor: 'pointer',
          }}>{t.title}</button>
        ))}
      </div>

      {/* Exam tip */}
      <div style={{ background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 10, padding: '8px 12px', marginBottom: 14, fontSize: 12, color: '#7a4800', lineHeight: 1.5 }}>
        {task.examTip}
      </div>

      {/* Instruction */}
      <div style={{ fontSize: 13, color: '#1c1c1e', lineHeight: 1.6, marginBottom: 12, fontStyle: 'italic' }}>{task.instruction}</div>

      {/* Play button (for h1 & h2) */}
      {!isH3 && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <button onClick={() => playAudio(task.transcript)} style={{
            flex: 1, padding: '12px', background: speaking ? '#1557a0' : '#e3f2fd',
            color: speaking ? '#fff' : '#1557a0',
            border: '1.5px solid #90caf9', borderRadius: 12,
            fontSize: 14, fontWeight: 700, cursor: 'pointer',
          }}>{speaking ? '🔊 Wird abgespielt...' : '▶ Audio abspielen (TTS)'}</button>
          {speaking && (
            <button onClick={stopAudio} style={{
              padding: '12px 16px', background: '#ffebee', border: '1.5px solid #ef9a9a',
              color: '#c62828', borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: 'pointer',
            }}>■</button>
          )}
        </div>
      )}

      {/* Transcript toggle */}
      {!isH3 && (
        <button onClick={() => setShowTranscript(s => !s)} style={{
          width: '100%', padding: '8px', marginBottom: 12,
          background: '#f5f4f0', border: '1px solid #e5e5ea', borderRadius: 8,
          fontSize: 12, color: '#6b6b72', cursor: 'pointer', fontWeight: 600,
        }}>{showTranscript ? '▲ Transkript ausblenden' : '▼ Transkript anzeigen'}</button>
      )}
      {showTranscript && (
        <div style={{ background: '#f5f4f0', borderRadius: 10, padding: '12px', marginBottom: 14, fontSize: 12, color: '#1c1c1e', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
          {task.transcript}
        </div>
      )}

      {/* Questions */}
      {isH3 ? renderMCQ() : renderTF()}
    </div>
  )
}

// ============================================================
// B1 — LESEN TAB (Lesen + Sprachbausteine)
// ============================================================
function B1LesenTab() {
  const [section, setSection] = useState('l1')

  const sections = [
    { id: 'l1', label: 'L1 Überschriften' },
    { id: 'l2', label: 'L2 Text' },
    { id: 'l3', label: 'L3 Anzeigen' },
    { id: 'sb1', label: 'SB1 Grammatik' },
    { id: 'sb2', label: 'SB2 Wortschatz' },
  ]

  return (
    <div style={{ padding: '0 0 16px' }}>
      <div style={{ display: 'flex', gap: 4, overflowX: 'auto', padding: '0 16px 10px', scrollbarWidth: 'none' }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)} style={{
            flexShrink: 0, padding: '5px 10px', fontSize: 11, fontWeight: 700, borderRadius: 20,
            background: section === s.id ? '#1557a0' : '#fff',
            color: section === s.id ? '#fff' : '#6b6b72',
            border: `1.5px solid ${section === s.id ? '#1557a0' : '#e5e5ea'}`,
            cursor: 'pointer',
          }}>{s.label}</button>
        ))}
      </div>
      <div style={{ padding: '0 16px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={section} {...FADE}>
            {section === 'l1' && <LesenL1 />}
            {section === 'l2' && <LesenL2 />}
            {section === 'l3' && <LesenL3 />}
            {section === 'sb1' && <SprachbSB1 />}
            {section === 'sb2' && <SprachbSB2 />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function LesenL1() {
  const task = LESEN_TASKS[0]
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)
  const [showTrans, setShowTrans] = useState({})

  function correct() { return task.texts.filter(t => answers[t.id] === t.answer).length }

  return (
    <div>
      <div style={{ background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 10, padding: '8px 12px', marginBottom: 12, fontSize: 12, color: '#7a4800', lineHeight: 1.5 }}>{task.examTip}</div>
      <div style={{ fontSize: 13, fontStyle: 'italic', color: '#6b6b72', marginBottom: 12, lineHeight: 1.5 }}>{task.instruction}</div>

      {/* Headings reference */}
      <div style={{ background: '#f5f4f0', borderRadius: 10, padding: '10px 12px', marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#6b6b72', marginBottom: 6, letterSpacing: 0.8 }}>ÜBERSCHRIFTEN</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {task.headings.map(h => (
            <span key={h.id} style={{ fontSize: 11, background: '#fff', border: '1px solid #e5e5ea', borderRadius: 6, padding: '3px 8px', color: '#1c1c1e' }}>
              <b>{h.id}</b> {h.text}
            </span>
          ))}
        </div>
      </div>

      {task.texts.map(t => {
        const isRight = checked && answers[t.id] === t.answer
        const isWrong = checked && answers[t.id] && answers[t.id] !== t.answer
        return (
          <div key={t.id} style={{ background: '#fff', border: `1.5px solid ${isRight ? '#81c784' : isWrong ? '#ef9a9a' : '#e5e5ea'}`, borderRadius: 12, padding: '12px', marginBottom: 10 }}>
            <div style={{ fontSize: 13, color: '#1c1c1e', lineHeight: 1.6, marginBottom: 8 }}>
              <b style={{ color: '#1557a0' }}>Text {t.id}:</b> {t.body}
            </div>
            {showTrans[t.id] && (
              <div style={{ fontSize: 11, color: '#6b6b72', fontStyle: 'italic', marginBottom: 8, lineHeight: 1.5 }}>{t.translation}</div>
            )}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <select value={answers[t.id] || ''} onChange={e => !checked && setAnswers(a => ({ ...a, [t.id]: e.target.value }))}
                style={{ flex: 1, padding: '6px', fontSize: 12, borderRadius: 8, border: '1.5px solid #e5e5ea', background: '#f5f4f0' }}>
                <option value="">Überschrift wählen...</option>
                {task.headings.map(h => <option key={h.id} value={h.id}>{h.id} — {h.text}</option>)}
              </select>
              <button onClick={() => setShowTrans(s => ({ ...s, [t.id]: !s[t.id] }))} style={{ padding: '6px 10px', fontSize: 11, borderRadius: 8, border: '1px solid #e5e5ea', background: '#f5f4f0', color: '#6b6b72', cursor: 'pointer' }}>
                {showTrans[t.id] ? 'DE' : 'EN'}
              </button>
              <button onClick={() => speak(t.body)} style={{ padding: '6px 10px', fontSize: 14, borderRadius: 8, border: '1px solid #e5e5ea', background: '#f5f4f0', cursor: 'pointer' }}>🔊</button>
            </div>
            {checked && (
              <div style={{ marginTop: 8, fontSize: 11, color: isRight ? '#2e7d32' : '#c62828', lineHeight: 1.5 }}>
                {isRight ? '✓ Richtig!' : `✗ Richtig: ${t.answer}`} — {t.tip}
              </div>
            )}
          </div>
        )
      })}

      {!checked ? (
        <button onClick={() => setChecked(true)} style={{ width: '100%', padding: '13px', fontSize: 14, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer', marginTop: 4 }}>Antworten prüfen</button>
      ) : (
        <div style={{ background: '#e3f2fd', borderRadius: 10, padding: '12px', textAlign: 'center', marginTop: 4 }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1557a0' }}>{correct()}/{task.texts.length}</div>
          <div style={{ fontSize: 12, color: '#6b6b72' }}>richtig</div>
          <button onClick={() => { setAnswers({}); setChecked(false) }} style={{ marginTop: 8, padding: '8px 20px', fontSize: 12, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Nochmal</button>
        </div>
      )}
    </div>
  )
}

function LesenL2() {
  const task = LESEN_TASKS[1]
  const [showFullText, setShowFullText] = useState(false)
  const [showTrans, setShowTrans] = useState(false)
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)

  function correct() { return task.questions.filter((q, i) => answers[i] === q.answer).length }

  return (
    <div>
      <div style={{ background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 10, padding: '8px 12px', marginBottom: 12, fontSize: 12, color: '#7a4800', lineHeight: 1.5 }}>{task.examTip}</div>

      {/* Text */}
      <div style={{ background: '#fff', border: '1px solid #e5e5ea', borderRadius: 12, padding: '12px', marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#1c1c1e' }}>{task.text.title}</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={() => speak(task.text.body)} style={{ padding: '4px 8px', fontSize: 14, border: '1px solid #e5e5ea', borderRadius: 6, background: '#f5f4f0', cursor: 'pointer' }}>🔊</button>
            <button onClick={() => setShowTrans(s => !s)} style={{ padding: '4px 8px', fontSize: 11, fontWeight: 700, border: '1px solid #e5e5ea', borderRadius: 6, background: '#f5f4f0', color: '#6b6b72', cursor: 'pointer' }}>{showTrans ? 'DE' : 'EN'}</button>
          </div>
        </div>
        <div style={{ fontSize: 13, color: '#1c1c1e', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
          {showFullText ? (showTrans ? task.text.translation : task.text.body) : (showTrans ? task.text.translation : task.text.body).slice(0, 400) + '...'}
        </div>
        <button onClick={() => setShowFullText(s => !s)} style={{ marginTop: 8, fontSize: 11, color: '#1557a0', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          {showFullText ? '▲ Weniger anzeigen' : '▼ Ganzen Text lesen'}
        </button>
      </div>

      {/* Questions */}
      {task.questions.map((q, i) => {
        const ua = answers[i]
        return (
          <div key={i} style={{ background: '#fff', border: `1.5px solid ${checked && ua ? (ua === q.answer ? '#81c784' : '#ef9a9a') : '#e5e5ea'}`, borderRadius: 12, padding: '12px', marginBottom: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1c1c1e', marginBottom: 8 }}>{i + 1}. {q.text}</div>
            {q.opts.map(opt => {
              const isSelected = ua === opt[0]
              const isCorrect = opt[0] === q.answer
              let bg = '#f5f4f0', border = '#e5e5ea', color = '#1c1c1e'
              if (checked) {
                if (isCorrect) { bg = '#e8f5e9'; border = '#81c784'; color = '#2e7d32' }
                else if (isSelected) { bg = '#ffebee'; border = '#ef9a9a'; color = '#c62828' }
              } else if (isSelected) { bg = '#e3f2fd'; border = '#90caf9'; color = '#1557a0' }
              return (
                <button key={opt} onClick={() => !checked && setAnswers(a => ({ ...a, [i]: opt[0] }))} style={{
                  width: '100%', padding: '9px 12px', marginBottom: 4, textAlign: 'left',
                  background: bg, border: `1.5px solid ${border}`, color,
                  borderRadius: 8, fontSize: 12, cursor: checked ? 'default' : 'pointer', lineHeight: 1.4,
                }}>{opt}</button>
              )
            })}
            {checked && <div style={{ fontSize: 11, color: ua === q.answer ? '#2e7d32' : '#c62828', marginTop: 6, lineHeight: 1.5 }}>📐 {q.explanation}</div>}
          </div>
        )
      })}

      {!checked ? (
        <button onClick={() => setChecked(true)} style={{ width: '100%', padding: '13px', fontSize: 14, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer' }}>Antworten prüfen</button>
      ) : (
        <div style={{ background: '#e3f2fd', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1557a0' }}>{correct()}/{task.questions.length}</div>
          <div style={{ fontSize: 12, color: '#6b6b72' }}>richtig</div>
          <button onClick={() => { setAnswers({}); setChecked(false) }} style={{ marginTop: 8, padding: '8px 20px', fontSize: 12, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Nochmal</button>
        </div>
      )}
    </div>
  )
}

function LesenL3() {
  const task = LESEN_TASKS[2]
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)
  const [showTrans, setShowTrans] = useState({})

  function correct() { return task.situations.filter(s => answers[s.id] === s.answer).length }

  return (
    <div>
      <div style={{ background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 10, padding: '8px 12px', marginBottom: 12, fontSize: 12, color: '#7a4800', lineHeight: 1.5 }}>{task.examTip}</div>
      <div style={{ fontSize: 13, fontStyle: 'italic', color: '#6b6b72', marginBottom: 12, lineHeight: 1.5 }}>{task.instruction}</div>

      {/* Ads reference */}
      <div style={{ background: '#f5f4f0', borderRadius: 10, padding: '10px 12px', marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#6b6b72', marginBottom: 8, letterSpacing: 0.8 }}>ANZEIGEN</div>
        {task.ads.map(ad => (
          <div key={ad.id} style={{ fontSize: 11, padding: '4px 0', borderBottom: '1px solid #e5e5ea22', lineHeight: 1.5 }}>
            <b>{ad.id})</b> {ad.text}
          </div>
        ))}
      </div>

      {task.situations.map(s => {
        const isRight = checked && answers[s.id] === s.answer
        const isWrong = checked && answers[s.id] && answers[s.id] !== s.answer
        return (
          <div key={s.id} style={{ background: '#fff', border: `1.5px solid ${isRight ? '#81c784' : isWrong ? '#ef9a9a' : '#e5e5ea'}`, borderRadius: 12, padding: '10px 12px', marginBottom: 8 }}>
            <div style={{ fontSize: 13, color: '#1c1c1e', lineHeight: 1.5, marginBottom: 6 }}>
              <b style={{ color: '#1557a0' }}>{s.id}.</b> {s.text}
            </div>
            {showTrans[s.id] && <div style={{ fontSize: 11, color: '#6b6b72', fontStyle: 'italic', marginBottom: 6 }}>{s.translation}</div>}
            <div style={{ display: 'flex', gap: 8 }}>
              <select value={answers[s.id] || ''} onChange={e => !checked && setAnswers(a => ({ ...a, [s.id]: e.target.value }))}
                style={{ flex: 1, padding: '6px', fontSize: 12, borderRadius: 8, border: '1.5px solid #e5e5ea', background: '#f5f4f0' }}>
                <option value="">Anzeige wählen...</option>
                {task.ads.map(ad => <option key={ad.id} value={ad.id}>{ad.id}</option>)}
              </select>
              <button onClick={() => setShowTrans(st => ({ ...st, [s.id]: !st[s.id] }))} style={{ padding: '6px 10px', fontSize: 11, borderRadius: 8, border: '1px solid #e5e5ea', background: '#f5f4f0', color: '#6b6b72', cursor: 'pointer' }}>
                {showTrans[s.id] ? 'DE' : 'EN'}
              </button>
            </div>
            {checked && <div style={{ fontSize: 11, color: isRight ? '#2e7d32' : '#c62828', marginTop: 6 }}>{isRight ? `✓ Richtig: ${s.answer}` : `✗ Richtig: ${s.answer}`}</div>}
          </div>
        )
      })}

      {!checked ? (
        <button onClick={() => setChecked(true)} style={{ width: '100%', padding: '13px', fontSize: 14, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer', marginTop: 4 }}>Antworten prüfen</button>
      ) : (
        <div style={{ background: '#e3f2fd', borderRadius: 10, padding: '12px', textAlign: 'center', marginTop: 4 }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1557a0' }}>{correct()}/{task.situations.length}</div>
          <div style={{ fontSize: 12, color: '#6b6b72' }}>richtig</div>
          <button onClick={() => { setAnswers({}); setChecked(false) }} style={{ marginTop: 8, padding: '8px 20px', fontSize: 12, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Nochmal</button>
        </div>
      )}
    </div>
  )
}

function SprachbSB1() {
  const task = SPRACHB_TASKS[0]
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)

  const gaps = task.segments.filter(s => s.gap)
  function correct() { return gaps.filter(g => answers[g.gap] === g.answer).length }

  return (
    <div>
      <div style={{ background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 10, padding: '8px 12px', marginBottom: 12, fontSize: 12, color: '#7a4800', lineHeight: 1.5 }}>{task.examTip}</div>
      <div style={{ background: '#fff', border: '1px solid #e5e5ea', borderRadius: 12, padding: '12px', marginBottom: 14, fontSize: 13, color: '#1c1c1e', lineHeight: 1.9 }}>
        {task.segments.map((seg, i) => {
          if (seg.text) return <span key={i}>{seg.text}</span>
          const ua = answers[seg.gap]
          const isRight = checked && ua === seg.answer
          const isWrong = checked && ua && ua !== seg.answer
          return (
            <select key={i} value={ua || ''} onChange={e => !checked && setAnswers(a => ({ ...a, [seg.gap]: e.target.value }))}
              style={{
                margin: '0 2px', padding: '1px 6px', fontSize: 12, fontWeight: 700,
                borderRadius: 6, border: `2px solid ${isRight ? '#81c784' : isWrong ? '#ef9a9a' : '#c97b00'}`,
                background: isRight ? '#e8f5e9' : isWrong ? '#ffebee' : '#fff8e1',
                color: isRight ? '#2e7d32' : isWrong ? '#c62828' : '#7a4800',
                cursor: checked ? 'default' : 'pointer',
              }}>
              <option value="">({seg.gap})</option>
              {seg.opts.map(opt => <option key={opt} value={opt[0]}>{opt}</option>)}
            </select>
          )
        })}
      </div>

      {checked && (
        <div>
          {gaps.map(g => (
            <div key={g.gap} style={{
              background: answers[g.gap] === g.answer ? '#e8f5e9' : '#ffebee',
              border: `1px solid ${answers[g.gap] === g.answer ? '#81c784' : '#ef9a9a'}`,
              borderRadius: 8, padding: '8px 12px', marginBottom: 6, fontSize: 12, lineHeight: 1.5,
            }}>
              <b>({g.gap}) Richtig: {g.answer}</b> — {g.rule}
            </div>
          ))}
        </div>
      )}

      {!checked ? (
        <button onClick={() => setChecked(true)} style={{ width: '100%', padding: '13px', fontSize: 14, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer', marginTop: 8 }}>Antworten prüfen</button>
      ) : (
        <div style={{ background: '#e3f2fd', borderRadius: 10, padding: '12px', textAlign: 'center', marginTop: 8 }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1557a0' }}>{correct()}/{gaps.length}</div>
          <button onClick={() => { setAnswers({}); setChecked(false) }} style={{ marginTop: 8, padding: '8px 20px', fontSize: 12, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Nochmal</button>
        </div>
      )}
    </div>
  )
}

function SprachbSB2() {
  const task = SPRACHB_TASKS[1]
  const [selected, setSelected] = useState({})
  const [checked, setChecked] = useState(false)

  function correct() { return task.gaps.filter(g => selected[g.pos] === g.answer).length }

  // Parse full_text to render gaps
  const parts = task.full_text.split(/\[(\d+)=\w+\]/g)

  return (
    <div>
      <div style={{ background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 10, padding: '8px 12px', marginBottom: 12, fontSize: 12, color: '#7a4800', lineHeight: 1.5 }}>{task.examTip}</div>

      {/* Word bank */}
      <div style={{ background: '#f5f4f0', borderRadius: 10, padding: '10px 12px', marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#6b6b72', marginBottom: 8, letterSpacing: 0.8 }}>WORTKASTEN</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {task.wordbank.map(w => {
            const used = Object.values(selected).includes(w)
            return (
              <span key={w} style={{
                fontSize: 12, padding: '3px 10px', borderRadius: 20,
                background: used ? '#e5e5ea' : '#fff',
                color: used ? '#aeaeb2' : '#1c1c1e',
                border: `1px solid ${used ? '#e5e5ea' : '#d1d1d6'}`,
                textDecoration: used ? 'line-through' : 'none',
              }}>{w}</span>
            )
          })}
        </div>
      </div>

      {/* Text with gaps */}
      <div style={{ background: '#fff', border: '1px solid #e5e5ea', borderRadius: 12, padding: '12px', marginBottom: 14, fontSize: 13, color: '#1c1c1e', lineHeight: 1.9 }}>
        {parts.map((part, i) => {
          if (!isNaN(part) && parseInt(part) > 0) {
            const gapNum = parseInt(part)
            const gap = task.gaps.find(g => g.pos === gapNum)
            const ua = selected[gapNum]
            const isRight = checked && ua === gap?.answer
            const isWrong = checked && ua && ua !== gap?.answer
            return (
              <select key={i} value={ua || ''} onChange={e => !checked && setSelected(s => ({ ...s, [gapNum]: e.target.value }))}
                style={{
                  margin: '0 2px', padding: '1px 8px', fontSize: 12, fontWeight: 700,
                  borderRadius: 6, border: `2px solid ${isRight ? '#81c784' : isWrong ? '#ef9a9a' : '#c97b00'}`,
                  background: isRight ? '#e8f5e9' : isWrong ? '#ffebee' : '#fff8e1',
                  color: isRight ? '#2e7d32' : isWrong ? '#c62828' : '#7a4800',
                }}>
                <option value="">({gapNum})</option>
                {task.wordbank.map(w => <option key={w} value={w}>{w}</option>)}
              </select>
            )
          }
          return <span key={i}>{part}</span>
        })}
      </div>

      {checked && (
        <div>
          {task.gaps.map(g => (
            <div key={g.pos} style={{
              background: selected[g.pos] === g.answer ? '#e8f5e9' : '#ffebee',
              border: `1px solid ${selected[g.pos] === g.answer ? '#81c784' : '#ef9a9a'}`,
              borderRadius: 8, padding: '8px 12px', marginBottom: 6, fontSize: 12, lineHeight: 1.5,
            }}>
              <b>({g.pos}) {g.answer}</b> — {g.rule}
            </div>
          ))}
        </div>
      )}

      {!checked ? (
        <button onClick={() => setChecked(true)} style={{ width: '100%', padding: '13px', fontSize: 14, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer', marginTop: 4 }}>Antworten prüfen</button>
      ) : (
        <div style={{ background: '#e3f2fd', borderRadius: 10, padding: '12px', textAlign: 'center', marginTop: 4 }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1557a0' }}>{correct()}/{task.gaps.length}</div>
          <button onClick={() => { setSelected({}); setChecked(false) }} style={{ marginTop: 8, padding: '8px 20px', fontSize: 12, fontWeight: 700, background: '#1557a0', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Nochmal</button>
        </div>
      )}
    </div>
  )
}

// ============================================================
// B1 — SCHREIBEN TAB
// ============================================================
function B1SchreibenTab() {
  const [promptIdx, setPromptIdx] = useState(0)
  const [draft, setDraft] = useState('')
  const [showModel, setShowModel] = useState(false)
  const [showTrans, setShowTrans] = useState(false)
  const [phraseGroup, setPhraseGroup] = useState('formal_open')
  const prompt = SCHREIBEN_PROMPTS[promptIdx]
  const words = draft.trim() ? draft.trim().split(/\s+/).length : 0

  const phraseGroups = [
    { id: 'formal_open', label: 'Formell öffnen' },
    { id: 'informal_open', label: 'Informell öffnen' },
    { id: 'connectors', label: 'Konnektoren' },
    { id: 'requests', label: 'Bitten' },
    { id: 'formal_close', label: 'Formell schließen' },
    { id: 'informal_close', label: 'Informell schließen' },
  ]

  return (
    <div style={{ padding: '0 16px 16px' }}>
      {/* Prompt selector */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 14, overflowX: 'auto', paddingBottom: 4 }}>
        {SCHREIBEN_PROMPTS.map((p, i) => (
          <button key={p.id} onClick={() => { setPromptIdx(i); setDraft(''); setShowModel(false); setShowTrans(false) }} style={{
            flexShrink: 0, padding: '5px 10px', fontSize: 11, fontWeight: 700, borderRadius: 20,
            background: promptIdx === i ? '#1557a0' : '#fff',
            color: promptIdx === i ? '#fff' : '#6b6b72',
            border: `1.5px solid ${promptIdx === i ? '#1557a0' : '#e5e5ea'}`,
            cursor: 'pointer',
          }}>{p.title}</button>
        ))}
      </div>

      {/* Situation */}
      <div style={{ background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 12, padding: '12px', marginBottom: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#1565c0', letterSpacing: 0.8, marginBottom: 4 }}>
          {prompt.type === 'formal' ? '🏢 FORMELLER BRIEF' : '✉️ INFORMELLER BRIEF'} — Ziel: ~{prompt.wordTarget} Wörter
        </div>
        <div style={{ fontSize: 13, color: '#0d3c7a', lineHeight: 1.6, marginBottom: 10 }}>{prompt.situation}</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#1565c0', marginBottom: 4 }}>4 LEITPUNKTE (alle müssen beantwortet werden!):</div>
        {prompt.points.map((pt, i) => (
          <div key={i} style={{ fontSize: 12, color: '#0d3c7a', padding: '3px 0', lineHeight: 1.5 }}>✎ {pt}</div>
        ))}
      </div>

      {/* Phrase bank */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#6b6b72', marginBottom: 8, letterSpacing: 0.8 }}>PHRASENBANK</div>
        <div style={{ display: 'flex', gap: 4, overflowX: 'auto', paddingBottom: 6, scrollbarWidth: 'none' }}>
          {phraseGroups.map(g => (
            <button key={g.id} onClick={() => setPhraseGroup(g.id)} style={{
              flexShrink: 0, padding: '4px 10px', fontSize: 10, fontWeight: 700, borderRadius: 20,
              background: phraseGroup === g.id ? '#1557a0' : '#f5f4f0',
              color: phraseGroup === g.id ? '#fff' : '#6b6b72',
              border: `1px solid ${phraseGroup === g.id ? '#1557a0' : '#e5e5ea'}`,
              cursor: 'pointer',
            }}>{g.label}</button>
          ))}
        </div>
        <div style={{ background: '#f5f4f0', borderRadius: 10, padding: '8px', marginTop: 6 }}>
          {(SCHREIBEN_PHRASES[phraseGroup] || []).map((ph, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '5px 0', borderBottom: '1px solid #e5e5ea22', gap: 6 }}>
              <div>
                <div style={{ fontSize: 12, color: '#1c1c1e', lineHeight: 1.4 }}>{ph.de}</div>
                <div style={{ fontSize: 10, color: '#6b6b72' }}>{ph.en}</div>
              </div>
              <button onClick={() => speak(ph.de)} style={{ padding: '4px 6px', fontSize: 12, border: '1px solid #e5e5ea', borderRadius: 6, background: '#fff', cursor: 'pointer', flexShrink: 0 }}>🔊</button>
            </div>
          ))}
        </div>
      </div>

      {/* Writing area */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#6b6b72', marginBottom: 6 }}>
          <span>Dein Entwurf</span>
          <span style={{ color: words >= 100 && words <= 140 ? '#2e7d32' : words > 0 ? '#c97b00' : '#6b6b72', fontWeight: 700 }}>
            {words} Wörter {words >= 100 && words <= 140 ? '✓' : words > 0 ? `(Ziel: ~${prompt.wordTarget})` : ''}
          </span>
        </div>
        <textarea value={draft} onChange={e => setDraft(e.target.value)}
          placeholder={`${prompt.addressee}\n\n[Dein Text hier...]\n\n${prompt.closing}`}
          style={{
            width: '100%', minHeight: 200, padding: '12px', fontSize: 13,
            border: '1.5px solid #e5e5ea', borderRadius: 12, resize: 'vertical',
            fontFamily: 'inherit', lineHeight: 1.7, color: '#1c1c1e', background: '#fff',
          }} />
      </div>

      {/* Model answer */}
      <button onClick={() => setShowModel(s => !s)} style={{
        width: '100%', padding: '10px', marginBottom: 8,
        background: showModel ? '#1557a0' : '#e3f2fd',
        color: showModel ? '#fff' : '#1557a0',
        border: '1px solid #90caf9', borderRadius: 10,
        fontSize: 12, fontWeight: 700, cursor: 'pointer',
      }}>{showModel ? '▲ Musterlösung ausblenden' : '▼ Musterlösung anzeigen'}</button>

      {showModel && (
        <motion.div {...FADE}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 6 }}>
            <button onClick={() => setShowTrans(s => !s)} style={{ padding: '4px 10px', fontSize: 11, fontWeight: 700, border: '1px solid #e5e5ea', borderRadius: 8, background: '#f5f4f0', color: '#6b6b72', cursor: 'pointer' }}>
              {showTrans ? '🇩🇪 Deutsch' : '🇬🇧 English'}
            </button>
          </div>
          <div style={{ background: '#f5f4f0', borderRadius: 12, padding: '14px', fontSize: 13, color: '#1c1c1e', lineHeight: 1.8, whiteSpace: 'pre-wrap', fontStyle: 'italic' }}>
            {showTrans ? prompt.translation : prompt.modelAnswer}
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
            <button onClick={() => speak(prompt.modelAnswer)} style={{ padding: '6px 12px', fontSize: 12, fontWeight: 700, border: '1px solid #90caf9', borderRadius: 8, background: '#e3f2fd', color: '#1557a0', cursor: 'pointer' }}>🔊 Vorlesen</button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

// ============================================================
// B1 — SPRECHEN TAB
// ============================================================
function B1SprechenTab() {
  const [section, setSection] = useState('kontakt')

  const sections = [
    { id: 'kontakt', label: '👋 Kontakt' },
    { id: 'phrasen', label: '💬 Phrasen' },
    { id: 'planen', label: '🗺️ Planen' },
    { id: 'meinung', label: '🗣️ Meinung' },
  ]

  return (
    <div style={{ padding: '0 16px 16px' }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 14, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)} style={{
            flexShrink: 0, padding: '6px 12px', fontSize: 12, fontWeight: 700, borderRadius: 20,
            background: section === s.id ? '#1557a0' : '#fff',
            color: section === s.id ? '#fff' : '#6b6b72',
            border: `1.5px solid ${section === s.id ? '#1557a0' : '#e5e5ea'}`,
            cursor: 'pointer',
          }}>{s.label}</button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={section} {...FADE}>
          {section === 'kontakt' && <SprechenKontakt />}
          {section === 'phrasen' && <SprechenPhrasen />}
          {section === 'planen' && <SprechenPlanen />}
          {section === 'meinung' && <SprechenMeinung />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function SprechenKontakt() {
  const [showAll, setShowAll] = useState(false)
  const qs = showAll ? SPRECHEN_DATA.kontakt_topics : SPRECHEN_DATA.kontakt_topics.slice(0, 5)
  return (
    <div>
      <div style={{ background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 10, padding: '10px 12px', marginBottom: 14, fontSize: 12, color: '#0d3c7a', lineHeight: 1.5 }}>
        📋 <b>Teil 1: Kontaktaufnahme</b> — Stell dich vor und beantworte Fragen über dich. ~3 Minuten. Tap 🔊 um die Frage zu hören.
      </div>
      {qs.map((q, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid #e5e5ea', borderRadius: 12, padding: '12px', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#1c1c1e', lineHeight: 1.5 }}>{q.de}</div>
            <div style={{ fontSize: 11, color: '#6b6b72', marginTop: 3 }}>{q.en}</div>
          </div>
          <button onClick={() => speak(q.de)} style={{ padding: '8px 12px', fontSize: 18, border: '1px solid #90caf9', borderRadius: 10, background: '#e3f2fd', cursor: 'pointer', flexShrink: 0 }}>🔊</button>
        </div>
      ))}
      <button onClick={() => setShowAll(s => !s)} style={{ width: '100%', padding: '10px', fontSize: 12, fontWeight: 700, background: '#f5f4f0', border: '1px solid #e5e5ea', borderRadius: 10, cursor: 'pointer', color: '#6b6b72' }}>
        {showAll ? '▲ Weniger' : '▼ Alle Fragen anzeigen'}
      </button>
    </div>
  )
}

function SprechenPhrasen() {
  const groups = [
    { key: 'suggest', label: '💡 Vorschläge' },
    { key: 'askPartner', label: '❓ Partner fragen' },
    { key: 'agree', label: '✅ Zustimmen' },
    { key: 'disagree', label: '🚫 Ablehnen' },
    { key: 'opinion', label: '🗣️ Meinung' },
    { key: 'buyTime', label: '⏸️ Zeit gewinnen' },
    { key: 'textPhrases', label: '📄 Text besprechen' },
  ]
  const [active, setActive] = useState('suggest')
  const phrases = SPRECHEN_DATA.phrases[active] || []
  return (
    <div>
      <div style={{ background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 10, padding: '10px 12px', marginBottom: 14, fontSize: 12, color: '#0d3c7a', lineHeight: 1.5 }}>
        📋 <b>Wichtige Phrasen</b> für Sprechen Teil 2 & 3. Tap 🔊 um jede Phrase zu hören und zu üben.
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
        {groups.map(g => (
          <button key={g.key} onClick={() => setActive(g.key)} style={{
            padding: '5px 10px', fontSize: 11, fontWeight: 700, borderRadius: 20,
            background: active === g.key ? '#1557a0' : '#f5f4f0',
            color: active === g.key ? '#fff' : '#6b6b72',
            border: `1.5px solid ${active === g.key ? '#1557a0' : '#e5e5ea'}`,
            cursor: 'pointer',
          }}>{g.label}</button>
        ))}
      </div>
      {phrases.map((ph, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid #e5e5ea', borderRadius: 10, padding: '10px 12px', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1c1c1e', lineHeight: 1.5 }}>{ph.de}</div>
            <div style={{ fontSize: 11, color: '#6b6b72', marginTop: 2 }}>{ph.en}</div>
          </div>
          <button onClick={() => speak(ph.de)} style={{ padding: '6px 10px', fontSize: 16, border: '1px solid #90caf9', borderRadius: 8, background: '#e3f2fd', cursor: 'pointer', flexShrink: 0 }}>🔊</button>
        </div>
      ))}
    </div>
  )
}

function SprechenPlanen() {
  const [idx, setIdx] = useState(0)
  const scenario = SPRECHEN_DATA.planen_scenarios[idx]
  return (
    <div>
      <div style={{ background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 10, padding: '10px 12px', marginBottom: 14, fontSize: 12, color: '#0d3c7a', lineHeight: 1.5 }}>
        📋 <b>Teil 3: Gemeinsam planen</b> — 3–5 Minuten mit Partner. Diskutiert alle Punkte, trefft eine Entscheidung.
      </div>
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 8, marginBottom: 14, scrollbarWidth: 'none' }}>
        {SPRECHEN_DATA.planen_scenarios.map((s, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            flexShrink: 0, padding: '5px 10px', fontSize: 11, fontWeight: 700, borderRadius: 20,
            background: idx === i ? '#1557a0' : '#fff',
            color: idx === i ? '#fff' : '#6b6b72',
            border: `1.5px solid ${idx === i ? '#1557a0' : '#e5e5ea'}`,
            cursor: 'pointer',
          }}>{s.emoji} {s.title}</button>
        ))}
      </div>
      <div style={{ background: '#fff', border: '1px solid #e5e5ea', borderRadius: 14, padding: '16px' }}>
        <div style={{ fontSize: 20, textAlign: 'center', marginBottom: 6 }}>{scenario.emoji}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#1c1c1e', textAlign: 'center', marginBottom: 10 }}>{scenario.title}</div>
        <div style={{ fontSize: 13, color: '#6b6b72', lineHeight: 1.6, marginBottom: 14, fontStyle: 'italic' }}>{scenario.intro}</div>
        {scenario.points.map((pt, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #e5e5ea' }}>
            <div style={{ fontSize: 13, color: '#1c1c1e', lineHeight: 1.5 }}>{i + 1}. {pt}</div>
            <button onClick={() => speak(pt)} style={{ padding: '4px 8px', fontSize: 14, border: '1px solid #90caf9', borderRadius: 8, background: '#e3f2fd', cursor: 'pointer', flexShrink: 0 }}>🔊</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function SprechenMeinung() {
  const [idx, setIdx] = useState(0)
  const topic = SPRECHEN_DATA.opinion_topics[idx]
  return (
    <div>
      <div style={{ background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 10, padding: '10px 12px', marginBottom: 14, fontSize: 12, color: '#0d3c7a', lineHeight: 1.5 }}>
        📋 <b>Teil 2: Meinung äußern</b> — Lies einen Text zu einem Thema, dann äußere deine Meinung. Nutze die Phrasen aus "💬 Phrasen"!
      </div>
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 8, marginBottom: 14, scrollbarWidth: 'none' }}>
        {SPRECHEN_DATA.opinion_topics.map((t, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            flexShrink: 0, padding: '5px 10px', fontSize: 10, fontWeight: 700, borderRadius: 20,
            background: idx === i ? '#1557a0' : '#fff',
            color: idx === i ? '#fff' : '#6b6b72',
            border: `1.5px solid ${idx === i ? '#1557a0' : '#e5e5ea'}`,
            cursor: 'pointer',
          }}>{t.topic}</button>
        ))}
      </div>
      <div style={{ background: '#fff', border: '1px solid #e5e5ea', borderRadius: 14, padding: '16px' }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#1c1c1e', marginBottom: 10, lineHeight: 1.4 }}>{topic.de}</div>
        <div style={{ fontSize: 12, color: '#6b6b72', fontStyle: 'italic', marginBottom: 14 }}>{topic.en}</div>
        <div style={{ background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 8, padding: '8px 12px', fontSize: 12, color: '#7a4800', marginBottom: 14 }}>
          📊 {topic.stats}
        </div>
        <button onClick={() => speak(topic.de)} style={{
          width: '100%', padding: '12px', fontSize: 14, fontWeight: 700,
          background: '#e3f2fd', border: '1.5px solid #90caf9', color: '#1557a0',
          borderRadius: 12, cursor: 'pointer',
        }}>🔊 Thema anhören</button>
        <div style={{ marginTop: 14, fontSize: 12, color: '#6b6b72', lineHeight: 1.6 }}>
          <b style={{ color: '#1c1c1e' }}>Üb-Tipps:</b><br />
          1. Lies das Thema laut vor<br />
          2. Sag: "Meiner Meinung nach..." oder "Ich bin der Meinung, dass..."<br />
          3. Gib 2 Gründe mit "weil" oder "denn"<br />
          4. Erwähne eine Gegenposition: "Manche sagen, dass..."<br />
          5. Schluss: "Zusammenfassend kann ich sagen..."
        </div>
      </div>
    </div>
  )
}

// ============================================================
// MAIN APP
// ============================================================
export default function App() {
  const [mode, setMode] = useLocalStorage('de_mode', 'a2')
  const [tab, setTab] = useState('learn')
  const [b1Tab, setB1Tab] = useState('plan')
  const [xp, setXP] = useLocalStorage('de_xp', 0)
  const [learned, setLearned] = useLocalStorage('de_learned', [])

  function switchMode(m) {
    setMode(m)
    if (m === 'a2') setTab('learn')
    else setB1Tab('plan')
  }

  return (
    <div style={{ minHeight: '100dvh', paddingBottom: 64 }}>
      {/* Header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: mode === 'b1' ? '#0d2a4a' : '#f5f4f0',
        borderBottom: `1px solid ${mode === 'b1' ? '#1557a0' : '#e5e5ea'}`,
        padding: '10px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 22 }}>🇩🇪</span>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: mode === 'b1' ? '#fff' : '#1c1c1e', lineHeight: 1.2 }}>
              Deutsch <span style={{ color: mode === 'b1' ? '#90caf9' : '#c97b00' }}>{mode === 'b1' ? 'B1 Prüfung' : 'A2→B1'}</span>
            </div>
            <div style={{ fontSize: 11, color: mode === 'b1' ? '#90caf9' : '#6b6b72' }}>
              {mode === 'b1' ? 'Telc B1 Prüfungsvorbereitung' : `${learned.length} Wörter gelernt`}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {/* Mode toggle */}
          <div style={{ display: 'flex', background: mode === 'b1' ? '#1557a033' : '#e5e5ea', borderRadius: 20, padding: 2 }}>
            {['a2', 'b1'].map(m => (
              <button key={m} onClick={() => switchMode(m)} style={{
                padding: '4px 12px', fontSize: 11, fontWeight: 800, borderRadius: 18,
                background: mode === m ? (m === 'b1' ? '#1557a0' : '#c97b00') : 'transparent',
                color: mode === m ? '#fff' : mode === 'b1' ? '#90caf9' : '#6b6b72',
                border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                letterSpacing: 0.5,
              }}>{m.toUpperCase()}</button>
            ))}
          </div>
          {/* XP badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 4,
            background: mode === 'b1' ? '#1557a033' : '#fff8e1',
            border: `1px solid ${mode === 'b1' ? '#90caf9' : '#ffd54f'}`,
            borderRadius: 20, padding: '4px 10px',
          }}>
            <span style={{ fontSize: 12 }}>⭐</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: mode === 'b1' ? '#90caf9' : '#7a4800' }}>{xp}</span>
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div style={{ paddingTop: 12 }}>
        <AnimatePresence mode="wait">
          {mode === 'a2' ? (
            <motion.div key={`a2-${tab}`} {...FADE}>
              {tab === 'learn' && <LearnTab learned={learned} setLearned={setLearned} xp={xp} setXP={setXP} />}
              {tab === 'practice' && <PracticeTab xp={xp} setXP={setXP} />}
              {tab === 'phrases' && <PhrasesTab />}
              {tab === 'grammar' && <GrammarTab />}
              {tab === 'quiz' && <QuizTab setXP={setXP} />}
            </motion.div>
          ) : (
            <motion.div key={`b1-${b1Tab}`} {...FADE}>
              {b1Tab === 'plan' && <B1PlanTab />}
              {b1Tab === 'hoeren' && <B1HoerenTab />}
              {b1Tab === 'lesen' && <B1LesenTab />}
              {b1Tab === 'schreiben' && <B1SchreibenTab />}
              {b1Tab === 'sprechen' && <B1SprechenTab />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {mode === 'a2'
        ? <BottomNav tab={tab} setTab={setTab} />
        : <B1BottomNav tab={b1Tab} setTab={setB1Tab} />
      }
    </div>
  )
}
