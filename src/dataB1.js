// ============================================================
// TELC B1 EXAM DATA — based on official Telc format
// ============================================================

export const EXAM_INFO = {
  total: 300,
  passWritten: 135,
  passOral: 45,
  sections: [
    { name: 'Leseverstehen', emoji: '📖', points: 75, time: '90 min (shared)', parts: 3 },
    { name: 'Sprachbausteine', emoji: '🔧', points: 30, time: '90 min (shared)', parts: 2 },
    { name: 'Hörverstehen', emoji: '👂', points: 75, time: '~30 min', parts: 3 },
    { name: 'Schriftl. Ausdruck', emoji: '✍️', points: 45, time: '30 min', parts: 1 },
    { name: 'Mündliche Prüfung', emoji: '🗣️', points: 75, time: '15 min + 20 prep', parts: 3 },
  ],
  tips: [
    'No negative marking — ALWAYS fill in every answer, even if guessing.',
    'You must pass BOTH written (135/225) AND oral (45/75) to get the certificate.',
    'If you fail one section you can retake only that section — result valid 12 months.',
    'Prepare 4 Leitpunkte (content points) for Schreiben — missing even one costs 15 points!',
    'In Sprechen, silence is worse than grammar mistakes — keep talking and ask your partner questions.',
  ]
}

// ============================================================
// 30-DAY STUDY PLAN
// ============================================================
export const STUDY_PLAN = [
  // WEEK 1: A2 Foundation
  { day: 1, week: 1, focus: 'A2 Review', title: 'Artikel & Fälle', tasks: ['Flashcards: Alltag + Wohnen (📚 Lernen)', 'Drill: Artikel DER/DIE/DAS (✏️ Üben)', 'Grammar: Kasus — Nom/Akk/Dat (📖 Grammatik)', 'Learn 10 words, tap to hear each one 🔊'], xp: 50 },
  { day: 2, week: 1, focus: 'A2 Review', title: 'Perfekt & Präteritum', tasks: ['Flashcards: Transport + Arbeit', 'Grammar: Perfekt (haben vs sein)', 'Grammar: Präteritum (war, hatte, konnte)', 'Practice: 10 Lückentext drills'], xp: 50 },
  { day: 3, week: 1, focus: 'A2 Review', title: 'Modalverben', tasks: ['Flashcards: Essen + Familie', 'Grammar: Modalverben (können/müssen/dürfen/wollen/sollen/möchten)', 'Drill: 15 Kasus exercises', 'Phrases: Im Restaurant & Pläne machen (💬 Sätze)'], xp: 50 },
  { day: 4, week: 1, focus: 'A2 Review', title: 'Trennbare & Reflexive Verben', tasks: ['Grammar: Trennbare Verben (auf|stehen, an|rufen)', 'Grammar: Reflexive Verben (sich freuen, sich fühlen)', 'Drill: Lückentext × 15', 'Phrases: Bei der Arbeit & Gefühle'], xp: 50 },
  { day: 5, week: 1, focus: 'A2 Review', title: 'Nebensätze & Wechselpräpositionen', tasks: ['Grammar: Nebensätze (weil, dass, wenn, obwohl)', 'Grammar: Wechselpräpositionen (in der / in die)', 'Full Flashcard review all topics', 'Sätze: All categories'], xp: 50 },
  { day: 6, week: 1, focus: 'A2 Review', title: 'Adjektivendungen & Komparativ', tasks: ['Grammar: Adjektivendungen', 'Grammar: Komparativ (besser, größer, am liebsten)', 'Drill: Mix all 3 types × 20', 'Quiz: A2 mini-test'], xp: 60 },
  { day: 7, week: 1, focus: 'A2 Review', title: 'A2 Review Day 🔁', tasks: ['Repeat all marked-wrong drills', 'Grammar: Konjunktiv II (hätte, wäre, würde)', 'B1 Übersicht: Read exam format', 'Sprechen: Kontaktaufnahme phrases × 10 🔊'], xp: 40 },
  // WEEK 2: Lesen + Sprachbausteine
  { day: 8, week: 2, focus: 'Lesen', title: 'Lesen Teil 1 — Überschriften zuordnen', tasks: ['Read strategy: Read ALL 10 headings first', 'Practice Task 1 (match headings)', 'Speak each text aloud for pronunciation', 'Review wrong matches + why'], xp: 50 },
  { day: 9, week: 2, focus: 'Lesen', title: 'Lesen Teil 2 — Detailverstehen', tasks: ['Strategy: Questions follow text order', 'Practice Task 2 (MCQ from text)', 'Underline key info in text', 'Tap to hear key sentences 🔊'], xp: 50 },
  { day: 10, week: 2, focus: 'Lesen', title: 'Lesen Teil 3 — Selektives Lesen', tasks: ['Strategy: ALL conditions must match', 'Practice Task 3 (match people to ads)', 'B1 Vocabulary: Wohnen + Arbeit', 'Flashcards: Gesundheit + Freizeit'], xp: 50 },
  { day: 11, week: 2, focus: 'Sprachbausteine', title: 'Sprachbausteine Teil 1 — Grammatik', tasks: ['Sprachbausteine Task 1 (grammar gaps)', 'Grammar: Infinitiv mit zu', 'B1 Grammar: Relativsätze (der Mann, der...)', 'Drill: 15 Kasus drills'], xp: 50 },
  { day: 12, week: 2, focus: 'Sprachbausteine', title: 'Sprachbausteine Teil 2 — Wortschatz', tasks: ['Sprachbausteine Task 2 (vocabulary gaps)', 'Learn connectors: deshalb, trotzdem, außerdem, obwohl', 'B1 Vocabulary: Konnektoren', 'Phrases: Schreiben vocabulary'], xp: 50 },
  { day: 13, week: 2, focus: 'Lesen + Sprachb.', title: 'Full Lesen Practice', tasks: ['Do all 3 Lesen tasks timed (45 min)', 'Do both Sprachbausteine tasks (15 min)', 'Check answers + review mistakes', 'Tap to hear all texts you got wrong 🔊'], xp: 60 },
  { day: 14, week: 2, focus: 'Review', title: 'Week 2 Review Day 🔁', tasks: ['Redo all wrong Lesen/Sprachbausteine answers', 'Learn email phrases for Schreiben', 'B1 Grammar: Passiv (wird gemacht)', 'Speak 5 opinion sentences aloud 🔊'], xp: 40 },
  // WEEK 3: Hören + Sprechen
  { day: 15, week: 3, focus: 'Hören', title: 'Hören Teil 1 — Ankündigungen', tasks: ['Hören strategy: Read statements BEFORE audio', 'Practice Task 1 (True/False, plays once)', 'Tap ▶ to play → answer → check', 'Repeat 3x for each wrong answer'], xp: 50 },
  { day: 16, week: 3, focus: 'Hören', title: 'Hören Teil 2 — Interview', tasks: ['Practice Task 2 (10 True/False, plays twice)', 'Note: underline keywords in each statement', 'Hören strategy: Watch for negations!', 'Tap to hear difficult words 🔊'], xp: 50 },
  { day: 17, week: 3, focus: 'Hören', title: 'Hören Teil 3 — MCQ', tasks: ['Practice Task 3 (5 short clips, MCQ)', 'Full Hören practice (all 3 tasks)', 'Learn vocabulary: Gesundheit & Medien', 'Review: B1 Konnektoren drills'], xp: 50 },
  { day: 18, week: 3, focus: 'Sprechen', title: 'Sprechen Teil 1 — Kontaktaufnahme', tasks: ['Memorize 5 Kontaktaufnahme sentences 🔊', 'Practice: "Wie lange lernst du schon Deutsch?"', 'Speak into phone for 3 minutes about yourself', 'Record yourself and listen back'], xp: 60 },
  { day: 19, week: 3, focus: 'Sprechen', title: 'Sprechen Teil 2 — Meinung äußern', tasks: ['Learn phrases: "Ich bin der Meinung, dass..."', 'Practice opinion on 3 topics (tap to hear topics 🔊)', 'Read text aloud from Lesen Teil 2', 'B1 Grammar: Konjunktiv II review'], xp: 50 },
  { day: 20, week: 3, focus: 'Sprechen', title: 'Sprechen Teil 3 — Gemeinsam planen', tasks: ['Practice: Fahrradausflug scenario', 'Learn all 8 suggestion/agreement phrases', 'Practice: Kindergeburtstag scenario with partner', 'Tap to hear phrases 🔊 and repeat'], xp: 60 },
  { day: 21, week: 3, focus: 'Review', title: 'Week 3 Review Day 🔁', tasks: ['Full Hören practice (all tasks)', 'Sprechen: Record a full Gemeinsam planen practice', 'B1 Grammar: Da-Komposita (darauf, dafür, damit...)', 'Review all weak areas from week 3'], xp: 40 },
  // WEEK 4: Schreiben + Mock Exam
  { day: 22, week: 4, focus: 'Schreiben', title: 'Schreiben — Formeller Brief', tasks: ['Read formal letter structure + phrases', 'Write Prompt 1: Beschwerde (complaint)', 'Check: All 4 Leitpunkte covered?', 'Count words: aim for 120-130'], xp: 60 },
  { day: 23, week: 4, focus: 'Schreiben', title: 'Schreiben — Informeller Brief', tasks: ['Write Prompt 2: Einladung (informal)', 'Focus: Use 3+ connectors (deshalb, außerdem, obwohl)', 'Use 1+ weil/dass/wenn clause', 'Self-check with Leitpunkte checklist'], xp: 60 },
  { day: 24, week: 4, focus: 'Schreiben', title: 'Schreiben — Anfrage & Absage', tasks: ['Write Prompt 3: Anfrage (formal inquiry)', 'Review model answer phrases', 'B1 Vocabulary: Email-Floskeln', 'Drill: Lesen + Sprachbausteine timed'], xp: 60 },
  { day: 25, week: 4, focus: 'Mock Exam', title: 'Mock Exam — Leseverstehen', tasks: ['TIMED: All 3 Lesen tasks (45 min)', 'TIMED: Both Sprachbausteine tasks (15 min)', 'Check answers strictly', 'Log mistakes + study those grammar points'], xp: 70 },
  { day: 26, week: 4, focus: 'Mock Exam', title: 'Mock Exam — Hören & Schreiben', tasks: ['TIMED: All 3 Hören tasks', 'TIMED: Write one letter (30 min)', 'Score yourself honestly', 'Focus on weak areas tomorrow'], xp: 70 },
  { day: 27, week: 4, focus: 'Mock Exam', title: 'Mock Exam — Sprechen', tasks: ['Record yourself doing all 3 Sprechen parts', 'Teil 1: 3 min self-introduction', 'Teil 3: Gemeinsam planen (pick any scenario)', 'Listen back — note grammar mistakes'], xp: 70 },
  { day: 28, week: 4, focus: 'Weak Areas', title: 'Targeted Review — Weak Areas', tasks: ['Redo all wrong mock exam items', 'Focus on your 3 biggest problem areas', 'Drill: Kasus × 20', 'Sprechen: Repeat worst scenario'], xp: 50 },
  { day: 29, week: 4, focus: 'Final Review', title: 'Final Preparation Day', tasks: ['Review ALL Schreiben phrases', 'Memorize top 10 Sprechen phrases 🔊', 'Quick: All grammar sections in app', 'Light practice only — no new content!'], xp: 40 },
  { day: 30, week: 4, focus: 'Exam Day', title: 'Du schaffst das! 💪', tasks: ['Bring: Personalausweis (ID)', 'Arrive 15 min early', 'Deep breath — trust your preparation!', 'Remember: No negative marking — always guess!'], xp: 100 },
]

