import type { BaseDictionary } from "./config";

const en: BaseDictionary = {
  nav: {
    ensemble: "Ensemble",
    konzerte: "Concerts",
    academy: "Academy",
    media: "Media",
    kontakt: "Contact",
    support: "Support",
    supportAction: "Support",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    mainTitle: "Vocal Jazz",
    subTitle: "& Pop",
  },
  ensemble: {
    sectionTag: "One Family",
    title: "The Ensemble",
    paragraph1: "<span class=\"italic\">vode</span> is a vocal ensemble performing jazz and pop music. Founded in 2021, our shared history dates back to our studies at the Detmold University of Music. We've been connected musically and as friends ever since.",
    paragraph2: "We are a collective of around 20 musicians who contribute our diverse creative ideas and potentials to the ensemble. These ideas are woven into a cohesive musical tapestry by Katharina Gärtner and Simon Herten. Since 2022, we have brought several concert programs to stages (including the Elbphilharmonie in Hamburg and the Rudolf-Oetker-Halle in Bielefeld) and participated in festivals (such as the Black Forest Voices Festival in Freiburg and TotalChoral in Berlin).",
    membersTitle: "Members",
    selectVoiceGroupPrompt: "Please select a voice group.",
    voiceSoprano: "Soprano",
    voiceMezzo: "Mezzo-soprano",
    voiceAlto: "Alto",
    voiceTenor: "Tenor",
    voiceBaritone: "Baritone",
    voiceBass: "Bass",
    leadershipTitle: "Leadership",
    leadershipParagraph: "As a collective of various musicians, solo, compositional, or organizational parts are taken on by different members. The overall artistic responsibility for rehearsals and concert programming lies with Katharina Gärtner (conductor) and Simon Herten (singer and conductor). Ensemble management and booking are handled by Felicitas Grunden and Maria Anna Waloschek.",
    websiteLinkText: "Website",
  },
  concerts: {
    sectionTag: "Concerts",
    title: "Upcoming Events",
    noUpcomingFallback: "No further concerts are currently planned. Please check back soon!",
    pastTitle: "Past Concerts",
    noPastForYearFallback: "No concerts archived for this year.",
    timeSuffix: "", // Rely on toLocaleTimeString for AM/PM etc.
  },
  academy: {
    sectionTag: "Education",
    title: "vode academy", // Or simply "Academy"
    paragraph1: "For us, music is created in a spirit of collaboration. To make our concerts special, we bring to our rehearsals what each of us does best: Some members of vode work as vocal coaches, helping to realize musical ideas vocally. Others teach at schools and develop innovative rehearsal formats for groups. Still others work as sound engineers and have a fine sense for sound and details.",
    paragraph2: "These diverse experiences and strengths flow into our joint rehearsal work – and we all benefit from it. We don't just pass this knowledge on internally: We also share it with other choirs, having developed various workshop and coaching formats for this purpose.",
    paragraph3: "Our education project this year is aimed at youth choirs.",
    formatsTitle: "Our Formats",
    expertTitle: "vode:expert", // Title can remain, description needs translation
    expertDescription: "In <em>vode:expert</em>, individual members of the ensemble pass on their specialist knowledge and offer topic-specific coaching sessions that delve deep into musical or technical topics. The content ranges from groove/timing or breathing and body work to practical aspects of miking and sound reinforcement for live performances or recordings. The aim is to make individual know-how from the ensemble accessible and to offer practical insights for vocal and musical development.",
    collectiveTitle: "vode:collective", // Title can remain, description needs translation
    collectiveDescription: "<em>vode:collective</em> is a workshop format that focuses on collective learning, mutual coaching, and creative self-responsibility. Several people from one voice group independently develop sound concepts and practice dealing with specific challenges. Vode members also provide vocal coaching, which enriches the work not only musically but also vocally. The choir director then coordinates the various approaches into a unified musical concept. This format strengthens individual responsibility, the creative potential of each voice group, and promotes a cooperative, collaborative and equitable environment in the musical design process.",
    pastProjectsTitle: "Past Projects",
    pastProjectYearLabel: "YEAR",
    pastProjectLearnMore: "Learn more →",
  },
  media: {
    sectionTag: "Media",
    title: "Insights and Press Material",
    paragraph1: "Here you will find a selection of our latest recordings, videos, and our press kit.",
    paragraph2: "We are constantly working on new material. Check back soon for the latest updates.",
    instagramAriaLabel: "Vode Ensemble on Instagram",
    facebookAriaLabel: "Vode Ensemble on Facebook",
    videosTitle: "Videos",
    pressKitTitle: "Press Kit & Rider",
    pressKitParagraph: "The press kit and our technical rider are currently being revised and will be available here shortly.",
    instagramTitle: "Instagram Logo",
    facebookTitle: "Facebook Logo"
  },
  contact: {
    sectionTag: "Contact",
    title: "How to reach us",
    subtitle1: "Stay informed",
    paragraph1: "Would you like to receive regular updates about our music and performances? Here you can sign up for our newsletter or follow us on Social Media.",
    newsletterButton: "Newsletter",
    newsletterIconTitle: "Newsletter Icon",
    paragraph2: "For even more, including exclusive insights, backstage news, and the opportunity to actively support us, you can find our <a href=\"#support\" class=\"text-[var(--color-accent)] hover:underline\">Community Updates</a> here.",
    subtitle2: "Booking & Inquiries",
    paragraph3: "For booking or general inquiries, you can reach Maria Waloschek and Felicitas Ammer at <a href=\"mailto:mail@vode-ensemble.de\" class=\"text-[var(--color-accent)] hover:underline\">mail@vode-ensemble.de</a>."
  },
  support: {
    imageAlt: "Supporting Vode Ensemble",
    sectionTag: "Support",
    title: "Support Us",
    introParagraph1: "As a non-profit association, we rely on your support to further develop our musical projects, concerts, and the Academy.",
    introParagraph2: "Every contribution helps us finance rehearsal phases, enable new arrangements, and expand our reach. Become part of the vode family and help us move sound!",
    friendsTitle: "Friends and Patrons",
    friendsParagraph1: "Become part of the vode community by joining the vode e. V. association as a supporting member. You can support our work with a regular contribution of your choice. This gives you access to our community updates, a behind-the-scenes look as new project ideas are developed, and insights into our rehearsal work. And, of course, you'll be the first to know about new concerts. This form of support enables us to plan long-term and is therefore very valuable to us. Payments can be conveniently made via SEPA direct debit mandate.",
    friendsParagraph2: "For more information, please write to us at <a href=\"mailto:mail@vode–ensemble.de\" class=\"text-[var(--color-accent)] hover:underline\">mail@vode–ensemble.de</a>.",
    donationsTitle: "Donations",
    donationsParagraph1: "If you would like to support us but prefer not to become a member, we gratefully accept donations via bank transfer. As a non-profit association, we are happy to issue you a donation receipt.",
    donationsReferenceLabel: "Reference:",
    donationsReferenceValue: "Donation",
    sponsorsTitle: "Sponsors",
    sponsorsParagraph1: "To show our appreciation, we also want to give something back and publicly thank sponsors for their cultural commitment. Sponsors are acknowledged on concert posters, flyers, or program booklets by featuring their logos or names. Additionally, we promote our sponsors through our digital channels.",
    closingParagraph: "Thank you! Your financial contributions make culture possible and allow us to create musical encounters together!"
  },
  // Other sections will be added here
};

export default en; 