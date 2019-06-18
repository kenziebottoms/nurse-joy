import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: this.props.register || false
    };
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <h1>{this.state.register ? "Register" : "Login"}</h1>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        {this.state.register && (
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Retype your password"
          />
        )}
        <input type="submit" />
      </form>
    );
  }
}

export default Login;