// ============================================================
// HÖREN (LISTENING) — with transcripts for TTS simulation
// ============================================================
export const HOEREN_TASKS = [
  {
    id: 'h1',
    title: 'Teil 1 — Ankündigungen',
    instruction: 'Sie hören 5 kurze Ansagen. Sind die Aussagen richtig (R) oder falsch (F)? Die Aufnahme wird nur EINMAL gespielt.',
    examTip: '⚠️ Plays ONCE only! Read all 5 statements before pressing Play. Underline key words.',
    playsOnce: true,
    transcript: `Ansage 1: Achtung, eine Durchsage für alle Reisenden. Der Intercity fünfhundertsieben nach Hamburg fährt heute von Gleis sieben ab, nicht von Gleis zwölf wie angegeben. Außerdem hat der Zug voraussichtlich fünfzehn Minuten Verspätung.

Ansage 2: Das Stadtmuseum ist heute wegen laufender Renovierungsarbeiten leider geschlossen. Besucher können das Museum ab Montag, dem zehnten März, wieder besuchen. Bitte beachten Sie: Der Eintritt ist für Kinder unter vierzehn Jahren kostenlos.

Ansage 3: In unserem Supermarkt bieten wir heute frisches Obst und Gemüse zum halben Preis an. Das Angebot gilt nur bis achtzehn Uhr und nur solange der Vorrat reicht. Bitte nutzen Sie die Chance!

Ansage 4: Liebe Fahrgäste, aufgrund eines technischen Defekts ist die U-Bahn-Strecke zwischen Karlsplatz und Hauptbahnhof gesperrt. Bitte benutzen Sie während dieser Zeit die Buslinie vierundfünfzig als Ersatz. Wir bitten um Ihr Verständnis.

Ansage 5: Für die Deutschprüfung am Freitag bringen Sie bitte Ihren Personalausweis sowie zwei schwarze Kugelschreiber mit. Wörterbücher, Mobiltelefone und alle anderen elektronischen Geräte sind während der Prüfung nicht erlaubt.`,
    questions: [
      { text: 'Der Zug nach Hamburg fährt von Gleis 12 ab.', answer: false, explanation: 'Falsch — er fährt von Gleis 7, nicht Gleis 12.' },
      { text: 'Das Stadtmuseum öffnet wieder am 10. März.', answer: true, explanation: 'Richtig — "ab Montag, dem zehnten März".' },
      { text: 'Das Sonderangebot im Supermarkt gilt den ganzen Tag.', answer: false, explanation: 'Falsch — nur bis 18 Uhr.' },
      { text: 'Für die U-Bahn-Sperrung gibt es einen Ersatzbus.', answer: true, explanation: 'Richtig — Buslinie 54 als Ersatz.' },
      { text: 'Bei der Prüfung darf man ein Wörterbuch benutzen.', answer: false, explanation: 'Falsch — Wörterbücher sind nicht erlaubt.' },
    ]
  },
  {
    id: 'h2',
    title: 'Teil 2 — Interview: Homeoffice',
    instruction: 'Sie hören ein Interview. Sind die Aussagen richtig (R) oder falsch (F)? Die Aufnahme wird ZWEIMAL gespielt.',
    examTip: '💡 Plays TWICE! First listen: mark what you\'re sure about. Second: focus only on unmarked items.',
    playsOnce: false,
    transcript: `Moderatorin: Herr Braun, Sie arbeiten seit zwei Jahren hauptsächlich im Homeoffice. Wie hat sich das auf Ihr Leben ausgewirkt?

Herr Braun: Im Großen und Ganzen sehr positiv, muss ich sagen. Früher bin ich jeden Tag fast eine Stunde zur Arbeit gefahren, also hin und zurück zwei Stunden täglich. Diese Zeit habe ich jetzt zurückgewonnen und nutze sie für Sport und Familie.

Moderatorin: Vermissen Sie den direkten Kontakt zu Ihren Kollegen?

Herr Braun: Am Anfang schon, aber wir haben uns schnell an die neue Situation gewöhnt. Wir haben jetzt jeden Montag eine Videokonferenz, wo wir uns über aktuelle Projekte austauschen. Und einmal im Monat treffen wir uns persönlich im Büro zum Mittagessen.

Moderatorin: Haben Sie zu Hause einen eigenen Arbeitsraum?

Herr Braun: Ja, zum Glück. Ich habe ein kleines Büro, das ich komplett vom Wohnbereich getrennt habe. Das ist meiner Meinung nach sehr wichtig. Wer in der Küche oder im Wohnzimmer arbeitet, hat meistens mehr Ablenkungen und arbeitet weniger effizient.

Moderatorin: Arbeiten Sie jetzt mehr oder weniger als früher?

Herr Braun: Das ist tatsächlich ein Problem, über das viele Homeoffice-Mitarbeiter sprechen. Ich arbeite jetzt etwas mehr als früher, weil die Grenzen zwischen Arbeit und Freizeit manchmal verschwimmen. Manchmal schaue ich abends noch E-Mails an, was ich früher nie gemacht hätte.

Moderatorin: Würden Sie eine Rückkehr ins Büro in Betracht ziehen?

Herr Braun: Nicht vollständig. Das hybride Modell finde ich ideal — also zum Beispiel zwei Tage Homeoffice und drei Tage Büro. So hat man das Beste aus beiden Welten.`,
    questions: [
      { text: 'Herr Braun fuhr früher 2 Stunden täglich zur Arbeit.', answer: true, explanation: 'Richtig — "hin und zurück zwei Stunden täglich".' },
      { text: 'Er vermisst den Kontakt zu seinen Kollegen sehr.', answer: false, explanation: 'Falsch — "am Anfang schon, aber wir haben uns schnell angepasst".' },
      { text: 'Die Videokonferenz findet jeden Montag statt.', answer: true, explanation: 'Richtig — "jeden Montag eine Videokonferenz".' },
      { text: 'Das Team trifft sich wöchentlich im Büro.', answer: false, explanation: 'Falsch — "einmal im Monat".' },
      { text: 'Herr Braun arbeitet von zu Hause in einem separaten Büro.', answer: true, explanation: 'Richtig — "ein kleines Büro, das ich komplett vom Wohnbereich getrennt habe".' },
      { text: 'Er empfiehlt, in der Küche zu arbeiten.', answer: false, explanation: 'Falsch — er sagt, wer in der Küche arbeitet, hat mehr Ablenkungen.' },
      { text: 'Er arbeitet jetzt weniger als früher.', answer: false, explanation: 'Falsch — "ich arbeite jetzt etwas mehr als früher".' },
      { text: 'Er schaut manchmal abends noch E-Mails an.', answer: true, explanation: 'Richtig — "manchmal schaue ich abends noch E-Mails an".' },
      { text: 'Er möchte komplett ins Büro zurückkehren.', answer: false, explanation: 'Falsch — "nicht vollständig".' },
      { text: 'Er bevorzugt ein hybrides Arbeitsmodell.', answer: true, explanation: 'Richtig — "Das hybride Modell finde ich ideal".' },
    ]
  },
  {
    id: 'h3',
    title: 'Teil 3 — Kurzmitteilungen (MCQ)',
    instruction: 'Sie hören 5 kurze Mitteilungen. Wählen Sie die richtige Antwort (a, b oder c). Die Aufnahme wird zweimal gespielt.',
    examTip: '🎯 Watch for paraphrasing — they rarely use the exact same words in the answer as in the audio!',
    playsOnce: false,
    clips: [
      {
        audio: 'Hallo Sarah, hier ist Mama. Ich wollte dir sagen, dass ich morgen Abend leider nicht zum Essen kommen kann. Mein Arzt hat mir empfohlen, mehr zu ruhen, und ich fühle mich nicht so gut. Vielleicht können wir nächste Woche etwas zusammen unternehmen. Ruf mich bitte zurück. Tschüss!',
        question: 'Warum kommt die Mutter nicht zum Essen?',
        opts: ['a) Sie hat einen anderen Termin.', 'b) Sie fühlt sich krank.', 'c) Sie muss arbeiten.'],
        answer: 'b',
        explanation: '"Mein Arzt hat mir empfohlen, mehr zu ruhen, und ich fühle mich nicht so gut." → sie ist krank.'
      },
      {
        audio: 'Guten Tag, hier ist die Praxis Dr. Meier. Ihr Termin am Dienstag um fünfzehn Uhr wurde leider abgesagt. Bitte rufen Sie uns an, um einen neuen Termin zu vereinbaren. Sie erreichen uns montags bis freitags von acht bis zwölf und von vierzehn bis achtzehn Uhr. Auf Wiederhören.',
        question: 'Was soll die Person tun?',
        opts: ['a) Zum Termin am Dienstag kommen.', 'b) Eine neue Zeit vereinbaren.', 'c) Online einen Termin buchen.'],
        answer: 'b',
        explanation: '"Bitte rufen Sie uns an, um einen neuen Termin zu vereinbaren." → einen neuen Termin machen.'
      },
      {
        audio: 'Hallo Thomas, ich bin\'s, Leon. Wegen unserem Plan für Samstag — ich habe gerade erfahren, dass das Fußballspiel ausverkauft ist. Ich habe aber zwei Karten für ein Konzert in der Alten Oper gefunden. Die kosten ungefähr das Gleiche. Wäre das für dich okay? Schreib mir einfach kurz.',
        question: 'Was schlägt Leon vor?',
        opts: ['a) Sie gehen zum Fußballspiel.', 'b) Sie gehen zu einem Konzert.', 'c) Sie bleiben zu Hause.'],
        answer: 'b',
        explanation: '"zwei Karten für ein Konzert in der Alten Oper" → Konzert statt Fußball.'
      },
      {
        audio: 'Liebe Kursteilnehmer, der Deutschkurs am Mittwochabend entfällt diese Woche wegen einer Fortbildung unserer Lehrerin. Der Kurs findet regulär nächste Woche wieder statt. Für verpassten Stoff empfehlen wir die Übungsblätter auf unserer Website. Bei Fragen wenden Sie sich bitte an die Kursleitung.',
        question: 'Warum findet der Kurs nicht statt?',
        opts: ['a) Die Lehrerin ist krank.', 'b) Die Lehrerin macht eine Weiterbildung.', 'c) Es sind Schulferien.'],
        answer: 'b',
        explanation: '"wegen einer Fortbildung unserer Lehrerin" → Fortbildung = Weiterbildung.'
      },
      {
        audio: 'Guten Morgen! Hier ist eine Nachricht von Ihrem Vermieter, Herr Schneider. Ich wollte Sie informieren, dass am Donnerstag zwischen neun und vierzehn Uhr die Heizung in Ihrem Gebäude gewartet wird. Bitte stellen Sie sicher, dass jemand in der Wohnung ist, um den Techniker einzulassen. Vielen Dank.',
        question: 'Was muss der Mieter am Donnerstag tun?',
        opts: ['a) Die Heizung selbst reparieren.', 'b) Zu Hause sein für den Techniker.', 'c) Herrn Schneider anrufen.'],
        answer: 'b',
        explanation: '"stellen Sie sicher, dass jemand in der Wohnung ist, um den Techniker einzulassen."'
      },
    ]
  },
]

