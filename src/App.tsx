
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact";
// import { AnimatedBackground } from "./components/AnimatedBackground/AnimatedBackground";
import { SubFooter } from "./components/SubFooter/SubFooter";
import { ScrollUpButton } from "./components/ScrollUpBtn/ScrollUpBtn";
import { Skills } from './components/Skills/Skills';




function App() {

  const gesamtBreite = document.documentElement.scrollWidth;

  // Gesamthöhe des Dokuments (inklusive des nicht sichtbaren Bereichs)
  const gesamtHöhe = document.documentElement.scrollHeight;

  console.log("Gesamtbreite der Webseite: " + gesamtBreite + "px");
  console.log("Gesamthöhe der Webseite: " + gesamtHöhe + "px");

  return <div className={styles.App}>
    {/* <AnimatedBackground /> */}
    <div className={styles.topOneBlur} />
    <div className={styles.topTwoBlur} />

    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <ScrollUpButton />
    <Contact />
    <SubFooter />

  </div>;

}

export default App
