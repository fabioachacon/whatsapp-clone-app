import React from 'react';
import styled from 'styled-components';

const ChatIntro = () => {
    return (
        <StyledChatIntro>
            <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt=""/>
            <h1>Keep your phone connected</h1>
            <h2>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</h2>
        </StyledChatIntro>
    )
}

const StyledChatIntro = styled.div`
     display: flex;
     height: 100%;
     background: #F8F9FA;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border-bottom: 6px solid #4ADF83;
     img {
         width: 250px;
         height: auto;
     }
     h1 {
        font-size: 32px;
        color: #525252;
        font-weight: normal;
        margin-top: 30px;
     }
     h2{
        font-size: 14px;
        color: #777;
        font-weight: normal;
        margin-top: 30px;
        text-align: center;
        line-height: 20px;
        width: 60%;
     }
`;

export default ChatIntro;
