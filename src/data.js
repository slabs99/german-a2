// ============================================================
// VOCABULARY TOPICS
// ============================================================
export const VOCAB_TOPICS = [
  {
    id: 'alltag', label: 'Alltag', emoji: '☀️',
    gramSpotlight: { title: 'Trennbare Verben', rule: 'Separable verbs split in sentences: auf|stehen → Ich stehe um 7 auf. The prefix always goes to the END.' },
    words: [
      { de: 'aufwachen', en: 'to wake up', a: 'v',
        gram: 'Separable: auf|wachen. Perfekt + SEIN: bin aufgewacht',
        ex: 'Ich wache um 7 auf.', exEn: 'I wake up at 7.' },
      { de: 'aufstehen', en: 'to get up', a: 'v',
        gram: 'Separable: auf|stehen. Perfekt + SEIN: bin aufgestanden',
        ex: 'Stehst du früh auf?', exEn: 'Do you get up early?' },
      { de: 'sich duschen', en: 'to shower', a: 'v',
        gram: 'Reflexive verb: sich duschen → ich dusche mich / du duschst dich. Perfekt: habe mich geduscht',
        ex: 'Er duscht sich jeden Morgen.', exEn: 'He showers every morning.' },
      { de: 'frühstücken', en: 'to have breakfast', a: 'v',
        gram: 'Not separable. Perfekt + haben: habe gefrühstückt',
        ex: 'Wir frühstücken um 8 Uhr.', exEn: 'We have breakfast at 8.' },
      { de: 'einkaufen', en: 'to go shopping', a: 'v',
        gram: 'Separable: ein|kaufen → kaufe ein. Perfekt + haben: habe eingekauft',
        ex: 'Ich kaufe heute Abend ein.', exEn: 'I am shopping tonight.' },
      { de: 'kochen', en: 'to cook', a: 'v',
        gram: 'Regular. Perfekt + haben: habe gekocht. Also: das Kochen = cooking (noun)',
        ex: 'Kochst du heute Abend?', exEn: 'Are you cooking tonight?' },
      { de: 'schlafen', en: 'to sleep', a: 'v',
        gram: 'Irregular stem change: er schläft (a→ä). Perfekt + haben: habe geschlafen',
        ex: 'Er schläft noch.', exEn: 'He is still sleeping.' },
      { de: 'die Gewohnheit', en: 'habit', a: 'die',
        gram: 'Feminine! ALL nouns ending in -heit are feminine. Plural: -en → die Gewohnheiten',
        ex: 'Sport ist eine gute Gewohnheit.', exEn: 'Exercise is a good habit.' },
      { de: 'der Alltag', en: 'everyday life / routine', a: 'der',
        gram: 'Masculine. Plural rare. "im Alltag" = in daily life. Compound: all + Tag',
        ex: 'Mein Alltag beginnt früh.', exEn: 'My daily routine starts early.' },
      { de: 'einschlafen', en: 'to fall asleep', a: 'v',
        gram: 'Separable: ein|schlafen. Perfekt + SEIN: bin eingeschlafen (state change → sein!)',
        ex: 'Er schläft sofort ein.', exEn: 'He falls asleep immediately.' },
    ]
  },
  {
    id: 'transport', label: 'Unterwegs', emoji: '🚆',
    gramSpotlight: { title: 'mit + Dativ', rule: '"mit" always takes Dativ: mit dem Zug, mit der U-Bahn, mit dem Auto. DER→dem, DIE→der, DAS→dem.' },
    words: [
      { de: 'der Zug', en: 'train', a: 'der',
        gram: 'Masculine. Plural: die Züge (umlaut). "mit dem Zug fahren" — mit + Dativ!',
        ex: 'Ich fahre mit dem Zug nach Berlin.', exEn: 'I travel by train to Berlin.' },
      { de: 'die U-Bahn', en: 'subway / metro', a: 'die',
        gram: 'Feminine. Short for Untergrundbahn. "mit der U-Bahn" — mit + Dativ (die → der)',
        ex: 'Ich nehme die U-Bahn zur Arbeit.', exEn: 'I take the metro to work.' },
      { de: 'der Bahnhof', en: 'train station', a: 'der',
        gram: 'Masculine. Plural: die Bahnhöfe. "am Bahnhof" = at the station (an + dem = am)',
        ex: 'Das Hotel ist direkt am Bahnhof.', exEn: 'The hotel is right at the station.' },
      { de: 'die Fahrkarte', en: 'ticket', a: 'die',
        gram: 'Feminine. Plural: -n. "eine Fahrkarte kaufen" — kaufen takes Akkusativ (eine)',
        ex: 'Ich brauche eine Fahrkarte nach Hamburg.', exEn: 'I need a ticket to Hamburg.' },
      { de: 'umsteigen', en: 'to change / transfer', a: 'v',
        gram: 'Separable: um|steigen. Perfekt + SEIN: bin umgestiegen (motion verb)',
        ex: 'Sie müssen hier umsteigen.', exEn: 'You must transfer here.' },
      { de: 'der Stau', en: 'traffic jam', a: 'der',
        gram: 'Masculine. Plural: die Staus. "im Stau stehen" = to be stuck in traffic',
        ex: 'Wir stehen im Stau.', exEn: 'We are stuck in traffic.' },
      { de: 'der Fahrplan', en: 'timetable', a: 'der',
        gram: 'Masculine compound: die Fahrt + der Plan → der Fahrplan. Plural: die Fahrpläne',
        ex: 'Schau in den Fahrplan!', exEn: 'Check the timetable!' },
      { de: 'abfahren', en: 'to depart', a: 'v',
        gram: 'Separable: ab|fahren. Perfekt + SEIN: bin abgefahren. "Wann fährt der Zug ab?"',
        ex: 'Der Zug fährt um 10 Uhr ab.', exEn: 'The train departs at 10.' },
      { de: 'ankommen', en: 'to arrive', a: 'v',
        gram: 'Separable: an|kommen. Perfekt + SEIN: bin angekommen. "Wann kommst du an?"',
        ex: 'Wir kommen um 15 Uhr an.', exEn: 'We arrive at 3 pm.' },
      { de: 'das Gleis', en: 'platform / track', a: 'das',
        gram: 'Neuter. Plural: die Gleise. "auf Gleis 5" = on platform 5 (no article needed)',
        ex: 'Der Zug fährt auf Gleis 3 ab.', exEn: 'The train departs from platform 3.' },
    ]
  },
  {
    id: 'essen', label: 'Essen', emoji: '🍽️',
    gramSpotlight: { title: 'Konjunktiv II: hätte gerne', rule: '"Ich hätte gerne..." = "I would like..." — Konjunktiv II of haben. More polite than möchte. Use it in restaurants!' },
    words: [
      { de: 'bestellen', en: 'to order', a: 'v',
        gram: 'Regular. Inseparable be- prefix → NO ge- in Partizip II: habe bestellt (not gebestellt!)',
        ex: 'Haben Sie schon bestellt?', exEn: 'Have you ordered yet?' },
      { de: 'die Rechnung', en: 'the bill', a: 'die',
        gram: 'Feminine. ALL nouns in -ung are feminine! "Die Rechnung, bitte." — most useful sentence in Germany.',
        ex: 'Können wir die Rechnung haben?', exEn: 'Can we have the bill?' },
      { de: 'das Trinkgeld', en: 'tip / gratuity', a: 'das',
        gram: 'Neuter compound: trinken + Geld. "Trinkgeld geben" = to tip someone (geben + Dativ)',
        ex: 'Ich gebe 10% Trinkgeld.', exEn: 'I tip 10%.' },
      { de: 'die Speisekarte', en: 'menu', a: 'die',
        gram: 'Feminine. Also: die Karte (informal). "die Karte haben" = Akkusativ (direct object)',
        ex: 'Darf ich die Speisekarte sehen?', exEn: 'May I see the menu?' },
      { de: 'empfehlen', en: 'to recommend', a: 'v',
        gram: 'Irregular: er empfiehlt (e→ie stem change). Partizip II: empfohlen. Takes Akkusativ.',
        ex: 'Was empfehlen Sie heute?', exEn: 'What do you recommend today?' },
      { de: 'schmecken', en: 'to taste (good)', a: 'v',
        gram: 'DATIV VERB! "Es schmeckt mir." = I like it (lit: it tastes to me). mir/dir/ihm/ihr/uns',
        ex: 'Das schmeckt mir sehr gut!', exEn: 'I really like the taste of this!' },
      { de: 'das Frühstück', en: 'breakfast', a: 'das',
        gram: 'Neuter. "zum Frühstück" = for breakfast (zu + dem = zum). No common plural.',
        ex: 'Was gibt es zum Frühstück?', exEn: 'What is there for breakfast?' },
      { de: 'vegetarisch', en: 'vegetarian', a: 'adj',
        gram: 'Adjective — needs ending before noun: ein vegetarisches Gericht (neut Nom -es)',
        ex: 'Haben Sie etwas Vegetarisches?', exEn: 'Do you have something vegetarian?' },
      { de: 'der Kellner', en: 'waiter', a: 'der',
        gram: 'Masculine. Fem: die Kellnerin. Plural: die Kellner. Agent noun -er = masculine!',
        ex: 'Entschuldigung, Herr Kellner!', exEn: 'Excuse me, waiter!' },
      { de: 'zahlen', en: 'to pay', a: 'v',
        gram: 'Regular. "zahlen" = to pay (general). "bezahlen" = to pay for sth specific (inseparable be-).',
        ex: 'Ich möchte zahlen, bitte.', exEn: 'I would like to pay, please.' },
    ]
  },
  {
    id: 'familie', label: 'Familie', emoji: '👨‍👩‍👧',
    gramSpotlight: { title: 'Possessivpronomen: mein/meine/meinen', rule: 'Possessives follow the same endings as ein/kein. Masculine Akk: meinen Vater. Feminine: meine Mutter (Nom+Akk same!).' },
    words: [
      { de: 'der Vater', en: 'father', a: 'der',
        gram: 'Masculine. Plural: die Väter (umlaut!). Akk: meinen Vater. Dat: meinem Vater.',
        ex: 'Mein Vater arbeitet in München.', exEn: 'My father works in Munich.' },
      { de: 'die Mutter', en: 'mother', a: 'die',
        gram: 'Feminine. Plural: die Mütter (umlaut!). Akk: meine Mutter (stays same as Nom!)',
        ex: 'Meine Mutter kocht sehr gut.', exEn: 'My mother cooks very well.' },
      { de: 'die Geschwister', en: 'siblings', a: 'pl',
        gram: 'PLURAL ONLY! Singular: der Bruder / die Schwester. "Ich habe keine Geschwister."',
        ex: 'Hast du Geschwister?', exEn: 'Do you have siblings?' },
      { de: 'verheiratet', en: 'married', a: 'adj',
        gram: 'Adjective after sein — no ending needed! "Ich bin verheiratet / ledig / geschieden."',
        ex: 'Meine Eltern sind seit 30 Jahren verheiratet.', exEn: 'My parents have been married for 30 years.' },
      { de: 'sich treffen', en: 'to meet up', a: 'v',
        gram: 'Reflexive: Wir treffen uns. Ich treffe mich mit Freunden. Perfekt: haben uns getroffen',
        ex: 'Wir treffen uns am Samstag.', exEn: 'We are meeting up on Saturday.' },
      { de: 'der Freund', en: 'friend / boyfriend', a: 'der',
        gram: 'Context matters! "ein Freund" = a (male) friend. "mein Freund" = my boyfriend.',
        ex: 'Das ist mein Freund Paul.', exEn: 'This is my friend Paul.' },
      { de: 'die Beziehung', en: 'relationship', a: 'die',
        gram: 'Feminine. ALL -ung nouns feminine! Plural: -en. "in einer Beziehung sein"',
        ex: 'Wir haben eine gute Beziehung.', exEn: 'We have a good relationship.' },
      { de: 'sich kümmern um', en: 'to take care of', a: 'v',
        gram: 'Reflexive + "um" + AKKUSATIV. Ich kümmere mich um + Akk.',
        ex: 'Sie kümmert sich um ihre Mutter.', exEn: 'She takes care of her mother.' },
      { de: 'der Verwandte', en: 'relative (family)', a: 'der',
        gram: 'Adjective-noun! Declines like adjective: ein Verwandter (m), eine Verwandte (f)',
        ex: 'Wir haben viele Verwandte in Deutschland.', exEn: 'We have many relatives in Germany.' },
      { de: 'die Hochzeit', en: 'wedding', a: 'die',
        gram: 'Feminine. Plural: -en. "auf einer Hochzeit" = at a wedding (an/auf + Dativ)',
        ex: 'Wir fahren zur Hochzeit nach Wien.', exEn: 'We are going to a wedding in Vienna.' },
    ]
  },
  {
    id: 'arbeit', label: 'Arbeit', emoji: '💼',
    gramSpotlight: { title: 'Konjunktiv II für höfliche Anfragen', rule: '"Könnten Sie...?" = "Could you...?" Konjunktiv II makes requests polite. Essential in professional contexts!' },
    words: [
      { de: 'der Termin', en: 'appointment', a: 'der',
        gram: 'Masculine. Plural: die Termine. "einen Termin haben/vereinbaren/absagen" — all + Akk',
        ex: 'Ich habe um 14 Uhr einen Termin.', exEn: 'I have an appointment at 2 pm.' },
      { de: 'die Besprechung', en: 'meeting (at work)', a: 'die',
        gram: 'Feminine (-ung → always feminine!). Plural: -en. More formal than "das Meeting".',
        ex: 'Die Besprechung dauert eine Stunde.', exEn: 'The meeting lasts one hour.' },
      { de: 'das Gehalt', en: 'salary', a: 'das',
        gram: 'Neuter. Plural: die Gehälter (umlaut!). "ein Gehalt verhandeln/erhalten"',
        ex: 'Das Gehalt ist leider nicht hoch genug.', exEn: 'The salary is unfortunately not high enough.' },
      { de: 'sich bewerben um', en: 'to apply for', a: 'v',
        gram: 'Reflexive + "um" + AKKUSATIV. Perfekt: habe mich beworben. Inseparable be- → no ge-',
        ex: 'Ich bewerbe mich um die Stelle.', exEn: 'I am applying for the position.' },
      { de: 'kündigen', en: 'to quit / resign', a: 'v',
        gram: 'Regular. Perfekt: habe gekündigt. "jemandem kündigen" = to fire someone (Dativ!)',
        ex: 'Er hat gestern gekündigt.', exEn: 'He resigned yesterday.' },
      { de: 'die Überstunden', en: 'overtime', a: 'pl',
        gram: 'PLURAL ONLY! "Überstunden machen" = to work overtime (no article needed)',
        ex: 'Ich mache heute Überstunden.', exEn: 'I am working overtime today.' },
      { de: 'verschieben', en: 'to postpone / reschedule', a: 'v',
        gram: 'Inseparable ver- prefix: NO ge- in Partizip II! habe verschoben (not gevershoben)',
        ex: 'Können wir das Meeting verschieben?', exEn: 'Can we reschedule the meeting?' },
      { de: 'der Lebenslauf', en: 'CV / résumé', a: 'der',
        gram: 'Masculine compound. Plural: die Lebensläufe. "einen Lebenslauf schreiben/schicken"',
        ex: 'Bitte schicken Sie Ihren Lebenslauf.', exEn: 'Please send your CV.' },
      { de: 'die Stelle', en: 'position / job', a: 'die',
        gram: 'Feminine. Plural: -n. "eine freie Stelle" = a vacancy. "sich um eine Stelle bewerben"',
        ex: 'Die Stelle ist noch frei.', exEn: 'The position is still available.' },
      { de: 'das Vorstellungsgespräch', en: 'job interview', a: 'das',
        gram: 'Neuter compound. Plural: -e. "ein Vorstellungsgespräch haben/führen"',
        ex: 'Ich habe morgen ein Vorstellungsgespräch.', exEn: 'I have a job interview tomorrow.' },
    ]
  },
  {
    id: 'wohnen', label: 'Wohnen', emoji: '🏠',
    gramSpotlight: { title: 'Wechselpräpositionen: in der vs in die', rule: 'Location (Wo?): in der Küche — DATIV. Motion (Wohin?): in die Küche — AKKUSATIV. The verb tells you which!' },
    words: [
      { de: 'die Wohnung', en: 'apartment / flat', a: 'die',
        gram: '-ung → always feminine! Plural: -en. "eine Wohnung mieten/kaufen/suchen" (Akk)',
        ex: 'Ich suche eine neue Wohnung.', exEn: 'I am looking for a new apartment.' },
      { de: 'die Miete', en: 'rent', a: 'die',
        gram: 'Feminine. No plural. "die Miete bezahlen". "warm/kalt" Miete = utilities included/excluded',
        ex: 'Die Miete ist hier sehr teuer.', exEn: 'The rent is very expensive here.' },
      { de: 'der Vermieter', en: 'landlord', a: 'der',
        gram: 'Masculine (-er nouns often masc). Fem: die Vermieterin. "vermieten" = to rent out',
        ex: 'Mein Vermieter ist sehr nett.', exEn: 'My landlord is very nice.' },
      { de: 'umziehen', en: 'to move house', a: 'v',
        gram: 'Separable: um|ziehen. Perfekt + SEIN: bin umgezogen (destination change = sein!)',
        ex: 'Wir ziehen nächsten Monat um.', exEn: 'We are moving next month.' },
      { de: 'das Wohnzimmer', en: 'living room', a: 'das',
        gram: 'Neuter compound. "im Wohnzimmer" (in + dem = im, Dativ = location)',
        ex: 'Der Fernseher steht im Wohnzimmer.', exEn: 'The TV is in the living room.' },
      { de: 'die Küche', en: 'kitchen', a: 'die',
        gram: 'Feminine. KEY EXAMPLE: "in der Küche" (Dat, location) vs "in die Küche gehen" (Akk, motion)',
        ex: 'Ich gehe in die Küche.', exEn: 'I am going into the kitchen.' },
      { de: 'putzen', en: 'to clean', a: 'v',
        gram: 'Regular. Perfekt: habe geputzt. "die Wohnung putzen" / "Zähne putzen" (both common)',
        ex: 'Ich putze samstags die ganze Wohnung.', exEn: 'I clean the whole apartment on Saturdays.' },
      { de: 'die Nebenkosten', en: 'utility costs', a: 'pl',
        gram: 'PLURAL ONLY! "inklusive Nebenkosten" = utilities included. Compound: neben + Kosten',
        ex: 'Sind die Nebenkosten inklusive?', exEn: 'Are utility costs included?' },
      { de: 'das Erdgeschoss', en: 'ground floor', a: 'das',
        gram: 'Neuter. "im Erdgeschoss" = on the ground floor (Dativ). 1. OG = 1st floor (Obergeschoss)',
        ex: 'Die Wohnung ist im Erdgeschoss.', exEn: 'The apartment is on the ground floor.' },
      { de: 'einziehen', en: 'to move in', a: 'v',
        gram: 'Separable: ein|ziehen. Perfekt + SEIN: bin eingezogen. Opposite: ausziehen (move out)',
        ex: 'Wann kannst du einziehen?', exEn: 'When can you move in?' },
    ]
  },
  {
    id: 'gesundheit', label: 'Gesundheit', emoji: '🏥',
    gramSpotlight: { title: 'Schmerzen ausdrücken', rule: '"Ich habe Kopfschmerzen." / "Mir ist schlecht." (Dativ!) / "Ich fühle mich nicht wohl." (reflexive). Three patterns for feeling ill.' },
    words: [
      { de: 'der Arzt', en: 'doctor (m)', a: 'der',
        gram: 'Masculine. Fem: die Ärztin. Plural: die Ärzte. "zum Arzt gehen" = go to the doctor (zu + Dativ)',
        ex: 'Ich muss zum Arzt gehen.', exEn: 'I need to go to the doctor.' },
      { de: 'die Apotheke', en: 'pharmacy', a: 'die',
        gram: 'Feminine. Plural: -n. "in der Apotheke" (Dativ, location). NOT a drugstore — prescription only!',
        ex: 'Das gibt es in jeder Apotheke.', exEn: 'You can get that at any pharmacy.' },
      { de: 'krank', en: 'sick / ill', a: 'adj',
        gram: 'Adjective after sein = no ending. "krank sein / werden / bleiben". "sich krank melden" = call in sick',
        ex: 'Ich bin heute leider krank.', exEn: 'I am unfortunately sick today.' },
      { de: 'das Rezept', en: 'prescription / recipe', a: 'das',
        gram: 'Neuter. DUAL MEANING: medical prescription AND cooking recipe! Context determines meaning.',
        ex: 'Haben Sie ein Rezept dafür?', exEn: 'Do you have a prescription for that?' },
      { de: 'sich erholen', en: 'to recover / rest', a: 'v',
        gram: 'Reflexive: Ich erhole mich. "sich von etwas erholen" = to recover from sth (von + Dativ)',
        ex: 'Ich muss mich erst erholen.', exEn: 'I need to recover first.' },
      { de: 'die Kopfschmerzen', en: 'headache', a: 'pl',
        gram: 'Plural only! Body + Schmerzen: Kopf|schmerzen, Bauch|-, Rücken|-, Hals|schmerzen',
        ex: 'Ich habe starke Kopfschmerzen.', exEn: 'I have a bad headache.' },
      { de: 'verschreiben', en: 'to prescribe', a: 'v',
        gram: 'Inseparable ver- prefix: NO ge- in Partizip II! habe verschrieben. verschreib + en',
        ex: 'Der Arzt hat mir Tabletten verschrieben.', exEn: 'The doctor prescribed me tablets.' },
      { de: 'die Krankenversicherung', en: 'health insurance', a: 'die',
        gram: '-ung → feminine! Always. Compound: krank + Versicherung. "gesetzlich/privat versichert"',
        ex: 'In Deutschland braucht man eine Krankenversicherung.', exEn: 'In Germany you need health insurance.' },
      { de: 'sich fühlen', en: 'to feel', a: 'v',
        gram: 'Reflexive: ich fühle mich. "Wie fühlst du dich?" = How do you feel? (NOT: Wie fühlst du?)',
        ex: 'Ich fühle mich heute nicht gut.', exEn: 'I do not feel well today.' },
      { de: 'das Krankenhaus', en: 'hospital', a: 'das',
        gram: 'Neuter compound. "ins Krankenhaus gehen" (Akk, motion) vs "im Krankenhaus sein" (Dat, location)',
        ex: 'Er liegt im Krankenhaus.', exEn: 'He is in the hospital.' },
    ]
  },
  {
    id: 'freizeit', label: 'Freizeit', emoji: '🎭',
    gramSpotlight: { title: 'gern / lieber / am liebsten', rule: '"Ich lese gern." = I like reading. "Ich lese lieber als..." = I prefer reading to... "Ich lese am liebsten." = I like reading most.' },
    words: [
      { de: 'ins Kino gehen', en: 'to go to the cinema', a: 'v',
        gram: '"ins" = in + das (AKKUSATIV, motion towards!). But: "im Kino sein" = in + dem (Dativ, location)',
        ex: 'Wir gehen heute ins Kino.', exEn: 'We are going to the cinema today.' },
      { de: 'Sport treiben', en: 'to do sports', a: 'v',
        gram: 'Fixed phrase. Also: "Sport machen". treiben is irregular (trieb, getrieben)',
        ex: 'Sie treibt dreimal pro Woche Sport.', exEn: 'She exercises three times a week.' },
      { de: 'lesen', en: 'to read', a: 'v',
        gram: 'Irregular stem change: er liest (e→ie). Perfekt + haben: habe gelesen',
        ex: 'Ich lese gerne Krimis.', exEn: 'I like reading crime novels.' },
      { de: 'reisen', en: 'to travel', a: 'v',
        gram: 'Regular but: Perfekt + SEIN (motion!): bin gereist. "verreisen" = to go on a trip',
        ex: 'Wir reisen im Sommer nach Spanien.', exEn: 'We travel to Spain in summer.' },
      { de: 'die Veranstaltung', en: 'event', a: 'die',
        gram: '-ung → always feminine! Plural: -en. "an einer Veranstaltung teilnehmen" (an + Dativ)',
        ex: 'Die Veranstaltung beginnt um 19 Uhr.', exEn: 'The event starts at 7 pm.' },
      { de: 'sich entspannen', en: 'to relax', a: 'v',
        gram: 'Reflexive: Ich entspanne mich. Perfekt + haben: habe mich entspannt.',
        ex: 'Am Wochenende entspanne ich mich.', exEn: 'I relax on the weekend.' },
      { de: 'das Konzert', en: 'concert', a: 'das',
        gram: 'Neuter. Plural: -e. "ins Konzert gehen" (Akkusativ, motion). "im Konzert sein" (Dativ)',
        ex: 'Das Konzert war fantastisch!', exEn: 'The concert was fantastic!' },
      { de: 'verbringen', en: 'to spend (time)', a: 'v',
        gram: 'Inseparable ver- prefix. Irregular: verbringt, verbrachte, verbracht. Takes Akkusativ (time)',
        ex: 'Wir verbringen den Abend zu Hause.', exEn: 'We spend the evening at home.' },
      { de: 'das Hobby', en: 'hobby', a: 'das',
        gram: 'Neuter. Plural: die Hobbys. "Was sind deine Hobbys?" is very common in German small talk!',
        ex: 'Mein Hobby ist Fotografieren.', exEn: 'My hobby is photography.' },
      { de: 'teilnehmen an', en: 'to participate in', a: 'v',
        gram: 'Separable: teil|nehmen. + an + DATIV. Perfekt: habe teilgenommen. "an einem Kurs teilnehmen"',
        ex: 'Ich nehme an einem Sprachkurs teil.', exEn: 'I am taking a language course.' },
    ]
  },
];

