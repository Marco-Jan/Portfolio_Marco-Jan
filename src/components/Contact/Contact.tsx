import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
    return <footer className={styles.container} id="contact">
        {/* <div className={styles.text}>
            <h2>Contact</h2>
            <p>Get in touch!</p>
        </div> */}
        <ul className={styles.links}>
            <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")}  className={styles.contactImg} alt="Email Icon" />
<<<<<<< HEAD
                <a href="mailto:marco.jan@gmx.de">Contact</a>
=======

                <a href="mailto:marco.jan@gmx.de">Contact</a>

>>>>>>> 9e4dc18e7f7c8cb64187337756d378427c575097
            </li>
            
            <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} className={styles.contactImg} alt="Github Icon" />
                <a href="https://github.com/Marco-Jan">github.com/Marco-Jan</a>
            </li>
        </ul>
    </footer>
}