// ============================================================
// LESEN (READING)
// ============================================================
export const LESEN_TASKS = [
  {
    id: 'l1',
    title: 'Teil 1 — Überschriften zuordnen',
    instruction: 'Lesen Sie 5 Texte. Welche Überschrift (A–J) passt zu welchem Text? 5 Überschriften passen nicht.',
    examTip: '💡 Strategy: Read ALL 10 headings first. Then skim only the first and last sentences of each text.',
    headings: [
      { id: 'A', text: 'Kosten werden zurückgegeben' },
      { id: 'B', text: 'Nur für angemeldete Teilnehmer' },
      { id: 'C', text: 'Kurzfristige Änderung' },
      { id: 'D', text: 'Bitte um Entschuldigung' },
      { id: 'E', text: 'Neue Öffnungszeiten' },
      { id: 'F', text: 'Hilfe für Anfänger' },
      { id: 'G', text: 'Gesundheitliche Vorteile bestätigt' },
      { id: 'H', text: 'Bewerbung notwendig' },
      { id: 'I', text: 'Wichtige Sicherheitshinweise' },
      { id: 'J', text: 'Angebot ab sofort verfügbar' },
    ],
    texts: [
      {
        id: '1',
        body: 'Aufgrund technischer Störungen fahren heute mehrere Züge zwischen München und Augsburg mit großer Verspätung oder fallen ganz aus. Bitte informieren Sie sich an den digitalen Anzeigetafeln oder auf der DB-App über aktuelle Abfahrtszeiten. Wir bedauern die Unannehmlichkeiten sehr.',
        answer: 'D',
        translation: 'Due to technical disruptions, several trains between Munich and Augsburg are running very late or have been cancelled today. Please check the digital display boards or the DB app for current departure times. We very much regret the inconvenience.',
        tip: 'Key phrase: "Wir bedauern die Unannehmlichkeiten" = We regret the inconvenience → Bitte um Entschuldigung (D)'
      },
      {
        id: '2',
        body: 'Unser Fitnessstudio ist ab sofort auch an Wochenenden geöffnet: samstags und sonntags jeweils von 8:00 bis 20:00 Uhr. Damit möchten wir Berufstätigen ermöglichen, regelmäßig Sport zu treiben — auch wenn die Woche stressig war.',
        answer: 'E',
        translation: 'Our gym is now also open on weekends: Saturdays and Sundays from 8:00 to 20:00. With this we want to enable working people to exercise regularly — even when the week was stressful.',
        tip: '"ab sofort auch an Wochenenden geöffnet" → changed opening hours → Neue Öffnungszeiten (E)'
      },
      {
        id: '3',
        body: 'Wissenschaftliche Studien bestätigen: Regelmäßiges Lesen reduziert Stress, verbessert die Konzentration und kann sogar das Risiko von Demenz senken. Schon 30 Minuten Lesen am Tag reichen aus, um einen positiven Effekt auf das Gehirn zu erzielen.',
        answer: 'G',
        translation: 'Scientific studies confirm: regular reading reduces stress, improves concentration and can even lower the risk of dementia. Just 30 minutes of reading per day is enough to achieve a positive effect on the brain.',
        tip: '"Wissenschaftliche Studien bestätigen" + health benefits → Gesundheitliche Vorteile bestätigt (G)'
      },
      {
        id: '4',
        body: 'Unser neuer Online-Deutschkurs beginnt nächste Woche! Für Personen ohne jegliche Vorkenntnisse bieten wir spezielle Einführungslektionen an, bei denen die wichtigsten Grundlagen Schritt für Schritt erklärt werden. Keine Erfahrung nötig!',
        answer: 'F',
        translation: 'Our new online German course starts next week! For people with no prior knowledge at all, we offer special introductory lessons where the most important basics are explained step by step. No experience required!',
        tip: '"Für Personen ohne Vorkenntnisse" + "Schritt für Schritt erklärt" → Hilfe für Anfänger (F)'
      },
      {
        id: '5',
        body: 'Wegen Umbauarbeiten in unserem Warenlager können alle Bestellungen, die zwischen dem 15. und 22. Dezember eingehen, erst Anfang Januar bearbeitet und versandt werden. Wir bitten unsere Kunden herzlich um Geduld und Verständnis.',
        answer: 'C',
        translation: 'Due to renovation work in our warehouse, all orders placed between December 15 and 22 can only be processed and shipped at the beginning of January. We kindly ask our customers for patience and understanding.',
        tip: '"Wegen Umbauarbeiten... erst Anfang Januar" = delay → kurzfristige Änderung (C)'
      },
    ]
  },
  {
    id: 'l2',
    title: 'Teil 2 — Homeoffice in Deutschland',
    instruction: 'Lesen Sie den Text. Wählen Sie bei den Aufgaben die richtige Antwort (a, b oder c).',
    examTip: '💡 Strategy: Read the questions first, then find answers in the text. Questions follow text order!',
    text: {
      title: 'Homeoffice in Deutschland — Fluch oder Segen?',
      body: `Seit der Corona-Pandemie hat sich die Arbeitswelt in Deutschland stark verändert. Immer mehr Unternehmen bieten ihren Mitarbeitern die Möglichkeit, von zu Hause aus zu arbeiten. Diese Arbeitsform, oft als „Homeoffice" bezeichnet, hat viele Vorteile — aber auch einige Herausforderungen.

Ein großer Vorteil ist die Zeitersparnis. Wer nicht täglich pendeln muss, spart oft ein bis zwei Stunden pro Tag. Diese Zeit kann für Familie, Hobbys oder Erholung genutzt werden. Außerdem können viele Beschäftigte im Homeoffice konzentrierter arbeiten, da es weniger Unterbrechungen gibt als in einem Großraumbüro.

Allerdings haben nicht alle Menschen zu Hause ideale Bedingungen. Besonders für Eltern kleiner Kinder kann es schwierig sein, Beruf und Familie gleichzeitig zu managen. Auch fehlt vielen Mitarbeitern der soziale Kontakt zu Kollegen, was auf Dauer zu Einsamkeit und Demotivation führen kann.

Eine aktuelle Studie der Bundesanstalt für Arbeitsschutz zeigt, dass 65% der deutschen Beschäftigten sich wünschen, auch in Zukunft zumindest teilweise im Homeoffice zu arbeiten. Viele Unternehmen reagieren darauf mit sogenannten „hybriden Modellen", bei denen die Mitarbeiter einige Tage im Büro und andere Tage zu Hause tätig sein können.

Experten sind sich einig: Eine vollständige Rückkehr zum alten Arbeitsmodell ist unwahrscheinlich. Das Homeoffice ist — zumindest in büronahen Berufen — gekommen, um zu bleiben.`,
      translation: 'Since the Corona pandemic, the world of work in Germany has changed significantly. More and more companies are offering their employees the option to work from home. This form of work, often called "home office", has many advantages — but also some challenges.\n\nOne major advantage is the time savings. Those who don\'t have to commute daily often save one to two hours per day. This time can be used for family, hobbies or relaxation. In addition, many employees can work more focused in the home office, as there are fewer interruptions than in an open-plan office.\n\nHowever, not everyone has ideal conditions at home. Especially for parents of young children, it can be difficult to manage work and family at the same time. Many employees also miss the social contact with colleagues, which can lead to loneliness and demotivation in the long run.\n\nA current study by the Federal Institute for Occupational Safety shows that 65% of German employees wish to work at least partially in the home office in the future. Many companies are responding with so-called "hybrid models" where employees can work some days in the office and other days at home.\n\nExperts agree: a complete return to the old working model is unlikely. The home office — at least in office-related professions — is here to stay.'
    },
    questions: [
      {
        text: 'Was hat die Arbeitswelt in Deutschland stark verändert?',
        opts: ['a) neue Computerprogramme', 'b) die Corona-Pandemie', 'c) ein neues Arbeitsgesetz'],
        answer: 'b',
        explanation: '"Seit der Corona-Pandemie hat sich die Arbeitswelt... stark verändert." — Erster Satz!'
      },
      {
        text: 'Welchen Vorteil des Homeoffice nennt der Text als ersten?',
        opts: ['a) bessere Konzentration', 'b) mehr Zeit für Familie', 'c) Zeitersparnis beim Pendeln'],
        answer: 'c',
        explanation: '"Ein großer Vorteil ist die Zeitersparnis. Wer nicht täglich pendeln muss..." → erster genannter Vorteil.'
      },
      {
        text: 'Für wen ist Homeoffice besonders schwierig?',
        opts: ['a) ältere Mitarbeiter', 'b) Eltern kleiner Kinder', 'c) Teilzeitkräfte'],
        answer: 'b',
        explanation: '"Besonders für Eltern kleiner Kinder kann es schwierig sein..."'
      },
      {
        text: 'Was wünschen sich laut Studie 65% der deutschen Beschäftigten?',
        opts: ['a) vollständig im Homeoffice zu arbeiten', 'b) teilweise im Homeoffice zu bleiben', 'c) nur noch ins Büro zu gehen'],
        answer: 'b',
        explanation: '"wünschen, auch in Zukunft zumindest teilweise im Homeoffice zu arbeiten."'
      },
      {
        text: 'Was ist ein "hybrides Modell"?',
        opts: ['a) ein neues Computersystem', 'b) eine Kombination aus Homeoffice und Büro', 'c) ein spezieller Weiterbildungskurs'],
        answer: 'b',
        explanation: '"einige Tage im Büro und andere Tage zu Hause" = hybrid model.'
      },
    ]
  },
  {
    id: 'l3',
    title: 'Teil 3 — Wer sucht was? Anzeigen zuordnen',
    instruction: 'Welche Anzeige (a–l) passt zu welcher Person? 2 Anzeigen passen nicht.',
    examTip: '⚠️ ALL conditions in the situation must match — not just one! Partial matches are wrong.',
    situations: [
      { id: '1', text: 'Jana sucht einen Deutschkurs für Fortgeschrittene, der abends stattfindet.', answer: 'd', translation: 'Jana is looking for an advanced German course that takes place in the evening.' },
      { id: '2', text: 'Peter möchte ein gebrauchtes Fahrrad kaufen.', answer: 'g', translation: 'Peter wants to buy a used bicycle.' },
      { id: '3', text: 'Familie Müller sucht eine Wohnung mit Garten in der Nähe einer Schule.', answer: 'a', translation: 'The Müller family is looking for an apartment with a garden near a school.' },
      { id: '4', text: 'Tom sucht einen Erste-Hilfe-Kurs, der am Wochenende stattfindet.', answer: 'e', translation: 'Tom is looking for a first aid course that takes place on the weekend.' },
      { id: '5', text: 'Sabine sucht eine Stelle als Kellnerin, die auch in Teilzeit möglich ist.', answer: 'h', translation: 'Sabine is looking for a job as a waitress that is also possible part-time.' },
      { id: '6', text: 'Lars möchte Gitarrenunterricht direkt bei sich zu Hause bekommen.', answer: 'c', translation: 'Lars would like to receive guitar lessons directly at his home.' },
      { id: '7', text: 'Monika sucht eine günstige Kinderbetreuung für nachmittags.', answer: 'i', translation: 'Monika is looking for affordable childcare in the afternoon.' },
      { id: '8', text: 'Klaus sucht ein Hotel im Stadtzentrum.', answer: 'b', translation: 'Klaus is looking for a hotel in the city center.' },
      { id: '9', text: 'Anna sucht einen Arzt, der auch Hausbesuche macht.', answer: 'j', translation: 'Anna is looking for a doctor who also makes house calls.' },
      { id: '10', text: 'Ben sucht eine günstige Mitfahrgelegenheit nach Paris.', answer: 'f', translation: 'Ben is looking for a cheap ride to Paris.' },
    ],
    ads: [
      { id: 'a', text: 'Helle 4-Zimmer-Wohnung mit großem Garten, ruhige Lage, 5 Minuten zur Grundschule. 1.200 €/Monat warm.', translation: 'Bright 4-room apartment with large garden, quiet area, 5 minutes to elementary school. €1,200/month warm.' },
      { id: 'b', text: 'Stadthotel am Marktplatz: Zimmer ab 79 €/Nacht inkl. Frühstück. Zentral gelegen, perfekt für Geschäfts- und Privatreisende!', translation: 'City hotel at the marketplace: rooms from €79/night incl. breakfast. Centrally located, perfect for business and leisure travelers!' },
      { id: 'c', text: 'Gitarrenunterricht für Anfänger und Fortgeschrittene — bei Ihnen zu Hause oder online. Flexible Zeiten. ☎ 0170-555432', translation: 'Guitar lessons for beginners and advanced — at your home or online. Flexible times.' },
      { id: 'd', text: 'Deutschkurs B2: Di und Do 18–20 Uhr. Für Lernende mit guten Vorkenntnissen. Anmeldung: info@sprachkurs.de', translation: 'German course B2: Tue and Thu 6–8 pm. For learners with good prior knowledge. Registration: info@sprachkurs.de' },
      { id: 'e', text: 'Erste-Hilfe-Kurs: Jeden ersten Samstag im Monat, 9–17 Uhr. Für alle offen, keine Vorkenntnisse nötig. Kosten: 35 €.', translation: 'First aid course: every first Saturday of the month, 9am–5pm. Open to all, no prior knowledge required. Cost: €35.' },
      { id: 'f', text: 'Mitfahrzentrale: Günstige Mitfahrgelegenheiten nach Frankfurt, Paris, Amsterdam u.v.m. Täglich neue Fahrten — einfach anfragen!', translation: 'Rideshare: cheap rides to Frankfurt, Paris, Amsterdam and more. New trips daily — just ask!' },
      { id: 'g', text: 'Kaufe und verkaufe Gebrauchtfahrräder in gutem Zustand, faire Preise. Besichtigung nach Vereinbarung möglich.', translation: 'Buying and selling used bicycles in good condition, fair prices. Viewing by appointment possible.' },
      { id: 'h', text: 'Kellner/Kellnerin (m/w/d) gesucht — Vollzeit oder Teilzeit möglich. Restaurant Zum Goldenen Anker. Bewerbung: job@goldener-anker.de', translation: 'Waiter/waitress (m/f/d) wanted — full-time or part-time possible. Restaurant Zum Goldenen Anker.' },
      { id: 'i', text: 'Liebevolle Kinderbetreuung nachmittags: Mo–Fr, 12–17 Uhr, für Kinder ab 3 Jahren. Nur 150 €/Monat.', translation: 'Caring childcare in the afternoon: Mon–Fri, 12–5pm, for children from age 3. Only €150/month.' },
      { id: 'j', text: 'Hausarzt Dr. Meier: Sprechzeiten Mo–Fr 8–13 Uhr. Hausbesuche für ältere und kranke Patienten nach Vereinbarung möglich.', translation: 'Family doctor Dr. Meier: office hours Mon–Fri 8am–1pm. House calls for elderly and sick patients possible by appointment.' },
      { id: 'k', text: 'Immobilienmakler Huber & Partner: Wir finden Ihre Traumimmobilie! Kostenlose Erstberatung. Tel: 089-123456', translation: 'Real estate agent Huber & Partner: We find your dream property! Free initial consultation.' },
      { id: 'l', text: 'Computerkurs für Senioren: Jeden Mittwochnachmittag in der Volkshochschule. Grundlagen für absolute Anfänger.', translation: 'Computer course for seniors: every Wednesday afternoon at the adult education center. Basics for absolute beginners.' },
    ]
  },
]

