
import styles from './About.module.css';
import  { getImageUrl} from '../../utils'; 

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={`${styles.aboutItem} ${styles.glassEffect}`}>
                        <div className={styles.card}>
                        <div className={styles.technoImgContainer}>
                            <img src={getImageUrl("about/frontend.png")} alt="Frontend" className={styles.technoImg} />
                            </div>
                            <div className={styles.aboutItemtext}>
                                <h3>Frontend Developer</h3>
                                <p>Ich bin Frontend-Entwickler mit Erfahrung im Erstellen von responsiven und optimierten Webseiten</p>
                            </div>
                        </div>
                    </li>
                    <li className={`${styles.aboutItem} ${styles.glassEffect}`}>
                        <div className={styles.card}>
                            <div className={styles.technoImgContainer}>
                            <img src={getImageUrl("about/backend.png")} alt="Backend" className={styles.technoImg} />
                            </div>
                            <div className={styles.aboutItemtext}>
                                <h3>Backend Developer</h3>
                                <p>Ich bin Backend-Entwickler mit fundierten Kenntnissen in der Entwicklung skalierbarer und sicherer Serveranwendungen</p>
                            </div>
                        </div>
                    </li>
                    <li className={`${styles.aboutItem} ${styles.glassEffect}`}>
                        <div className={styles.card}>
                        <div className={styles.technoImgContainer}>
                            <img src={getImageUrl("about/uiDesign.png")} alt="UI Design" className={styles.technoImg} />
                            </div>
                            <div className={styles.aboutItemtext}>
                                <h3>UI Design</h3>
                                <p>Ich bin UI-Designer mit einem Auge für detailverliebtes Design und nutzerfreundliche Schnittstellen</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
