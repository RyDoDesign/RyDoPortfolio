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

function restartSketch() {
  window.location.reload();
}

const SquiggleText = (p: p5) => {
  let waves: Wave[] = [];
  let translation = 75;
  let totalWaves = 2;
  let scale = 10 / 10;
  let hueShift = 0;
  let canvasWidth: number;
  let reloadButton;
  let textInput: p5.Element;
  let fontSizeSlider: p5.Element;
  let fontSize = 50;

  if (window.innerHeight >= window.innerWidth) {
    canvasWidth = window.innerWidth * 0.95;
  } else {
    canvasWidth = window.innerHeight * 0.9 - 100
  }

  let fsSliderMax: number = canvasWidth * 0.713 - translation;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasWidth);
    p.textFont('cooperblackstd');
    reloadButton = p.createButton('Reload Sketch');
    reloadButton.mousePressed(restartSketch);
    textInput = p.createInput('Edit Me');
    const inputElement = textInput.elt as HTMLInputElement;
    inputElement.maxLength = 10;
    inputElement.addEventListener('input', () => {
      if (String(textInput.value()).length === 1) {
        fsSliderMax = fsSliderMax;
      } else if (String(textInput.value()).length === 2) {
        fsSliderMax = fsSliderMax / 2;
      } else if (String(textInput.value()).length === 3) {
        fsSliderMax = fsSliderMax / 3;
      } else if (String(textInput.value()).length === 4) {
        fsSliderMax = fsSliderMax / 4;
      } else if (String(textInput.value()).length === 5) {
        fsSliderMax = fsSliderMax / 5;
      } else if (String(textInput.value()).length === 6) {
        fsSliderMax = fsSliderMax / 6;
      } else if (String(textInput.value()).length === 7) {
        fsSliderMax = fsSliderMax / 7;
      } else if (String(textInput.value()).length === 8) {
        fsSliderMax = fsSliderMax / 8;
      } else if (String(textInput.value()).length === 9) {
        fsSliderMax = fsSliderMax / 9;
      } else if (String(textInput.value()).length === 10) {
        fsSliderMax = fsSliderMax / 10;
      }
      fontSizeSlider.attribute('max', String(fsSliderMax));
    });
    fontSizeSlider = p.createSlider(1, fsSliderMax, fontSize, 1);

    for (let i = 0; i < totalWaves; i++) {
      waves[i] = new Wave(p.random(20, 100), p.random(40, 800), p.random(p.PI * 2));
    }
  };

  p.draw = () => {
    p.colorMode(p.HSB);
    p.background(0);
    fontSize = Number(fontSizeSlider.value());
    let textWidthVal = p.textWidth(String(textInput.value()));

    let interval = 3;
    let instances = canvasWidth - textWidthVal - (translation * 2);
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
      p.strokeWeight(5);
      p.fill(0);
      p.textSize(fontSize);
      p.text(textInput.value(), x + translation, y + p.height / 2 + 60);
    }

    for (let wave of waves) {
      wave.update();
    }
  };
};

export default SquiggleText;
