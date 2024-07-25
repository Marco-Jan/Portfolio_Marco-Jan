import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
    return <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Get in touch!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")}  className={styles.contactImg} alt="Email Icon" />
                <a href="mailto:marco.jan@gmx.de">marco.jan@gmx.de</a>
            </li>
            <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} className={styles.contactImg} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/">linkedin.com/Marco-Jan</a>
            </li>
            <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} className={styles.contactImg} alt="Github Icon" />
                <a href="https://github.com/Marco-Jan">github.com/Marco-Jan</a>
            </li>
        </ul>
    </footer>
}