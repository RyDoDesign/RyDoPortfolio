import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(400, 400);
        p.background(0);
      };

      p.draw = () => {
        p.fill(255, 255, 255);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
      };
    };

    const myP5 = new p5(sketch, canvasRef.current);

    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default P5Canvas;