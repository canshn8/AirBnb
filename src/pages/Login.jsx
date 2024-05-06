import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useState } from "react";
import styled from "styled-components";
const LoginPage = styled.div`
height: 90vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const LoginForm = styled.div`
background-color: white;
width: 30em;
height: 30em;
position: relative;
border-radius: 1em;
box-shadow: 0 0.188em 1.55em rgb(150, 156, 156);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;

const Input = styled.input`
border: none;
background-color: rgb(229, 226, 226);
height: 3em;
width: 40%;
border-radius: 0.25em;
text-align: center;
padding: 2em;
&:focus {
  width: 80%;
  outline-color: rgb(32, 177, 255);
}
`;

const LoginBtn = styled.div`
width: 40%;
height: 3em;
background-color: rgb(0, 0, 0);
color: white;
display: flex;
justify-content: center;
align-items: center;
transition: 0.5s;
border-radius: 0.25em;
cursor: pointer;
&:hover {
  transform: scale(1.25);
}
`;

const Button = styled.button``;
const Login = () => {

 
  const user = useSelector((state) => state.user.accessToken);
  console.log(user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook'unu doğru şekilde kullanın
  const dispatch = useDispatch();

  const handleClick = (e) => {
    login(dispatch, { username, password });
    if (user !== null) {
      navigate("/");
    }
  };

  return (
    <LoginPage>
      <LoginForm>
        <h1>GİRİŞ YAP</h1>
        <Input
          className="input"
          type="text"
          placeholder="Kullanıcı Adı"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          className="input"
          type="password"
          placeholder="Parola"
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginBtn>
          <Button className="event" onClick={(e) => handleClick()}>
            GİRİŞ YAP
          </Button>
        </LoginBtn>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
