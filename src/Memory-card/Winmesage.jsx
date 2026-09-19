import React from "react";

export default function Winmesage({ moves }) {
  return (
    <div className="win-message">
      <h2>Congratulation! </h2>
      <p>You complete the game in {moves} moves!</p>
    </div>
  );
}
