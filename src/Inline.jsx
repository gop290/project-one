function Inline() {
  let set = {
    color: "blue",
    background: "black",
    fontSize: "60px",
  };
  return (
    <div>
      <h1 className="Regulars">Regular</h1>

      <h1 style={set}>boom</h1>
    </div>
  );
}
export default Inline;
