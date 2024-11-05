import "../App.css";
import "../css/work.css";
import { Link } from "react-router-dom";
import P5Canvas from '../components/squiggle';

export function Play() {
  return (
    <div>
      <P5Canvas />
    </div>
  )
}