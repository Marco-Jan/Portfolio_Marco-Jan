
import styles from './About.module.css';
import  { getImageUrl} from '../../utils'; 

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={`${styles.aboutItem} ${styles.glassEffect}`}>
                        <div className={styles.card}>
                            <img src={getImageUrl("about/frontend.png")} alt="Frontend" className={styles.technoImg} />
                            <div className={styles.aboutItemtext}>
                                <h3>Frontend Developer</h3>
                                <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                            </div>
                        </div>
                    </li>
                    <li className={`${styles.aboutItem} ${styles.glassEffect}`}>
                        <div className={styles.card}>
                            <img src={getImageUrl("about/backend.png")} alt="Backend" className={styles.technoImg} />
                            <div className={styles.aboutItemtext}>
                                <h3>Backend Developer</h3>
                                <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                            </div>
                        </div>
                    </li>
                    <li className={`${styles.aboutItem} ${styles.glassEffect}`}>
                        <div className={styles.card}>
                            <img src={getImageUrl("about/uiDesign.png")} alt="UI Design" className={styles.technoImg} />
                            <div className={styles.aboutItemtext}>
                                <h3>UI Design</h3>
                                <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
