import  { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

export const AnimatedBackground = () => {
    const lightRef = useRef<HTMLDivElement | null>(null);
    const distance = 50; // Abstand des Lichteffekts von der Maus

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (lightRef.current) {
                const x = event.clientX;
                const y = event.clientY;

                // Berechne die Position des Lichteffekts, sodass er sich sanft von der Maus weg bewegt
                const angle = Math.random() * 2 * Math.PI;
                const lightX = x + distance * Math.cos(angle);
                const lightY = y + distance * Math.sin(angle);

                // Verwende requestAnimationFrame für sanfte Bewegungen
                requestAnimationFrame(() => {
                    // Animierte Transformation für sanfte Bewegung
                    lightRef.current!.style.transform = `translate(${lightX}px, ${lightY}px)`;
                });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [distance]);

    return <div className={styles.lightEffect} ref={lightRef}></div>;
};
