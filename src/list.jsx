function Programming() {
  const prog = ["C++", "java", "python", "java"];
  return (
    <div>
      {prog.map((e, a) => (
        <h1 key={a}>
          <ul type="square">
            <li>{e}</li>
          </ul>
        </h1>
      ))}
    </div>
  );
}
export default Programming;