// ============================================================
// SPRACHBAUSTEINE (GRAMMAR + VOCAB GAP-FILL)
// ============================================================
export const SPRACHB_TASKS = [
  {
    id: 'sb1',
    title: 'Teil 1 — Grammatik (Email)',
    instruction: 'Lesen Sie die E-Mail. Wählen Sie für jede Lücke die richtige Antwort (a, b oder c).',
    examTip: '💡 First identify the grammatical category (preposition? case? tense?), then choose.',
    text_before: 'Sehr geehrte Frau Schmidt,\n\n',
    text_after: '\n\nMit freundlichen Grüßen\nMarkus Weber',
    segments: [
      { text: 'ich schreibe Ihnen ' },
      { gap: 1, opts: ['a) wegen', 'b) trotzdem', 'c) damit'], answer: 'a', rule: '"wegen" + Genitiv = regarding/because of. Signal: noun follows (Bewerbung).' },
      { text: ' meiner Bewerbung um die Stelle als Bürokaufmann. Ich arbeite ' },
      { gap: 2, opts: ['a) vor', 'b) seit', 'c) bis'], answer: 'b', rule: '"seit" = for/since (ongoing duration up to now). Key B1 grammar!' },
      { text: ' drei Jahren in diesem Bereich und habe dabei viel Erfahrung gesammelt.\n\n' },
      { text: 'In meiner jetzigen Firma arbeite ich in einem Team ' },
      { gap: 3, opts: ['a) aus', 'b) von', 'c) mit'], answer: 'c', rule: '"zusammenarbeiten MIT" + Dativ. mit = always Dativ.' },
      { text: ' zehn Personen zusammen. Ich bin es gewohnt, ' },
      { gap: 4, opts: ['a) mehrere', 'b) viel', 'c) viele'], answer: 'a', rule: '"mehrere" = several (plural, no strong article → no ending change needed here).' },
      { text: ' Aufgaben gleichzeitig zu erledigen.\n\nIch würde mich sehr freuen, wenn Sie mich ' },
      { gap: 5, opts: ['a) zu ein', 'b) zu einem', 'c) zum'], answer: 'b', rule: '"einladen zu" + Dativ. "einem" = masc/neut Dativ of indefinite article.' },
      { text: ' Vorstellungsgespräch einladen ' },
      { gap: 6, opts: ['a) würden', 'b) werden', 'c) wären'], answer: 'a', rule: 'Konjunktiv II in "wenn"-clause: "wenn Sie mich... einladen würden." Conditional request.' },
      { text: '. Ab ' },
      { gap: 7, opts: ['a) dem', 'b) den', 'c) der'], answer: 'a', rule: '"ab" + Dativ. dem = Dativ of der (masculine/neuter). "ab dem 15. März".' },
      { text: ' 15. März wäre ich für einen neuen Job verfügbar. Ich freue ' },
      { gap: 8, opts: ['a) ich mich', 'b) mich', 'c) mir'], answer: 'b', rule: '"ich freue mich" — reflexive. But here subject "ich" is already stated. So just "mich".' },
      { text: ' sehr auf Ihre Antwort.' },
    ]
  },
  {
    id: 'sb2',
    title: 'Teil 2 — Wortschatz (Nachricht an Freund)',
    instruction: 'Lesen Sie die Nachricht. Wählen Sie das passende Wort aus dem Wortkasten.',
    examTip: '💡 First eliminate words that are grammatically impossible. Then check meaning/context.',
    wordbank: ['weil', 'seit', 'gefunden', 'Manchmal', 'Trotzdem', 'außerdem', 'besten', 'hilft', 'meistens', 'Allerdings', 'denn', 'damit', 'daher', 'obwohl', 'jedoch'],
    answers: ['weil', 'seit', 'gefunden', 'Manchmal', 'Trotzdem', 'außerdem', 'besten', 'hilft', 'meistens'],
    text_before: 'Lieber Sven,\n\nendlich schreibe ich dir! Ich wollte dir erzählen, ',
    gaps: [
      { pos: 1, answer: 'weil', rule: '"weil" = because. Verb goes to END: "weil ich... erzählen möchte."' },
      { pos: 2, answer: 'seit', rule: '"seit" + Dativ = for/since (ongoing). "seit einem Monat" = for one month.' },
      { pos: 3, answer: 'gefunden', rule: 'Partizip II of "finden" → "gefunden". Perfekt: habe gefunden.' },
      { pos: 4, answer: 'Manchmal', rule: '"manchmal" = sometimes. Frequency adverb.' },
      { pos: 5, answer: 'Trotzdem', rule: '"trotzdem" = nevertheless/despite that. Contrast connector.' },
      { pos: 6, answer: 'außerdem', rule: '"außerdem" = besides/furthermore. Addition connector.' },
      { pos: 7, answer: 'besten', rule: '"am besten" = the best. Superlative of "gut".' },
      { pos: 8, answer: 'hilft', rule: '"helfen" + Dativ: er hilft mir. Present tense, er/sie/es: hilft.' },
      { pos: 9, answer: 'meistens', rule: '"meistens" = mostly/usually. Frequency adverb.' },
    ],
    full_text: 'Lieber Sven,\n\nendlich schreibe ich dir! Ich wollte dir erzählen, [1=weil] ich dir von meiner neuen Arbeit berichten möchte. Ich habe [2=seit] einem Monat eine neue Stelle [3=gefunden]. Das Büro ist modern und die Kollegen sind freundlich.\n\n[4=Manchmal] bin ich noch etwas nervös, wenn ich neue Aufgaben bekomme. [5=Trotzdem] lerne ich jeden Tag dazu. Ich muss [6=außerdem] noch viel mit der neuen Software üben. Am [7=besten] gefällt mir, dass mein Chef mir [8=hilft], wenn ich Fragen habe.\n\nIch komme [9=meistens] pünktlich nach Hause — das war bei meiner alten Stelle ganz anders!\n\nLiebe Grüße\nMax'
  },
]

