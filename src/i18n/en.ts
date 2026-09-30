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
	feature: {
		sectionTag: "New",
		title: "vode × New York Voices",
		songTitle: "Bli-Blip",
		intro: 'Over a year in the making – we\'re thrilled to finally share our secret collaboration with the legendary <a href="https://newyorkvoices.com/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">New York Voices</a>!',
		story1: 'It all began at the Black Forest Voices Festival in June 2024, where Kim Nazarian from the <a href="https://newyorkvoices.com/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">New York Voices</a> coached our ensemble. From this encounter, the idea for this special collaboration was born.',
		story2: "The arrangement originally comes from Darmon Meader (New York Voices) and Michael Abene. Our bassist Manuel Grunden transformed it into a pure a cappella version – while also taking on production, mixing, and video editing.",
		story3: 'In November 2024, we recorded our part at Fattoria Musica with <a href="https://juliusgass.de/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">Julius Gass</a>. A year after the first meeting, we shot the music video at the beautiful Cafe Cup in Detmold – with great support from <a href="https://larshenrik.com/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">Lars Henrik</a>.',
	},
	ensemble: {
		sectionTag: "About us",
		title: "The Ensemble",
		paragraph1:
			'<span class="italic">vode</span> stands for a musical passion that goes far beyond notes and harmonies. Whether as a full ensemble or in smaller groups: every performance showcases the diversity of our very own vode sound, allowing our audience to experience singing up close - touching, powerful, direct.',
		paragraph2:
			"We founded as a vocal ensemble in 2021 and have been connected musically and as friends ever since.",
		paragraph3:
			"We are a collective of around 20 musicians who contribute our diverse creative ideas and potentials to the ensemble. These ideas are woven together into a cohesive musical picture by Katharina Gärtner and Simon Herten. Since 2022, we have brought several concert programs to stages (including the Elbphilharmonie in Hamburg and the Rudolf-Oetker-Halle in Bielefeld) and participated in festivals (such as the Black Forest Voices Festival in Freiburg and TotalChoral in Berlin).",
		membersTitle: "Members",
		selectVoiceGroupPrompt: "Please select a voice group.",
		voiceSoprano: "Soprano",
		voiceMezzo: "Mezzo-soprano",
		voiceAlto: "Alto",
		voiceTenor: "Tenor",
		voiceBaritone: "Baritone",
		voiceBass: "Bass",
		leadershipTitle: "Leadership",
		leadershipParagraph:
			"Solo, compositional, or organizational parts are taken on by various members. The overall artistic responsibility for the rehearsal process and concert design lies with Katharina Gärtner and Simon Herten. The organizational management of the ensemble and booking are handled by Feli Ammer and Maria Waloschek.",
		websiteLinkText: "Website",
		maybeYouName: "Maybe you?",
		maybeYouDescriptionBass:
			"We are looking for reinforcement in the bass section!",
		maybeYouIconTitle: "Question Mark Icon",
		portraitAltPrefix: "Portrait of",
		placeholderIconTitle: "Placeholder user icon",
	},
	concerts: {
		sectionTag: "Concerts",
		title: "Upcoming Events",
		noUpcomingFallback: "Concerts and projects are in the works.",
		noUpcomingRequest: "Would you like to hear vode live or book us for a concert?",
		noUpcomingRequestLink: "Get in touch",
		pastTitle: "Past Concerts",
		noPastForYearFallback: "No concerts archived for this year.",
		timeSuffix: "", // Rely on toLocaleTimeString for AM/PM etc.
	},
	academy: {
		title: "vode academy", // Or simply "Academy"
		learnMore: "Learn more",
		audioTitle: "Broadcast recording from Deutschlandfunk Kultur",
		audioSubtitleLinkText: '"Chor der Woche"',
		audioSubtitlePostLink: ' by Nicolas Hansen',
		audioCoverAlt: "Cover for the podcast 'Choir of the Week'",
		audioFallback: "Your browser does not support the audio element.",
		pastProjectsTitle: "Past Projects",
		// Academy2025 specific translations
		academy2025: {
			heroTitle: "vode academy 2025:",
			heroSubtitle: '"Chor macht Schule"',
			heroDescription:
				"Do you love to sing and want to spend a weekend working on new songs with professional coaches, discovering your voice, and bringing it all to the stage in a final concert? Then the vode academy 2025 is perfect for you! From August 30th to 31st, 2025, in St. Ida in Herzfeld, a weekend full of music, community, and unforgettable live moments awaits you.",
			timeLabel: "When",
			timeValue: "August 30th & 31st",
			locationLabel: "Where",
			locationValue: "St. Ida in Herzfeld",
			locationDetail: "Meet at Haus Idenrast",
			addressValue: "Lippstädter Str. 10, 59510 Herzfeld",
			addressAlt: "or",
			transportTitle: "Getting There",
			transportText:
				"We provide eco-friendly transportation via shuttle buses! Here you can find the exact departure times for the two routes that will bring you from the region to Herzfeld.",

			organizational: {
				sectionTag: "Organizational",
				title: "All Details for the Weekend",
			},

			experience: {
				sectionTag: "Your Academy Experience",
				title: "What Awaits You",
				point1: {
					title: "Expert Coaching",
					text: "Learn from experienced coaches how to use your voice correctly and stand confidently on stage.",
				},
				point2: {
					title: "Live Experience",
					text: "Present the results from the workshops in a showcase concert and experience <strong>vode</strong> up close at their a cappella concert on the second day.",
				},
				point3: {
					title: "Songs & Fun",
					text: "Learn new songs together that are perfect for you and that you can take home – fun guaranteed.",
				},
				point4: {
					title: "Team & Community",
					text: "Make new friends, experience a magical concert atmosphere, and become part of an unforgettable community.",
				},
			},

			scheduleTitle: "What's the daily schedule?",
			scheduleSectionTag: "Schedule",
			saturdayTitle: "SATURDAY",
			sundayTitle: "SUNDAY",
			additionalInfoTitle: "Important details...",
			additionalInfoSectionTag: "Good to Know",
			freeText:
				"This project is funded through the LEADER program, making it <strong>completely free</strong> for participants.",
			snacksText:
				"<strong>Snacks and refreshments</strong> are provided both days.",
			songsText:
				"We're still hard at work composing and arranging your songs. Once ready, you'll find <strong>song access right here on this page</strong>.",
			formatsExpertiseTag: "Our Expertise",
			newsSectionTag: "News & Sheets",
			newsTitle: "Material & Tutorials",
			newsIntro:
				"We'll be uploading new material for you here gradually. So be sure to check back regularly!",
			voiceInsideTitle: "The Voice Inside - Tutorial",
			newsText:
				'Hey, have you checked out the "The Voice Inside" tutorial yet? You can now download the sheet music right here! It\'s perfect for getting started and preparing for the workshop. Have fun practicing!',
			downloadButton: "Download Sheets",
			cloudyDayTitle: "Cloudy Day - Tutorial",
			cloudyDayText:
				'New online: our tutorial for "Cloudy Day"! It\'s a canon – perfect for singing together and warming up. Grab the sheet music here and have fun trying it out!',
			lionLinesTitle: "Quodlibet Lion - Tutorial",
			lionLinesText:
				"Today, Feli takes you along to learn two short lines from different songs. In the end, everything will fit into the song “Lion” by Saint Mesa so we can create a brand-new live version together at our workshop. Have fun singing along!",
			workshops: {
				sectionTag: "Our Workshops",
				title: "Choose Your Workshop",
				headers: {
					leitung: "Leaders",
					topic: "Workshop Topic",
					learn: "What you'll learn",
				},
				rows: {
					"1": {
						leaders: "Simon and Krissi",
						topic: "Sing 'n Dance with Dua Lipa",
						learn:
							"You'll learn a famous song by Dua Lipa and a cool choreography to go with it.",
					},
					"2": {
						leaders: "Christoph and Martin",
						topic: "Catch the Sound of Impro",
						learn:
							"How to improvise spontaneous musical ideas and capture them with recording techniques.",
					},
					"3": {
						leaders: "Sümeyye and Thea",
						topic: "Ukulele meets voice",
						learn: "How to combine singing with playing the ukulele.",
					},
					"4": {
						leaders: "Liane and Niklas",
						topic: "Drums & Voice – all in your body",
						learn:
							"How to combine a sense of rhythm and body percussion with your own voice.",
					},
				},
			},
			bus: {
				accordionTitle: "Show Bus Schedules",
				line1: {
					title: "Line 1: Delbrück – Lippstadt – Wadersloh",
					sat: {
						stop1: "09:30 Delbrück, Lange Str. stop",
						stop2: "10:00 Lippstadt, Bus Station",
						stop3: "10:25 Wadersloh, Church",
					},
					sun: {
						stop1: "14:00 Delbrück, Lange Str. stop",
						stop2: "14:30 Lippstadt, Bus Station",
						stop3: "14:55 Wadersloh, Church",
					},
				},
				line2: {
					title: "Line 2: Körbecke – Soest",
					sat: {
						stop1: "09:45 Körbecke, Haus des Gastes",
						stop2: "10:05 Soest, Stadthalle",
					},
					sun: {
						stop1: "14:15 Körbecke, Haus des Gastes",
						stop2: "14:35 Soest, Stadthalle",
					},
				},
			},
		},
	},
	media: {
		sectionTag: "Media",
		title: "Insights and Press Material",
		paragraph1:
			"Here you will find a selection of our latest recordings, videos, and our press kit.",
		paragraph2:
			"We are constantly working on new material. Check back soon for the latest updates.",
		instagramAriaLabel: "Vode Ensemble on Instagram",
		facebookAriaLabel: "Vode Ensemble on Facebook",
		recordingsTitle: "Recordings",
		audioFallback: "Your browser does not support the audio element.",
		credits: {
			musicalDirection: "Musical Direction",
			recording: "Recording",
			recordingMaster: "Recording/Master",
			recordingEditMixMaster: "Recording/Edit/Mix/Master",
			recordingMix: "Recording/Mix",
			soloVocalsRecording: "Solo Vocals Recording",
			productionMixVideoEdit: "Production/Mix/Video Edit",
			videoConceptProduction: "Video Concept & Production",
			sound: "Sound",
		},
		videosTitle: "Videos",
		pressKitTitle: "Press Kit & Rider",
		pressKitParagraph:
			"The press kit and our technical rider are currently being revised and will be available here shortly.",
		instagramTitle: "Instagram Logo",
		facebookTitle: "Facebook Logo",
	},
	contact: {
		sectionTag: "Contact",
		title: "How to reach us",
		subtitle1: "Stay informed",
		paragraph1:
			"Would you like to receive regular updates about our music and performances? Here you can sign up for our newsletter or follow us on Social Media.",
		newsletterButton: "Newsletter",
		newsletterIconTitle: "Newsletter Icon",
		paragraph2:
			'For even more, including exclusive insights, backstage news, and the opportunity to actively support us, you can find our <a href="#support" class="text-[var(--color-accent)] hover:underline">Community Updates</a> here.',
		subtitle2: "Booking & Inquiries",
		paragraph3:
			'For booking or general inquiries, you can reach Maria Waloschek and Feli Ammer at <a href="mailto:mail@vode-ensemble.de" class="text-[var(--color-accent)] hover:underline">mail@vode-ensemble.de</a>.',
	},
	adventskalender: {
		sectionTag: "Advent Calendar",
		coverAlt: "Cover of Human Heart by vode",
		songTitle: "Human Heart",
		artist: "vode",
		audioFallback: "Your browser does not support the audio element.",
		greeting: 'Warm Advent greetings from <span class="italic">vode</span>!',
		message: "We hope this song brings you a little warmth and joy during this special season.",
		backLink: "Back to vode-ensemble.de",
		backIconTitle: "Back arrow",
	},
	support: {
		imageAlt: "Supporting Vode Ensemble",
		sectionTag: "Support",
		title: "Support Us",
		introParagraph1:
			"Our projects are sustained by the great commitment of all ensemble members and the financial help of our supporters. Every contribution helps us to carry out rehearsal phases and concerts, commission new compositions and arrangements, finance room rentals, and realize recordings and videos.",
		introParagraph2:
			"As a non-profit association, we are able to issue certificates for contributions and donations. If required, please write to us at: mail@vode-ensemble.de",
		friendsTitle: "Friends and Patrons",
		friendsParagraph1:
			"Become part of the vode community by supporting our work with a regular contribution of your choice. This gives you access to our community updates, a behind-the-scenes look at how new project ideas are developed, insights into our rehearsals, and of course, you'll be the first to know about new concerts. This form of support allows for long-term planning and is therefore very valuable to us.",
		friendsParagraph2:
			'For more information, write to us at <a href="mailto:mail@vode–ensemble.de" class="text-[var(--color-accent)] hover:underline">mail@vode–ensemble.de</a>.',
		donationsTitle: "Donations",
		donationsParagraph1:
			"If you would like to support us with a one-time donation, we gratefully accept donations via bank transfer.",
		// PayPal account temporarily blocked / PayPal-Konto vorübergehend gesperrt
		// paypalButtonText: "Donate via PayPal",
		donationsReferenceLabel: "Reference:",
		donationsReferenceValue: "Donation",
		sponsorsTitle: "Sponsors",
		sponsorsParagraph1:
			"To show our appreciation, we also want to give something back and publicly thank sponsors for their cultural commitment. Sponsors are acknowledged on concert posters, flyers, or program booklets by featuring their logos or names. Additionally, we promote our sponsors through our digital channels.",
		closingParagraph:
			"Thank you! Your financial contributions make culture possible and allow us to create musical encounters together!",
	},
	lightbox: {
		close: "Close image",
	},
	academyPage: {
		title: "vode academy",
		claim: "We pass on what moves us.",
		intro: "We share our rehearsal practice with choirs, schools and young people. We sing together, try things out and work out together how a piece should sound.",
		heroImageAlt: "Young people and vode singers singing and dancing together in the courtyard of St. Ida in Herzfeld",
		planProject: "Plan a project with vode",
		materialTitle: "Scores & tutorials",
		appearanceDate: "3 October 2026 · chor.com Leipzig",
		appearanceText: "Katharina Gärtner and Felicitas Ammer present “Chor macht Schule” in a workshop and try out elements of it with participants.",
		appearanceLink: "View the workshop",
		motivationTitle: "Why we do this",
		motivationText: "We want people to experience how their voice is heard and needed in a group. We bring our experience in vocal coaching, teaching, sound engineering, arranging and composition. As in our own rehearsals, those involved take responsibility for the music.",
		audienceText: "How should a line sound? What image fits a word? We work that out together. Participants experience how their own ideas change the sound.",
		motivationSingingAlt: "vode singers singing among the participants",
		motivationUkuleleAlt: "A participant practising a song on the ukulele",
		hearEnsemble: "Listen to vode perform",
		radioTitle: "vode on the radio",
		documentary: "Chor macht Schule – the film",
		documentaryPosterAlt: "Young people singing at the closing concert in the Basilica of St. Ida",
		filmContext: "Herzfeld, August 2025 · approx. 8 minutes",
		filmText: "For a weekend, young people from school choirs in the region rehearsed with vode, and on the second day they sang with us in concert. Our singers sat among the participants. The film shows how they explored the music and got to know each other – and how connections between the school choirs grew from it.",
		filmSoon: "The film will be released on YouTube soon.",
		filmReleaseOn: "The film will be released on",
		teaser: "A glimpse of “Chor macht Schule”",
		teaserPosterAlt: "Participants warming up with movement",
		play: "Play video",
		offerTitle: "Work with vode",
		offerIntro: "Choir directors, schools and organisers can work with us in several ways. The scope and ensemble size depend on the project.",
		expertTitle: "Coaching on a specific topic",
		expert: "Individual ensemble members work with a choir on a specific question, such as groove and timing, breathing or microphone technique.",
		expertImageAlt: "A vode singer leading an exercise",
		collectiveTitle: "Work with voice sections",
		collective: "Voice sections develop their own ideas about sound with vode members and give each other feedback. The choir director brings the results together.",
		collectiveImageAlt: "A voice section rehearsing with scores in a circle of chairs",
		intensivTitle: "A shared choral project",
		intensiv: "Over one or more days, participants work with vode on repertoire for a shared closing concert. “Chor macht Schule” offers an example of what such a project can look like.",
		intensivImageAlt: "Young people and vode at the closing concert in the Basilica of St. Ida",
		talksTitle: "Talks and training",
		talks: "At conferences and in training for choir directors, we report on our projects and try out elements of them in practice.",
		talksImageAlt: "A choir director leading a group",
		contact: "Have a project in mind?",
		contactShort: "Tell us about the choir or school you work with and what you have in mind. We can then discuss how vode could take part.",
		contactButton: "Discuss a project",
		marienmuenster: "Workshop and Concert in the Dark, Marienmünster Abbey",
		vechta: "Project with University of Vechta students",
		homeIntro: "Through vode academy, choirs and schools invite our ensemble into their rehearsals. We develop workshops and choral projects together. Scores and tutorials from past projects are available here to use again.",
		toMaterial: "Go to materials",
		backToAcademy: "About vode academy",
		materialNote: "Songs from our workshops to practise and share. Each piece comes with a tutorial and a PDF score.",
		pieceLink: "Link to this piece",
		pdf: "Score (PDF)",
		cloudy: "A tutorial and score for “Cloudy Day” to sing along and practise.",
		lion: "The individual vocal lines and score for the quodlibet on “Lion” by Saint Mesa.",
		voice: "Share and sing “The Voice Inside” with its tutorial and score.",
	},
	// Other sections will be added here
};

export default en;
