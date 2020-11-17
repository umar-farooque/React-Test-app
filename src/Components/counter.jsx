import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    //     fruits: ["apples1", "mangoes2", "grapes3"],
  };
  style = {
    fontSize: 50,
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        {/* <ul>{this.renderTags()}</ul> */}
      </div>
    );
  }
  handleIncrement = () => {
    // console.log("clicked", this);
    return this.setState({ count: this.state.count + 1 });
  };
  //   renderTags() {
  //     if (this.state.fruits.length === 0) {
  //       return <h3> No fruits available</h3>;
  //     }
  //     return this.state.fruits.map((fruit) => <li key={fruit}>{fruit}</li>);
  //   }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count;
  }
}

export default Counter;