// ============================================================
// SCHREIBEN (WRITING) — prompts + templates + phrases
// ============================================================
export const SCHREIBEN_PROMPTS = [
  {
    id: 'sw1',
    title: 'Beschwerde — Sprachschule',
    type: 'formal',
    addressee: 'Sehr geehrte Damen und Herren,',
    closing: 'Mit freundlichen Grüßen,',
    situation: 'Sie haben vor drei Wochen einen Deutschkurs bei der Sprachschule "LinguaPlus" gebucht und bezahlt. Es gibt mehrere Probleme mit dem Kurs.',
    points: [
      '1. Warum schreiben Sie? (Grund des Schreibens)',
      '2. Welche Probleme gibt es genau?',
      '3. Was erwarten Sie von der Schule?',
      '4. Wie soll die Schule reagieren?',
    ],
    wordTarget: 120,
    modelAnswer: `Sehr geehrte Damen und Herren,

ich schreibe Ihnen, weil ich mit meinem Deutschkurs sehr unzufrieden bin. Ich habe den Kurs vor drei Wochen gebucht und bereits den vollen Betrag bezahlt.

Es gibt leider mehrere Probleme: Der Unterricht beginnt regelmäßig 20 Minuten zu spät, und die Kursräume sind zu klein und schlecht belüftet. Außerdem ist das Niveau des Kurses viel zu niedrig für mich, obwohl ich mich für einen Fortgeschrittenenkurs angemeldet hatte.

Ich erwarte, dass diese Probleme so schnell wie möglich gelöst werden. Bitte teilen Sie mir mit, ob ein Wechsel in einen höheren Kurs möglich ist. Falls nicht, möchte ich eine teilweise Rückerstattung meines Kursgeldes.

Ich bitte Sie, mir bis Ende dieser Woche zu antworten.

Mit freundlichen Grüßen,
[Ihr Name]`,
    translation: 'Dear Sir or Madam,\n\nI am writing to you because I am very dissatisfied with my German course. I booked the course three weeks ago and have already paid the full amount.\n\nUnfortunately there are several problems: The lessons regularly start 20 minutes late, and the classrooms are too small and poorly ventilated. Furthermore, the level of the course is far too low for me, although I had registered for an advanced course.\n\nI expect these problems to be resolved as quickly as possible. Please let me know whether it is possible to switch to a higher course. If not, I would like a partial refund of my course fee.\n\nI ask that you reply by the end of this week.\n\nYours sincerely,\n[Your name]'
  },
  {
    id: 'sw2',
    title: 'Einladung — Besuch eines Freundes',
    type: 'informal',
    addressee: 'Liebe(r) [Name],',
    closing: 'Viele Grüße,',
    situation: 'Ihr Freund / Ihre Freundin aus einer anderen Stadt möchte Sie nächstes Wochenende besuchen. Schreiben Sie eine E-Mail.',
    points: [
      '1. Freude über den Besuch ausdrücken',
      '2. Programm für das Wochenende vorschlagen',
      '3. Nach Wünschen oder Vorlieben fragen',
      '4. Praktische Informationen geben (Anreise, Unterkunft)',
    ],
    wordTarget: 120,
    modelAnswer: `Liebe Sofia,

ich freue mich so sehr, dass du nächstes Wochenende kommst! Das wird bestimmt toll.

Ich habe schon ein paar Ideen für unser Programm: Am Samstag könnten wir zuerst durch die Altstadt bummeln und danach in einem netten Restaurant zu Abend essen. Am Sonntag würde ich gerne mit dir ins Museum gehen — dort läuft gerade eine interessante Ausstellung.

Magst du lieber draußen sein oder entspannter Kultur genießen? Schreib mir kurz, was du dir wünschst!

Zur Anreise: Du kannst direkt mit dem Zug kommen — der Bahnhof ist nur 10 Minuten von mir entfernt. Du schläfst natürlich bei mir, ich habe ein gemütliches Gästezimmer für dich.

Ich freue mich schon riesig auf dich!

Viele Grüße,
[Dein Name]`,
    translation: 'Dear Sofia,\n\nI am so happy that you are coming next weekend! It will surely be great.\n\nI already have a few ideas for our programme: On Saturday we could first stroll through the old town and then have dinner at a nice restaurant. On Sunday I would love to go to the museum with you — there is an interesting exhibition on at the moment.\n\nDo you prefer being outdoors or enjoying culture in a more relaxed way? Write me a quick note about what you would like!\n\nFor the journey: you can come directly by train — the station is only 10 minutes from me. You will of course stay with me, I have a cosy guest room for you.\n\nI am already looking forward to seeing you!\n\nMany greetings,\n[Your name]'
  },
  {
    id: 'sw3',
    title: 'Anfrage — Informationen zu einem Kurs',
    type: 'formal',
    addressee: 'Sehr geehrte Damen und Herren,',
    closing: 'Mit freundlichen Grüßen,',
    situation: 'Sie haben in der Zeitung eine Anzeige über einen Kochkurs gesehen. Sie interessieren sich dafür und möchten mehr Informationen.',
    points: [
      '1. Erklären Sie, wie Sie von dem Kurs erfahren haben',
      '2. Informationen zum Kursinhalt erfragen',
      '3. Fragen zu Kosten und Terminen stellen',
      '4. Um eine Antwort bitten',
    ],
    wordTarget: 120,
    modelAnswer: `Sehr geehrte Damen und Herren,

ich habe letzte Woche in der Frankfurter Allgemeinen Zeitung Ihre Anzeige für einen Kochkurs gelesen und würde gerne mehr Informationen erhalten.

Könnten Sie mir bitte erklären, was genau im Kurs unterrichtet wird? Ich interessiere mich besonders für mediterrane Küche und möchte wissen, ob dieser Schwerpunkt in Ihrem Programm vorkommt.

Außerdem wäre ich dankbar, wenn Sie mir mitteilen könnten, wie viel der Kurs kostet und an welchen Tagen und Uhrzeiten er stattfindet. Gibt es auch die Möglichkeit, einzelne Stunden zu buchen?

Ich freue mich auf Ihre Antwort und stehe für Rückfragen gerne zur Verfügung.

Mit freundlichen Grüßen,
[Ihr Name]`,
    translation: 'Dear Sir or Madam,\n\nLast week I read your advertisement for a cooking course in the Frankfurter Allgemeine Zeitung and would like to receive more information.\n\nCould you please explain what exactly is taught in the course? I am particularly interested in Mediterranean cuisine and would like to know whether this focus is included in your programme.\n\nI would also be grateful if you could let me know how much the course costs and on which days and at what times it takes place. Is it also possible to book individual lessons?\n\nI look forward to your reply and am happy to answer any questions.\n\nYours sincerely,\n[Your name]'
  },
]