// ============================================================
// PHRASES
// ============================================================
export const PHRASES = [
  {
    cat: 'Im Restaurant & Café', emoji: '☕',
    items: [
      { de: 'Ich hätte gerne einen Kaffee, bitte.', en: 'I would like a coffee, please.',
        highlights: ['hätte gerne'],
        gramKey: 'Konjunktiv II',
        gramNote: '"hätte gerne" = Konjunktiv II of haben — the polite "would like". More formal than "ich möchte". Always use this in restaurants.' },
      { de: 'Die Rechnung, bitte.', en: 'The bill, please.',
        highlights: ['Die Rechnung'],
        gramKey: 'Artikel: die',
        gramNote: '"die Rechnung" — feminine noun. The -ung ending always signals feminine. Direct & normal to say in German restaurants.' },
      { de: 'Was empfehlen Sie?', en: 'What do you recommend?',
        highlights: ['empfehlen Sie'],
        gramKey: 'Formal Sie + V2 word order',
        gramNote: '"Sie empfehlen" (formal you). W-question: Verb stays in position 2. Stem change: empfehlen → er empfiehlt.' },
      { de: 'Kann ich mit Karte zahlen?', en: 'Can I pay by card?',
        highlights: ['Kann', 'zahlen'],
        gramKey: 'Modal verb: können',
        gramNote: 'Modal verb structure: können (position 2) + infinitive at END. "Kann ich... zahlen?" — modal first, infinitive last.' },
      { de: 'Das schmeckt mir sehr gut!', en: 'That tastes really good to me!',
        highlights: ['schmeckt mir'],
        gramKey: 'Dativ verb: schmecken',
        gramNote: '"schmecken" ALWAYS takes Dativ! Das schmeckt mir/dir/ihm/ihr/uns/euch/ihnen. Never Akkusativ!' },
    ]
  },
  {
    cat: 'Pläne machen', emoji: '📅',
    items: [
      { de: 'Hast du am Wochenende Zeit?', en: 'Do you have time on the weekend?',
        highlights: ['am Wochenende'],
        gramKey: 'am = an + dem (Dativ)',
        gramNote: '"am" = an + dem. Use with days & time periods: am Montag, am Abend, am Wochenende, am Morgen. Always Dativ!' },
      { de: 'Wollen wir uns um 3 Uhr treffen?', en: 'Do we want to meet at 3 o\'clock?',
        highlights: ['Wollen', 'uns', 'treffen'],
        gramKey: 'Modal + Reflexive',
        gramNote: '"uns treffen" = reflexive (meet each other). Modal: wollen (position 2) + infinitive at END. uns = Akkusativ reflexive pronoun.' },
      { de: 'Das passt mir gut.', en: 'That works well for me.',
        highlights: ['passt mir'],
        gramKey: 'Dativ verb: passen',
        gramNote: '"passen" ALWAYS takes Dativ! Das passt mir/dir/ihm/ihr/uns/euch/ihnen. Perfect for agreeing to plans.' },
      { de: 'Tut mir leid, ich kann leider nicht kommen.', en: 'I\'m sorry, I unfortunately can\'t come.',
        highlights: ['kann', 'kommen'],
        gramKey: 'Modal + negation',
        gramNote: '"kann nicht" = cannot. Infinitive "kommen" at the END. "leider" (unfortunately) adds politeness. "tut mir leid" = Dativ phrase.' },
      { de: 'Ich freue mich sehr darauf!', en: 'I\'m really looking forward to it!',
        highlights: ['freue mich', 'darauf'],
        gramKey: 'Reflexive + Da-compound',
        gramNote: '"sich freuen auf" + Akkusativ. "darauf" = da- + auf (replaces "auf das/es"). Da-compounds replace preposition + pronoun for things.' },
    ]
  },
  {
    cat: 'Einkaufen gehen', emoji: '🛍️',
    items: [
      { de: 'Haben Sie das in Größe M?', en: 'Do you have this in size M?',
        highlights: ['Haben Sie'],
        gramKey: 'Formal Sie',
        gramNote: '"Haben Sie...?" = Do you have...? Formal "Sie" in shops. Verb: haben → "Sie haben" (3rd person plural form, same as wir form).' },
      { de: 'Das ist leider zu teuer.', en: 'That is unfortunately too expensive.',
        highlights: ['zu teuer'],
        gramKey: 'zu + Adjektiv',
        gramNote: '"zu" + adjective = too + adjective. zu groß, zu klein, zu laut, zu teuer, zu weit — extremely useful pattern!' },
      { de: 'Ich suche ein Geschenk für meinen Vater.', en: 'I\'m looking for a gift for my father.',
        highlights: ['für meinen Vater'],
        gramKey: 'für + Akkusativ',
        gramNote: '"für" ALWAYS takes Akkusativ! Masculine: mein Vater (Nom) → meinen Vater (Akk). The -en ending is the Akkusativ marker for masc.' },
      { de: 'Wo finde ich die Kasse?', en: 'Where do I find the checkout?',
        highlights: ['Wo finde'],
        gramKey: 'W-question: V2 rule',
        gramNote: 'W-question word order: question word (Wo) FIRST, then VERB (finde) second — V2 rule! NOT: Wo ich finde...' },
      { de: 'Kann ich das umtauschen?', en: 'Can I exchange this?',
        highlights: ['Kann', 'umtauschen'],
        gramKey: 'Separable + Modal',
        gramNote: '"umtauschen" is separable: um|tauschen. But with modal verb, it stays as ONE word at the end: kann umtauschen (infinitive).' },
    ]
  },
  {
    cat: 'Bei der Arbeit', emoji: '💼',
    items: [
      { de: 'Ich bin krank und kann heute nicht kommen.', en: 'I\'m sick and can\'t come today.',
        highlights: ['kann', 'kommen'],
        gramKey: 'Modal verb: können',
        gramNote: '"und" joins two clauses — word order resets in the 2nd clause. Modal "kann" in position 2, infinitive "kommen" at the END.' },
      { de: 'Könnten wir das Meeting verschieben?', en: 'Could we postpone the meeting?',
        highlights: ['Könnten', 'verschieben'],
        gramKey: 'Konjunktiv II: Höflichkeit',
        gramNote: '"Könnten" = Konjunktiv II of können. More polite than "Können wir...?" Always use Konj. II for requests at work!' },
      { de: 'Ich schicke Ihnen die Datei gleich.', en: 'I\'ll send you the file right away.',
        highlights: ['Ihnen'],
        gramKey: 'Formal Dativ: Ihnen',
        gramNote: '"Ihnen" = formal Dativ "you". Dativ = indirect object (to whom?). schicken + Dativ (person) + Akkusativ (thing).' },
      { de: 'Ich brauche noch etwas mehr Zeit.', en: 'I still need a bit more time.',
        highlights: ['noch', 'etwas mehr'],
        gramKey: 'Adverbs: noch & etwas',
        gramNote: '"noch" = still/yet. "etwas" = a bit/some. Both are extremely common filler words in everyday German. Learn them!' },
    ]
  },
  {
    cat: 'Gefühle & Meinungen', emoji: '💭',
    items: [
      { de: 'Ich finde das sehr interessant.', en: 'I find that very interesting.',
        highlights: ['finde'],
        gramKey: 'finden = expressing opinion',
        gramNote: '"finden" = to find/think (for opinions). Ich finde das schön / gut / interessant / seltsam. Very natural way to give opinions.' },
      { de: 'Das macht mir Spaß.', en: 'That\'s fun / I enjoy that.',
        highlights: ['macht mir Spaß'],
        gramKey: 'Spaß machen + Dativ',
        gramNote: '"Spaß machen" = to be fun. Always takes Dativ: Das macht mir/dir/ihm Spaß. "Spaß haben" = to have fun (different!).' },
      { de: 'Meiner Meinung nach ist das falsch.', en: 'In my opinion, that is wrong.',
        highlights: ['Meiner Meinung nach'],
        gramKey: 'Dativ: nach + Meinung',
        gramNote: '"meiner Meinung nach" = in my opinion. "nach" takes Dativ → meiner (fem Dativ!). Set phrase — learn as one unit.' },
      { de: 'Wie geht es Ihnen?', en: 'How are you? (formal)',
        highlights: ['geht es Ihnen'],
        gramKey: 'gehen + Dativ',
        gramNote: '"Wie geht es dir/Ihnen?" The subject is "es" (it), the person is Dativ! Answer: "Es geht mir gut." Never: Ich gehe gut.' },
      { de: 'Das ist mir egal.', en: 'That doesn\'t matter to me. / I don\'t mind.',
        highlights: ['ist mir egal'],
        gramKey: 'Dativ: egal',
        gramNote: '"egal" + Dativ = doesn\'t matter to (someone). Das ist mir/dir/ihm egal. Also: "Das ist mir wichtig/recht/lieb."' },
    ]
  },
  {
    cat: 'Gesundheit', emoji: '🏥',
    items: [
      { de: 'Ich habe Kopfschmerzen.', en: 'I have a headache.',
        highlights: ['Kopfschmerzen'],
        gramKey: 'Körperteil + Schmerzen',
        gramNote: 'Body part + Schmerzen (plural!): Kopf|schmerzen, Bauch|-, Rücken|-, Hals|-, Zahnschmerzen. Always plural, no article!' },
      { de: 'Mir ist schlecht.', en: 'I feel nauseous / sick.',
        highlights: ['Mir ist'],
        gramKey: 'Unpersönlich + Dativ',
        gramNote: 'Impersonal expression — subject "es" is dropped. Person in DATIV: Mir/Dir/Ihm ist schlecht/kalt/warm/langweilig. Very common!' },
      { de: 'Seit wann haben Sie die Beschwerden?', en: 'How long have you had the symptoms?',
        highlights: ['Seit wann'],
        gramKey: 'seit + Dativ (ongoing)',
        gramNote: '"seit" = since/for (duration ongoing into present). Always takes DATIV: seit einem Tag, seit einer Woche, seit dem Montag.' },
      { de: 'Ich muss einen Arzttermin machen.', en: 'I need to make a doctor\'s appointment.',
        highlights: ['muss', 'machen'],
        gramKey: 'Modal + infinitive at end',
        gramNote: '"muss" = must (modal). "einen Termin machen" = Akkusativ (einen = masc Akk). Modal at position 2, infinitive at END.' },
    ]
  },
];

