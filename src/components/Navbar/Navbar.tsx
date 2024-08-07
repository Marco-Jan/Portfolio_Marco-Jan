
import styles from './Navbar.module.css';
import { useState } from 'react';
import { getImageUrl } from '../../utils.ts';



export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Marco Jan</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={menuOpen ?
                        getImageUrl("nav/closeIcon.png") : 
                        getImageUrl("nav/menuIcon.png")}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)} />
                {/* Menuopener */}

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen} ${styles.glassEffect}`} onClick={() => setMenuOpen(false)} >
                    <li><a href="#about">Insider-Infos</a></li>
                    <li><a href="#experience">Erlebnistour</a></li>
                    <li><a href="#projects">Bastel-Boulevard</a></li>
                    <li><a href="#contact">Plauder-Ecke</a></li>
                 
                </ul>
            </div>
        </nav>
    );
};