export const SCHREIBEN_PHRASES = {
  formal_open: [
    { de: 'Ich schreibe Ihnen bezüglich...', en: 'I am writing to you regarding...' },
    { de: 'Ich schreibe Ihnen, weil...', en: 'I am writing to you because...' },
    { de: 'Vielen Dank für Ihre Nachricht vom...', en: 'Thank you very much for your message of...' },
    { de: 'Ich habe Ihre Anzeige in... gelesen.', en: 'I read your advertisement in...' },
    { de: 'Ich beziehe mich auf Ihr Angebot vom...', en: 'I refer to your offer of...' },
  ],
  informal_open: [
    { de: 'Liebe(r) [Name], vielen Dank für deinen Brief!', en: 'Dear [Name], many thanks for your letter!' },
    { de: 'Ich freue mich so, von dir zu hören!', en: 'I am so happy to hear from you!' },
    { de: 'Es tut mir leid, dass ich so lange nicht geschrieben habe.', en: 'I\'m sorry I haven\'t written for so long.' },
  ],
  connectors: [
    { de: 'Außerdem...', en: 'In addition / Furthermore...' },
    { de: 'Trotzdem...', en: 'Nevertheless / Despite that...' },
    { de: 'Deshalb / Daher...', en: 'Therefore / That is why...' },
    { de: 'Obwohl...', en: 'Although...' },
    { de: 'Allerdings...', en: 'However...' },
    { de: 'Zwar... aber...', en: 'It is true that... but...' },
  ],
  requests: [
    { de: 'Könnten Sie mir bitte mitteilen, ob...', en: 'Could you please let me know whether...' },
    { de: 'Ich würde mich freuen, wenn Sie...', en: 'I would be pleased if you...' },
    { de: 'Ich bitte Sie, mir bis [Datum] zu antworten.', en: 'I ask you to reply to me by [date].' },
    { de: 'Ich erwarte eine baldige Antwort.', en: 'I look forward to a prompt reply.' },
  ],
  formal_close: [
    { de: 'Mit freundlichen Grüßen,', en: 'Yours sincerely,' },
    { de: 'Hochachtungsvoll,', en: 'Yours faithfully,' },
    { de: 'Ich freue mich auf Ihre Antwort.', en: 'I look forward to your reply.' },
  ],
  informal_close: [
    { de: 'Viele Grüße,', en: 'Many greetings,' },
    { de: 'Bis bald!', en: 'See you soon!' },
    { de: 'Ich freue mich auf deine Antwort!', en: 'I look forward to your reply!' },
    { de: 'Liebe Grüße,', en: 'Warm regards,' },
  ],
}

