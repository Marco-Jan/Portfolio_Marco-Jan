import { useState, useEffect } from 'react';
import styles from './ScrollUpBtn.module.css';

export const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={styles.scrollBtnContainer} onClick={scrollToTop}>
            {isVisible && <div className={styles.scrollUpBtn}>
                <div >
                    &#8593;
                </div>
            </div>}
        </div>
    );
};


