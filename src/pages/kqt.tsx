import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import "../css/project.css";


export function KingsAndQueens() {

  const imageCount = 8;

  const kqtPosters: string[] = [];
  for (let i = 0; i < imageCount; i++) {
    kqtPosters.push('https://ik.imagekit.io/kgfrj9r2z/kingsAndQueens-1/' + i + '.png')
  };

  const [text, setText] = useState<string>('');
  const [text1, setText1] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText1(event.target.value);
  };

  console.log();

  return (
    <>
      <main className="projectPage">
        <section className="projectDetails">
          <h1>Kings & Queens • 2019</h1>
          <h3>Deliverables: 1 Typeface (2 Family Members) & Display Posters</h3>
          <p>Inspired by vintage playing cards. Designed for modern players.</p>
        </section>
        <section className="typefaceDemo">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Use Me"
            autoFocus
          />
        </section>
        <section className="gallery">
          <div className="imageGrid">
            {kqtPosters.map((src, index) => (
              <img key={index} src={src} alt={index.toString()} />
            ))}
          </div>
        </section>
        <section className="typefaceDemo-1">
          <input
            type="text"
            value={text1}
            onChange={handleChange1}
            placeholder="Or Use Me"
          />
        </section>
      </main >
    </>
  )
}