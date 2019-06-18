import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <div id="dash">
        <h1>Hello, {this.props.user.name}</h1>
      </div>
    );
  }
}

export default Dashboard;
