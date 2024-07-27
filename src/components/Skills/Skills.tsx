import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";
import { Skill } from "../../types/skill";

const skills: Skill[] = skillsData;

export const Skills = () => {

    const sortedSkills = [...skills].sort((b, a) => a.skills - b.skills);

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.content}>
                    <div className={styles.skills}>
                        {sortedSkills.map((skill, id) => (
                                <div key={id} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                    <div className={styles.skillPoints}>
                                        {Array.from({ length: skill.skills }, (_, index) => (
                                            <span key={index}><img src={getImageUrl("skills/star.png")} alt="Skill Star" className={styles.star} /></span>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
