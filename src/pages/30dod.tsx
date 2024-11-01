import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import "../css/project.css";


export function DaysOfDes() {

  const imageCountHL = 12;
  const pngNumbersHL = [6, 10, 11];

  const imageCount = 98;
  const pngNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97];

  const daysOfDesHighLights: string[] = [];
  for (let i = 0; i < imageCountHL; i++) {
    if (pngNumbersHL.includes(i)) {
      daysOfDesHighLights.push('https://ik.imagekit.io/kgfrj9r2z/30dodHighlights-2/' + i + '.png')
    } else {
      daysOfDesHighLights.push('https://ik.imagekit.io/kgfrj9r2z/30dodHighlights-2/' + i + '.jpg')
    }
  };

  const daysOfDes: string[] = [];
  for (let i = 0; i < imageCount; i++) {
    if (pngNumbers.includes(i)) {
      daysOfDes.push('https://ik.imagekit.io/kgfrj9r2z/30dod-6/' + i + '.png')
    } else {
      daysOfDes.push('https://ik.imagekit.io/kgfrj9r2z/30dod-6/' + i + '.jpg')
    }
  };

  console.log();

  return (
    <>
      <main className="projectPage">
        <section className="projectDetails">
          <h1>30 Days of Design • 2020</h1>
          <h3>Deliverables: 13 print projects, 1 web comp, & 1 logo (~100 total images)</h3>
          <p>Personal project. 30 days of randomly generated design prompts for imaginary clients. A way to stay sane during the pandemic.</p>
        </section>
        <section className="gallery">
          <h1>At a Glance</h1>
          <div className="imageGrid">
            {daysOfDesHighLights.map((src, index) => (
              <img key={index} src={src} alt={index.toString()} />
            ))}
          </div>
        </section>
        <section className="gallery">
          <h1>Prompt 1: Spread for Design Mag</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 4 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 2: Cold Brew Coffee Cans</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 7 && index >= 4 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 3: Isometric Skateboard Graphics</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 13 && index >= 7 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 4: Album Art for Punk Band</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 21 && index >= 13 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 5: Logo for Martian World Fair</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 29 && index >= 21 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 6: Wine Catalogue Cover</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 37 && index >= 29 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 7: Book Cover for <i>The Raven</i></h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 40 && index >= 37 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 8: Isometric Type Sticker Pack</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 46 && index >= 40 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 9: Open Mic Night Poster</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 48 && index >= 46 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 10: Museum of Poker Landing Page</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 52 && index >= 48 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 11: Design Forms Poster</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 56 && index >= 52 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 12: Album Cover for IDGAF x Panic! at the Disco & Dua Lipa</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 64 && index >= 56 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 13: Holiday Cards</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 76 && index >= 64 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 14: Book Cover for <i>The Doors of Perception</i></h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index < 82 && index >= 76 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Prompt 15: Turing Pattern Playing Cards</h1>
          <div className="imageGrid">
            {daysOfDes.map((src, index) => (
              index >= 82 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
        </section>
      </main >
    </>
  )
}