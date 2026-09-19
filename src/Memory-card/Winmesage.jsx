import Confetti from "react-confetti";

export default function Winmesage({ moves }) {
  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={500}
        recycle={true}
      />

      <div className="win-message">
        <h2>Congratulations!</h2>
        <p>You completed the game in {moves} moves!</p>
      </div>
    </>
  );
}
