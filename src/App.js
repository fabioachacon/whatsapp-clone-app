import React, {useState} from 'react';
import GlobalStyle from './GlobalStyle';
import {
  AppWindow, 
  SideBar, 
  SideBarHeader, 
  HeaderButtons, 
  Search,
  SearchInput,
  ChatList, 
  ContentArea} from './AppScreenStyle';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';


function App() {
  
  const imageUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.w3schools.com%2Fw3images%2Favatar2.png&f=1&nofb=1';
  const [chatlist, setChatlist] = useState([
  {chatId: 1, title: "Mr. Nobody", image: imageUrl},
  {chatId: 2, title: "Mr. Nowhere", image: imageUrl},
  {chatId: 3, title: "Mr. Anywhere", image: imageUrl}]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);
  const [activeContact, setActiveContact] = useState(false);

  const handleLoginData = async (u) => {
    let newUser = {
        id: u.uid,
        name: u.displayName,
        avatar: u.photoURL,
    }
    setUser(newUser);
  }

  if (!user){
    return (<Login onReceive={handleLoginData} />)
  }

  return (
    <AppWindow>
       <GlobalStyle />
       <SideBar>
          <NewChat
           chatlist={chatlist} 
           user={user}
           activeContact={activeContact} 
           setActiveContact={setActiveContact}/>
          <SideBarHeader>
            <img src={user.avatar} alt=""/>
            <HeaderButtons>
              <div className="header-btn">
                <DonutLargeIcon style={{color: '#919191'}}/>
              </div>
              <div onClick={() => setActiveContact(true)} className="header-btn">
                <ChatIcon style={{color: '#919191'}}/>
              </div>
              <div className="header-btn">
                <MoreVertIcon style={{color: '#919191'}}/>
              </div>
            </HeaderButtons>
          </SideBarHeader>
          <Search>
            <SearchInput>
               <SearchIcon fontSize="small" style={{color: '#919191'}}/>
               <input type='search' placeholder='Search or start new chat'/>
            </SearchInput>
          </Search>
          <ChatList>
            {chatlist.map((item, index) => (
              <ChatListItem
              data={item}
              onClick={() => setActiveChat(item)}
              active={activeChat.chatId === item.chatId} 
              key={index}/>
            ))}
          </ChatList>
       </SideBar>
       <ContentArea>
         {activeChat.chatId !== undefined ? 
          <ChatWindow 
            user={user}
          /> : 
          <ChatIntro />}
       </ContentArea>
    </AppWindow>
  );
}



export default App;
