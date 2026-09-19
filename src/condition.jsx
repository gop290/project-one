import { Component } from "react";
class ConditionalRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issubscriber: true,
    };
  }
  render() {
    return (
      this.state.issubscriber && (
        <div>
          <h1>Subscribed</h1>
        </div>
      )
    );
  }
}
export default ConditionalRender;
