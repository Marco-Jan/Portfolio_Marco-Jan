import { getImageUrl } from "../../utils";
import { useRef, useEffect, useState } from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  skills: string[];
  imageSrc: string;
  videoSrc: string;
  description: string;
  demo: string;
}

export const ProjectCard = ({
  title,
  imageSrc,
  videoSrc,
  description,
  skills,
  demo,
}: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isEdge, setIsEdge] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Edg/")) {
      setIsEdge(true);
    }

    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Autoplay auf Mobile
  useEffect(() => {
    if (videoRef.current && isMobile && !isEdge) {
      videoRef.current.play().catch(() => {});
    }
  }, [isMobile, isEdge]);

  const handleMouseEnter = () => {
    if (videoRef.current && !isEdge && !isMobile) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !isEdge && !isMobile) {
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
        {isEdge ? (
          <img
            src={getImageUrl(imageSrc)}
            className={styles.projectImage}
            alt={title}
          />
        ) : (
          <video
            ref={videoRef}
            src={getImageUrl(videoSrc)}
            className={styles.projectVideo}
            muted
            loop
            playsInline
            autoPlay
          ></video>
        )}

        <div className={styles.overlay}>
          <div className={styles.contentBg}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
              {skills.map((skill, id) => (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
            <hr className={styles.hr} />
            <div className={styles.links}>
              <a
                href={demo}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