// ============================================================
// GRAMMAR SECTIONS
// ============================================================
export const GRAMMAR_SECTIONS = [
  {
    t: 'Perfekt — Spoken Past Tense',
    tag: 'Past Tense', b1: false,
    summary: 'haben/sein (pos. 2) + Partizip II (END)',
    body: `<p>The <strong>Perfekt</strong> is the main past tense in <em>spoken</em> German. Formula: conjugated <span class="hl">haben</span> or <span class="hl">sein</span> at position 2, <span class="hl">Partizip II</span> at the END.</p>
<table class="gtbl"><tr><th>Type</th><th>Formula</th><th>Example</th><th>Helper</th></tr>
<tr><td>Regular (weak)</td><td>ge + stem + <span class="hl">t</span></td><td>mach → ge<span class="hl">macht</span></td><td>haben</td></tr>
<tr><td>Irregular (strong)</td><td>ge + stem + <span class="hl">en</span></td><td>trink → ge<span class="hl">trunken</span></td><td>haben</td></tr>
<tr><td>Motion / state-change</td><td>ge + stem + en</td><td>geh → ge<span class="hl">gangen</span></td><td><span class="hl">sein</span></td></tr>
<tr><td>Inseparable prefix (be-, ver-, er-...)</td><td>NO ge-! stem + t/en</td><td>be<span class="hl">stellt</span>, ver<span class="hl">kauft</span></td><td>haben</td></tr>
<tr><td>Separable verb</td><td>prefix + ge + stem</td><td>auf + ge + standen = auf<span class="hl">ge</span>standen</td><td>sein</td></tr></table>
<div class="gex">Ich <span class="hl">habe</span> gestern Pizza ge<span class="hl">kocht</span>. <span class="tr">I cooked pizza yesterday.</span></div>
<div class="gex">Sie <span class="hl">ist</span> nach Hause ge<span class="hl">gangen</span>. <span class="tr">She went home. (gehen = motion → sein)</span></div>
<div class="gex">Er <span class="hl">hat</span> das Fenster auf<span class="hl">ge</span>macht. <span class="tr">He opened the window. (aufmachen = separable)</span></div>
<p style="margin-top:8px"><strong>Use sein with:</strong> gehen, kommen, fahren, fliegen, laufen, reisen, umziehen + state changes: aufwachen, einschlafen, aufstehen, werden, sterben</p>`
  },
  {
    t: 'Präteritum — Key Verbs',
    tag: 'Past Tense', b1: false,
    summary: 'war, hatte, konnte, musste — used even in conversation',
    body: `<p>The <strong>Präteritum</strong> is the written past tense, but these high-frequency verbs are used in Präteritum even in speech:</p>
<table class="gtbl"><tr><th>Verb</th><th>ich</th><th>du</th><th>er/sie</th><th>wir/sie</th></tr>
<tr><td>sein (be)</td><td><span class="hl">war</span></td><td>warst</td><td>war</td><td>waren</td></tr>
<tr><td>haben (have)</td><td><span class="hl">hatte</span></td><td>hattest</td><td>hatte</td><td>hatten</td></tr>
<tr><td>können (can)</td><td><span class="hl">konnte</span></td><td>konntest</td><td>konnte</td><td>konnten</td></tr>
<tr><td>müssen (must)</td><td><span class="hl">musste</span></td><td>musstest</td><td>musste</td><td>mussten</td></tr>
<tr><td>wollen (want)</td><td><span class="hl">wollte</span></td><td>wolltest</td><td>wollte</td><td>wollten</td></tr>
<tr><td>dürfen (may)</td><td><span class="hl">durfte</span></td><td>durftest</td><td>durfte</td><td>durften</td></tr></table>
<div class="gex">Gestern <span class="hl">war</span> ich krank. <span class="tr">Preferred over: "Ich bin krank gewesen."</span></div>
<div class="gex">Als Kind <span class="hl">wollte</span> ich Pilot werden. <span class="tr">As a child I wanted to be a pilot.</span></div>`
  },
  {
    t: 'Modalverben — Modal Verbs',
    tag: 'Key Grammar', b1: false,
    summary: 'Modal (pos. 2) + infinitive at END',
    body: `<p>Modal verbs modify meaning. The modal is conjugated; the main verb goes to the <span class="hl">end as an infinitive</span>.</p>
<table class="gtbl"><tr><th>Verb</th><th>Meaning</th><th>ich</th><th>du</th><th>er/sie</th></tr>
<tr><td>können</td><td>can / able to</td><td>kann</td><td>kannst</td><td>kann</td></tr>
<tr><td>müssen</td><td>must / have to</td><td>muss</td><td>musst</td><td>muss</td></tr>
<tr><td>wollen</td><td>want to</td><td>will</td><td>willst</td><td>will</td></tr>
<tr><td>dürfen</td><td>may / allowed</td><td>darf</td><td>darfst</td><td>darf</td></tr>
<tr><td>sollen</td><td>should / supposed</td><td>soll</td><td>sollst</td><td>soll</td></tr>
<tr><td>möchten</td><td>would like to</td><td>möchte</td><td>möchtest</td><td>möchte</td></tr></table>
<div class="gex">Ich <span class="hl">kann</span> nicht kommen — ich <span class="hl">muss</span> arbeiten. <span class="tr">Two modals in one sentence!</span></div>
<div class="gex">Er <span class="hl">darf</span> hier nicht <span class="hl">rauchen</span>. <span class="tr">He is not allowed to smoke here.</span></div>`
  },
  {
    t: 'Kasus — Nominativ, Akkusativ, Dativ',
    tag: 'Articles', b1: false,
    summary: 'Nom=subject | Akk=direct obj | Dat=indirect obj',
    body: `<table class="gtbl"><tr><th>Case</th><th>der (m)</th><th>die (f)</th><th>das (n)</th><th>die (pl)</th></tr>
<tr><td><span class="hl">Nominativ</span> (who/what does?)</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td><span class="hl">Akkusativ</span> (what/whom?)</td><td><span class="hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td><span class="hl">Dativ</span> (to/for whom?)</td><td><span class="hl">dem</span></td><td><span class="hl">der</span></td><td><span class="hl">dem</span></td><td><span class="hl">den</span>+n</td></tr></table>
<div class="gex"><span class="hl">Der</span> Mann kauft <span class="hl">den</span> Apfel (für <span class="hl">die</span> Frau). <span class="tr">Nom: der | Akk: den (masc!) | Akk: die (fem unchanged)</span></div>
<div class="gex">Ich helfe <span class="hl">dem</span> Mann / <span class="hl">der</span> Frau / <span class="hl">dem</span> Kind. <span class="tr">Dativ after "helfen".</span></div>
<p style="margin-top:8px"><strong>Akkusativ prepositions:</strong> durch, für, gegen, ohne, um</p>
<p><strong>Dativ prepositions:</strong> aus, bei, mit, nach, seit, von, zu, gegenüber</p>
<p><strong>Dativ verbs (always!):</strong> helfen, danken, gefallen, gehören, passen, schmecken, fehlen</p>`
  },
  {
    t: 'Trennbare Verben — Separable Verbs',
    tag: 'Word Order', b1: false,
    summary: 'Prefix splits off → goes to END',
    body: `<p>In main clauses the stress prefix splits off and jumps to the END.</p>
<table class="gtbl"><tr><th>Infinitive</th><th>Meaning</th><th>In a sentence</th></tr>
<tr><td>auf|stehen</td><td>to get up</td><td>Ich stehe um 7 <span class="hl">auf</span>.</td></tr>
<tr><td>an|rufen</td><td>to phone</td><td>Er ruft seine Mutter <span class="hl">an</span>.</td></tr>
<tr><td>ein|kaufen</td><td>to shop</td><td>Wir kaufen heute <span class="hl">ein</span>.</td></tr>
<tr><td>ab|fahren</td><td>to depart</td><td>Der Zug fährt um 10 <span class="hl">ab</span>.</td></tr>
<tr><td>um|steigen</td><td>to transfer</td><td>Hier müssen Sie <span class="hl">umsteigen</span>.</td></tr>
<tr><td>mit|kommen</td><td>to come along</td><td>Kommst du <span class="hl">mit</span>?</td></tr></table>
<div class="gex">Perfekt: aufge<span class="hl">standen</span> → Ich bin auf<span class="hl">ge</span>standen. <span class="tr">ge- goes BETWEEN prefix and stem!</span></div>
<div class="gex">With modal: Ich muss früh auf<span class="hl">stehen</span>. <span class="tr">With modal verbs, stays as one infinitive at end.</span></div>`
  },
  {
    t: 'Reflexive Verben — Reflexive Verbs',
    tag: 'Verbs', b1: false,
    summary: 'sich = action reflects back on subject',
    body: `<table class="gtbl"><tr><th>Person</th><th>Akkusativ</th><th>Dativ</th></tr>
<tr><td>ich</td><td><span class="hl">mich</span></td><td><span class="hl">mir</span></td></tr>
<tr><td>du</td><td><span class="hl">dich</span></td><td><span class="hl">dir</span></td></tr>
<tr><td>er/sie/es</td><td><span class="hl">sich</span></td><td><span class="hl">sich</span></td></tr>
<tr><td>wir</td><td><span class="hl">uns</span></td><td><span class="hl">uns</span></td></tr>
<tr><td>Sie/sie</td><td><span class="hl">sich</span></td><td><span class="hl">sich</span></td></tr></table>
<div class="gex">Ich <span class="hl">freue mich</span> auf den Urlaub. <span class="tr">sich freuen auf + Akkusativ</span></div>
<div class="gex">Ich <span class="hl">wasche mir</span> die Hände. <span class="tr">Dativ! There's another Akk object (die Hände)</span></div>
<p style="margin-top:8px"><strong>Key reflexive verbs:</strong> sich freuen (auf), sich ärgern (über), sich erinnern (an), sich vorstellen, sich fühlen, sich entscheiden, sich bewerben (um), sich kümmern (um), sich erholen (von)</p>`
  },
  {
    t: 'Nebensätze — Subordinate Clauses',
    tag: 'Word Order', b1: false,
    summary: 'weil/dass/wenn/obwohl → verb moves to END',
    body: `<p>Subordinating conjunctions push the conjugated verb to the <span class="hl">END of the clause</span>.</p>
<table class="gtbl"><tr><th>Conjunction</th><th>Meaning</th></tr>
<tr><td><span class="hl">weil</span></td><td>because</td></tr>
<tr><td><span class="hl">dass</span></td><td>that</td></tr>
<tr><td><span class="hl">wenn</span></td><td>when / if (conditional)</td></tr>
<tr><td><span class="hl">obwohl</span></td><td>although</td></tr>
<tr><td><span class="hl">damit</span></td><td>so that</td></tr>
<tr><td><span class="hl">bevor</span></td><td>before</td></tr></table>
<div class="gex">Ich komme nicht, <span class="hl">weil</span> ich krank <span class="hl">bin</span>. <span class="tr">"bin" goes to end! ✗ weil ich bin krank</span></div>
<div class="gex">Ich denke, <span class="hl">dass</span> er recht <span class="hl">hat</span>. <span class="tr">"hat" at end after "dass"</span></div>
<div class="gex"><span class="hl">Wenn</span> er kommt, <span class="hl">gehen</span> wir essen. <span class="tr">When the sub-clause is first, the main clause inverts (verb first)!</span></div>`
  },
  {
    t: 'Wechselpräpositionen — Two-Way Prepositions',
    tag: 'Prepositions', b1: false,
    summary: 'Wo? → Dativ | Wohin? → Akkusativ',
    body: `<p>9 prepositions use <span class="hl">Dativ for location (Wo?)</span> and <span class="hl">Akkusativ for direction (Wohin?)</span>.</p>
<p style="margin-top:4px;font-weight:600">an, auf, hinter, in, neben, über, unter, vor, zwischen</p>
<table class="gtbl"><tr><th>Question</th><th>Case</th><th>Example</th></tr>
<tr><td>Wo? (location)</td><td><span class="hl">Dativ</span></td><td>Das Buch liegt auf <span class="hl">dem</span> Tisch.</td></tr>
<tr><td>Wohin? (direction)</td><td><span class="hl">Akkusativ</span></td><td>Ich lege das Buch auf <span class="hl">den</span> Tisch.</td></tr></table>
<div class="gex">Ich bin <span class="hl">in der</span> Küche. <span class="tr">Dativ (wo?) — I am IN the kitchen.</span></div>
<div class="gex">Ich gehe <span class="hl">in die</span> Küche. <span class="tr">Akkusativ (wohin?) — I am going INTO the kitchen.</span></div>
<p style="margin-top:8px"><strong>Contractions:</strong> an + dem = <span class="hl">am</span> | in + dem = <span class="hl">im</span> | an + das = <span class="hl">ans</span> | in + das = <span class="hl">ins</span></p>`
  },
  {
    t: 'Adjektivendungen — Adjective Endings',
    tag: 'Articles', b1: false,
    summary: 'After der/die/das: -e (Nom sg) or -en (all others)',
    body: `<p>After <strong>definite articles</strong> (der/die/das/die):</p>
<table class="gtbl"><tr><th></th><th>mask.</th><th>fem.</th><th>neut.</th><th>pl.</th></tr>
<tr><td>Nom</td><td>alt<span class="hl">e</span></td><td>alt<span class="hl">e</span></td><td>alt<span class="hl">e</span></td><td>alt<span class="hl">en</span></td></tr>
<tr><td>Akk</td><td>alt<span class="hl">en</span></td><td>alt<span class="hl">e</span></td><td>alt<span class="hl">e</span></td><td>alt<span class="hl">en</span></td></tr>
<tr><td>Dat</td><td>alt<span class="hl">en</span></td><td>alt<span class="hl">en</span></td><td>alt<span class="hl">en</span></td><td>alt<span class="hl">en</span></td></tr></table>
<p style="margin-top:8px"><strong>Simple rule:</strong> It's <span class="hl">-e</span> in 4 places (Nom sg all genders + Akk fem + Akk neut), everything else is <span class="hl">-en</span>.</p>
<div class="gex">der alt<span class="hl">e</span> Mann / den alt<span class="hl">en</span> Mann / dem alt<span class="hl">en</span> Mann <span class="tr">Nom → Akk → Dat (masculine)</span></div>
<div class="gex">Ein gut<span class="hl">es</span> Restaurant / ein gut<span class="hl">es</span> Restaurant / einem gut<span class="hl">en</span> Restaurant <span class="tr">After indefinite article ein-: endings carry gender info</span></div>`
  },
  {
    t: 'Komparativ & Superlativ',
    tag: 'Adjectives', b1: false,
    summary: 'gut → besser → am besten | alt → älter → am ältesten',
    body: `<table class="gtbl"><tr><th>Adjective</th><th>Komparativ</th><th>Superlativ</th></tr>
<tr><td>schnell</td><td>schnell<span class="hl">er</span></td><td>am schnell<span class="hl">sten</span></td></tr>
<tr><td>alt</td><td><span class="hl">älter</span> (umlaut!)</td><td>am <span class="hl">ältesten</span></td></tr>
<tr><td>groß</td><td><span class="hl">größer</span></td><td>am <span class="hl">größten</span></td></tr>
<tr><td>gut (good)</td><td><span class="hl">besser</span></td><td>am <span class="hl">besten</span></td></tr>
<tr><td>viel (much)</td><td><span class="hl">mehr</span></td><td>am <span class="hl">meisten</span></td></tr>
<tr><td>gern (gladly)</td><td><span class="hl">lieber</span></td><td>am <span class="hl">liebsten</span></td></tr></table>
<div class="gex">Ich esse <span class="hl">lieber</span> Pizza <span class="hl">als</span> Pasta. <span class="tr">"lieber als" = prefer X to Y</span></div>
<div class="gex">Das ist das <span class="hl">beste</span> Restaurant in der Stadt. <span class="tr">Superlative as adjective before noun → needs ending: beste</span></div>`
  },
  {
    t: 'Konjunktiv II — Polite & Hypothetical',
    tag: 'B1 Preview', b1: true,
    summary: 'würde + inf | hätte | wäre | könnte | müsste',
    body: `<p>Konjunktiv II = polite requests, wishes, hypotheticals. <strong>Essential for B1 exam!</strong></p>
<table class="gtbl"><tr><th>Verb</th><th>Konjunktiv II</th><th>Example</th></tr>
<tr><td>sein</td><td><span class="hl">wäre</span></td><td>Das wäre toll. (That would be great.)</td></tr>
<tr><td>haben</td><td><span class="hl">hätte</span></td><td>Ich hätte gerne... (I would like...)</td></tr>
<tr><td>können</td><td><span class="hl">könnte</span></td><td>Könnten Sie...? (Could you...?)</td></tr>
<tr><td>müssen</td><td><span class="hl">müsste</span></td><td>Das müsste reichen. (Should be enough.)</td></tr>
<tr><td>dürfen</td><td><span class="hl">dürfte</span></td><td>Das dürfte schwer sein. (Might be hard.)</td></tr>
<tr><td>all others</td><td><span class="hl">würde</span> + inf</td><td>Ich würde gern kommen.</td></tr></table>
<div class="gex">Ich <span class="hl">würde</span> gern nach Deutschland <span class="hl">reisen</span>. <span class="tr">würde + infinitive at end.</span></div>
<div class="gex"><span class="hl">Hätten</span> Sie einen Moment Zeit? <span class="tr">Very polite: "Would you have a moment?"</span></div>`
  },
  {
    t: 'Relativsätze — Relative Clauses',
    tag: 'B1 Preview', b1: true,
    summary: 'der/die/das + verb at END — describing a noun',
    body: `<p>Relative clauses describe a noun. The relative pronoun's <em>gender</em> matches the noun, but its <em>case</em> depends on its role in the clause.</p>
<table class="gtbl"><tr><th></th><th>mask.</th><th>fem.</th><th>neut.</th><th>pl.</th></tr>
<tr><td>Nom</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Akk</td><td><span class="hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="hl">dem</span></td><td><span class="hl">der</span></td><td><span class="hl">dem</span></td><td><span class="hl">denen</span></td></tr></table>
<div class="gex">Der Mann, <span class="hl">der</span> dort sitzt, ist mein Chef. <span class="tr">der Mann → "der" (masc Nom, subject of relative clause)</span></div>
<div class="gex">Die Frau, <span class="hl">die</span> ich kenne, kommt morgen. <span class="tr">die Frau → "die" (fem Akk, object of kenne)</span></div>
<div class="gex">Das Buch, <span class="hl">das</span> er mir empfohlen hat, ist toll. <span class="tr">das Buch → "das" (neut Akk, object of empfohlen)</span></div>`
  },
];

