import styles from './Datenschutz.module.css';

function Datenschutz() {
  return (
    <div className={styles.datenschutzBody}>
      <div className={styles.datenschutzContainer}>
        <h1 className={styles.datenschutzH1}>Datenschutzerklärung</h1>

        <h2 className={styles.datenschutzH2}>1. Verantwortlicher</h2>
        <p className={styles.datenschutzP}>
          <strong className={styles.datenschutzStrong}>Marco Jan</strong><br />
          Körösistraße 196<br />
          8010 Graz<br />
          Austria<br />
          E-Mail: <a href="mailto:marco.jan@gmx.de" className={styles.datenschutzA}>marco.jan@gmx.de</a>
        </p>

        <h2 className={styles.datenschutzH2}>2. Hosting</h2>
        <p className={styles.datenschutzP}>
          Diese Website wird von <strong className={styles.datenschutzStrong}>Vercel</strong> (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet.
          Beim Besuch dieser Website speichert Vercel automatisch verschiedene Informationen in sogenannten Server-Log-Dateien,
          die Ihr Browser automatisch übermittelt, wie z.B. IP-Adressen, Browser-Typ, Datum und Uhrzeit des Zugriffs.
          Weitere Informationen finden Sie in der <a href="https://vercel.com/legal/privacy-policy" className={styles.datenschutzA}>Datenschutzerklärung von Vercel</a>.
        </p>

        <h2 className={styles.datenschutzH2}>3. Speicherung personenbezogener Daten</h2>
        <p className={styles.datenschutzP}>Ich speichere keine personenbezogenen Daten von Besuchern dieser Website.</p>

        <h2 className={styles.datenschutzH2}>4. Externe Links</h2>
        <p className={styles.datenschutzP}>
          Diese Website enthält Links zu externen Websites, auf deren Inhalte ich keinen Einfluss habe.
          Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>

        <h2 className={styles.datenschutzH2}>5. Ihre Rechte</h2>
        <p className={styles.datenschutzP}>Sie haben das Recht, jederzeit unentgeltlich Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
      </div>
    </div>
  );
}

export default Datenschutz;
