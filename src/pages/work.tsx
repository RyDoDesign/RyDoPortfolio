import "../App.css";
import "../css/work.css";
import { Link } from "react-router-dom";
import bmaTC from "../images/titleCards/bmaTC.png";
import gmsTC from "../images/titleCards/gmsTC.mp4";
import miscTC from "../images/titleCards/miscTC.png";
import daysOfDesignTC from "../images/titleCards/30DaysOfDesignTC.png";
import kingsAndQueensTC from "../images/titleCards/kingsAndQueensTC.png";
import unfinishedNFTsTC from "../images/titleCards/unfinishedNFTsTC.png";

export function Work() {
  return (
    <>
      <main>
        <div className="titleCards">
          <Link to="/bma">
            <div className="titleCard">
              <img src={bmaTC} alt="BMA title card" />
              <div className="projectInfo">
                <h1>BMA • NFT Collection</h1>
                <h3>2022 - 2024</h3>
              </div>
            </div>
          </Link>
          <Link to="/gms">
            <div className="titleCard">
              <video autoPlay loop muted><source src={gmsTC} type="video/mp4" /></video>
              <div className="projectInfo">
                <h1>GMs • Digital Art</h1>
                <h3>2023 - 2024</h3>
              </div>
            </div>
          </Link>
          {/* <Link to="/unfinishedNFTs">
            <div className="titleCard">
              <img src={unfinishedNFTsTC} alt="Unfinished NFTs title card" />
              <div className="projectInfo">
                <h1>Unfinished NFTs</h1>
                <h3>2021 - Present</h3>
              </div>
            </div>
          </Link> */}
          <Link to="/30dod">
            <div className="titleCard">
              <img src={daysOfDesignTC} alt="30 Days of Design title card" />
              <div className="projectInfo">
                <h1>30 Days of Design • Mostly Print</h1>
                <h3>2020</h3>
              </div>
            </div>
          </Link>
          <Link to="/kqt">
            <div className="titleCard">
              <img src={kingsAndQueensTC} alt="Kings & Queens title card" />
              <div className="projectInfo">
                <h1>Kings & Queens • Typeface</h1>
                <h3>2019</h3>
              </div>
            </div>
          </Link>
          {/* <Link to="/misc">
            <div className="titleCard">
              <img src={miscTC} alt="Miscellaneous title card" />
              <div className="projectInfo">
                <h1>Miscellaneous</h1>
                <h3>2019 - Present</h3>
              </div>
            </div>
          </Link> */}
          <Link to="/kqt">
            <div className="titleCard">
              <img src={kingsAndQueensTC} alt="Kings & Queens title card" />
              <div className="projectInfo">
                <h1>Photography</h1>
                <h3>2016 - 2020</h3>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}