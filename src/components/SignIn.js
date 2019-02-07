import React, {Component} from 'react';


class SignIn extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <form className="forms SignIn">
          <label>Username:</label>
          <input type="text" placeholder="username" />
          <label>Password:</label>
          <input type="password" placeholder="password" />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}
export default SignIn;
