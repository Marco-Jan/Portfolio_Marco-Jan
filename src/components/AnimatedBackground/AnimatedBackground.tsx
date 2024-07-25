

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export const AnimatedBackground = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const maxPoints = 130;
  const maxDistance = 180;
  const points: { x: number, y: number }[] = [];
  const velocity: { dx: number, dy: number }[] = [];
  const currentColor = { r: 0, g: 0, b: 0 };
  const pointArray = [1, 2, 3, 4, 5];

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    function createPoint(index: number) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      points[index] = { x, y };
      velocity[index] = {
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      };
    }

    function changeColor() {
      anime({
        targets: currentColor,
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
        easing: 'linear',
        round: 1,
        duration: 10000,
        complete: changeColor,
      });
    }

    function getRgba(opacity: number) {
      const { r, g, b } = currentColor;
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    function drawLine(x1: number, y1: number, x2: number, y2: number, opacity: number) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x1.toString());
      line.setAttribute("y1", y1.toString());
      line.setAttribute("x2", x2.toString());
      line.setAttribute("y2", y2.toString());
      line.setAttribute("stroke", getRgba(opacity));
      line.setAttribute("stroke-width", "1.5");
      return line;
    }

    function drawPoint(x: number, y: number) {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", x.toString());
      circle.setAttribute("cy", y.toString());
      circle.setAttribute("r", pointArray.length.toString());
      circle.setAttribute("fill", "#2979ff");
      return circle;
    }

    function updateNetwork() {
      if (!svg) return;
      svg.innerHTML = '';
      for (let i = 0; i < points.length; i++) {
        points[i].x += velocity[i].dx;
        points[i].y += velocity[i].dy;

        if (points[i].x <= 0 || points[i].x >= window.innerWidth) {
          velocity[i].dx *= -1;
        }
        if (points[i].y <= 0 || points[i].y >= window.innerHeight) {
          velocity[i].dy *= -1;
        }

        const circle = drawPoint(points[i].x, points[i].y);
        svg.appendChild(circle);

        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            const line = drawLine(points[i].x, points[i].y, points[j].x, points[j].y, opacity);
            svg.appendChild(line);
          }
        }
      }
      requestAnimationFrame(updateNetwork);
    }

    function handleResize() {
      points.forEach((_, i) => createPoint(i));
    }

    for (let i = 0; i < maxPoints; i++) {
      createPoint(i);
    }
    changeColor();
    updateNetwork();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <svg ref={svgRef} id="netSvg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
  );
};

export default AnimatedBackground;
