import { getImageUrl } from '../../utils';
import { useRef, useEffect, useState } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    source: string;
    skills: string[];
    imageSrc: string;
    videoSrc: string;
    description: string;
    demo: string; 
}

export const ProjectCard = ({ title, imageSrc, videoSrc, description, skills, demo, source }: ProjectCardProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isEdge, setIsEdge] = useState(false);



    useEffect(() => {
        // Prüfen, ob der Benutzer Microsoft Edge verwendet
        const userAgent = navigator.userAgent;
        
        if (userAgent.includes("Edg/")) {
            setIsEdge(true);
        }

        if(isEdge){
            console.log("Edge browser");
            
        }
    }, []);

    const handleMouseEnter = () => {
        if (videoRef.current && !isEdge) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current && !isEdge) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    console.log("Generated Video URL:", getImageUrl(videoSrc));
    console.log("Generated image  URL:", getImageUrl(imageSrc));


    return (
        <div
            className={`${styles.container} ${styles.glassEffect}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.mediaContainer}>
                {isEdge ? (
                    // Bildausgabe für Edge
                    <img src={getImageUrl(imageSrc)} className={styles.projectImage} alt={title} />
                ) : (
                    // Video für andere Browser
                    <video
                        ref={videoRef}
                        src={getImageUrl(videoSrc)}
                        className={styles.projectVideo}
                        muted
                        loop
                        playsInline
                    ></video>
                )}

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
                        <a href={demo} className={styles.link} target="_blank">zur App</a>
                        <a href={source} className={styles.link} target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
