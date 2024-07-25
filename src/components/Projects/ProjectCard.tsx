
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';


interface ProjectCardProps {
    title: string;
    imageSrc: string;
    description: string;
    skills: string[];
    demo: string;
    source: string;
}

export const ProjectCard = ({ title, imageSrc, description, skills, demo, source }: ProjectCardProps) => {
    return (
        <div className={`${styles.container} ${styles.glassEffect}`}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.projectImg}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>{skill}</li>
                    )
                })}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Vercel PWA</a>
                <a href={source} className={styles.link}>Github</a>
            </div>
        </div>
    );
};
