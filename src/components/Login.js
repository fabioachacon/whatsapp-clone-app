import React from 'react';
import styled from 'styled-components';
import Api from '../api';

const Login = ({onReceive}) => {

    const handleLogin = async () => {
        try{
           let result = await Api.GooglePop();
           onReceive(result.user);
        }catch(error){
             alert(error);
        }
    }

    return (
        <StyledLogin>
            <div className="login-message">
              Login with Google and Join my Fake Whatsapp, bitch. :D
            </div>
            <button onClick={handleLogin} >Let's do this!</button>
        </StyledLogin>
    )
}


const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button{
      width: 10rem;
      height: 3rem;
      border-radius: 25px;
      outline: none;
      border: 1px solid #00BFA5;
      background: #00BFA5;
      font-family: sans-serif;
      color: #FFF;
      font-weight: bold;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all .3s ease-in-out;
      &:hover{
          background: #FFF;
          color: #00BFA5;
      }
  }
  .login-message{
      margin-bottom: 5rem;
      font-size: 1.4rem;
      color: gray;
      text-align: center;
  }

`;

export default Login;
