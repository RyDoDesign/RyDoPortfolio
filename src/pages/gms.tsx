import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { gmImages, gmVidNumbers, gmHLImages, gmHLVidNumbers } from '../assets/images';
import "../App.css";
import "../css/project.css";


export function GMs() {

  const hlImageCount = 32;
  const [imageCount, setImageCount] = useState(48);
  function increaseGalSize() {
    if (imageCount < 317) {
      setImageCount(prevCount => prevCount + 48);
    } else if (imageCount > 317) {
      setImageCount(365);
    };
  };

  const gmFullSet: string[] = [];
  for (let i = 0; i < imageCount; i++) {
    gmFullSet.push(Object(gmImages)[i])
  };

  const gmHighlights: string[] = [];
  for (let i = 0; i < hlImageCount; i++) {
    gmHighlights.push(Object(gmHLImages)[i])
  };

  window.addEventListener('scroll', () => {
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition >= documentHeight) {
      increaseGalSize();
    }
  });

  return (
    <>
      <main className="projectPage">
        <section className="projectDetails">
          <h1>GMs • 2023 - 2024</h1>
          <h3>Deliverables: 365 pieces of digital art (70 videos, 295 stills)</h3>
          <p>365 ways to say good morning. A tool for stylistic exploration, a way to connect with <Link to="/bma">BMA</Link> holders, & a practice in consistency.</p>
        </section>
        <section className="gallery">
          <h1>Highlights</h1>
          <div className="imageGrid">
            {gmHighlights.map((src, index) => (
              gmHLVidNumbers.includes(index + 1) ? (
                <video autoPlay loop muted><source src={src} type="video/mp4" /></video>
              ) : (
                <img key={index} src={src} />
              )
            ))}
          </div>
        </section>
        <section className="gallery">
          <h1>Complete Set</h1>
          <div className="imageGrid">
            {gmFullSet.map((src, index) => (
              gmVidNumbers.includes(index + 1) ? (
                <video autoPlay loop muted width={600}><source src={src} type="video/mp4" /></video>
              ) : (
                <img key={index} src={src} alt={index.toString()} />
              )
            ))}
          </div>
        </section>
      </main>
    </>
  )
}