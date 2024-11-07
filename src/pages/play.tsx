import "../App.css";
import "../css/work.css";
import { Link } from "react-router-dom";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Squiggle from '../components/squiggle';

export function Play() {
  return (
    <main>
      <section className="p5Sketch">
        {/* <h1>Squiggle</h1> */}
        <ReactP5Wrapper sketch={Squiggle} />
      </section>
    </main>
  )
}