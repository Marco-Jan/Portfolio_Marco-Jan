import styles from './SubFooter.module.css';

export const SubFooter = () => {

    return <footer>
        <div className={styles.container}>
            <ul className={styles.links}>
                <li className={styles.link}><a href="">Impressum</a></li>
                <li className={styles.link}><a href="">Datenschutz</a></li>
            </ul>
        </div>
    </footer>
}