// ============================================================
// DRILL DATA
// ============================================================

export const ARTIKEL_WORDS = [
  { de: 'Wohnung', a: 'die', tip: 'ALL nouns ending in -ung are ALWAYS feminine!' },
  { de: 'Zug', a: 'der', tip: 'der Zug — most nouns in -ug are masculine.' },
  { de: 'Frühstück', a: 'das', tip: 'das Frühstück — neuter. Compound: Früh + Stück.' },
  { de: 'Bahnhof', a: 'der', tip: 'Compound: die Bahn + der Hof → masculine (last element wins).' },
  { de: 'Fahrkarte', a: 'die', tip: 'Nouns ending in -e are often feminine.' },
  { de: 'Gehalt', a: 'das', tip: 'das Gehalt — neuter. Just memorize!' },
  { de: 'Miete', a: 'die', tip: 'die Miete — feminine. Ends in -e → likely feminine.' },
  { de: 'Termin', a: 'der', tip: 'der Termin — masculine.' },
  { de: 'Krankenversicherung', a: 'die', tip: '-ung → ALWAYS feminine! die Krankenversicherung.' },
  { de: 'Besprechung', a: 'die', tip: '-ung → ALWAYS feminine! die Besprechung.' },
  { de: 'Konzert', a: 'das', tip: 'das Konzert — neuter. Many -ert ending words are neuter.' },
  { de: 'Hobby', a: 'das', tip: 'das Hobby — neuter. Most foreign loanwords (not persons) are neuter.' },
  { de: 'Rezept', a: 'das', tip: 'das Rezept — neuter. Prescription AND recipe!' },
  { de: 'Arzt', a: 'der', tip: 'der Arzt — masculine profession. Fem: die Ärztin.' },
  { de: 'Apotheke', a: 'die', tip: 'die Apotheke — ends in -e → likely feminine.' },
  { de: 'Stau', a: 'der', tip: 'der Stau — masculine. Traffic jam. Just memorize.' },
  { de: 'Vermieter', a: 'der', tip: '-er agent nouns are ALWAYS masculine. der Vermieter, der Lehrer, der Kellner.' },
  { de: 'Gewohnheit', a: 'die', tip: '-heit → ALWAYS feminine! die Gewohnheit, die Freiheit, die Gesundheit.' },
  { de: 'Veranstaltung', a: 'die', tip: '-ung → ALWAYS feminine!' },
  { de: 'Fahrplan', a: 'der', tip: 'Compound: die Fahrt + der Plan → masculine (last element wins!).' },
  { de: 'Vorstellungsgespräch', a: 'das', tip: 'das Gespräch — neuter. Compound inherits last element gender.' },
  { de: 'Lebenslauf', a: 'der', tip: 'Compound: das Leben + der Lauf → der Lauf is masculine → der Lebenslauf.' },
  { de: 'Beziehung', a: 'die', tip: '-ung → ALWAYS feminine! die Beziehung.' },
  { de: 'Hochzeit', a: 'die', tip: 'die Hochzeit — feminine. -zeit compounds tend to be feminine.' },
];

