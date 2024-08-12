import { Link } from 'react-router-dom';
import styles from './SubFooter.module.css';

export const SubFooter = () => {
  return (
    <footer>
      <div className={styles.container}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link to="/impressum">Impressum</Link>
          </li>
          <li className={styles.link}>
            <Link to="/datenschutz">Datenschutz</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
