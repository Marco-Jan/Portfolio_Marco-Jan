import { getImageUrl } from '../../utils';
import { useRef } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    source: string;
    skills: string[];
    imageSrc: string;
    description: string;
    demo: string; 
}

export const ProjectCard = ({ title, imageSrc,description, skills, demo, source }: ProjectCardProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className={`${styles.container} ${styles.glassEffect}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.mediaContainer}>
                <video
                    ref={videoRef}
                    src={getImageUrl(imageSrc)}
                    className={styles.projectVideo}
                    muted
                    loop
                    playsInline
                ></video>
                <div className={styles.overlay}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.skills}>
                        {/* <h3 className={styles.description}>Technologie</h3> */}
                        {skills.map((skill, id) => (
                            <li key={id} className={styles.skill}>{skill}</li>
                        ))}
                    </ul>
                    <hr className={styles.hr} />
                    <div className={styles.links}>
                        <a href={demo} className={styles.link}>Vercel PWA</a>
                        <a href={source} className={styles.link}>Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
