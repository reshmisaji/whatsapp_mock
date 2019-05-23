import styled from "styled-components";

export const Login = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgb(44, 189, 165);
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 2px 2px 3px rgb(50, 50, 50);
`;

export const Input = styled.input`
  width: ${props => props.width};
  height: 30px;
  border: none;
  background: ${props => props.bgColor};
  font-size: 18px;
  color: ${props => props.color};
  border-bottom: 2px solid white;
  text-align: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 25px;
  border-radius: 25px;
  background: rgb(123, 214, 200);
  color: white;
`;

export const Display = styled.div`
  width: 92%;
  height: 85%;
  border-radius: 2%;
  border: 2px solid rgb(80, 79, 80);
  background-color: rgb(236, 229, 221);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Phone = styled.div`
  width: ${props => props.width};
  height: 75vh;
  border: 2px solid rgb(213, 214, 214);
  background-color: rgb(235, 235, 235);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const NewMessage = styled.div`
  width: 95%;
  height: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Conversation = styled.div`
  width: 100%;
  height: 82%;
  border-radius: 5px;
  background-color: rgb(236, 229, 221);
  overflow: scroll;
`;

export const Send = styled.button`
  width: 10%;
  height: 80%;
  border-radius: 50%;
  background-color: rgb(18, 136, 123);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 1px black;
  box-shadow: 1px 1px 1px black;
`;

export const GroupName = styled.div`
  width: 100%;
  height: 9%;
  background-color: rgb(15, 94, 84);
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div`
  width: fit-content;
  max-width: 80%;
  min-width: 30%;
  min-height: 30px;
  margin: 5px 0px 5px 10px;
  border-radius: 5px;
  border: 1px solid rgb(218, 235, 236);
  background-color: white;
`;

export const Sender = styled.div`
  width: 100%;
  height: 10%;
  font-size: 13px;
  font-weight: bold;
`;

export const Time = styled.span`
  font-size: 12px;
  text-align: right;
  color: rgb(196, 196, 196);
`;

export const TextMessage = styled.div`
  max-width: 100%;
  height: 80%;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  width: 90%;
  height: 80%;
  word-break: break-all;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-around;
`;

export const Back = styled.div`
  width: 9%;
  height: 90%;
  color: rgb(93, 93, 93);
  font-size: 45px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const Recents = styled.div`
  width: 11%;
  height: 70%;
  color: rgb(93, 93, 93);
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const HomeButton = styled.div`
  width: 13%;
  height: 90%;
  border: 2px solid rgb(165, 165, 166);
  border-radius: 50%;
  display: flex;
  align-self: center;
`;

export const Top = styled.div`
  width: 60%;
  height: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Sensor = styled.div`
  width: 4%;
  height: 30%;
  border-radius: 50%;
  border: 2px solid black;
  background-color: rgb(80, 79, 80);
`;

export const Speaker = styled.div`
  width: 50%;
  height: 20%;
  border-radius: 5px;
  border: 1px solid rgb(80, 79, 80);
  box-shadow: 1px 1px 1px black;
`;
