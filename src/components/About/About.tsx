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
                                {/* <p>In meinem Werkzeugkasten finden sich nicht nur HTML, CSS und JavaScript, sondern auch eine Leidenschaft für Ästhetik. Jedes Element fügt sich zu einem harmonischen Ganzen zusammen, das Funktion und Form vereint.</p> */}
                            </div>
                            <button className={styles.skillsBtn} onClick={() => setShowFrontend(!showFrontend)}>{showFrontend ? 'X' : 'Skills'}</button>
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
                                {/* <p>Hinter jeder Anwendung steckt ein solides Fundament. Im Backend sorge ich für klare Datenstrukturen und effiziente Abläufe, damit alles reibungslos funktioniert</p> */}
                            </div>
                            <button className={styles.skillsBtn} onClick={() => setShowBackend(!showBackend)}>{ showBackend ? 'X' : 'Skills'}</button>
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
                                {/* <p>Ästhetik und Funktionalität gehen bei mir Hand in Hand. Mit einem feinen Gespür für Trends und Nutzerbedürfnisse gestalte ich digitale Erlebnisse, die nicht nur verführen, sondern auch nachhaltig überzeugen</p> */}
                            </div>
                            <button className={styles.skillsBtn} onClick={() => setShowUiDesign(!showUiDesign)}>{ showUiDesign ? 'X' : 'Skills'}</button>
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