// ============================================================
// SPRECHEN (SPEAKING)
// ============================================================
export const SPRECHEN_DATA = {
  kontakt_topics: [
    { de: 'Wie heißen Sie? / Wie heißt du?', en: 'What is your name?' },
    { de: 'Woher kommen Sie? / Woher kommst du?', en: 'Where are you from?' },
    { de: 'Wo wohnen Sie jetzt? / Wo wohnst du jetzt?', en: 'Where do you live now?' },
    { de: 'Was machen Sie beruflich? / Was machst du beruflich?', en: 'What do you do for work?' },
    { de: 'Wie lange lernen Sie schon Deutsch? / Wie lange lernst du schon Deutsch?', en: 'How long have you been learning German?' },
    { de: 'Warum lernen Sie Deutsch? / Warum lernst du Deutsch?', en: 'Why are you learning German?' },
    { de: 'Was sind Ihre Hobbys? / Was sind deine Hobbys?', en: 'What are your hobbies?' },
    { de: 'Haben Sie Familie hier? / Hast du Familie hier?', en: 'Do you have family here?' },
  ],
  phrases: {
    suggest: [
      { de: 'Ich würde vorschlagen, dass wir...', en: 'I would suggest that we...' },
      { de: 'Wie wäre es, wenn wir...?', en: 'How about if we...?' },
      { de: 'Wir könnten doch...', en: 'We could...' },
      { de: 'Was hältst du davon, wenn wir...?', en: 'What do you think about us...?' },
    ],
    askPartner: [
      { de: 'Was denkst du darüber?', en: 'What do you think about that?' },
      { de: 'Was hältst du davon?', en: 'What do you think of that?' },
      { de: 'Bist du damit einverstanden?', en: 'Do you agree with that?' },
      { de: 'Hast du eine andere Idee?', en: 'Do you have another idea?' },
    ],
    agree: [
      { de: 'Das finde ich eine super Idee!', en: 'I think that\'s a great idea!' },
      { de: 'Da bin ich ganz deiner Meinung.', en: 'I completely agree with you.' },
      { de: 'Ja, das klingt gut!', en: 'Yes, that sounds good!' },
      { de: 'Einverstanden!', en: 'Agreed!' },
    ],
    disagree: [
      { de: 'Das ist zwar eine gute Idee, aber...', en: 'That is a good idea, but...' },
      { de: 'Ich fände es besser, wenn wir...', en: 'I would prefer if we...' },
      { de: 'Wie wäre es stattdessen mit...?', en: 'How about... instead?' },
      { de: 'Ich bin nicht so sicher, ob...', en: 'I\'m not so sure whether...' },
    ],
    opinion: [
      { de: 'Ich bin der Meinung, dass...', en: 'I am of the opinion that...' },
      { de: 'Meiner Meinung nach...', en: 'In my opinion...' },
      { de: 'Ich finde, dass...', en: 'I think that...' },
      { de: 'In meinem Heimatland ist das ganz anders.', en: 'In my home country it\'s quite different.' },
      { de: 'Das finde ich interessant, weil...', en: 'I find that interesting because...' },
      { de: 'Ich stimme zu, dass... aber...', en: 'I agree that... but...' },
    ],
    textPhrases: [
      { de: 'In meinem Text steht, dass...', en: 'My text says that...' },
      { de: 'Die Grafik zeigt, dass...', en: 'The graphic shows that...' },
      { de: 'Laut dem Text...', en: 'According to the text...' },
      { de: 'Was sagst dein Text dazu?', en: 'What does your text say about that?' },
    ],
    buyTime: [
      { de: 'Das ist eine gute Frage...', en: 'That\'s a good question...' },
      { de: 'Moment, ich muss kurz nachdenken.', en: 'One moment, I need to think briefly.' },
      { de: 'Also, ich würde sagen...', en: 'Well, I would say...' },
      { de: 'Wie soll ich das erklären...', en: 'How should I explain this...' },
    ],
  },
  planen_scenarios: [
    {
      title: 'Fahrradausflug',
      emoji: '🚴',
      intro: 'Sie möchten mit einem Freund / einer Freundin einen Fahrradausflug machen. Sprechen Sie über die folgenden Punkte und einigen Sie sich.',
      points: ['Wohin fahren wir?', 'Wann fahren wir los?', 'Was nehmen wir mit? (Essen, Trinken)', 'Wie lange soll der Ausflug dauern?', 'Was machen wir bei schlechtem Wetter?'],
    },
    {
      title: 'Geburtstagsfeier',
      emoji: '🎂',
      intro: 'Sie möchten gemeinsam eine Geburtstagsfeier für einen Freund / eine Freundin organisieren. Sprechen Sie über die folgenden Punkte.',
      points: ['Wo findet die Feier statt?', 'Wen laden wir ein?', 'Was essen und trinken wir?', 'Was schenken wir?', 'Gibt es eine Überraschung?'],
    },
    {
      title: 'Klassenreise',
      emoji: '🚌',
      intro: 'Sie planen eine Klassenreise. Sprechen Sie über die folgenden Punkte und einigen Sie sich.',
      points: ['Wohin fahren wir?', 'Wie reisen wir? (Zug / Bus / Flugzeug)', 'Wie lange bleiben wir?', 'Was machen wir dort?', 'Wie viel Geld brauchen wir pro Person?'],
    },
    {
      title: 'Abschiedsfeier',
      emoji: '🎉',
      intro: 'Ein Kollege / eine Kollegin verlässt die Firma. Sie möchten eine Abschiedsfeier organisieren. Sprechen Sie über die folgenden Punkte.',
      points: ['Wann und wo findet die Feier statt?', 'Was für ein Programm gibt es?', 'Was essen und trinken wir?', 'Was schenken wir als Abschiedsgeschenk?', 'Wer organisiert was?'],
    },
    {
      title: 'Straßenfest',
      emoji: '🏘️',
      intro: 'Sie möchten in Ihrer Straße ein Nachbarschaftsfest organisieren. Sprechen Sie über die folgenden Punkte.',
      points: ['Wann findet das Fest statt?', 'Welche Aktivitäten gibt es?', 'Wer bringt Essen und Getränke mit?', 'Wie informieren wir die Nachbarn?', 'Was passiert bei Regen?'],
    },
    {
      title: 'Wochenendtrip',
      emoji: '🏨',
      intro: 'Sie möchten gemeinsam ein Wochenende verreisen. Sprechen Sie über die folgenden Punkte und treffen Sie gemeinsam eine Entscheidung.',
      points: ['Welches Ziel wählen wir?', 'Wie reisen wir an?', 'Wo schlafen wir? (Hotel / Hostel / Airbnb)', 'Was möchten wir unbedingt sehen oder machen?', 'Wie teilen wir die Kosten auf?'],
    },
  ],
  opinion_topics: [
    { topic: 'Smartphones in der Schule', de: 'Sollten Schüler Smartphones in der Schule benutzen dürfen?', en: 'Should students be allowed to use smartphones in school?', stats: '72% der deutschen Schüler nutzen täglich ihr Smartphone (2024)' },
    { topic: 'Homeoffice', de: 'Ist Homeoffice besser als Büroarbeit?', en: 'Is working from home better than office work?', stats: '65% der Arbeitnehmer wünschen sich teilweise Homeoffice' },
    { topic: 'Vegetarische Ernährung', de: 'Sollten alle Menschen weniger Fleisch essen?', en: 'Should all people eat less meat?', stats: '10% der Deutschen sind Vegetarier oder Veganer' },
    { topic: 'Öffentliche Verkehrsmittel', de: 'Sollte der öffentliche Nahverkehr kostenlos sein?', en: 'Should public transport be free?', stats: 'Deutschland hat 2023 das 49-Euro-Ticket eingeführt' },
    { topic: 'Soziale Medien', de: 'Haben soziale Medien mehr Vorteile oder Nachteile?', en: 'Do social media have more advantages or disadvantages?', stats: 'Deutsche verbringen durchschnittlich 1,5 Stunden täglich in sozialen Medien' },
  ],
}

