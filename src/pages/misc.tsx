import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import "../css/project.css";


export function Misc() {

  const imageCount = 70;

  const miscImages: string[] = [];
  for (let i = 0; i < imageCount; i++) {
    miscImages.push('https://ik.imagekit.io/kgfrj9r2z/kingsAndQueens/' + i + '.png')
  };

  console.log();

  return (
    <>
      <main className="projectPage">
        <section className="projectDetails">
          <h1>Miscellaneous • 2019 - Present</h1>
          <h3>Deliverables: ~100 images</h3>
          <p>Random freelance & personal projects.</p>
        </section>
        <section className="gallery">
          <h1><Link to="https://opepen.art/" target="_blank">Opepen</Link> Sets</h1>
          <p>Submissions to a digital art museum founded by <Link to="https://x.com/jackbutcher" target="_blank">Jack Butcher</Link>.</p>
          <div className="imageGrid">
            {miscImages.map((src, index) => (
              index < 4 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Logos</h1>
          <div className="imageGrid">
            {miscImages.map((src, index) => (
              index < 4 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>The Rest</h1>
          <div className="imageGrid">
            {miscImages.map((src, index) => (
              index < 4 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
        </section>
      </main >
    </>
  )
}