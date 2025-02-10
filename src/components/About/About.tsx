import styles from './About.module.css';
import { getImageUrl } from '../../utils';
import skillsData from '../../data/skills.json';

export const About = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2>Technologien & Tools</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <a
            key={index}
            className={styles.skillItem}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className= {`${styles.iconWrapper} ${styles.glassEffect}`}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};
