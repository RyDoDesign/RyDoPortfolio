import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { photoImages } from '../assets/images';
import "../App.css";
import "../css/project.css";


export function Photo() {

  const imageCount = 8;

  const collectionImages: string[] = [];
  for (let i = 0; i < imageCount; i++) {
    collectionImages.push(Object(photoImages)[i])
  };

  return (
    <>
      <main className="projectPage">
        <section className="projectDetails">
          <h1>Misc. Photography • 2015 - 2020</h1>
          <h3>Deliverables: 40 images</h3>
          <p>People, places, & things I've photographed.</p>
        </section>
        <section className="gallery">
          <div className="imageGrid">
            {photoImages.map((src, index) => (
              <img key={index} src={src} alt={index.toString()} />
            ))}
          </div>
        </section>
      </main >
    </>
  )
}