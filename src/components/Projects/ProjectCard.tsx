
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
            <div className={styles.imageContainer}>
                <img
                    src={getImageUrl(imageSrc)}
                    alt={`Image of ${title}`}
                    className={styles.projectImg}
                />
                {/* <video src="../../assets/projects/teamTosspPreview.mp4" controls poster="vorschaubild.jpg">
                Dies Video kann in Ihrem Browser nicht wiedergegeben werden.
                    Eine Download-Version steht unter <a href="URL">Link-Addresse</a> zum Abruf bereit.
                </video> */}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>{skill}</li>
                    )
                })}
            </ul>
            <hr className={styles.hr}></hr>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Vercel PWA</a>
                <a href={source} className={styles.link}>Github</a>
            </div>
        </div>
    );
};
