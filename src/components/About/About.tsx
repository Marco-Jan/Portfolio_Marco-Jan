import { getImageUrl } from "../../utils"
import styles from "./About.module.css";

export const About = () => {
    return <section>
        <h2>About</h2>
        <div><img src={getImageUrl("about/skills.png")} alt="About Picture" className={styles.aboutImg} />
            <ul>
            <li><img src={getImageUrl("about/frontend.png")} alt="Frontend " className={styles.technoImg} /> //TODO: ALt text fertig ausfüllen
                    <div>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                    </div>
                </li>
                <li><img src={getImageUrl("about/backend.png")} alt="Backend" className={styles.technoImg} />
                    <div>
                        <h3>Backend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                    </div>
                </li>
                <li><img src={getImageUrl("about/uiDesign.png")} alt="" className={styles.technoImg} />
                    <div>
                        <h3>UI </h3>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}