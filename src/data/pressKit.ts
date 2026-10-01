// Single source for the press page (/presse) and the press kit PDFs and ZIP,
// which tools/presskit/build.sh generates into public/presse. Rerun it after
// changing anything here. Texts are adapted from raw/pr; as on the website,
// they no longer place the ensemble in Detmold.

// Explicit extension: tools/presskit/export.mjs loads this file with plain Node.
import { documentary } from "./films.ts";

export type PressLocale = "de" | "en";

// `row` groups the press page gallery: the full-ensemble shots first and large,
// then the hall, live and directors photos. Within a row, order is left to right.
export const pressPhotos = [
    { file: "vode-ensemble-hoch_foto-dominik-moos", credit: "Dominik Moos", width: 3440, height: 4000, row: 1 },
    { file: "vode-ensemble-quer_foto-dominik-moos", credit: "Dominik Moos", width: 4000, height: 3200, row: 1 },
    { file: "vode-ensemble-wiese_foto-dominik-moos", credit: "Dominik Moos", width: 2667, height: 4000, row: 1 },
    { file: "vode-ensemble-halle_foto-dominik-moos", credit: "Dominik Moos", width: 2303, height: 1535, row: 2 },
    { file: "vode-live_foto-fabian-wohlgemuth", credit: "Fabian Wohlgemuth", width: 4000, height: 2667, row: 2 },
    { file: "vode-leitung-gaertner-herten_foto-dominik-moos", credit: "Dominik Moos", width: 4000, height: 2667, row: 2 },
] as const;

export const pressLogos = [
    { file: "vode-logo-hell", tone: "light" },
    { file: "vode-logo-dunkel", tone: "dark" },
] as const;

export const pressVideos = [
    { id: "UWVHe51-kG8", title: "Bli-Blip | vode & New York Voices" },
    { id: "GxzoyGThUiQ", title: "vode – Back in the High Life Again" },
    { id: documentary.youtubeId, title: "Chor macht Schule – der Film (vode academy)", releaseAt: documentary.releaseAt },
];

export const pressContact = {
    name: "Maria Anna Waloschek",
    email: "mail@vode-ensemble.de",
    website: "www.vode-ensemble.de",
    instagram: "@vode.ensemble",
};

export const pressDownloads = {
    zip: "/presse/vode-pressekit.zip",
    pdf: { de: "/presse/vode-pressekit-de.pdf", en: "/presse/vode-presskit-en.pdf" },
};

