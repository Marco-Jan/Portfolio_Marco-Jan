
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact";
import { AnimatedBackground } from "./components/AnimatedBackground/AnimatedBackground";
import { SubFooter } from "./components/SubFooter/SubFooter";
import { ScrollUpButton } from "./components/ScrollUpBtn/ScrollUpBtn";





function App() {

  return <div className={styles.App}>
    <AnimatedBackground />
   
    {/* <div className={styles.topOneBlur} /> */}
    <div className={styles.topTwoBlur} />

    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <ScrollUpButton />
    <Contact />
    <SubFooter />

  </div>;

}

export default App
