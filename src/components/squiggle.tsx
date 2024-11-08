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
  let canvasWidth: number;
  let waves: Wave[] = [];
  let totalWaves = 2;
  let ballSize = 75;
  let translation, interval, strokeWeight, bgColor, ballColor, strokeColor, randomizeAllBtn, randomizeWaveBtn, randomizeColorsBtn, randomizeSlidersBtn;
  let sizeSlider: p5.Element, intervalSlider: p5.Element, strokeSlider: p5.Element, bgColorRadio: p5.Element, ballColorRadio: p5.Element, strokeColorRadio: p5.Element;
  let isPortrait = window.innerHeight >= window.innerWidth;

  if (isPortrait) {
    canvasWidth = window.innerWidth * 0.9;
  } else {
    canvasWidth = window.innerHeight * 0.9 - 100;
  }

  let sizeSliderMax: number = canvasWidth * 0.5;

  function randomizeWave(
    setWaves: (waves: Wave[]) => void
  ) {
    const newWaves: Wave[] = [];
    for (let i = 0; i < 2; i++) {
      newWaves.push(
        new Wave(p.random(20, canvasWidth * 0.1), p.random(40, 800), p.random(p.PI * 2))
      );
    }
    setWaves(newWaves);
  }

  function randomizeSliders() {
    const randomSize = Math.floor(Math.random() * (sizeSliderMax - 1)) + 1;
    sizeSlider.value(randomSize);
    const randomInterval = Math.floor(Math.random() * 9) + 1;
    intervalSlider.value(randomInterval);
    const randomStrokeWeight = Math.floor(Math.random() * 5);
    strokeSlider.value(randomStrokeWeight);
  }

  function randomizeColors() {
    const bgRadioOptions = bgColorRadio.elt.querySelectorAll('input');
    const bgRandomOption = bgRadioOptions[Math.floor(Math.random() * bgRadioOptions.length)];
    (bgColorRadio as any).selected(bgRandomOption.value);
    const ballRadioOptions = ballColorRadio.elt.querySelectorAll('input');
    const ballRandomOption = ballRadioOptions[Math.floor(Math.random() * ballRadioOptions.length)];
    (ballColorRadio as any).selected(ballRandomOption.value);
    const strokeRadioOptions = strokeColorRadio.elt.querySelectorAll('input');
    const strokeRandomOption = strokeRadioOptions[Math.floor(Math.random() * strokeRadioOptions.length)];
    (strokeColorRadio as any).selected(strokeRandomOption.value);
  }

  function randomizeAll(setWaves: (waves: Wave[]) => void) {
    randomizeWave(setWaves);
    randomizeSliders();
    randomizeColors();
  }

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasWidth);
    randomizeAllBtn = p.createButton('Randomize All');
    randomizeAllBtn.mousePressed(() => randomizeAll((newWaves) => {
      waves = newWaves;
    }));
    randomizeWaveBtn = p.createButton('Randomize Wave');
    randomizeWaveBtn.mousePressed(() => randomizeWave((newWaves) => {
      waves = newWaves;
    }));
    randomizeColorsBtn = p.createButton('Randomize Colors');
    randomizeColorsBtn.mousePressed(() => randomizeColors());
    randomizeSlidersBtn = p.createButton('Randomize Sliders');
    randomizeSlidersBtn.mousePressed(() => randomizeSliders());
    sizeSlider = p.createSlider(1, sizeSliderMax, ballSize, 1);
    intervalSlider = p.createSlider(1, 10, 3, 1);
    strokeSlider = p.createSlider(0, 5, 2, 1);
    // ballColorPicker = p.createColorPicker("#000000");
    bgColorRadio = p.createRadio();
    (bgColorRadio as any).option('#000000', 'Black');
    (bgColorRadio as any).option('#ffffff', 'White');
    // (bgColorRadio as any).option('#ff0000', 'Red');
    // (bgColorRadio as any).option('#00ff00', 'Green');
    // (bgColorRadio as any).option('#0000ff', 'Blue');
    // (bgColorRadio as any).option('#ffff00', 'Yellow');
    // (bgColorRadio as any).option('#00ffff', 'Cyan');
    // (bgColorRadio as any).option('#ff00ff', 'Magenta');
    (bgColorRadio as any).selected('#000000', 'Black');
    ballColorRadio = p.createRadio();
    (ballColorRadio as any).option('#000000', 'Black');
    (ballColorRadio as any).option('#ffffff', 'White');
    (ballColorRadio as any).option('#ff0000', 'Red');
    (ballColorRadio as any).option('#00ff00', 'Green');
    (ballColorRadio as any).option('#0000ff', 'Blue');
    (ballColorRadio as any).option('#ffff00', 'Yellow');
    (ballColorRadio as any).option('#00ffff', 'Cyan');
    (ballColorRadio as any).option('#ff00ff', 'Magenta');
    (ballColorRadio as any).option('rainbow', 'Rainbow');
    (ballColorRadio as any).option('rainbowAlt', 'Rainbow Alt');
    (ballColorRadio as any).option('grayscale', 'Grayscale');
    (ballColorRadio as any).option('grayscaleAlt', 'Grayscale Alt');
    (ballColorRadio as any).selected('#000000', 'Black');
    strokeColorRadio = p.createRadio();
    (strokeColorRadio as any).option('#000000', 'Black');
    (strokeColorRadio as any).option('#ffffff', 'White');
    // (strokeColorRadio as any).option('#ff0000', 'Red');
    // (strokeColorRadio as any).option('#00ff00', 'Green');
    // (strokeColorRadio as any).option('#0000ff', 'Blue');
    // (strokeColorRadio as any).option('#ffff00', 'Yellow');
    // (strokeColorRadio as any).option('#00ffff', 'Cyan');
    // (strokeColorRadio as any).option('#ff00ff', 'Magenta');
    (strokeColorRadio as any).option('rainbow', 'Rainbow');
    (strokeColorRadio as any).option('rainbowAlt', 'Rainbow Alt');
    (strokeColorRadio as any).option('grayscale', 'Grayscale');
    (strokeColorRadio as any).option('grayscaleAlt', 'Grayscale Alt');
    (strokeColorRadio as any).selected('#ffffff', 'White');
    for (let i = 0; i < totalWaves; i++) {
      waves.push(new Wave(p.random(20, canvasWidth * 0.1), p.random(40, 800), p.random(p.PI * 2)));
    }
  };

  p.draw = () => {
    ballSize = Number(sizeSlider.value());
    translation = ballSize / 2;
    interval = Number(intervalSlider.value());
    strokeWeight = Number(strokeSlider.value());
    bgColor = String(bgColorRadio.value());
    ballColor = String(ballColorRadio.value());
    strokeColor = String(strokeColorRadio.value());

    p.colorMode(p.HSB);
    p.background(bgColor);

    let instances = canvasWidth - translation * 2 - ballSize;

    for (let x = 0; x < instances; x += interval) {
      let y = 0;
      for (let wave of waves) {
        y += wave.eval(x);
      }

      let rainbow = x * 300 / instances;
      let grayscale = x * 100 / instances;
      let isFinal;
      for (let i = 0; i <= 9; i++) {
        if (Math.floor(instances) % interval === i) {
          isFinal = x === Math.floor(instances) - i;
        }
      };

      if (x === 0) {
        grayscale = 0;
      } else if (isFinal) {
        grayscale = 100;
        rainbow = 300;
      };

      if (ballColor.valueOf() === 'rainbow') {
        p.fill(rainbow, 100, 100);
      } else if (ballColor.valueOf() === 'rainbowAlt') {
        p.fill((300 - rainbow), 100, 100);
      } else if (ballColor.valueOf() === 'grayscale') {
        p.fill(0, 0, grayscale);
      } else if (ballColor.valueOf() === 'grayscaleAlt') {
        p.fill(0, 0, (100 - grayscale));
      } else {
        p.fill(ballColor);
      };

      if (strokeColor.valueOf() === 'rainbow') {
        p.stroke(rainbow, 100, 100);
      } else if (strokeColor.valueOf() === 'rainbowAlt') {
        p.stroke((300 - rainbow), 100, 100);
      } else if (strokeColor.valueOf() === 'grayscale') {
        p.stroke(0, 0, grayscale);
      } else if (strokeColor.valueOf() === 'grayscaleAlt') {
        p.stroke(0, 0, (100 - grayscale));
      } else {
        p.stroke(strokeColor);
      };

      p.strokeWeight(strokeWeight);
      p.ellipse(x + translation + ballSize / 2, y + p.height / 2, ballSize, ballSize);
    }

    for (let wave of waves) {
      wave.update();
    }
  };
};

export default Squiggle;