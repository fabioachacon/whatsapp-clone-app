import React from 'react';
import styled from 'styled-components';

const ChatListItem = ({onClick, active, data}) => {
    return (
        <StyledChatListItem
        active={active}
        onClick={onClick}>
           <img src={data.image} alt=""/>
           <ChatItemLines>
               <ChatItemLine>
                 <div className="chatlistItem--name">{data.title}</div>
                 <div className="chatlistItem--date">19:25</div>
               </ChatItemLine>
               <ChatItemLine>
                 <div className="chatlistItem--Msg">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, impedit praesentium laboriosam iste aliquam corporis laborum sint dolore eum nesciunt?</p>
                 </div>
               </ChatItemLine>
           </ChatItemLines>
        </StyledChatListItem>
    )
}

const StyledChatListItem = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 70px;
    background: ${props => props.active ? "#EBEBEB" : "none"};
    img {
        width: 3.1rem;
        height: 3.1rem;
        border-radius: 50%;
        margin-left: 15px;
    }
    &:hover{
        background: #F5F5F5;
    }

   
`;

const ChatItemLines = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #EEE;
    padding-right: 15px;
    margin-left: 15px;
    height: 100%;
    flex-wrap: wrap;
    min-width: 0;
`;

const ChatItemLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .chatlistItem--name{
      font-size: 16px;
      color: #000;
  }
  .chatlistItem--date{
      font-size: 12px;
      color: #999;
  }
  .chatlistItem--Msg{
      font-size: 14px;
      color: #999;
      display: flex;
      width: 100%;
      p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
  }

`;



export default ChatListItem;
