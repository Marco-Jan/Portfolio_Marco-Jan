import { useState } from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';
import skillsData from "../../data/skills.json";

export const About = () => {
    const [showFrontend, setShowFrontend] = useState(false);
    const [showBackend, setShowBackend] = useState(false);
    const [showUiDesign, setShowUiDesign] = useState(false);

    const frontendSkills = skillsData.filter(skill => skill.category === "frontend");
    const backendSkills = skillsData.filter(skill => skill.category === "backend");
    const uiDesignSkills = skillsData.filter(skill => skill.category === "uiDesign");

    return (
        <section className={styles.container} id="about">
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    {/* Frontend Section */}
                    <li className={`${styles.aboutItem} ${styles.glassEffect}`}>
                        <div className={styles.card}>
                            <div className={styles.technoImgContainer}>
                                <img src={getImageUrl("about/frontend.png")} alt="Frontend" className={styles.technoImg} />
                            </div>
                            <div className={styles.aboutItemtext}>
                                <h3>Frontend Developer</h3>
                                <p>Ich bin Frontend-Entwickler mit Erfahrung im Erstellen von responsiven und optimierten Webseiten</p>
                            </div>
                            <button className={styles.skillsBtn} onClick={() => setShowFrontend(!showFrontend)}>{showFrontend ? 'X' : 'Talent-Arsenal'}</button>
                            <div className={`${styles.skills} ${showFrontend ? styles.showFrontend : ''}`}>
                                {frontendSkills.map((skill, id) => (
                                    <div key={id} className={styles.skill}>
                                        <div className={styles.skillImageContainer}>
                                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                        </div>
                                        <p>{skill.title}</p>
                                        <span>
                                            <progress value={skill.skills} max={100} className={styles.progressBar}></progress>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>

                    {/* Backend Section */}
                    <li className={`${styles.aboutItem} ${styles.glassEffect}`}>
                        <div className={styles.card}>
                            <div className={styles.technoImgContainer}>
                                <img src={getImageUrl("about/backend.png")} alt="Backend" className={styles.technoImg} />
                            </div>
                            <div className={styles.aboutItemtext}>
                                <h3>Backend Developer</h3>
                                <p>Ich bin Backend-Entwickler mit fundierten Kenntnissen in der Entwicklung skalierbarer und sicherer Serveranwendungen</p>
                            </div>
                            <button className={styles.skillsBtn} onClick={() => setShowBackend(!showBackend)}>{ showBackend ? 'X' : 'Talent-Arsenal'}</button>
                            <div className={`${styles.skills} ${showBackend ? styles.showBackend : ''}`}>
                                {backendSkills.map((skill, id) => (
                                    <div key={id} className={styles.skill}>
                                        <div className={styles.skillImageContainer}>
                                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                        </div>
                                        <p>{skill.title}</p>
                                        <span>
                                            <progress value={skill.skills} max={100} className={styles.progressBar}></progress>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>

                    {/* UI Design Section */}
                    <li className={`${styles.aboutItem} ${styles.glassEffect}`}>
                        <div className={styles.card}>
                            <div className={styles.technoImgContainer}>
                                <img src={getImageUrl("about/uiDesign.png")} alt="UI Design" className={styles.technoImg} />
                            </div>
                            <div className={styles.aboutItemtext}>
                                <h3>UI Design</h3>
                                <p>Ich bin UI-Designer mit einem Auge für detailverliebtes Design und nutzerfreundliche Schnittstellen</p>
                            </div>
                            <button className={styles.skillsBtn} onClick={() => setShowUiDesign(!showUiDesign)}>{ showUiDesign ? 'X' : 'Talent-Arsenal'}</button>
                            <div className={`${styles.skills} ${showUiDesign ? styles.showUiDesign : ''}`}>
                                {uiDesignSkills.map((skill, id) => (
                                    <div key={id} className={styles.skill}>
                                        <div className={styles.skillImageContainer}>
                                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                        </div>
                                        <p>{skill.title}</p>
                                        <span>
                                            <progress value={skill.skills} max={100} className={styles.progressBar}></progress>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
