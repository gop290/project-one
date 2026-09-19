import "./style.css";
function Style(props) {
  let className = props.heading ? "heading" : "";
  return (
    <div>
      <h1 className={`${className} Large-font`}>Hello</h1>
    </div>
  );
}
export default Style;