const de = {
    title: "Pressekit",
    tagline: "berührend. kraftvoll. direkt.",
    numbers: [
        ["20", "rund 20 Sänger:innen, im vollen Ensemble und in kleinen Formationen"],
        ["2021", "gegründet als vode e.V. in Bielefeld"],
        ["2026", "gemeinsam mit den New York Voices im Kuppelsaal Hannover"],
    ],
    intro: "Texte, Fotos und Logos für eure Berichterstattung und Veranstaltungsankündigungen. Alles einzeln oder gesammelt als Paket.",
    downloadZip: "Komplettes Pressekit (ZIP)",
    downloadPdf: "Pressekit als PDF",
    otherPdf: "English version (PDF)",
    facts: [
        ["Besetzung", "rund 20 Sänger:innen, dazu kleinere Formationen und Soli"],
        ["Genre", "Vokalmusik zwischen Jazz, Pop und Zeitgenössischem"],
        ["Leitung", "Katharina Gärtner und Simon Herten"],
        ["Gegründet", "2021 als vode e.V., Sitz in Bielefeld"],
    ],
    texts: {
        title: "Ensembletexte",
        intro: "In drei Längen, zur freien Verwendung.",
        series: "Unser Ensembletext in drei Längen – zur freien Verwendung.",
        short: "Kurztext",
        standard: "Standardtext",
        long: "Langtext",
        chars: "Zeichen",
        copy: "Text kopieren",
        copied: "Kopiert",
    },
    short: [
        "vode ist ein Vokalensemble aus Deutschland. Die rund 20 Sänger:innen sind seit vielen Jahren musikalisch und freundschaftlich eng miteinander verbunden. In ihren Konzerten verknüpfen sie ihre individuellen Stimmen zu einem vielschichtigen Chorklang, lassen aber auch Raum für kleinere Besetzungen. Zwischen Pop, Jazz und zeitgenössischer Vokalmusik entwickelt vode neue Klangräume und außergewöhnliche musikalische Erfahrungen.",
    ],
    standard: [
        "vode steht für musikalische Leidenschaft, besondere Kollaborationen und immersive Konzerterlebnisse. Seit 2021 teilen die rund 20 Musiker:innen ihre Begeisterung für das gemeinsame Singen. Ob im vollen Ensemble oder in kleineren Besetzungen: Die Sänger:innen verbinden ihre individuellen Stimmen zu einem vielschichtigen und unverwechselbaren Ensembleklang. Zwischen Jazz, Pop und zeitgenössischer Vokalmusik entstehen Programme, die musikalische Brücken bauen und den Raum selbst zum Teil der künstlerischen Erfahrung machen.",
        "vode ist auf großen Konzertbühnen ebenso zu Hause wie in außergewöhnlichen Konzertformaten. Auftritte führten das Ensemble unter anderem in die Elbphilharmonie Hamburg, die Rudolf-Oetker-Halle in Bielefeld und den Kuppelsaal Hannover, wo vode gemeinsam mit den New York Voices auftrat. Festivalstationen führten das Ensemble nach Berlin, Freiburg und Köln.",
        "Mit Formaten wie dem „Concert in the Dark“ sucht vode nach neuen Formen des Konzerterlebens und macht Klang, Raum und Wahrnehmung zum Teil der musikalischen Erfahrung. vode sucht nach solchen Momenten, in denen die menschliche Stimme mehr wird als Musik – und aus Klang, Raum und Gemeinschaft etwas entsteht, das nur im Augenblick existiert.",
    ],
    long: [
        "vode steht für musikalische Leidenschaft, besondere Kollaborationen und immersive Konzerterlebnisse. Ob im vollen Ensemble oder in kleineren Besetzungen: Jeder Auftritt zeigt die Vielfalt des ganz eigenen vode-Klanges und lässt das Publikum den Gesang hautnah erleben – berührend, kraftvoll, direkt. Zwischen Jazz, Pop und zeitgenössischer Vokalmusik entstehen Programme, die musikalische Brücken bauen und den Raum selbst zum Teil der künstlerischen Erfahrung machen.",
        "vode ist auf großen Konzertbühnen ebenso zu Hause wie in außergewöhnlichen Konzertformaten. Auftritte führten das Ensemble unter anderem in die Elbphilharmonie Hamburg, die Rudolf-Oetker-Halle in Bielefeld und den Kuppelsaal Hannover, wo vode 2026 gemeinsam mit den New York Voices auftrat. Festivalstationen führten das Ensemble nach Berlin, Freiburg und Köln.",
        "Als Vokalensemble hat sich vode 2021 gegründet; seitdem sind die Mitglieder musikalisch und freundschaftlich eng miteinander verbunden. vode ist ein Kollektiv von rund 20 Musiker:innen, die ihre unterschiedlichen kreativen Ideen und Potenziale in das Ensemble einbringen. Zusammengewoben zu einem musikalischen Gesamtbild werden diese Ideen von Katharina Gärtner und Simon Herten.",
        "Mit Formaten wie dem „Concert in the Dark“ geht es vode nicht allein um Klang, sondern um musikalische Erfahrungen. Wenn das Sehen in den Hintergrund tritt, wird Hören zur zentralen Erfahrung: Stimmen, Klang, Raum und Wahrnehmung verbinden sich zu einem intensiven, unmittelbaren Erlebnis. vode sucht nach solchen Momenten, in denen die menschliche Stimme mehr wird als Musik – und aus Klang, Raum und Gemeinschaft etwas entsteht, das nur im Augenblick existiert.",
    ],
    highlightsTitle: "Stationen",
    highlights: [
        ["2021", "Gründung des vode e.V. in Bielefeld"],
        ["2022", "Gründungskonzert am 20. August"],
        ["2023", "Nacht der Chöre in der Rudolf-Oetker-Halle, Bielefeld"],
        ["2023", "Chorevent in der Elbphilharmonie, Hamburg"],
        ["2024", "Festival TotalChoral, Berlin"],
        ["2024", "Festival Black Forest Voices, Freiburg"],
        ["2025", "vode academy: „Chor macht Schule“ in Herzfeld"],
        ["2026", "Festival voc.cologne, Köln"],
        ["2026", "Gemeinsamer Auftritt mit den New York Voices im Kuppelsaal Hannover"],
    ],
    leadershipTitle: "Leitung",
    leadership: [
        { name: "Simon Herten", role: "Sänger, Vocalcoach, Chorleiter", text: "Simon Herten studierte Gesang/Gesangspädagogik an der HfM Detmold u. a. bei Markus Köhler, Lars Woldt und Ulrike Wahren und erhielt Unterricht in Chorleitung bei Anne Kohler. Als Sänger ist er solo und in verschiedenen Ensembles und Bands in den Bereichen Rock, Pop und Klassik als Solist und Chorist deutschlandweit aktiv. Seine weiteren Tätigkeiten erstrecken sich vom Einzelunterricht im Fach Gesang über die musikalische Arbeit an Schulen und Universitäten bis zur Leitung verschiedener Pop- und Jazz-Chöre." },
        { name: "Katharina Gärtner", role: "Dirigentin, Pianistin, Musikpädagogin", text: "Katharina Gärtner verantwortet die künstlerische Säule im Musikpädagogikstudium an der Universität Vechta, lehrt im klassischen und schulpraktischen Klavierspiel und leitet den Unichor. Ausgebildet wurde sie im Rahmen ihres Schulmusikstudiums an der HfM Detmold von Anne Kohler, Fritz ter Wey und Joachim Harder. Weitere wichtige Impulse im Leiten von Vokalensembles bekam sie u. a. durch Kurse bei den New York Voices, Jesper Holm und Kerry Marsh. Seit vielen Jahren leitet sie Vokalensembles mit unterschiedlichen Schwerpunkten, unterrichtete an verschiedenen Hochschulen in Ensembleleitung und gibt regelmäßig Fortbildungen und Workshops in Pop- und Jazz-Chorleitung." },
    ],
    programmesTitle: "Programme",
    programmesIntro: "Aktuelle und bisherige Konzertprogramme. Ausführliche Programmtexte senden wir auf Anfrage.",
    programmes: [
        { title: "Mosaik – Mozaik – Mozayîk", note: "Neues Programm 2027", text: "Das Vokalensemble vode bringt gemeinsam mit Sümeyye Ergün-Langer (Gesang, Gitarre) und Hayri Arslan (Saz) ein musikalisches Mosaik auf die Bühne: Westtürkische und ostanatolische Traditionen begegnen kurdisch-zazaischen Klängen und der Jazz- und Popmusik von vode. Traditionelle Melodien werden in neue Arrangements überführt – ein musikalischer Trialog, in dem jede Tradition ihre eigene Farbe behält und zugleich Teil eines gemeinsamen Klangbildes wird." },
        { title: "Shifting Tides", note: "Programm 2026", text: "In Shifting Tides widmet sich vode den bewegten Momenten des Lebens, den Weggabelungen, die verschiedene Richtungen offenhalten. Mit ausgewählten Jazz- und Pop-Songs erzählt das Ensemble von inneren Dämonen und innerer Stärke, Einsamkeit und Begegnung, von Verlust und liebevoller Erinnerung." },
        { title: "Silent Light", note: "Adventsprogramm", text: "Silent Light handelt vom Suchen und Finden eines Leuchtens im Dunkel der längsten Nacht des Jahres. Inspiriert von William Blakes Gedicht „To the Evening Star“ oder dem alten Choral „Veni, Veni Emmanuel“ verbindet vode alte Fragen der Menschheit mit zeitgenössischem Chorklang – in ausdrucksstarken Arrangements aus Jazz und Pop voll Hoffnung, Stille und verborgener Lebendigkeit." },
        { title: "True Colors", note: "Programm", text: "In True Colors singt vode Popsongs von Coldplay, Yebba oder OneRepublic ebenso wie Klassiker von Sting, Elton John oder den Beatles – über die starken Farben und die feinen Schattierungen des Lebens. Neben Stücken in voller Chorstärke erklingen charaktervolle Soli und zarte Arrangements in kleineren Besetzungen, mit und ohne Instrumente." },
    ],
    academyTitle: "vode academy",
    academy: [
        "Singen ist für uns mehr als Kunst – es ist Haltung. In einer Gruppe zu musizieren bedeutet, auf sich selbst zu hören und der eigenen Stimme Raum zu geben, aber genauso auf die anderen Stimmen Acht zu geben. Das ist es, was am Ende zu einem harmonischen Miteinander führt – auf der Bühne wie im Leben.",
        "Bei vode bringen rund 20 Musiker:innen ganz unterschiedliche Kompetenzen zusammen: Vocal Coaching, Schulpädagogik, Tontechnik, Arrangement und Komposition. Aus dieser Vielfalt ist eine besondere Probenkultur entstanden, in der jede:r Einzelne das Gesamtergebnis mitgestaltet. Dieses Prinzip – dass es auf jede einzelne Stimme ankommt – geben wir in Workshops, Coachings und Chorprojekten weiter, etwa 2025 bei „Chor macht Schule“ mit Jugendlichen aus Schulchören der Region.",
    ],
    academyLink: "Mehr zur vode academy",
    stillCredit: "Standbild aus „Chor macht Schule“ · Film: Roman Schauerte",
    downloadsTitle: "Fotos, Logos & Texte",
    downloadsText: "Pressefotos in Druckauflösung, unser Logo für helle und dunkle Hintergründe und alle Texte zum Kopieren gibt es auf unserer Presseseite:",
    photosTitle: "Pressefotos",
    photosIntro: "Druckfähige Auflösung. Bei Veröffentlichung bitte den Fotonachweis angeben.",
    photoCredit: "Foto",
    download: "Herunterladen",
    portrait: "Hochformat",
    landscape: "Querformat",
    logosTitle: "Logos",
    logosIntro: "Als SVG (Vektor) und PNG (3000 px), für helle und dunkle Hintergründe.",
    logoLight: "Hell, für dunkle Hintergründe",
    logoDark: "Dunkel, für helle Hintergründe",
    videosTitle: "Videos",
    technicalTitle: "Technik",
    technical: "Ein aktueller Technical Rider ist in Arbeit. Technische Angaben stimmen wir gern für jede Veranstaltung ab.",
    contactTitle: "Kontakt & Booking",
    contactText: "Für Buchungsanfragen, Interviews und weiteres Material erreicht ihr Maria Anna Waloschek unter",
    printFooter: "Pressekit",
};

