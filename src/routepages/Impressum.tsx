
import styles from './Impressum.module.css';

function Impressum() {
  return (
    <div className={styles.impressumBody}>
      <div className={styles.impressumContainer}>
        <h1 className={styles.impressumH1}>Impressum</h1>
        <p className={styles.impressumP}>
          <strong className={styles.impressumStrong}>Marco Jan</strong><br />
          Körösistraße 196<br />
          8010 Graz<br />
          Austria
        </p>

        <p className={styles.impressumP}>
          <strong className={styles.impressumStrong}>E-Mail:</strong> <a href="mailto:marco.jan@gmx.de" className={styles.impressumA}>marco.jan@gmx.de</a>
        </p>

        <p className={styles.impressumP}>
          <strong className={styles.impressumStrong}>Verantwortlich für den Inhalt:</strong> Marco Jan
        </p>

        <h2 className={styles.impressumH2}>Haftungsausschluss</h2>
        <p className={styles.impressumP}>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>

        <h2 className={styles.impressumH2}>EU-Streitschlichtung</h2>
        <p className={styles.impressumP}>
          Gemäß der Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten möchte ich Sie über die
          Online-Streitbeilegungs-Plattform (OS-Plattform) informieren. Verbraucher haben die Möglichkeit,
          Beschwerden an die Online-Streitbeilegungs-Plattform der Europäischen Kommission unter
          <a href="http://ec.europa.eu/odr" className={styles.impressumA} target="_blank" rel="noopener noreferrer">http://ec.europa.eu/odr</a> zu richten.
          Die dafür notwendigen Kontaktdaten finden Sie oberhalb in meinem Impressum.
        </p>
      </div>
    </div>
  );
}

export default Impressum;
