import { getImageUrl } from "../../utils"
import styles from './Hero.module.css';

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Marco</h1>
            <p className={styles.description}>I'm a Junior developer with experience using React, NoteJS usw ...</p>
            <a href="mailto:marco.jan@gmx.de" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero2.jpg")} alt="Profilbild Marco Jan" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}