type PressKitText = typeof de;

const en: PressKitText = {
    title: "Press kit",
    tagline: "moving. powerful. immediate.",
    numbers: [
        ["20", "around 20 singers, as a full ensemble and in small formations"],
        ["2021", "founded as vode e.V. in Bielefeld, Germany"],
        ["2026", "on stage with the New York Voices at the Kuppelsaal Hanover"],
    ],
    intro: "Texts, photos and logos for your coverage and event listings. Download them individually or as a complete package.",
    downloadZip: "Complete press kit (ZIP)",
    downloadPdf: "Press kit as PDF",
    otherPdf: "Deutsche Fassung (PDF)",
    facts: [
        ["Ensemble", "around 20 singers, plus smaller formations and solos"],
        ["Genre", "vocal music between jazz, pop and contemporary"],
        ["Directors", "Katharina Gärtner and Simon Herten"],
        ["Founded", "2021 as vode e.V., based in Bielefeld, Germany"],
    ],
    texts: {
        title: "Ensemble texts",
        intro: "In three lengths, free to use.",
        series: "Our ensemble text in three lengths – free to use.",
        short: "Short text",
        standard: "Standard text",
        long: "Long text",
        chars: "characters",
        copy: "Copy text",
        copied: "Copied",
    },
    short: [
        "vode is a vocal ensemble from Germany. The approximately 20 singers have shared a close musical and personal bond for many years. In their concerts, they weave their individual voices into a rich and multifaceted ensemble sound while also creating space for smaller vocal formations. Between pop, jazz and contemporary vocal music, vode explores new sonic spaces and creates extraordinary musical experiences.",
    ],
    standard: [
        "vode stands for musical passion, distinctive collaborations and immersive concert experiences. Since 2021, the approximately 20 musicians have shared a passion for singing together. Whether performing as a full ensemble or in smaller formations, the singers combine their individual voices into a rich and distinctive ensemble sound. Moving between jazz, pop and contemporary vocal music, vode creates programmes that build musical bridges and make space itself part of the artistic experience.",
        "vode is equally at home on major concert stages and in unconventional concert formats. The ensemble has performed at venues including the Elbphilharmonie Hamburg, the Rudolf-Oetker-Halle in Bielefeld and the Kuppelsaal in Hanover, where vode appeared alongside the New York Voices. Festival appearances have taken the ensemble to Berlin, Freiburg and Cologne.",
        "With formats such as “Concert in the Dark”, vode explores new ways of experiencing concerts, making sound, space and perception integral parts of the musical experience. vode seeks out those moments when the human voice becomes more than music – when sound, space and community come together to create something that exists only in the moment.",
    ],
    long: [
        "vode stands for musical passion, distinctive collaborations and immersive concert experiences. Whether performing as a full ensemble or in smaller formations, each performance reveals the many facets of vode’s distinctive sound and allows audiences to experience the voices up close – moving, powerful and immediate. Moving between jazz, pop and contemporary vocal music, vode creates programmes that build musical bridges and make space itself part of the artistic experience.",
        "vode is equally at home on major concert stages and in unconventional concert formats. The ensemble has performed at venues including the Elbphilharmonie Hamburg, the Rudolf-Oetker-Halle in Bielefeld and the Kuppelsaal in Hanover, where vode performed alongside the New York Voices in 2026. Festival appearances have taken the ensemble to Berlin, Freiburg and Cologne.",
        "vode was founded as a vocal ensemble in 2021, and its members have remained closely connected both musically and personally ever since. vode is a collective of around 20 musicians who bring their diverse creative ideas and individual strengths to the ensemble. These ideas are woven into a cohesive musical whole by Katharina Gärtner and Simon Herten.",
        "With formats such as “Concert in the Dark”, vode is interested in more than sound alone: it is about creating musical experiences. When sight recedes into the background, listening becomes the central experience, bringing voices, sound, space and perception together in an intense and immediate encounter. vode seeks out those moments when the human voice becomes more than music – when sound, space and community come together to create something that exists only in the moment.",
    ],
    highlightsTitle: "Milestones",
    highlights: [
        ["2021", "vode e.V. founded in Bielefeld"],
        ["2022", "Inaugural concert on 20 August"],
        ["2023", "Nacht der Chöre at the Rudolf-Oetker-Halle, Bielefeld"],
        ["2023", "Choral event at the Elbphilharmonie, Hamburg"],
        ["2024", "TotalChoral festival, Berlin"],
        ["2024", "Black Forest Voices festival, Freiburg"],
        ["2025", "vode academy: “Chor macht Schule” in Herzfeld"],
        ["2026", "voc.cologne festival, Cologne"],
        ["2026", "Joint performance with the New York Voices at the Kuppelsaal, Hanover"],
    ],
    leadershipTitle: "Directors",
    leadership: [
        { name: "Simon Herten", role: "Singer, vocal coach, choir director", text: "Simon Herten studied voice and vocal pedagogy at the Detmold University of Music with teachers including Markus Köhler, Lars Woldt and Ulrike Wahren, and took choral conducting lessons with Anne Kohler. As a singer he performs throughout Germany as a soloist and ensemble member in rock, pop and classical music, both solo and with various ensembles and bands. His other work ranges from individual voice lessons and musical work at schools and universities to directing several pop and jazz choirs." },
        { name: "Katharina Gärtner", role: "Conductor, pianist, music educator", text: "Katharina Gärtner leads the artistic strand of the music education programme at the University of Vechta, where she teaches classical and applied piano and directs the university choir. She trained with Anne Kohler, Fritz ter Wey and Joachim Harder as part of her school music studies at the Detmold University of Music. Courses with the New York Voices, Jesper Holm and Kerry Marsh, among others, gave her further important impulses for directing vocal ensembles. She has led vocal ensembles with different focuses for many years, has taught ensemble direction at several universities and regularly gives training courses and workshops in pop and jazz choir direction." },
    ],
    programmesTitle: "Programmes",
    programmesIntro: "Current and past concert programmes. Detailed programme notes are available on request.",
    programmes: [
        { title: "Mosaik – Mozaik – Mozayîk", note: "New programme 2027", text: "Together with Sümeyye Ergün-Langer (vocals, guitar) and Hayri Arslan (saz), vode brings a musical mosaic to the stage: western Turkish and eastern Anatolian traditions meet Kurdish-Zazaki sounds and vode’s jazz and pop. Traditional melodies are carried into new arrangements – a musical trialogue in which each tradition keeps its own colour while becoming part of a shared sound." },
        { title: "Shifting Tides", note: "Programme 2026", text: "In Shifting Tides, vode turns to life’s moments of change, the crossroads that keep different paths open. With selected jazz and pop songs, the ensemble tells of inner demons and inner strength, loneliness and encounter, loss and loving memory." },
        { title: "Silent Light", note: "Advent programme", text: "Silent Light is about seeking and finding a glow in the darkness of the longest night of the year. Inspired by William Blake’s poem “To the Evening Star” and the ancient chant “Veni, Veni Emmanuel”, vode connects humanity’s old questions with contemporary choral sound – in expressive jazz and pop arrangements full of hope, stillness and hidden vitality." },
        { title: "True Colors", note: "Programme", text: "In True Colors, vode sings songs by Coldplay, Yebba and OneRepublic alongside classics by Sting, Elton John and the Beatles – about the strong colours and subtle shades of life. Alongside full-ensemble pieces, characterful solos and delicate arrangements for smaller formations, with and without instruments, can be heard." },
    ],
    academyTitle: "vode academy",
    academy: [
        "For us, singing is more than art – it is an attitude. Making music in a group means listening to yourself and giving your own voice space, but equally paying attention to the other voices. That is what ultimately leads to harmony – on stage as in life.",
        "At vode, around 20 musicians bring together very different skills: vocal coaching, school teaching, sound engineering, arranging and composition. This diversity has shaped a distinctive rehearsal culture in which everyone helps shape the result. We pass on this principle – that every single voice matters – in workshops, coaching sessions and choral projects, such as “Chor macht Schule” in 2025 with young people from school choirs in the region.",
    ],
    academyLink: "More about vode academy",
    stillCredit: "Still from “Chor macht Schule” · film: Roman Schauerte",
    downloadsTitle: "Photos, logos & texts",
    downloadsText: "Print-resolution press photos, our logo for light and dark backgrounds and all texts ready to copy are on our press page:",
    photosTitle: "Press photos",
    photosIntro: "Print resolution. Please credit the photographer when publishing.",
    photoCredit: "Photo",
    download: "Download",
    portrait: "Portrait",
    landscape: "Landscape",
    logosTitle: "Logos",
    logosIntro: "As SVG (vector) and PNG (3000 px), for light and dark backgrounds.",
    logoLight: "Light, for dark backgrounds",
    logoDark: "Dark, for light backgrounds",
    videosTitle: "Videos",
    technicalTitle: "Technical",
    technical: "An updated technical rider is in preparation. We are happy to agree technical details for each event.",
    contactTitle: "Contact & booking",
    contactText: "For booking enquiries, interviews and further material, contact Maria Anna Waloschek at",
    printFooter: "Press kit",
};

export const pressKit: Record<PressLocale, PressKitText> = { de, en };

export const plainText = (paragraphs: string[]) => paragraphs.join("\n\n");