export const KASUS_DRILLS = [
  { sent: 'Ich sehe ___ Mann.', blank: 'den', opts: ['der', 'den', 'dem', 'die'], rule: 'Akkusativ masculine: der → DEN. "sehen" takes Akkusativ (direct object). Only masculine changes in Akkusativ!', caseName: 'Akk (masc)' },
  { sent: 'Das Buch gehört ___ Frau.', blank: 'der', opts: ['die', 'der', 'den', 'dem'], rule: 'Dativ feminine: die → DER. "gehören" ALWAYS takes Dativ — one of the key Dativ verbs!', caseName: 'Dat (fem)' },
  { sent: 'Ich helfe ___ Kind.', blank: 'dem', opts: ['das', 'den', 'dem', 'die'], rule: 'Dativ neuter: das → DEM. "helfen" ALWAYS takes Dativ! Other Dativ verbs: danken, gefallen, passen, schmecken.', caseName: 'Dat (neut)' },
  { sent: 'Er kauft ___ Buch.', blank: 'das', opts: ['das', 'dem', 'des', 'den'], rule: 'Akkusativ neuter: das stays DAS. Only masculine article changes in Akkusativ!', caseName: 'Akk (neut)' },
  { sent: 'Sie fährt mit ___ Zug.', blank: 'dem', opts: ['den', 'die', 'dem', 'der'], rule: '"mit" ALWAYS takes Dativ! Dativ masculine: der → DEM. mit dem Zug, mit der U-Bahn, mit dem Auto.', caseName: 'Dat: mit' },
  { sent: 'Das ist ein Geschenk für ___ Mutter.', blank: 'die', opts: ['der', 'den', 'die', 'dem'], rule: '"für" ALWAYS takes Akkusativ! Feminine: die stays DIE. Only masculine changes to den!', caseName: 'Akk: für' },
  { sent: 'Ich wohne bei ___ Eltern.', blank: 'den', opts: ['die', 'den', 'dem', 'der'], rule: '"bei" ALWAYS takes Dativ! Plural Dativ: die → DEN. Plus: plural nouns in Dativ add -n at the end! (Eltern → Eltern-n)', caseName: 'Dat: bei (pl)' },
  { sent: 'Das Buch liegt auf ___ Tisch.', blank: 'dem', opts: ['den', 'dem', 'das', 'die'], rule: 'Wechselpräposition "auf" + Location (Wo?) → DATIV! auf dem Tisch. If motion (Wohin?): auf den Tisch.', caseName: 'Dat: auf (Wo?)' },
  { sent: 'Ich lege das Buch auf ___ Tisch.', blank: 'den', opts: ['dem', 'des', 'den', 'die'], rule: 'Wechselpräposition "auf" + Motion (Wohin?) → AKKUSATIV! auf den Tisch. If location (Wo?): auf dem Tisch.', caseName: 'Akk: auf (Wohin?)' },
  { sent: 'Er geht in ___ Küche.', blank: 'die', opts: ['der', 'die', 'das', 'dem'], rule: '"in" + Motion (Wohin?) → AKKUSATIV! in die Küche gehen. Location would be: in der Küche (Dativ).', caseName: 'Akk: in (Wohin?)' },
  { sent: 'Sie wartet auf ___ Bus.', blank: 'den', opts: ['dem', 'den', 'die', 'der'], rule: '"auf" + waiting for something → Akkusativ. "auf jemanden/etwas warten" = to wait for sb/sth → Akkusativ.', caseName: 'Akk: auf warten' },
  { sent: 'Ich danke ___ Chef.', blank: 'dem', opts: ['der', 'die', 'dem', 'den'], rule: '"danken" ALWAYS takes Dativ! Dativ masculine: der → DEM. Ich danke dem Chef/meinem Vater/der Frau.', caseName: 'Dat: danken' },
];

