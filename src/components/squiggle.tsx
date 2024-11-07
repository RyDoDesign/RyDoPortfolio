import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

class Wave {
  amplitude: number;
  period: number;
  phase: number;
  constructor(amp: number, period: number, phase: number) {
    this.amplitude = amp;
    this.period = period;
    this.phase = phase;
  }
  eval(x: number) {
    return Math.sin(this.phase + Math.PI * 2 * x / this.period) * this.amplitude * 2;
  }
  update() {
    this.phase -= 0.05;
  }
}

const Squiggle = (p: p5) => {
  let waves: Wave[] = [];
  let ballSize = 75;
  let translation;
  let interval;
  let ballColor;
  let totalWaves = 2;
  let scale = 10 / 10;
  let hueShift = 0;
  let canvasWidth: number;
  let reloadButton;
  let sizeSlider: p5.Element;
  let intervalSlider: p5.Element;
  let ballColorPicker: p5.Element;
  let ballColorRadio: p5.Element;
  let isPortrait = window.innerHeight >= window.innerWidth;

  if (isPortrait) {
    canvasWidth = window.innerWidth * 0.9;
  } else {
    canvasWidth = window.innerHeight * 0.9 - 100;
  }

  let fsSliderMax: number = canvasWidth * 0.5;

  function randomizeSketch(
    sizeSlider: p5.Element,
    fsSliderMax: number,
    setWaves: (waves: Wave[]) => void
  ) {
    const randomSize = Math.floor(Math.random() * (fsSliderMax - 1)) + 1;
    sizeSlider.value(randomSize);
    const newWaves: Wave[] = [];
    for (let i = 0; i < 2; i++) {
      newWaves.push(
        new Wave(p.random(20, canvasWidth * 0.1), p.random(40, 800), p.random(p.PI * 2))
      );
    }
    setWaves(newWaves);
  }

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasWidth);
    reloadButton = p.createButton('Randomize');
    reloadButton.mousePressed(() => randomizeSketch(sizeSlider, fsSliderMax, (newWaves) => {
      waves = newWaves;
    }));
    sizeSlider = p.createSlider(1, fsSliderMax, ballSize, 1);
    intervalSlider = p.createSlider(1, 10, 3, 1);
    // ballColorPicker = p.createColorPicker("#000000");
    ballColorRadio = p.createRadio();
    (ballColorRadio as any).option('Black', '#000000');
    (ballColorRadio as any).option('White', '#ffffff');
    (ballColorRadio as any).option('Red', '#ff0000');
    (ballColorRadio as any).selected('Black', '#000000');
    for (let i = 0; i < totalWaves; i++) {
      waves.push(new Wave(p.random(20, canvasWidth * 0.1), p.random(40, 800), p.random(p.PI * 2)));
    }
  };

  p.draw = () => {
    p.colorMode(p.HSB);
    p.background(0);
    ballSize = Number(sizeSlider.value());
    translation = ballSize / 2;
    interval = Number(intervalSlider.value());
    ballColor = String(ballColorRadio.value());


    let instances = canvasWidth - translation * 2 - ballSize;
    let hueStretch = 0.239 * scale;

    for (let x = 0; x < instances; x += interval) {
      let y = 0;
      for (let wave of waves) {
        y += wave.eval(x);
      }

      let colorRange = x * p.PI * hueStretch + hueShift;
      let rainbow = x * p.PI * hueStretch / scale;
      let bwGrad = (x * 100 / instances + 0.5) % 100;

      if (x === 0) {
        bwGrad = 0;
      }

      p.stroke(100);
      p.strokeWeight(3);
      p.fill(ballColor);
      p.ellipse(x + translation + ballSize / 2, y + p.height / 2, ballSize, ballSize);
    }

    for (let wave of waves) {
      wave.update();
    }
  };
};

export default Squiggle;