import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import "../css/project.css";


export function UnfinishedNFTs() {

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
          <h1>Unfinished NFTs • 2021 - Present</h1>
          <h3>Deliverables: 2 Generative Art Systems</h3>
          <p>NFT collections that haven't yet made it to the blockchain. Parametrically iterable. Practically infinite outputs.</p>
        </section>
        <section className="gallery">
          <h1>Flow Fields</h1>
          <p>Visualizing the influence of randomly generated vectors over particles over time.</p>
          <div className="imageGrid">
            {miscImages.map((src, index) => (
              index < 4 ? (
                <img key={index} src={src} alt={index.toString()} />
              ) : null
            ))}
          </div>
          <h1>Chroma Cubes</h1>
          <p>Colorful isometric grid illusions.</p>
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