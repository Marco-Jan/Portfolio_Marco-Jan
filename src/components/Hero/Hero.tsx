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
                    "Ich bin Junior-Entwickler mit Erfahrung in der Nutzung von React, NodeJS und weiteren Technologien.",
                    "Ich spezialisiere mich auf die Erstellung interaktiver und ansprechender Webanwendungen.",
                    "Schauen Sie sich gerne mein Portfolio an und nehmen Sie Kontakt mit mir auf!"
                ],
                typeSpeed: 50,
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
                <h1 className={styles.title}>Hi I'm Marco</h1>
                <p className={styles.description}>
                    <span ref={typedRef}></span>
                </p>
                <a href="mailto:marco.jan@gmx.de" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/hero2.png")} alt="Profilbild Marco Jan" className={styles.heroImg} />
        </section>
    );
};