export const LUECKEN = [
  { sent: 'Das ___ mir gut.', blank: 'passt', opts: ['passt', 'macht', 'geht', 'findet'], rule: '"passen" + Dativ: Das passt mir/dir/ihm. One of the most useful Dativ verbs!' },
  { sent: 'Gestern ___ ich krank.', blank: 'war', opts: ['war', 'bin', 'wurde', 'habe'], rule: '"war" = Präteritum of sein. Use war/hatte in speech — NOT "bin gewesen / habe gehabt"!' },
  { sent: 'Sie ___ nach Berlin gefahren.', blank: 'ist', opts: ['hat', 'ist', 'war', 'haben'], rule: 'fahren = motion verb → Perfekt with SEIN! ist gefahren. ✗ hat gefahren.' },
  { sent: 'Ich ___ mich auf den Urlaub.', blank: 'freue', opts: ['freue', 'gefalle', 'mache', 'habe'], rule: '"sich freuen auf" + Akkusativ. Reflexive: ich freue mich, du freust dich, er/sie freut sich...' },
  { sent: 'Weil er krank ___, kann er nicht kommen.', blank: 'ist', opts: ['ist', 'hat', 'war', 'sein'], rule: 'After "weil" → verb goes to END. "ist" at the end of the weil-clause.' },
  { sent: 'Ich hätte ___ einen Kaffee, bitte.', blank: 'gerne', opts: ['gerne', 'gut', 'sehr', 'lieber'], rule: '"Ich hätte gerne..." = I would like... Konjunktiv II of haben + gerne. Classic polite order!' },
  { sent: 'Kannst du mich um 8 ___?', blank: 'anrufen', opts: ['anrufen', 'rufen an', 'anruf', 'aufrufen'], rule: 'an|rufen = separable verb. With modal "kannst" → infinitive stays as ONE word at end: anrufen.' },
  { sent: 'Seit ___ lernst du Deutsch?', blank: 'wann', opts: ['wann', 'wie', 'wo', 'was'], rule: '"Seit wann?" = Since when? / How long? "Seit" is the key preposition for ongoing duration.' },
  { sent: 'Das Konzert ___ um 20 Uhr.', blank: 'beginnt', opts: ['beginnt', 'anfängt', 'startet', 'öffnet'], rule: '"beginnen" = to begin. NOT "anfangen" which is separable: fängt an. "Das Konzert beginnt" is the standard phrasing.' },
  { sent: 'Ich ___ mich sehr über dein Geschenk.', blank: 'freue', opts: ['freue', 'ärgere', 'erinnere', 'entscheide'], rule: '"sich freuen über" + Akkusativ = to be happy about sth (present). "sich freuen auf" = to look forward to (future).' },
];

