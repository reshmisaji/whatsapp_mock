import React from "react";
import {
  Display,
  Phone,
  Send,
  Conversation,
  Input,
  NewMessage,
  GroupName,
  Message,
  Sender,
  TextMessage,
  Time,
  Text,
  HomeButton,
  Bottom,
  Back,
  Recents,
  Top,
  Sensor,
  Speaker
} from "./Components";

import "./App.css";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.user = props.name;
    this.getSender = this.getSender.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(() => this.getMessages(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  sendMessage(name) {
    const data = document.getElementById("newMessage");
    const message = data.value;
    data.value = "";
    fetch("/sendMessage", {
      method: "post",
      body: JSON.stringify({ message: message, name: name })
    });
  }

  getMessages() {
    fetch("/getMessages")
      .then(res => res.json())
      .then(res => {
        this.setState({ messages: res });
      });
  }

  getSender(user) {
    return this.user === user ? "CURRENT" : "OTHER";
  }

  render() {
    document.getElementById("root").style.backgroundColor = "rgb(43,186,162)";
    const messages = this.state.messages.map(message => {
      let sender = this.getSender(message.name);
      console.log(sender);
      return (
        <Message user={sender}>
          <Sender>{message.name}</Sender>
          <TextMessage>
            <Text>{message.text} </Text>
            <Time>{message.time}</Time>
          </TextMessage>
        </Message>
      );
    });
    return (
      <Phone width={"23vw"}>
        <Top>
          <Sensor />
          <Speaker />
          <Sensor />
        </Top>
        <Display>
          <GroupName>STEP 6</GroupName>
          <Conversation>{messages}</Conversation>
          <NewMessage>
            <Input
              type="text"
              name="message"
              id="newMessage"
              bgColor={"white"}
              width={"85%"}
              placeholder="Type your message"
              autoComplete="off"
              color={"black"}
            />
            <Send
              type="submit"
              onClick={this.sendMessage.bind(this, this.user)}
            >
              &#10148;
            </Send>
          </NewMessage>
        </Display>
        <Bottom>
          <Back>◀</Back>
          <HomeButton />
          <Recents>&#x2630;</Recents>
        </Bottom>
      </Phone>
    );
  }
}

export default Messages;
