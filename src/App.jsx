import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  VOCAB_TOPICS, PHRASES, GRAMMAR_SECTIONS,
  ARTIKEL_WORDS, KASUS_DRILLS, LUECKEN, QUIZ_QS
} from './data.js'

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
// MAIN APP
// ============================================================
export default function App() {
  const [tab, setTab] = useState('learn')
  const [xp, setXP] = useLocalStorage('de_xp', 0)
  const [learned, setLearned] = useLocalStorage('de_learned', [])

  return (
    <div style={{ minHeight: '100dvh', paddingBottom: 64 }}>
      {/* Header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: '#f5f4f0', borderBottom: '1px solid #e5e5ea',
        padding: '12px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 22 }}>🇩🇪</span>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1c1c1e', lineHeight: 1.2 }}>
              Deutsch <span style={{ color: '#c97b00' }}>A2→B1</span>
            </div>
            <div style={{ fontSize: 11, color: '#6b6b72' }}>
              {learned.length} Wörter gelernt
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          background: '#fff8e1', border: '1px solid #ffd54f', borderRadius: 20,
          padding: '5px 12px',
        }}>
          <span style={{ fontSize: 14 }}>⭐</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#7a4800' }}>{xp} XP</span>
        </div>
      </div>

      {/* Tab content */}
      <div style={{ paddingTop: 12 }}>
        <AnimatePresence mode="wait">
          <motion.div key={tab} {...FADE}>
            {tab === 'learn' && <LearnTab learned={learned} setLearned={setLearned} xp={xp} setXP={setXP} />}
            {tab === 'practice' && <PracticeTab xp={xp} setXP={setXP} />}
            {tab === 'phrases' && <PhrasesTab />}
            {tab === 'grammar' && <GrammarTab />}
            {tab === 'quiz' && <QuizTab setXP={setXP} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <BottomNav tab={tab} setTab={setTab} />
    </div>
  )
}
