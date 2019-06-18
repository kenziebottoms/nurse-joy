import React, { Fragment } from "react";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import { getAuthenticatedUser } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user: null
    };
  }
  componentDidMount() {
    getAuthenticatedUser().then(user =>
      this.setState({ authenticated: true, user })
    );
  }

  login(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(formData);
  }

  render() {
    return (
      <Fragment>
        {this.state.authenticated &&
          (this.state.user ? (
            <Dashboard user={this.state.user} />
          ) : (
            <Login register={true} onSubmit={e => this.login(e)} />
          ))}
      </Fragment>
    );
  }
}

export default App;
