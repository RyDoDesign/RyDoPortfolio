import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Pendy = (p: p5) => {
  let canvasWidth: number;
  let isPortrait = window.innerHeight >= window.innerWidth;
  let m1: number, m2: number, m3: number, l1: number, l2: number, l3: number, a1: number, a2: number, a3: number, a1_v: number, a2_v: number, a3_v: number, g: number;
  let px2 = -1, py2 = -1, px3 = -1, py3 = -1;
  let cx: number, cy: number;
  let trail1: { x: number, y: number }[] = [], trail2: { x: number, y: number }[] = [], trail3: { x: number, y: number }[] = [];
  let velocities: number[] = [];
  let velocitySum: number;
  let maxAlpha = 100;
  let pendulumSize = 25;
  let trailLength = 100;
  let v1 = 0.1;
  let v2 = 0.2;
  let maxV = 3;
  let trailUpdateInterval = 1;
  let intervalCounter = 0;

  if (isPortrait) {
    canvasWidth = window.innerWidth * 0.9;
  } else {
    canvasWidth = window.innerHeight * 0.9 - 100;
  }

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasWidth);
    p.colorMode(p.HSB);

    // Initial pendulum properties
    m1 = 1; // mass of pendulum 1
    m2 = 0.5; // mass of pendulum 2
    m3 = 0.25; // mass of pendulum 3
    l1 = canvasWidth / 5; // length of pendulum 1
    l2 = canvasWidth / 10; // length of pendulum 2
    l3 = canvasWidth / 15; // length of pendulum 3
    a1 = p.random(0, Math.PI * 2); // angle of pendulum 1
    a2 = p.random(0, Math.PI * 2); // angle of pendulum 2
    a3 = p.random(0, Math.PI * 2); // angle of pendulum 3
    a1_v = p.random(v1, v2); // angular velocity of pendulum 1
    a2_v = p.random(-v2, -v1); // angular velocity of pendulum 2
    a3_v = p.random(v1, v2); // angular velocity of pendulum 3
    g = 0.5; // gravity constant

    cx = canvasWidth / 2;
    cy = canvasWidth / 2;
  };

  p.draw = () => {
    p.background(0);
    p.translate(cx, cy);

    // Triple pendulum equations of motion
    let num1 = -g * (2 * m1 + m2 + m3) * Math.sin(a1);
    let num2 = -m2 * g * Math.sin(a1 - 2 * a2);
    let num3 = -m3 * g * Math.sin(a1 - 2 * a3);
    let num4 = -2 * Math.sin(a1 - a2) * m2;
    let num5 = -2 * Math.sin(a1 - a3) * m3;
    let num6 = a2_v * a2_v * l2 + a3_v * a3_v * l3 + a1_v * a1_v * l1 * Math.cos(a1 - a2) + a1_v * a1_v * l1 * Math.cos(a1 - a3);
    let den = l1 * (2 * m1 + m2 + m3 - m2 * Math.cos(2 * a1 - 2 * a2) - m3 * Math.cos(2 * a1 - 2 * a3));
    let a1_a = (num1 + num2 + num3 + num4 + num5 * num6) / den;

    let num1_2 = 2 * Math.sin(a1 - a2);
    let num2_2 = (a1_v * a1_v * l1 * (m1 + m2 + m3));
    let num3_2 = g * (m1 + m2 + m3) * Math.cos(a1);
    let num4_2 = a2_v * a2_v * l2 * m2 * Math.cos(a1 - a2);
    let den2 = l2 * (2 * m1 + m2 + m3 - m2 * Math.cos(2 * a1 - 2 * a2));
    let a2_a = (num1_2 * (num2_2 + num3_2 + num4_2)) / den2;

    let num1_3 = 2 * Math.sin(a1 - a3);
    let num2_3 = (a1_v * a1_v * l1 * (m1 + m2 + m3));
    let num3_3 = g * (m1 + m2 + m3) * Math.cos(a1);
    let num4_3 = a3_v * a3_v * l3 * m3 * Math.cos(a1 - a3);
    let den3 = l3 * (2 * m1 + m2 + m3 - m3 * Math.cos(2 * a1 - 2 * a3));
    let a3_a = (num1_3 * (num2_3 + num3_3 + num4_3)) / den3;

    // Update the positions of the pendulums
    let x1 = l1 * Math.sin(a1);
    let y1 = l1 * Math.cos(a1);

    let x2 = x1 + l2 * Math.sin(a2);
    let y2 = y1 + l2 * Math.cos(a2);

    let x3 = x2 + l3 * Math.sin(a3);
    let y3 = y2 + l3 * Math.cos(a3);

    // // Draw the spokes
    // p.stroke(0, 100, 100);
    // p.strokeWeight(2);
    // p.line(0, 0, x1, y1);
    // p.line(x1, y1, x2, y2);
    // p.line(x2, y2, x3, y3);

    // Only update the trail every `trailUpdateInterval` frames
    if (intervalCounter % trailUpdateInterval === 0) {
      trail1.push({ x: x1, y: y1 });
      trail2.push({ x: x2, y: y2 });
      trail3.push({ x: x3, y: y3 });

      if (trail1.length > trailLength) trail1.splice(0, 1);
      if (trail2.length > trailLength) trail2.splice(0, 1);
      if (trail3.length > trailLength) trail3.splice(0, 1);
    }

    intervalCounter++;

    // Draw the trails
    let thinLines = [0.5, 0.25, 0.125];
    let midLines = [1, 0.5, 0.25];
    let thickLines = [2, 1, 0.5];

    drawTrail(trail1, thickLines[0], 'white');
    drawTrail(trail2, thickLines[1], 'white');
    drawTrail(trail3, thickLines[2], 'rainbow');

    // Initial values for previous position
    if (px2 == -1 && py2 == -1) {
      px2 = x2;
      py2 = y2;
    }
    if (px3 == -1 && py3 == -1) {
      px3 = x3;
      py3 = y3;
    }

    // Update the angles and velocities
    let totalV = a1_v + a2_v + a3_v;
    if (totalV <= maxV && totalV >= -maxV) {
      a1_v += a1_a;
      a2_v += a2_a;
      a3_v += a3_a;
    } else {
      a1_v = a1_v;
      a2_v = a2_v;
      a3_v = a3_v;
    }
    velocities.push(totalV);
    if (velocities.length > 50) velocities.splice(0, 1);
    velocitySum = velocities.reduce((acc, currentVal) => acc + currentVal, 0);
    if (velocitySum <= 0.00001 && velocitySum >= -0.00001) {
      a1_v = p.random(v1, v2);
      a2_v = p.random(-v2, -v1);
      a3_v = p.random(v1, v2);
      console.log(velocitySum, "restarted")
    }
    a1 += a1_v;
    a2 += a2_v;
    a3 += a3_v;

    // Apply damping to slow down the motion over time
    a1_v *= 0.999;
    a2_v *= 0.999;
    a3_v *= 0.999;
  };

  function drawTrail(trail: { x: number, y: number }[], scalar: number, color: string) {
    p.noFill();
    p.strokeWeight(2 * scalar);
    if (color === 'white') {
      p.stroke(0, 0, 100);
    } else if (color === 'black') {
      p.stroke(0, 0, 0);
    } else if (color === 'red') {
      p.stroke(0, 100, 100);
    } else if (color === 'yellow') {
      p.stroke(60, 100, 100);
    } else if (color === 'green') {
      p.stroke(120, 100, 100);
    } else if (color === 'cyan') {
      p.stroke(180, 100, 100);
    } else if (color === 'blue') {
      p.stroke(240, 100, 100);
    } else if (color === 'magenta') {
      p.stroke(300, 100, 100);
    } else if (color === 'rainbow') {
      p.stroke(p.frameCount * 0.05 % 360, 100, 100);
    } else {
      p.stroke(100, 0, 0);
    }
    p.beginShape();
    for (let i = 0; i < trail.length; i++) {
      let xPos = trail[i].x;
      let yPos = trail[i].y;
      p.curveVertex(xPos, yPos);
    }
    p.endShape();
  }
};

export default Pendy;

