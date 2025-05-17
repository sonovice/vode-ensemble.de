import type { Component } from "solid-js";

const Impressum: Component = () => {
    return (
        <div class="container mx-auto px-4 py-8 lg:py-16 space-y-12">
            {/* Impressum Section */}
            <section id="impressum">
                <div class="flex flex-col justify-start mb-6">
                    <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                        Impressum
                    </p>
                </div>

                <h2 class="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
                <p class="mb-1">vode e.V.</p>
                <p class="mb-1">Mauerstr. 46</p>
                <p class="mb-4">33602 Bielefeld</p>
                <p class="mb-1">Vertreten durch:</p>
                <p class="mb-4">Katharina Gärtner</p>


                <h3 class="text-xl font-semibold mb-2">Kontakt</h3>
                <p class="mb-4">E-Mail: mail@vode-ensemble.de</p>

                <h2 class="text-2xl font-semibold mb-2">
                    Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <p class="mb-1">vode e.V.</p>
                <p class="mb-1">Katharina Gärtner</p>
                <p class="mb-1">Mauerstr. 46</p>
                <p class="mb-4">33602 Bielefeld</p>

                <h2 class="text-2xl font-semibold mb-2">Datenschutz</h2>
                <p class="mb-4">
                    Informationen zum Umgang mit personenbezogenen Daten finden Sie in
                    unserer{" "}
                    <a href="#datenschutz" class="text-[var(--color-accent)] hover:underline">
                        Datenschutzerklärung
                    </a>
                    .
                </p>

                <h2 class="text-2xl font-semibold mb-2">Streitbeilegung</h2>
                <p class="mb-2">
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                        href="https://ec.europa.eu/consumers/odr"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[var(--color-accent)] hover:underline"
                    >
                        https://ec.europa.eu/consumers/odr
                    </a>
                    .
                </p>
                <p class="mb-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                    einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>

            {/* Divider */}
            <hr class="border-t border-gray-300" />

            {/* Datenschutzerklärung Section */}
            <section id="datenschutz">
                <div class="flex flex-col justify-start mb-6">
                    <p class="font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                        Datenschutzerklärung
                    </p>
                </div>

                <p class="mb-4">
                    Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der
                    EU-Datenschutzgrundverordnung (DSGVO), ist:
                </p>
                <p class="mb-1">vode e.V.</p>
                <p class="mb-1">Vertreten durch: Katharina Gärtner</p>
                <p class="mb-1">Mauerstr. 46</p>
                <p class="mb-1">33602 Bielefeld</p>
                <p class="mb-6">
                    E-Mail: mail@vode-ensemble.de
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-2">
                    1. Allgemeines und Pflichtinformationen
                </h3>
                <p class="mb-2">
                    Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir
                    behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                    gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p>
                    Diese Webseite dient der Information über unsere Vereinstätigkeit
                    und der Kontaktaufnahme.
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-2">
                    2. Datenerfassung beim Besuch unserer Website (Hosting via GitHub Pages)
                </h3>
                <h4 class="text-lg font-semibold mt-4 mb-2">
                    a) Art und Zweck der Verarbeitung:
                </h4>
                <p class="mb-2">
                    Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen
                    allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles)
                    beinhalten etwa die Art des Webbrowsers, das verwendete
                    Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre
                    IP-Adresse und ähnliches. Diese Daten werden durch den Hosting-Anbieter
                    unserer Webseite, GitHub Pages, erhoben.
                </p>
                <p class="mb-2">
                    Anbieter ist GitHub, Inc., 88 Colin P. Kelly Jr. St., San Francisco,
                    CA 94107, USA, bzw. für Nutzer in Europa GitHub B.V., Prins
                    Bernhardplein 200, 1097JB Amsterdam, Niederlande.
                </p>
                <p class="mb-2">
                    Gemäß der Datenschutzerklärung von GitHub ("GitHub Privacy Statement")
                    werden diese Daten insbesondere zu folgenden Zwecken verarbeitet:
                </p>
                <ul class="list-disc list-inside mb-2 ml-4 space-y-1">
                    <li>
                        Bereitstellung, Wartung und Sicherung der Dienste (Gewährleistung
                        eines stabilen und sicheren Betriebs der Webseite)
                    </li>
                    <li>Fehlerbehebung und Analyse der Serverauslastung</li>
                    <li>
                        Erkennung und Verhinderung von Missbrauch und Sicherheitsvorfällen
                    </li>
                    <li>Einhaltung rechtlicher Verpflichtungen</li>
                </ul>
                <p>
                    Diese Daten werden von uns nicht verwendet, um Rückschlüsse auf Ihre
                    Person zu ziehen. Sie werden von GitHub gemäß deren Richtlinien
                    verarbeitet und gespeichert. Eine Zusammenführung dieser Daten mit
                    anderen Datenquellen wird von uns nicht vorgenommen.
                </p>
                <h4 class="text-lg font-semibold mt-4 mb-2">b) Rechtsgrundlage:</h4>
                <p>
                    Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis des
                    berechtigten Interesses an der Verbesserung der Stabilität,
                    Funktionalität und Sicherheit unserer Website sowie des berechtigten
                    Interesses von GitHub am Betrieb seiner Infrastruktur.
                </p>
                <h4 class="text-lg font-semibold mt-4 mb-2">c) Speicherdauer:</h4>
                <p>
                    Die Daten (Server-Logfiles) werden von GitHub gespeichert. Die genaue
                    Speicherdauer wird durch GitHub festgelegt und richtet sich nach den
                    Erfordernissen des Betriebs und der Sicherheit sowie ggf. gesetzlicher
                    Vorgaben. Details entnehmen Sie bitte der Datenschutzerklärung von
                    GitHub. Sobald die Daten für die Erreichung des Zweckes ihrer Erhebung
                    nicht mehr erforderlich sind, werden sie in der Regel gelöscht oder
                    anonymisiert.
                </p>
                <h4 class="text-lg font-semibold mt-4 mb-2">
                    d) Internationale Datenübertragung:
                </h4>
                <p>
                    Das Hosting der Webseite über GitHub Pages beinhaltet die Verarbeitung
                    von Daten auf Servern von GitHub, die sich auch in den USA befinden
                    können. GitHub sichert die Einhaltung des europäischen
                    Datenschutzniveaus durch Teilnahme am EU-U.S. Data Privacy Framework
                    (DPF) sowie durch den Einsatz von Standardvertragsklauseln (Standard
                    Contractual Clauses – SCCs) der Europäischen Kommission zu. Details
                    hierzu finden Sie in der Datenschutzerklärung von GitHub:{" "}
                    <a
                        href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[var(--color-accent)] hover:underline"
                    >
                        https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
                    </a>
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-2">3. Cookies</h3>
                <p class="mb-2">
                    Unsere Webseite wird über GitHub Pages bereitgestellt. GitHub selbst
                    verwendet laut seiner Datenschutzerklärung ("Our use of cookies and
                    tracking technologies") technisch notwendige Cookies, um grundlegende
                    Funktionen der Webseite zu ermöglichen, Ihre Sitzung zu verwalten
                    (z.B. Präferenzen zu speichern) und die Sicherheit zu gewährleisten.
                    Diese Cookies sind für den Betrieb der Seite erforderlich.
                </p>
                <p class="mb-2">
                    Rechtsgrundlage für den Einsatz technisch notwendiger Cookies ist Art.
                    6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer technisch
                    fehlerfreien und optimierten Bereitstellung der Dienste).
                </p>
                <p class="mb-2">
                    Wir selbst setzen über die von GitHub bereitgestellte Infrastruktur
                    hinaus keine eigenen Cookies, insbesondere keine Tracking- oder
                    Analyse-Cookies. GitHub kann auf bestimmten Seiten (z.B. "Enterprise
                    Marketing Pages") nicht-essentielle Cookies für Analyse- oder
                    Werbezwecke einsetzen; dies sollte auf einer Standard-GitHub-Pages-Seite
                    wie dieser jedoch nicht der Fall sein. Sollte GitHub auf dieser Seite
                    Optionen zur Cookie-Verwaltung anbieten (z.B. über einen Link im
                    Footer), können Sie dort Einstellungen vornehmen.
                </p>
                <p>
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
                    Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
                    Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
                    das automatische Löschen der Cookies beim Schließen des Browsers
                    aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
                    dieser Website eingeschränkt sein.
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-2">
                    4. Kontaktaufnahme per E-Mail
                </h3>
                <p class="mb-2">
                    Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen
                    übermittelten personenbezogenen Daten (Ihre E-Mail-Adresse sowie der
                    Inhalt Ihrer Nachricht) zum Zwecke der Bearbeitung Ihrer Anfrage und
                    für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p class="mb-2">
                    Rechtsgrundlage für die Verarbeitung der Daten ist bei Anfragen zu
                    unseren Dienstleistungen oder unserer Vereinstätigkeit Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur
                    Durchführung vorvertraglicher Maßnahmen bzw. zur Vertragserfüllung). Bei sonstigen Anfragen ist
                    die Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                    an der Bearbeitung der an uns gerichteten Anfrage).
                </p>
                <p>
                    Die von Ihnen per E-Mail übersandten Daten verbleiben bei uns, bis Sie
                    uns zur Löschung auffordern, der Zweck für die Datenspeicherung
                    entfallen ist (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage)
                    oder gesetzliche Aufbewahrungspflichten (z.B. aus Handels- oder
                    Steuerrecht) einer Löschung entgegenstehen.
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-2">
                    5. Ihre Rechte als betroffene Person
                </h3>
                <p class="mb-2">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
                    das Recht auf:
                </p>
                <ul class="list-disc list-inside mb-2 ml-4 space-y-1">
                    <li>
                        Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten
                        (Art. 15 DSGVO)
                    </li>
                    <li>
                        Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)
                    </li>
                    <li>
                        Löschung Ihrer bei uns gespeicherten personenbezogenen Daten (Art.
                        17 DSGVO), soweit keine Verarbeitung zur Erfüllung einer rechtlichen
                        Verpflichtung, aus Gründen des öffentlichen Interesses oder zur
                        Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                        erforderlich ist.
                    </li>
                    <li>
                        Einschränkung der Verarbeitung Ihrer personenbezogenen Daten (Art. 18
                        DSGVO)
                    </li>
                    <li>
                        Widerspruch gegen die Verarbeitung Ihrer Daten bei uns, sofern diese
                        auf Art. 6 Abs. 1 lit. f DSGVO beruht (Art. 21 DSGVO)
                    </li>
                    <li>
                        Datenübertragbarkeit, sofern die Verarbeitung auf einer Einwilligung
                        oder einem Vertrag beruht und mithilfe automatisierter Verfahren
                        erfolgte (Art. 20 DSGVO)
                    </li>
                </ul>
                <p>
                    Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an die oben
                    angegebene Kontaktadresse.
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-2">
                    6. Beschwerderecht bei der zuständigen Aufsichtsbehörde
                </h3>
                <p class="mb-2">
                    Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                    gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei
                    einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat Ihres
                    Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
                    Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
                    betreffenden personenbezogenen Daten gegen die DSGVO verstößt (Art. 77
                    DSGVO).
                </p>
                <p class="mb-2">Die für uns zuständige Aufsichtsbehörde ist:</p>
                <p class="mb-1">
                    Landesbeauftragte für Datenschutz und Informationsfreiheit
                    Nordrhein-Westfalen
                </p>
                <p class="mb-1">Postfach 20 04 44</p>
                <p class="mb-1">40102 Düsseldorf</p>
                <p class="mb-1">Tel.: 0211/38424-0</p>
                <p class="mb-1">E-Mail: poststelle@ldi.nrw.de</p>
                <p>
                    Webseite:{" "}
                    <a
                        href="https://www.ldi.nrw.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[var(--color-accent)] hover:underline"
                    >
                        https://www.ldi.nrw.de
                    </a>
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-2">
                    7. Änderung dieser Datenschutzerklärung
                </h3>
                <p class="mb-2">
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
                    stets den aktuellen rechtlichen Anforderungen entspricht oder um
                    Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
                    z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt
                    dann die neue Datenschutzerklärung.
                </p>
                <p class="font-semibold">Stand: Mai 2024</p>
            </section>
        </div>
    );
};

export default Impressum;
