import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import styled from 'styled-components';
import { register } from '../redux/apiCalls';

const RegisterPage = styled.div`
height: 90vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const RegisterForm = styled.div`
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

const RegisterBtn = styled.div`
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

const Register = () => {



  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    //Formdan Gelen Veriyi İlgili Değişkene Atıp Dispatchle ApiCalls'a Fırlat
    //Kullanıcağın Fonksiyonu ApiCalls'dan Çağırdığına Emin Ol
    register(dispatch, { username, email, password, first_name, last_name });
    navigate("/login");
  };

  return (
    <RegisterPage>
      <RegisterForm>
        <h1>GİRİŞ YAP</h1>
        <Input
          className="input"
          type="text"
          placeholder="Ad"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          className="input"
          type="text"
          placeholder="Soyad"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          className="input"
          type="text"
          placeholder="Kullanıcı Adı"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          className="input"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="input"
          type="password"
          placeholder="Parola"
          onChange={(e) => setPassword(e.target.value)}
        />
        <RegisterBtn>
          <Button className="event" onClick={(e) => handleClick()}>
            KAYIT OL
          </Button>
        </RegisterBtn>
      </RegisterForm>
    </RegisterPage>
  );
};
export default Register;
