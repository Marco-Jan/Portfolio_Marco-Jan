import { useEffect, useRef } from 'react';
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css';
import Typed from 'typed.js';


export const Hero = () => {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedRef.current) {
            const options = {
                strings: [
                    "Hey! Schön, dass du den Weg zu meinem Portfolio gefunden hast.",
                    "Hier zeige ich dir einige meiner Lieblingsprojekte und was mich als Entwickler ausmacht.",
                    "Wenn du neugierig bist oder einfach Lust auf einen Austausch hast, melde dich gerne bei mir!"

                ],
                typeSpeed: 24,
                backSpeed: 30,
                backDelay: 1000,
                startDelay: 500,
                loop: false
            };

            const typed = new Typed(typedRef.current, options);

            return () => {
                typed.destroy();
            };
        }
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hallo ich bin Marco</h1>
                <p className={styles.description}>
                    <span ref={typedRef}></span>
                </p>
                <a href="mailto:contact@marco-jan.at" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/hero2.png")} alt="Profilbild_Marco_Jan" className={styles.heroImg} />
        </section>
    );
};
