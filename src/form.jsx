import { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      tutorials: "",
    };
  }
  usernameHandel = (event) => {
    this.setState({ username: event.target.value });
  };
  commentHandel = (event) => {
    this.setState({ comment: event.target.value });
  };
  listHandel = (event) => {
    this.setState({ tutorials: event.target.value });
  };
  submitHandel = () => {
    alert(
      `${this.state.username} ${this.state.comment} ${this.state.tutorials}`,
    );
  };
  render() {
    return (
      <>
        <form action="" onSubmit={this.submitHandel}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.usernameHandel}
            ></input>
          </div>
          <div>
            <label>Comments:</label>
            <textarea
              value={this.state.comment}
              onChange={this.commentHandel}
            ></textarea>
            <p>{this.state.tutorials}</p>
          </div>
          <div>
            <label> Tutorial:</label>
            <select value={this.state.tutorials} onChange={this.listHandel}>
              <option value="Javascript">javascript</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
export default Form;
