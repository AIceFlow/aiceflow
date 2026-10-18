import LegalLayout from "@/components/landing/LegalLayout";
import { BrandMark } from "@/components/landing/SiteFooter";

/* Inhalt unverändert aus dem bisherigen Impressum-Fenster (src/components/Impressum.tsx) */
const Impressum = () => (
  <LegalLayout title="Impressum">
    <p className="legal__lead">
      Angaben gemäß § 5 TMG
      <br />
      Verantwortlich für diese Website sind:
    </p>

    <section>
      <h2>
        <BrandMark /> GmbH
      </h2>
      <p>
        Nussdorfer Strasse 9
        <br />
        88662 Ueberlingen
        <br />
        Deutschland
      </p>
      <p>
        Felix Funke: <a href="tel:017663364095">0176 63364095</a>
        <br />
        Felix Funke: <a href="mailto:felixfunke456@gmail.com">felixfunke456@gmail.com</a>
        <br />
        Dr. Heiner Di Camillo: <a href="mailto:heiner.dicamillo@aiceflow.de">heiner.dicamillo@aiceflow.de</a>
      </p>
      <p>Vertreten durch die Geschäftsführer: Felix Funke und Dr. Heiner Di Camillo</p>
      <p>
        Handelsregistereintrag: Amtsgericht Freiburg, HRB 734207
        <br />
        USt-IdNr.: DE459248582
      </p>
    </section>

    <section>
      <h2>Verantwortliche Ansprechpartner</h2>
      <p>Für inhaltliche Rückfragen stehen Ihnen die Geschäftsführer Felix Funke und Dr. Heiner Di Camillo zur Verfügung.</p>
    </section>

    <section>
      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        <br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
    </section>

    <section>
      <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </section>

    <section>
      <h2>Hinweis</h2>
      <p>Felix Funke und Dr. Heiner Di Camillo sind gemeinsam verantwortlich für die Inhalte dieser Website.</p>
    </section>
  </LegalLayout>
);

export default Impressum;
