import "../App.css";
import "../css/play.css";
import { Link } from "react-router-dom";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Squiggle from '../components/squiggle';
import Pendy from "../components/pendy";

export function Play() {
  return (
    <main className="playMain">
      <section className="p5Sketch">
        <h1>Squiggle</h1>
        <ReactP5Wrapper sketch={Squiggle} />
      </section>
      <section className="p5Sketch">
        <h1>Tripple Pendy</h1>
        <ReactP5Wrapper sketch={Pendy} />
      </section>
    </main>
  )
}