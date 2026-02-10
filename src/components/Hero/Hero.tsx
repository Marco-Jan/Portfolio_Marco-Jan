import { useEffect, useRef } from 'react';
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css';
import Typed from 'typed.js';

export const Hero = () => {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: [
                "Hier entstehen Websites und Apps, die im Alltag wirklich helfen.",
                "Ich mag saubere Strukturen, klare UIs und Projekte, die funktionieren.",
                "Hast du Fragen? Immer her damit!",
                "Viel Spaß beim Stöbern!"
                ],
                typeSpeed: 24,
                backSpeed: 30,
                backDelay: 1000,
                startDelay: 500,
                loop: false
            });
            return () => typed.destroy();
        }
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Ich bin Marco Jan – Developer, Tüftler und Hundemensch.</h1>
                <p className={styles.description}>
                    <span ref={typedRef}></span>
                </p>
                {/* Dein Button mit dem Ripple-Element */}
                <a href="mailto:marco.jan@gmx.de" className={styles.contactBtn}>
                    Contact Me
                    <span className={styles.ripple}></span>
                </a>
            </div>
            <img
                src={getImageUrl("hero/marco_pixlart.png")}
                alt="Profilbild_Marco_Jan"
                className={styles.heroImg}
            />
        </section>
    );
};
