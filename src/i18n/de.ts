import type { BaseDictionary } from "./config";

const de: BaseDictionary = {
  nav: {
    ensemble: "Ensemble",
    konzerte: "Konzerte",
    academy: "Academy",
    media: "Medien",
    kontakt: "Kontakt",
    support: "Unterstützen",
    supportAction: "Unterstützen →", // For the button with arrow
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    // Language switcher labels will be handled by LocalesLabels from config
  },
  hero: {
    mainTitle: "Vocal Jazz",
    subTitle: "& Pop",
  },
  ensemble: {
    sectionTag: "Eine Familie",
    title: "Das Ensemble",
    paragraph1: "<span class=\"italic\">vode</span> ist ein Vokalensemble, das Jazz- und Popmusik macht. Wir haben uns 2021 gegründet, unsere gemeinsame Geschichte wurzelt aber schon in unserer Studienzeit an der Hochschule für Musik Detmold. Seitdem sind wir musikalisch und freundschaftlich miteinander verbunden.",
    paragraph2: "Wir sind ein Kollektiv von rund 20 Musiker:innen, die unsere verschiedenen kreativen Ideen und Potenziale in das Ensemble einbringen. Zusammengewoben zu einem musikalischen Gesamtbild werden diese Ideen von Katharina Gärtner und Simon Herten. Seit 2022 haben wir mehrere Konzertprogramme auf die Bühnen gebracht (u. a. in der Elbphilharmonie in Hamburg und der Rudolf-Oetker-Halle in Bielefeld) und an Festivals teilgenommen (z. B. dem Black Forest Voices Festival in Freiburg und TotalChoral in Berlin).",
    membersTitle: "Mitglieder",
    selectVoiceGroupPrompt: "Bitte eine Stimmgruppe auswählen.",
    voiceSoprano: "Sopran",
    voiceMezzo: "Mezzosopran",
    voiceAlto: "Alt",
    voiceTenor: "Tenor",
    voiceBaritone: "Bariton",
    voiceBass: "Bass",
    leadershipTitle: "Leitung",
    leadershipParagraph: "Als Kollektiv verschiedener Musiker:innen werden solistische, kompositorische oder organisatorische Parts von verschiedenen Mitgliedern übernommen. Die künstlerische Gesamtverantwortung für den Probenprozess und die Konzertgestaltung liegen bei Katharina Gärtner (Dirigentin) und Simon Herten (Sänger und Dirigent). Die organisatorische Leitung des Ensembles und das Booking übernehmen Felicitas Grunden und Maria Anna Waloschek.",
    websiteLinkText: "Website",
    // Member descriptions would be extensive to add here, skipping for now as per strategy
  },
  concerts: {
    sectionTag: "Konzerte",
    title: "Anstehende Events",
    noUpcomingFallback: "Zurzeit sind keine weiteren Konzerte geplant. Schauen Sie bald wieder vorbei!",
    pastTitle: "Vergangene Konzerte",
    noPastForYearFallback: "Keine Konzerte für dieses Jahr im Archiv.",
    timeSuffix: "Uhr",
  },
  academy: {
    sectionTag: "Education",
    title: "vode academy",
    paragraph1: "Musik entsteht bei uns im Miteinander. Damit unsere Konzerte zu etwas Besonderem werden, bringen wir in unseren Proben ein, was jede:r von uns am besten kann: Einige Mitglieder von vode arbeiten als Vocal Coaches und unterstützen bei der stimmlichen Umsetzung musikalischer Ideen. Andere unterrichten an Schulen und entwickeln innovative Probenformate für Gruppen. Wieder andere sind als Tonmeister:innen tätig und haben ein feines Gespür für Klang und Details.",
    paragraph2: "Diese vielfältigen Erfahrungen und Stärken fließen in unsere gemeinsame Probenarbeit ein – und davon profitieren wir alle. Dieses Wissen geben wir aber nicht nur intern weiter: Wir teilen es auch mit anderen Chören. Dafür haben wir verschiedene Workshop- und Coachingformate entwickelt.",
    paragraph3: "Unser diesjähriges Education-Projekt richtet sich an Jugendchöre.",
    formatsTitle: "Unsere Formate",
    expertTitle: "vode:expert",
    expertDescription: "In <em>vode:expert</em> geben einzelne Mitglieder des Ensembles ihr Spezialwissen weiter und bieten themenspezifische Coachings an, die tief in musikalische oder technische Themen eintauchen. Die Inhalte reichen von Groove/Timing oder Atmung/Körperarbeit bis hin zu praktischen Fragen der Mikrofonierung und Beschallung bei Live-Auftritten oder Mitschnitte. Ziel ist es, individuelles Know-how aus dem Ensemble zugänglich zu machen und konkrete Impulse für die stimmliche und musikalische Entwicklung zu bieten.",
    collectiveTitle: "vode:collective",
    collectiveDescription: "<em>vode:collective</em> ist ein Workshopformat, das auf kollektives Lernen, gegenseitiges Coaching und kreative Selbstverantwortung setzt. Mehrere Personen aus einer Stimmgruppe erarbeiten hier eigenständig Klangvorstellungen und üben, mit spezifischen Herausforderungen umzugehen. Dabei geben die Mitglieder von vode auch stimmbildnerische Impulse, wodurch die Arbeit nicht nur musikalisch, sondern auch stimmlich bereichert wird. Die Chorleitung koordiniert anschließend die verschiedenen Ansätze zu einem stimmigen Gesamtkonzept. Dieses Format stärkt die Eigenverantwortung, das kreative Potenzial jeder Stimmgruppe und fördert ein kooperatives, gleichberechtigtes Miteinander im musikalischen Gestaltungsprozess.",
    pastProjectsTitle: "Vergangene Projekte",
    pastProjectYearLabel: "JAHR",
    pastProjectLearnMore: "Mehr erfahren →",
  },
  media: {
    sectionTag: "Medien",
    title: "Einblicke und Pressematerial",
    paragraph1: "Hier findest du eine Auswahl unserer neuesten Aufnahmen, Videos und unser Presse-Kit.",
    paragraph2: "Wir arbeiten ständig an neuem Material. Besuch uns bald wieder, um nichts zu verpassen.",
    instagramAriaLabel: "Vode Ensemble auf Instagram",
    facebookAriaLabel: "Vode Ensemble auf Facebook",
    videosTitle: "Videos",
    pressKitTitle: "Presse-Kit & Rider",
    pressKitParagraph: "Das Presse-Kit sowie unser Technical Rider werden gerade überarbeitet und in Kürze hier zur Verfügung gestellt.",
    instagramTitle: "Instagram Logo",
    facebookTitle: "Facebook Logo"
  },
  contact: {
    sectionTag: "Kontakt",
    title: "So kannst du uns erreichen",
    subtitle1: "Bleib informiert",
    paragraph1: "Möchtest du regelmäßig über unsere Musik und Auftritte erfahren? Hier kannst du dich für unseren Newsletter anmelden oder uns auf <a href=\"#media\" class=\"text-[var(--color-accent)] hover:underline\">Social Media</a> folgen.",
    newsletterButton: "Zum Newsletter",
    paragraph2: "Und wenn's noch etwas mehr sein darf und du mit exklusiven Einblicken, Backstage-News und der Möglichkeit, uns aktiv zu unterstützen dabei sein möchtest, dann kommst du hier zu unseren <a href=\"#support\" class=\"text-[var(--color-accent)] hover:underline\">Community-Updates</a>.",
    subtitle2: "Booking & Anfragen",
    paragraph3: "Für Buchungsanfragen oder sonstige Anliegen erreichst du Maria Waloschek und Felicitas Ammer über <a href=\"mailto:mail@vode-ensemble.de\" class=\"text-[var(--color-accent)] hover:underline\">mail@vode-ensemble.de</a>."
  },
  support: {
    imageAlt: "Unterstützung Impression",
    sectionTag: "Support",
    title: "Unterstütze uns",
    introParagraph1: "Als gemeinnütziger Verein sind wir auf deine Unterstützung angewiesen, um unsere musikalischen Projekte, Konzerte und die Academy weiterzuentwickeln.",
    introParagraph2: "Jeder Beitrag hilft uns, Probenphasen zu finanzieren, neue Arrangements zu ermöglichen und unsere Reichweite zu vergrößern. Werde Teil der vode-Familie und hilf uns, Klang zu bewegen!",
    friendsTitle: "Freunde und Förderer",
    friendsParagraph1: "Werde Teil der vode-community, indem du als förderndes Mitglied dem Verein vode e. V. beitrittst. Mit einem selbst festgelegten regelmäßigen Beitrag kannst du unsere Arbeit unterstützen. Hierdurch hast du Zugang zu unseren Community-Updates, bist hautnah dabei, wie hinter den Kulissen neue Projekt-Ideen gesponnen werden und bekommst Einblicke in unsere Probenarbeit und natürlich weißt du dadurch als erstes über neue Konzerte Bescheid. Diese Form der Unterstützung ermöglicht uns eine langfristige Planung und ist deshalb sehr wertvoll für uns. Eine Abbuchung kann bequem über ein SEPA-Lastschriftmandat erfolgen.",
    friendsParagraph2: "Für weitere Infos hierzu schreib uns unter <a href=\"mailto:mail@vode–ensemble.de\" class=\"text-[var(--color-accent)] hover:underline\">mail@vode–ensemble.de</a>.",
    donationsTitle: "Spenden",
    donationsParagraph1: "Wenn du uns unterstützen möchtest, dir ein Vereinsbeitritt aber nicht zusagt, freuen wir uns sehr über eine Spende per Überweisung. Als gemeinnütziger Verein stellen wir dir gerne eine Spendenquittung aus.",
    donationsReferenceLabel: "Stichwort:",
    donationsReferenceValue: "Spende",
    sponsorsTitle: "Sponsoren",
    sponsorsParagraph1: "Um die Wertschätzung sichtbar zu machen, möchten wir auch etwas zurückgeben und uns öffentlich für das kulturelle Engagement bedanken. Dafür werden Sponsor:innen auf Konzertplakaten, Flyern oder Programmheften genannt, indem wir Logos oder Namen platzieren. Darüber hinaus bewerben wir unsere Sponsor:innen auch über unsere digitalen Kanäle.",
    closingParagraph: "Danke, dass durch eure finanziellen Beiträge Kultur ermöglicht wird und wir so gemeinsam musikalische Begegnungen schaffen können!"
  },
  // Other sections will be added here
};

export default de; 