import React from 'react';
import styled from 'styled-components';

const MessageItem = ({data, user}) => {
    return (
        <MessageLine user={user} data={data}>
           <StyledMessageItem user={user} data={data}>
               <MessageText>{data.body}</MessageText>
               <MessageDate>19:00</MessageDate>
           </StyledMessageItem>
        </MessageLine>
    )
}


const MessageLine = styled.div`
   display: flex;
   margin-bottom: 1rem;
   justify-content: ${props => props.user.id === props.data.author ? 'flex-end' : 'flex-start'};
`;

const StyledMessageItem = styled.div`
   background: ${props => props.user.id === props.data.author ? '#DCF8C6' : '#FFFF'};
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   padding: 3px;
   max-width: 90%;
`;

const MessageText = styled.div`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;

const MessageDate = styled.div`
  font-size: 11px;
  color: #999;
  margin-right: 5px;
  text-align: right;
  margin-top: -15px;
  height: 15px;
`;

export default MessageItem;
