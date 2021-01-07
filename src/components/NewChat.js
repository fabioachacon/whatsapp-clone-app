import React, {useState} from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const NewChat = ({activeContact, setActiveContact, user, chatlist}) => {
    const imageUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.w3schools.com%2Fw3images%2Favatar2.png&f=1&nofb=1';
    const [contactList, setContactList] = useState([
        {id: 123, avatar: imageUrl, name: 'Fábio'},
        {id: 123, avatar: imageUrl, name: 'Fábio'},
        {id: 123, avatar: imageUrl, name: 'Fábio'},
        {id: 123, avatar: imageUrl, name: 'Fábio'},]);

    return (
        <StyledNewChat active={activeContact}>
            <NewChatHead>
                <NewChatBackbutton onClick={() => setActiveContact(false)}>
                  <ArrowBackIcon style={{color: '#FFF'}}/>
                </NewChatBackbutton>
                <NewChatHeadtitle>
                  New Chat
                </NewChatHeadtitle>
            </NewChatHead>
            <NewChatList>
              {contactList.map((item, key) => 
                 <NewChaItem key={key}>
                    <img src={item.avatar} alt=""/>
                    <NewChatItemName>
                      {item.name}
                    </NewChatItemName>
                 </NewChaItem>
              )}
            </NewChatList>
        </StyledNewChat>
    )
}


const StyledNewChat = styled.div`
    width: 30%;
    max-width: 415px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #FFF;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DDD;
    transition: transform .3s ease-in-out;
    transform: ${props => props.active ? 'translateX(0%)' : 'translateX(-100%)'}
`;

const NewChatHead = styled.div`
    display: flex;
    background: #00BFA5;
    align-items: center;
    padding: 60px 15px 15px 15px;
`;

const NewChatBackbutton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const NewChatHeadtitle = styled.div`
    font-size: 19px;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    color: #FFF;
    margin-left: 20px;
    flex: 1;
`;

const NewChatList = styled.div`
    flex: 1;
    &::-webkit-scrollbar{
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: rgba(0, 0, 0, .2);
    }
`;

const NewChaItem = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
    }
    &:hover{
        background: #F5F5F5;
    }
`;

const NewChatItemName = styled.div`
   font-size: 17px;
   color: black;
`;

export default NewChat;
