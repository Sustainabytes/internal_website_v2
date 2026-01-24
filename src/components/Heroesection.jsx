import TeamPhoto from "../assets/TeamPhoto.svg";
import Mascot from "../assets/Mascot.svg";
import { Sprout } from "lucide-react";
import "./Heroesection.css";

function Herosection() {
  return (
    <div className="heroesection centerFlex">
        <div className="description">
          <h2 style={{ marginTop: "10px" }}>
            <em>Computational Sustainability Club</em>
          </h2>
          <h1>
            ADVOCATING <Sprout size={50} /> FOR{" "}
            <span>
              <em>GREEN TECH</em>
            </span>
          </h1>
          <p>
            We are a student-led team <span>empowering</span> Cornellians to{" "}
            <span>leverage</span> technology and data to{" "}
            <span>solve environmental</span> challenges.
          </p>
        </div>
      <div className="description-container">
        <div className="teamPhoto">
          <img src={TeamPhoto} alt="" />
        </div>
        <img
          src={Mascot}
          alt="A drawing of our unofficial mascot"
          className="mascot"
        />
      </div>
    </div>
  );
}

export default Herosection;
