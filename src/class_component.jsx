import "./boom.css";
import picture from "./back.png";

function HI() {
  return (
    <>
      <div className="board">
        <div className="profile">
          <img src={picture}></img>
          <ul>
            <h2>Skill</h2>
            <li>Html</li>
            <li>css</li>
            <li>React</li>
            <li>javascript</li>
          </ul>
        </div>

        <h1 className="Title"> Abdulhafiz-Frontend </h1>
      </div>
    </>
  );
}

export default HI;