// ============================================================
// QUIZ QUESTIONS
// ============================================================
export const QUIZ_QS = [
  { q: 'What does "Ich hätte gerne" mean?', opts: ['I have to','I would like','I should','I want to'], c: 1,
    ex: '"hätte" = Konjunktiv II of haben. "gerne" softens further. Konjunktiv II = polite form. Key for restaurants & B1!' },
  { q: 'Which verb uses "SEIN" in the Perfekt?', opts: ['trinken','machen','gehen','kaufen'], c: 2,
    ex: '"gehen" is a motion verb → uses SEIN: "Ich bin gegangen." Motion verbs and state-change verbs use sein.' },
  { q: 'Separable verb "aufstehen" — correct sentence?', opts: ['Ich aufstehe um 7.','Aufstehe ich um 7.','Ich stehe um 7 auf.','Ich stehe auf um 7.'], c: 2,
    ex: 'Separable verbs split: "stehe" (verb, position 2) + "auf" (prefix, goes to END). The prefix always lands at the end!' },
  { q: 'Akkusativ of "der Mann" is...', opts: ['der Mann','dem Mann','den Mann','die Mann'], c: 2,
    ex: 'Masculine Akkusativ: der → DEN. ONLY masculine changes in Akkusativ! Feminine & neuter stay the same.' },
  { q: '"Das passt mir gut" — "mir" is which case?', opts: ['Nominativ','Akkusativ','Dativ','Genitiv'], c: 2,
    ex: 'Dativ! "passen" is a Dativ verb. Das passt MIR (ich→mir), DIR (du→dir), IHM (er→ihm).' },
  { q: 'Which preposition ALWAYS takes Dativ?', opts: ['für','durch','mit','ohne'], c: 2,
    ex: '"mit" always takes Dativ. Dativ preps: aus, bei, MIT, nach, seit, von, zu. Akkusativ preps: durch, FÜR, gegen, ohne, um.' },
  { q: 'After "weil", where does the verb go?', opts: ['Position 1','Position 2','Position 3','End of clause'], c: 3,
    ex: 'Subordinating conjunctions push the verb to the END: "weil ich krank BIN." ✗ weil ich bin krank.' },
  { q: '"Könnten Sie mir helfen?" is...', opts: ['Rude demand','Casual request','Polite request (Konj.II)','Past tense question'], c: 2,
    ex: '"Könnten" = Konjunktiv II of können. More polite than "Können Sie...?" Essential for professional contexts and B1!' },
  { q: 'ALL nouns ending in "-ung" are...', opts: ['masculine (der)','feminine (die)','neuter (das)','It varies'], c: 1,
    ex: 'ALL -ung nouns are feminine WITHOUT exception! die Wohnung, die Übung, die Lösung, die Meinung, die Besprechung.' },
  { q: '"Ich gehe in die Küche" — why Akkusativ?', opts: ['Feminine always Akkusativ','Motion towards (Wohin?)','After "in" always Akkusativ','Küche = direct object'], c: 1,
    ex: 'Two-way preposition "in": Wohin? (motion) → Akkusativ. Wo? (location) → Dativ: "Ich bin in der Küche."' },
  { q: 'Perfekt of "aufstehen"?', opts: ['habe aufgestanden','bin aufgestanden','bin aufgestehen','habe gestanden'], c: 1,
    ex: 'aufstehen = motion/state-change → SEIN. Separable Partizip II: prefix + ge + stem → aufgestanden.' },
  { q: '"seit" expresses...', opts: ['completed past action','duration from past to now','future plan','hypothetical'], c: 1,
    ex: '"seit" = since/for (ongoing into present). Always Dativ: seit einem Jahr, seit der Prüfung, seit dem Sommer.' },
  { q: '"er schläft" — what is special about it?', opts: ['wrong word order','a→ä stem change','wrong auxiliary','wrong ending'], c: 1,
    ex: 'Irregular stem change: schlafen → er SCHLÄFT (a→ä). Many strong verbs: schlafen, fahren, tragen, laufen, fangen...' },
  { q: '"In my opinion" in German is...', opts: ['Ich meine dass','In mein Meinung','Meiner Meinung nach','Nach meinem Meinung'], c: 2,
    ex: '"Meiner Meinung nach" — "nach" takes Dativ → MEINER (feminine Dativ of meine Meinung). Set phrase — learn as one block!' },
  { q: 'Which verb always takes DATIV?', opts: ['sehen','kaufen','helfen','suchen'], c: 2,
    ex: '"helfen" always takes Dativ: Ich helfe DEM Mann. Other Dativ verbs: danken, gefallen, gehören, passen, schmecken, fehlen.' },
  { q: '"I would like to come" in Konjunktiv II?', opts: ['Ich will kommen','Ich wollte kommen','Ich würde gern kommen','Ich möchte kommen'], c: 2,
    ex: '"würde" + infinitive = would + verb. For all regular verbs use "würde + inf". Ich würde GERN kommen.' },
  { q: '"Das macht mir Spaß" — "mir" is...', opts: ['Nominativ','Akkusativ','Dativ','Genitiv'], c: 2,
    ex: 'Dativ! "Spaß machen" takes Dativ for the person. Das macht MIR / DIR / IHM Spaß. I enjoy that.' },
  { q: 'Comparative of "gut" (good)?', opts: ['guter','güter','besser','mehr gut'], c: 2,
    ex: 'Completely irregular! gut → BESSER → am BESTEN. Also irregular: viel→mehr, gern→lieber. These must be memorized!' },
  { q: '"sich bewerben um" means...', opts: ['to apply for','to complain about','to worry about','to remember'], c: 0,
    ex: '"sich bewerben um" = to apply for (a job/position). Reflexive verb + um + Akkusativ. Ich bewerbe mich UM die Stelle.' },
  { q: 'Correct word order after "weil"?', opts: ['Ich komme nicht, weil ich krank komme nicht.','Ich komme nicht, weil bin ich krank.','Ich komme nicht, weil ich krank bin.','Weil ich komme nicht krank bin.'], c: 2,
    ex: 'weil + subject + (other elements) + VERB AT END: "weil ich krank BIN." Subject stays before verb.' },
  { q: 'How do you say "I feel sick/nauseous"?', opts: ['Ich bin schlecht.','Mir ist schlecht.','Ich habe schlecht.','Mir macht schlecht.'], c: 1,
    ex: '"Mir ist schlecht." — impersonal expression. Person in DATIV (mir/dir/ihm). Subject "es" is dropped in speech.' },
  { q: '"Ich freue mich darauf" — what is "darauf"?', opts: ['Dativ pronoun','Da-compound (da+auf)','Separable prefix','Adverb of place'], c: 1,
    ex: '"darauf" = da + auf. Da-compounds replace preposition + neuter/masculine thing: freuen auf etwas → freuen sich DARAUF.' },
];
