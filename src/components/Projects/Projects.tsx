// import projects from "../../data/projects.json";

// import { db } from '../../../firebaseConfig';
// import { collection, getDocs } from "firebase/firestore";
import projects from '../../data/projects.json';
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css"
// import { useEffect, useState } from "react";

// interface Project {
//     title: string;
//     imageSrc: string;
//     description: string;
//     skills: string[];
//     demo: string;
//     source: string;
// }

// console.log(db);

export const Projects = () => {
    // const [projects,setProjects] = useState<Project[]>([]);

    // useEffect(()=>{
    //     const fetchProjects = async() => {
    //         const querySnap = await  getDocs(collection(db,"projects"));
    //         const projectsData = querySnap.docs.map(doc => doc.data() as Project);
            
    //         setProjects(projectsData)
    //     };
       
        
    //     fetchProjects();
    // }, []);

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projekte</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => (
                    <ProjectCard
                        key={id}
                        imageSrc={project.imageSrc}
                        videoSrc={project.videoSrc}
                        title={project.title}
                        description={project.description}
                        skills={project.skills}
                        demo={project.demo}
                        source={project.source}
                    />
                ))}
            </div>
        </section>
    );
};
