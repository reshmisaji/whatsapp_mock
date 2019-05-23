import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Login, Input } from "./Components";
import Messages from "./Messages.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.isValidUser = this.isValidUser.bind(this);
    this.messages = this.messages.bind(this);
    this.Login = this.Login.bind(this);
  }

  componentDidMount() {
    fetch("/getUsers")
      .then(res => res.json())
      .then(res => this.setState({ users: res }));
  }

  isValidUser(user, password) {
    const validUsers = this.state.users.filter(
      username => username.username === user && password === username.password
    );

    return validUsers.length > 0;
  }

  messages() {
    const user = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (this.isValidUser(user, password))
      ReactDOM.render(
        <Messages name={user} />,
        document.getElementById("root")
      );
  }

  Login() {
    return (
      <Login>
        <Input
          id="username"
          name="username"
          placeholder="Username"
          bgColor={"none"}
          width={"180px"}
          color={"white"}
        />

        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          bgColor={"none"}
          width={"180px"}
          color={"white"}
        />
        <Button onClick={this.messages}>Login</Button>
      </Login>
    );
  }
  render() {
    return <this.Login />;
  }
}

export default App;
