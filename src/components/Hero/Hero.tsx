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
                ".. Code-Nerd mit einer Schwäche für Hunde.",
                "Hier tüftele ich an Websites und Apps, die das Leben leichter machen.",
                "Hast du Fragen? Immer her damit!",
                "Viel Spaß beim Stöbern - und denk an den Hunde-Content!"
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
                <h1 className={styles.title}>Hallo, ich bin Marco</h1>
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
                src={getImageUrl("hero/hero2.png")}
                alt="Profilbild_Marco_Jan"
                className={styles.heroImg}
            />
        </section>
    );
};
