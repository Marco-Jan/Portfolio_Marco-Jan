import { Parallax } from 'react-parallax';
import './ParallaxBackground.css';

const ParallaxBackground = () => {
  return (
    <Parallax
      bgImage={'background.jpg'} /* Pfad zu deinem Hintergrundbild */
      strength={500}
    >
      <div style={{ height: '100vh' }}>
        <div className="content">
          <h1>Willkommen auf meiner Website</h1>
          <p>Entdecken Sie unsere beeindruckenden Parallax-Effekte.</p>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxBackground;
