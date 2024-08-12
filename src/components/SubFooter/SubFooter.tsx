import styles from './SubFooter.module.css';

export const SubFooter = () => {

    return <footer>
        <div className={styles.container}>
            <ul className={styles.links}>
                <li className={styles.link}><a href="../pages/impessum.html" target="_blank">Impressum</a></li>
                <li className={styles.link}><a href="../pages/datenschutz.html" target="_blank">Datenschutz</a></li>
            </ul>
        </div>
    </footer>
}