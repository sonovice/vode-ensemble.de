import type { BaseDictionary } from "./config";

const de: BaseDictionary = {
	nav: {
		ensemble: "Ensemble",
		konzerte: "Konzerte",
		academy: "Academy",
		media: "Medien",
		kontakt: "Kontakt",
		support: "Unterstützen",
		supportAction: "Unterstützen", // For the button with arrow
		openMenu: "Menü öffnen",
		closeMenu: "Menü schließen",
		// Language switcher labels will be handled by LocalesLabels from config
	},
	hero: {
		mainTitle: "Vocal Jazz",
		subTitle: "& Pop",
	},
	feature: {
		sectionTag: "Neu",
		title: "vode × New York Voices",
		songTitle: "Bli-Blip",
		intro: 'Über ein Jahr in der Entwicklung – endlich können wir unsere geheime Kollaboration mit den legendären <a href="https://newyorkvoices.com/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">New York Voices</a> präsentieren!',
		story1: 'Alles begann beim Black Forest Voices Festival im Juni 2024, wo Kim Nazarian von den <a href="https://newyorkvoices.com/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">New York Voices</a> unser Ensemble coachte. Aus dieser Begegnung entstand die Idee zu dieser besonderen Zusammenarbeit.',
		story2: "Das Arrangement stammt ursprünglich von Darmon Meader (New York Voices) und Michael Abene. Unser Bassist Manuel Grunden hat es in eine reine A-cappella-Version verwandelt – und dabei gleich auch Produktion, Mix und Videoschnitt übernommen.",
		story3: 'Im November 2024 nahmen wir unseren Part bei Fattoria Musica mit <a href="https://juliusgass.de/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">Julius Gass</a> auf. Ein Jahr nach dem ersten Treffen entstand dann das Musikvideo im wunderschönen Cafe Cup in Detmold – mit tatkräftiger Unterstützung von <a href="https://larshenrik.com/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">Lars Henrik</a>.',
	},
	ensemble: {
		sectionTag: "Über uns",
		title: "Das Ensemble",
		paragraph1:
			'<span class="italic">vode</span> steht für musikalische Leidenschaft, die weit über Noten und Harmonien hinausgeht. Ob im vollen Ensemble oder in kleineren Besetzungen: Jeder Auftritt zeigt die Vielfalt unseres ganz eigenen vode-Klanges und lässt unser Publikum den Gesang hautnah erleben - berührend, kraftvoll, direkt.',
		paragraph2:
			"Als Vokalensemble haben wir uns 2021 gegründet und sind seitdem musikalisch und freundschaftlich miteinander verbunden.",
		paragraph3:
			"Wir sind ein Kollektiv von rund 20 Musiker:innen, die unsere verschiedenen kreativen Ideen und Potenziale in das Ensemble einbringen. Zusammengewoben zu einem musikalischen Gesamtbild werden diese Ideen von Katharina Gärtner und Simon Herten. Seit 2022 haben wir mehrere Konzertprogramme auf die Bühnen gebracht (u. a. in der Elbphilharmonie in Hamburg und der Rudolf-Oetker-Halle in Bielefeld) und an Festivals teilgenommen (z. B. dem Black Forest Voices Festival in Freiburg und TotalChoral in Berlin).",
		membersTitle: "Mitglieder",
		selectVoiceGroupPrompt: "Bitte eine Stimmgruppe auswählen.",
		voiceSoprano: "Sopran",
		voiceMezzo: "Mezzosopran",
		voiceAlto: "Alt",
		voiceTenor: "Tenor",
		voiceBaritone: "Bariton",
		voiceBass: "Bass",
		leadershipTitle: "Leitung",
		leadershipParagraph:
			"Solistische, kompositorische oder organisatorische Parts werden von verschiedenen Mitgliedern übernommen. Die künstlerische Gesamtverantwortung für den Probenprozess und die Konzertgestaltung liegen bei Katharina Gärtner und Simon Herten. Die organisatorische Leitung des Ensembles und das Booking übernehmen Feli Ammer und Maria Waloschek.",
		websiteLinkText: "Website",
		maybeYouName: "Vielleicht du?",
		maybeYouDescriptionBass: "Wir suchen Verstärkung im Bass!",
		maybeYouIconTitle: "Fragezeichen Icon",
		portraitAltPrefix: "Portrait von",
		placeholderIconTitle: "Platzhalter Benutzer-Icon",
		// Member descriptions would be extensive to add here, skipping for now as per strategy
	},
	concerts: {
		sectionTag: "Konzerte",
		title: "Anstehende Events",
		noUpcomingFallback: "Konzerte und Projekte sind in Planung.",
		noUpcomingRequest: "Du möchtest vode live erleben oder für ein Konzert anfragen?",
		noUpcomingRequestLink: "Schreib uns",
		pastTitle: "Vergangene Konzerte",
		noPastForYearFallback: "Keine Konzerte für dieses Jahr im Archiv.",
		timeSuffix: "Uhr",
	},
	academy: {
		title: "vode academy",
		learnMore: "Mehr erfahren",
		audioTitle: "Sendungsmitschnitt von Deutschlandfunk Kultur",
		audioSubtitleLinkText: "„Chor der Woche“",
		audioSubtitlePostLink: " von Nicolas Hansen",
		audioCoverAlt: "Cover für den Podcast 'Chor der Woche'",
		audioFallback: "Dein Browser unterstützt das Audio-Element nicht.",
		pastProjectsTitle: "Vergangene Projekte",
		// Academy2025 specific translations
		academy2025: {
			heroTitle: "vode academy 2025:",
			heroSubtitle: "Chor macht Schule",
			heroDescription:
				"Du singst gerne und hast Lust, ein Wochenende lang mit professionellen Coaches an neuen Songs zu arbeiten, deine Stimme zu entdecken und am Ende alles bei einem Konzert auf die Bühne zu bringen? Dann bist du bei der vode academy 2025 genau richtig! Vom 30. bis 31. August 2025 in St. Ida in Herzfeld erwartet dich ein Wochenende voller Musik, Gemeinschaft und unvergesslicher Live-Momente.",
			timeLabel: "Zeitraum",
			timeValue: "30. & 31. August",
			locationLabel: "Ort & Adresse",
			locationValue: "St. Ida in Herzfeld",
			locationDetail: "Treffpunkt Haus Idenrast",
			addressValue: "Lippstädter Str. 10, 59510 Herzfeld",
			addressAlt: "oder",
			transportTitle: "Anreise",
			transportText:
				"Die Anreise erfolgt umweltfreundlich über Shuttlebusse! Hier findest du die genauen Abfahrtszeiten für die beiden Linien, die euch aus der Region zu uns nach Herzfeld fahren.",

			organizational: {
				sectionTag: "Organisatorisches",
				title: "Alle Details zum Wochenende",
			},

			experience: {
				sectionTag: "Dein Academy-Erlebnis",
				title: "Was dich bei uns erwartet",
				point1: {
					title: "Profi-Coaching",
					text: "Lerne von erfahrenen Coaches, wie du deine Stimme richtig einsetzt und souverän auf der Bühne stehst.",
				},
				point2: {
					title: "Live-Erlebnis",
					text: "Präsentiere die Ergebnisse aus den Workshops bei einem Werkstatt-Konzert und erlebe <strong>vode</strong> hautnah bei ihrem A-cappella-Konzert am zweiten Tag.",
				},
				point3: {
					title: "Songs & Spaß",
					text: "Lerne gemeinsam neue Lieder, die zu dir passen und die du mit nach Hause nehmen kannst – Spaß garantiert.",
				},
				point4: {
					title: "Team & Community",
					text: "Knüpfe neue Freundschaften, erlebe magische Konzertstimmung und werde Teil einer unvergesslichen Gemeinschaft.",
				},
			},

			scheduleTitle: "Wie ist der Ablauf an den beiden Tagen?",
			scheduleSectionTag: "Zeitplan",
			saturdayTitle: "SAMSTAG",
			sundayTitle: "SONNTAG",
			additionalInfoTitle: "Was du noch wissen musst...",
			additionalInfoSectionTag: "Wichtige Infos",
			freeText:
				"Das Projekt ist mit Mitteln aus dem LEADER-Programm gefördert und daher für dich <strong>komplett kostenfrei</strong>.",
			snacksText:
				"An beiden Tagen gibt es <strong>Snacks und etwas zu Trinken</strong> für dich.",
			songsText:
				"Aktuell komponieren und arrangieren wir noch fleißig für dich. Sobald wir alles zusammen haben, findest du den <strong>Zugang zu den Songs hier auf dieser Seite</strong>.",
			formatsExpertiseTag: "Unsere Expertise",
			newsSectionTag: "News & Sheets",
			newsTitle: "Material & Tutorials",
			newsIntro:
				"Hier laden wir nach und nach neues Material für euch hoch. Schaut also immer mal wieder vorbei!",
			voiceInsideTitle: "The Voice Inside - Tutorial",
			newsText:
				'Hey, habt ihr schon das "The Voice Inside" Tutorial gecheckt? Die Noten dazu findet ihr jetzt hier bei uns als Download! Perfekt, um schon mal reinzukommen und euch auf den Workshop vorzubereiten. Viel Spaß beim Üben!',
			downloadButton: "Noten herunterladen",
			cloudyDayTitle: "Cloudy Day - Tutorial",
			cloudyDayText:
				'Neu am Start: Unser Tutorial zu "Cloudy Day"! Der Song ist ein Kanon – ideal zum gemeinsamen Singen und zum Warmwerden. Die Noten gibt’s hier als Download. Viel Spaß beim Ausprobieren!',
			lionLinesTitle: "Quodlibet Lion - Tutorial",
			lionLinesText:
				"Heute nimmt euch Feli mit, um mit ihr zwei kleine Lines aus verschiedenen Songs zu lernen. Am Ende soll alles zu dem Song „Lion“ von Saint Mesa passen, sodass wir damit gemeinsam eine ganz neue Live-Version bei unserem Workshop kreieren können. Viel Spaß beim Mitsingen!",
			workshops: {
				sectionTag: "Unsere Workshops",
				title: "Wähle deinen Workshop",
				headers: {
					leitung: "Leitung",
					topic: "Workshop-Thema",
					learn: "Das lernst du hier",
				},
				rows: {
					"1": {
						leaders: "Simon und Krissi",
						topic: "Sing 'n Dance with Dua Lipa",
						learn:
							"Du lernst einen bekannten Song von Dua Lipa und eine nice Choreo gleich mit.",
					},
					"2": {
						leaders: "Christoph und Martin",
						topic: "Catch the Sound of Impro",
						learn:
							"Wie man spontane, musikalische Ideen improvisiert und diese mit Aufnahmetechnik festhält.",
					},
					"3": {
						leaders: "Sümeyye und Thea",
						topic: "Ukulele meets voice",
						learn: "Wie man Gesang und Ukulele-Spiel miteinander verbindet.",
					},
					"4": {
						leaders: "Liane und Niklas",
						topic: "Drums & Voice – all in your body",
						learn:
							"Wie man Rhythmusgefühl und Body Percussion mit der eigenen Stimme kombiniert.",
					},
				},
			},
			bus: {
				accordionTitle: "Busfahrpläne anzeigen",
				line1: {
					title: "Linie 1: Delbrück – Lippstadt – Wadersloh",
					sat: {
						stop1: "09:30 Uhr Delbrück, Hst. Lange Str.",
						stop2: "10:00 Uhr Lippstadt, Busbahnhof",
						stop3: "10:25 Uhr Wadersloh, Kirche",
					},
					sun: {
						stop1: "14:00 Uhr Delbrück, Hst. Lange Str.",
						stop2: "14:30 Uhr Lippstadt, Busbahnhof",
						stop3: "14:55 Uhr Wadersloh, Kirche",
					},
				},
				line2: {
					title: "Linie 2: Körbecke – Soest",
					sat: {
						stop1: "09:45 Uhr Körbecke, Haus des Gastes",
						stop2: "10:05 Uhr Soest, Stadthalle",
					},
					sun: {
						stop1: "14:15 Uhr Körbecke, Haus des Gastes",
						stop2: "14:35 Uhr Soest, Stadthalle",
					},
				},
			},
		},
	},
	media: {
		sectionTag: "Medien",
		title: "Einblicke und Pressematerial",
		paragraph1:
			"Hier findest du eine Auswahl unserer neuesten Aufnahmen, Videos und unser Presse-Kit.",
		paragraph2:
			"Wir arbeiten ständig an neuem Material. Besuch uns bald wieder, um nichts zu verpassen.",
		instagramAriaLabel: "Vode Ensemble auf Instagram",
		facebookAriaLabel: "Vode Ensemble auf Facebook",
		recordingsTitle: "Aufnahmen",
		audioFallback: "Dein Browser unterstützt das Audio-Element nicht.",
		credits: {
			musicalDirection: "Musikalische Leitung",
			recording: "Aufnahme",
			recordingMaster: "Aufnahme/Master",
			recordingEditMixMaster: "Aufnahme/Edit/Mix/Master",
			recordingMix: "Aufnahme/Mix",
			soloVocalsRecording: "Aufnahme Solo Vocals",
			productionMixVideoEdit: "Produktion/Mix/Video Edit",
			videoConceptProduction: "Video Konzept & Produktion",
			sound: "Ton",
		},
		videosTitle: "Videos",
		pressKitTitle: "Presse-Kit & Rider",
		pressKitParagraph:
			"Das Presse-Kit sowie unser Technical Rider werden gerade überarbeitet und in Kürze hier zur Verfügung gestellt.",
		instagramTitle: "Instagram Logo",
		facebookTitle: "Facebook Logo",
	},
	contact: {
		sectionTag: "Kontakt",
		title: "So kannst du uns erreichen",
		subtitle1: "Bleib informiert",
		paragraph1:
			"Möchtest du regelmäßig über unsere Musik und Auftritte erfahren? Hier kannst du dich für unseren Newsletter anmelden oder uns auf Social Media folgen.",
		newsletterButton: "Newsletter",
		newsletterIconTitle: "Newsletter Icon",
		paragraph2:
			'Und wenn\'s noch etwas mehr sein darf und du mit exklusiven Einblicken, Backstage-News und der Möglichkeit, uns aktiv zu unterstützen dabei sein möchtest, dann kommst du hier zu unseren <a href="#support" class="text-[var(--color-accent)] hover:underline">Community-Updates</a>.',
		subtitle2: "Booking & Anfragen",
		paragraph3:
			'Für Buchungsanfragen oder sonstige Anliegen erreichst du Maria Waloschek und Feli Ammer über <a href="mailto:mail@vode-ensemble.de" class="text-[var(--color-accent)] hover:underline">mail@vode-ensemble.de</a>.',
	},
	adventskalender: {
		sectionTag: "Adventskalender",
		coverAlt: "Cover von Human Heart von vode",
		songTitle: "Human Heart",
		artist: "vode",
		audioFallback: "Dein Browser unterstützt das Audio-Element nicht.",
		greeting: 'Herzliche Adventsgrüße von <span class="italic">vode</span>!',
		message: "Wir hoffen, dieser Song bringt dir ein wenig Wärme und Freude in dieser besonderen Zeit.",
		backLink: "Zurück zu vode-ensemble.de",
		backIconTitle: "Zurück-Pfeil",
	},
	support: {
		imageAlt: "Unterstützung Impression",
		sectionTag: "Support",
		title: "Unterstütze uns",
		introParagraph1:
			"Unsere Projekte tragen sich durch das große Engagement aller Ensemblemitglieder und der finanziellen Hilfe unserer Unterstützer. Jeder Beitrag hilft uns, Probenphasen und Konzerte durchzuführen, neue Kompositionen und Arrangements in Auftrag zu geben, Raummieten zu finanzieren und Aufnahmen und Videos zu realisieren.",
		introParagraph2:
			"Als gemeinnütziger Verein sind wir in der Lage, Bescheinigungen über Beiträge und Spenden auszustellen. Schreibt uns bei Bedarf bitte an: mail@vode-ensemble.de",
		friendsTitle: "Freunde und Förderer",
		friendsParagraph1:
			"Werde Teil der vode-community, indem du unsere Arbeit mit einem selbst festgelegten regelmäßigen Beitrag unterstützt. Hierdurch hast du Zugang zu unseren Community-Updates, bist hautnah dabei, wie hinter den Kulissen neue Projekt-Ideen gesponnen werden und bekommst Einblicke in unsere Probenarbeit und natürlich weißt du dadurch als erstes über neue Konzerte Bescheid. Diese Form der Unterstützung ermöglicht uns eine langfristige Planung und ist deshalb sehr wertvoll für uns.",
		friendsParagraph2:
			'Für weitere Infos hierzu schreib uns unter <a href="mailto:mail@vode–ensemble.de" class="text-[var(--color-accent)] hover:underline">mail@vode–ensemble.de</a>.',
		donationsTitle: "Spenden",
		donationsParagraph1:
			"Wenn du uns einmalig unterstützen möchtest, freuen wir uns sehr über eine Spende per Überweisung.",
		// PayPal-Konto vorübergehend gesperrt / PayPal account temporarily blocked
		// paypalButtonText: "Über PayPal spenden",
		donationsReferenceLabel: "Stichwort:",
		donationsReferenceValue: "Spende",
		sponsorsTitle: "Sponsoren",
		sponsorsParagraph1:
			"Um die Wertschätzung sichtbar zu machen, möchten wir auch etwas zurückgeben und uns öffentlich für das kulturelle Engagement bedanken. Dafür werden Sponsor:innen auf Konzertplakaten, Flyern oder Programmheften genannt, indem wir Logos oder Namen platzieren. Darüber hinaus bewerben wir unsere Sponsor:innen auch über unsere digitalen Kanäle.",
		closingParagraph:
			"Danke, dass durch eure finanziellen Beiträge Kultur ermöglicht wird und wir so gemeinsam musikalische Begegnungen schaffen können!",
	},
	lightbox: {
		close: "Bild schließen",
	},
	academyPage: {
		title: "vode academy",
		claim: "Wir geben weiter, was uns selbst bewegt.",
		intro: "Mit Chören, Schulen und jungen Menschen teilen wir unsere Probenarbeit. Wir singen zusammen, probieren aus und erarbeiten gemeinsam, wie ein Stück klingen soll.",
		heroImageAlt: "Jugendliche und Sänger:innen von vode singen und tanzen gemeinsam im Innenhof von St. Ida in Herzfeld",
		planProject: "Ein Projekt mit vode planen",
		materialTitle: "Noten & Tutorials",
		appearanceDate: "3. Oktober 2026 · chor.com Leipzig",
		appearanceText: "Katharina Gärtner und Felicitas Ammer stellen „Chor macht Schule“ in einem Workshop vor und probieren Elemente daraus gemeinsam aus.",
		appearanceLink: "Zum Workshop",
		motivationTitle: "Warum wir das tun",
		motivationText: "Wir möchten, dass Menschen erleben, wie ihre Stimme in einer Gruppe gehört und gebraucht wird. Dafür bringen wir unsere Erfahrungen aus Vocal Coaching, Schule, Tontechnik, Arrangement und Komposition mit. Wie in unseren eigenen Proben übernehmen die Beteiligten Verantwortung für die Musik.",
		audienceText: "Wie soll eine Zeile klingen? Welches Bild passt zu einem Wort? Das handeln wir gemeinsam aus. Dabei erfahren Teilnehmende, wie ihre eigenen Ideen den Klang verändern.",
		motivationSingingAlt: "Sänger:innen von vode singen mitten zwischen den Teilnehmenden",
		motivationUkuleleAlt: "Eine Teilnehmerin übt ein Stück auf der Ukulele",
		hearEnsemble: "vode als Ensemble hören",
		radioTitle: "vode im Radio",
		documentary: "Chor macht Schule – der Film",
		documentaryPosterAlt: "Jugendliche singen beim Abschlusskonzert in der Basilika St. Ida",
		filmContext: "Herzfeld, August 2025 · ca. 8 Minuten",
		filmText: "Ein Wochenende lang probten Jugendliche aus Schulchören der Region mit vode, am zweiten Tag sangen sie gemeinsam mit uns im Konzert. Unsere Sänger:innen saßen zwischen den Teilnehmenden. Der Film zeigt, wie sie gemeinsam Musik und einander kennengelernt haben – und wie daraus Kontakte zwischen den Schulchören entstanden sind.",
		filmSoon: "Der Film erscheint in Kürze auf YouTube.",
		filmReleaseOn: "Der Film erscheint am",
		teaser: "Einblicke in „Chor macht Schule“",
		teaserPosterAlt: "Teilnehmende singen sich mit Bewegung ein",
		play: "Video abspielen",
		offerTitle: "Mit vode zusammenarbeiten",
		offerIntro: "Für Chorleitungen, Schulen und Veranstalter gibt es verschiedene Möglichkeiten der Zusammenarbeit. Umfang und Besetzung richten sich nach dem Vorhaben.",
		expertTitle: "Coaching zu einem Thema",
		expert: "Einzelne Ensemblemitglieder arbeiten mit einem Chor an einer konkreten Frage, etwa Groove und Timing, Atmung oder Mikrofonierung.",
		expertImageAlt: "Ein vode-Sänger leitet eine Übung an",
		collectiveTitle: "Mit den Stimmgruppen arbeiten",
		collective: "Die Stimmgruppen entwickeln mit vode-Mitgliedern eigene Klangvorstellungen und geben sich gegenseitig Rückmeldung. Die Chorleitung führt die Ergebnisse zusammen.",
		collectiveImageAlt: "Eine Stimmgruppe probt mit Noten im Stuhlkreis",
		intensivTitle: "Ein gemeinsames Chorprojekt",
		intensiv: "Über einen oder mehrere Tage erarbeiten Teilnehmende mit vode Repertoire für ein gemeinsames Abschlusskonzert. „Chor macht Schule“ zeigt, wie ein solches Projekt aussehen kann.",
		intensivImageAlt: "Jugendliche und vode beim Abschlusskonzert in der Basilika St. Ida",
		talksTitle: "Vorträge und Fortbildungen",
		talks: "Auf Fachtagungen und in Fortbildungen für Chorleitungen berichten wir von unseren Projekten und probieren Elemente daraus praktisch aus.",
		talksImageAlt: "Eine Chorleiterin leitet eine Gruppe an",
		contact: "Ein Projekt im Kopf?",
		contactShort: "Schreibt uns, mit welchem Chor oder welcher Schule ihr arbeitet und was ihr vorhabt. Dann besprechen wir, wie vode dabei mitwirken kann.",
		contactButton: "Über ein Projekt sprechen",
		marienmuenster: "Workshop und Concert in the Dark, Abtei Marienmünster",
		vechta: "Projekt mit Studierenden der Uni Vechta",
		homeIntro: "Mit der vode academy holen Chöre und Schulen unser Ensemble in ihre Proben. Wir entwickeln gemeinsam Workshops und Chorprojekte. Noten und Tutorials aus bisherigen Projekten stehen hier zum Weiterverwenden bereit.",
		toMaterial: "Direkt zum Material",
		backToAcademy: "Über die vode academy",
		materialNote: "Die Stücke aus unseren Workshops zum Nachsingen und Weitergeben. Zu jedem Stück gibt es ein Tutorial und die Noten als PDF.",
		pieceLink: "Link zu diesem Stück",
		pdf: "Noten (PDF)",
		cloudy: "Ein Tutorial und die Noten zu „Cloudy Day“ zum Mitsingen und Üben.",
		lion: "Die einzelnen Vocal Lines und die Noten zum Quodlibet auf „Lion“ von Saint Mesa.",
		voice: "Mit Tutorial und Noten „The Voice Inside“ weitergeben und gemeinsam singen.",
	},
	// Other sections will be added here
};

export default de;