// ============================================================
// B1 VOCABULARY
// ============================================================
export const B1_VOCAB = [
  {
    id: 'umwelt', label: 'Umwelt', emoji: '🌍',
    words: [
      { de: 'der Klimawandel', en: 'climate change', a: 'der', gram: 'Masculine compound. "der Klimawandel ist ein globales Problem"', ex: 'Der Klimawandel ist eine der größten Herausforderungen unserer Zeit.', exEn: 'Climate change is one of the greatest challenges of our time.' },
      { de: 'erneuerbare Energie', en: 'renewable energy', a: 'die', gram: 'die Energie (fem). Adjective: erneuerbar. "auf erneuerbare Energie umsteigen"', ex: 'Deutschland investiert stark in erneuerbare Energien.', exEn: 'Germany invests heavily in renewable energies.' },
      { de: 'recyceln', en: 'to recycle', a: 'v', gram: 'Regular verb. Perfekt: habe recycelt. Germany has strict recycling laws!', ex: 'In Deutschland muss man Müll trennen und recyceln.', exEn: 'In Germany you must sort waste and recycle.' },
      { de: 'die Nachhaltigkeit', en: 'sustainability', a: 'die', gram: '-igkeit → ALWAYS feminine! die Nachhaltigkeit, die Möglichkeit, die Fähigkeit', ex: 'Nachhaltigkeit ist ein wichtiges Thema für junge Menschen.', exEn: 'Sustainability is an important topic for young people.' },
      { de: 'der Treibhauseffekt', en: 'greenhouse effect', a: 'der', gram: 'Masculine compound. "den Treibhauseffekt verringern" (Akk)', ex: 'Der Treibhauseffekt führt zu steigenden Temperaturen.', exEn: 'The greenhouse effect leads to rising temperatures.' },
      { de: 'umweltfreundlich', en: 'eco-friendly', a: 'adj', gram: 'Compound adj: Umwelt + freundlich. "ein umweltfreundliches Produkt"', ex: 'Ich versuche, umweltfreundlicher zu leben.', exEn: 'I try to live in a more eco-friendly way.' },
    ]
  },
  {
    id: 'gesellschaft', label: 'Gesellschaft', emoji: '🏛️',
    words: [
      { de: 'das Ehrenamt', en: 'voluntary work / volunteering', a: 'das', gram: 'Neuter. "im Ehrenamt tätig sein" = to do voluntary work', ex: 'Viele Deutsche engagieren sich im Ehrenamt.', exEn: 'Many Germans are involved in voluntary work.' },
      { de: 'die Integration', en: 'integration', a: 'die', gram: '-tion → ALWAYS feminine! die Integration, die Nation, die Situation', ex: 'Integration ist ein wichtiges gesellschaftliches Thema.', exEn: 'Integration is an important social topic.' },
      { de: 'sich engagieren', en: 'to get involved / commit', a: 'v', gram: 'Reflexive. "sich für etwas engagieren" = to commit to sth (für + Akk)', ex: 'Er engagiert sich für den Umweltschutz.', exEn: 'He is committed to environmental protection.' },
      { de: 'die Gemeinschaft', en: 'community', a: 'die', gram: '-schaft → ALWAYS feminine! die Gemeinschaft, die Gesellschaft, die Freundschaft', ex: 'Wir brauchen eine starke Gemeinschaft.', exEn: 'We need a strong community.' },
      { de: 'gleichberechtigt', en: 'equal / with equal rights', a: 'adj', gram: 'Adjective. "Männer und Frauen sollen gleichberechtigt sein."', ex: 'In Deutschland sollen alle Menschen gleichberechtigt sein.', exEn: 'In Germany all people should have equal rights.' },
    ]
  },
  {
    id: 'medien', label: 'Medien & Technik', emoji: '📱',
    words: [
      { de: 'die sozialen Medien', en: 'social media', a: 'pl', gram: 'Plural! "in sozialen Medien aktiv sein". English loanword in German usage.', ex: 'Viele Jugendliche verbringen viel Zeit in sozialen Medien.', exEn: 'Many young people spend a lot of time on social media.' },
      { de: 'herunterladen', en: 'to download', a: 'v', gram: 'Separable: herunter|laden. Perfekt: habe heruntergeladen', ex: 'Ich habe die App heruntergeladen.', exEn: 'I downloaded the app.' },
      { de: 'die Datenschutz', en: 'data protection', a: 'der', gram: 'Masculine! der Datenschutz. "Datenschutz ist in Deutschland sehr wichtig."', ex: 'Der Datenschutz ist in Deutschland streng geregelt.', exEn: 'Data protection is strictly regulated in Germany.' },
      { de: 'digital', en: 'digital', a: 'adj', gram: 'Adjective. "die digitale Transformation" / "digitales Lernen"', ex: 'Die Arbeitswelt wird immer digitaler.', exEn: 'The world of work is becoming increasingly digital.' },
      { de: 'die Benutzeroberfläche', en: 'user interface', a: 'die', gram: 'Feminine compound. "eine benutzerfreundliche Oberfläche" = user-friendly interface', ex: 'Die neue App hat eine einfache Benutzeroberfläche.', exEn: 'The new app has a simple user interface.' },
    ]
  },
  {
    id: 'bildung', label: 'Bildung & Karriere', emoji: '🎓',
    words: [
      { de: 'die Ausbildung', en: 'vocational training / education', a: 'die', gram: '-ung → ALWAYS feminine! "eine Ausbildung machen/abschließen"', ex: 'Er macht eine Ausbildung als Elektriker.', exEn: 'He is doing vocational training as an electrician.' },
      { de: 'das Stipendium', en: 'scholarship / grant', a: 'das', gram: 'Neuter. Plural: die Stipendien. "ein Stipendium bekommen/beantragen"', ex: 'Sie hat ein Stipendium für ihr Studium bekommen.', exEn: 'She received a scholarship for her studies.' },
      { de: 'sich weiterbilden', en: 'to further one\'s education / upskill', a: 'v', gram: 'Reflexive + separable. Ich bilde mich weiter. "berufliche Weiterbildung"', ex: 'Es ist wichtig, sich ständig weiterzubilden.', exEn: 'It is important to continually further your education.' },
      { de: 'die Qualifikation', en: 'qualification', a: 'die', gram: '-tion → ALWAYS feminine! "berufliche Qualifikationen" = professional qualifications', ex: 'Welche Qualifikationen braucht man für diese Stelle?', exEn: 'What qualifications do you need for this position?' },
      { de: 'der Abschluss', en: 'degree / qualification / completion', a: 'der', gram: 'Masculine. Plural: die Abschlüsse. "einen Abschluss machen" = to get a degree', ex: 'Mit diesem Abschluss hast du gute Chancen auf dem Arbeitsmarkt.', exEn: 'With this degree you have good prospects in the job market.' },
    ]
  },
]
