import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { bmaImages } from "../assets/images";
import "../App.css";
import "../css/project.css";
import bmaHomePageLoop from "../images/bma/bmaHomePageLoop.mp4";

export function BMA() {

  const imageCount = 48;

  const collectionImages: string[] = [];
  for (let i = 0; i < imageCount; i++) {
    collectionImages.push(Object(bmaImages)[i])
  };

  const promoImages: string[] = [];
  for (let i = 0; i < imageCount && i < 14; i++) {
    // if (i === 0) {
    //   promoImages.push('https://ik.imagekit.io/kgfrj9r2z/bmaPromo/' + i + '.mp4')
    // } else {
    //   promoImages.push('https://ik.imagekit.io/kgfrj9r2z/bmaPromo/' + i + '.png')
    // }
    promoImages.push('https://ik.imagekit.io/kgfrj9r2z/bmaPromo/' + i + '.png')
  };

  console.log()

  return (
    <>
      <main className="projectPage">
        <section className="projectDetails">
          <h1>BMA (Bear Market A**holes) • 2022 - 2024</h1>
          <h3>Deliverables: 11k+ NFTs, Minting Website, Promotional Material</h3>
          <p>An NFT project all about fun. 11,000+ unique pieces of digital art sold on the Ethereum blockchain.</p>
          <p><Link to="https://opensea.io/collection/bma-remastered" target="_blank">View</Link> the remastered collection. <Link to="https://opensea.io/collection/bear-market-a-holes" target="_blank">View</Link> the original collection.</p>
          <p><Link to="https://www.bearmarketassholes.io/" target="_blank">Visit</Link> the website.</p>
        </section>
        <section className="gallery">
          <h1>Collection Highlights</h1>
          <div className="imageGrid">
            {collectionImages.map((src, index) => (
              <img key={index} src={src} alt={index.toString()} />
            ))}
          </div>
        </section>
        <section className='website'>
          <h1>Minting Website</h1>
          <Link to="https://www.bearmarketassholes.io/" target="_blank">
            <div className="bmaHomePageLoop">
              <video autoPlay loop muted><source src={bmaHomePageLoop} type="video/mp4" /></video>
            </div>
          </Link>
        </section>
        {/* <section className="gallery">
          <h1>The Promo</h1>
          <div className="imageGrid">
            {promoImages.map((src, index) => (
              <img key={index} src={src} alt={index.toString()} />
            ))}
          </div>
        </section> */}
        <section className="gallery">
          <h1>More Bears</h1>
          <div className="imageGrid">
            {collectionImages.map((src, index) => (
              <img key={index} src={src} alt={index.toString()} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}