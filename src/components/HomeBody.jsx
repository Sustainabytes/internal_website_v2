import Msg from "../assets/Msg.svg";
import "./HomeBody.css";

function HomeBody() {
  return (
    <div className="ourVision centerFlex column">
      <div className="centerFlex" style={{gap: "30px"}}>
        <h1>
          <em>Our Vision</em>
        </h1>
        <img src={Msg} alt="A message bubble image" />
      </div>

      <p className="visionStatement">
        We aim to drive meaningful change and to build a vibrant community of
        passionate learners through <u>events</u>, hands-on <u>projects</u>, and{" "}
        <u>advocacy</u>.
      </p>
    </div>
  );
}

export default HomeBody;
