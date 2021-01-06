import React, {useState} from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import EmojiPicker from 'emoji-picker-react';

const ChatWindow = () => {

  let recognition = null;
  let SpeachRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


  if (SpeachRecognition){
    recognition =  new SpeachRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);

  const handleEmojiClick = (e, emojiObject) => {
      setText(text + emojiObject.emoji);
  }

  const handleOpenEmoji = () => {
     setEmojiOpen(true);
  }

  const handleEmojiClose = () => {
     setEmojiOpen(false)
  }

  const handleSendClick = () => {

  }

  const handleMicClick = () => {
    if (recognition){ 
      recognition.onstart = () => {
        setListening(true);
      }
      recognition.onend = () => {
        setListening(false);
      }
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      }

      recognition.start();
    }
  }

    return (
        <StyledChatWindow>
           <ChatWindowHeader>
               <ChatWindowHeaderInfo>
                   <img className='chatWindow--avatar' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.w3schools.com%2Fw3images%2Favatar2.png&f=1&nofb=1" alt=""/>
                   <div className="chatWindow--name">Fábio</div>
               </ChatWindowHeaderInfo>
               <ChatWindowHeaderButtons>
                   <div className="chatWindow--btn">
                       <SearchIcon style={{color: '#919191'}}/>
                   </div>
                   <div className="chatWindow--btn">
                       <AttachFileIcon style={{color: '#919191'}}/>
                   </div>
                   <div className="chatWindow--btn">
                       <MoreVertIcon style={{color: '#919191'}}/>
                   </div>
               </ChatWindowHeaderButtons>
           </ChatWindowHeader>
           <ChatWiwdowBody>
               
           </ChatWiwdowBody>
           <ChatWindowEmojiArea emojiOpen={emojiOpen}>
             <EmojiPicker 
              disableSearchBar
              disableSkinTonePicker
              onEmojiClick={handleEmojiClick}
             />
           </ChatWindowEmojiArea>
           <ChatWindowFooter>
                <ChatWindowPre>
                  <div style={{width: emojiOpen ? 40 : 0}} onClick={handleEmojiClose} className="chatWindow--btn">
                    <CloseIcon style={{color: '#919191'}}/>
                  </div>
                  <div onClick={handleOpenEmoji} className="chatWindow--btn">
                     <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}}/>
                  </div>
                </ChatWindowPre>
                <ChatWindowInputarea>
                    <input 
                    placeholder='write a message' 
                    value={text} 
                    onChange={e => setText(e.target.value)}
                    type="text" 
                    name="" 
                    id=""/>
                </ChatWindowInputarea>
                <ChatWindowPos>
                  {text ? 
                  <div onClick={handleSendClick} className="chatWindow--btn">
                    <SendIcon style={{color: '#919191'}}/>
                  </div> :
                  <div onClick={handleMicClick} className="chatWindow--btn">
                    <MicIcon style={{color: listening ? '#126ECE' : '#919191'}}/>
                  </div> }
                </ChatWindowPos>
           </ChatWindowFooter>
        </StyledChatWindow>
    )
}

const StyledChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ChatWindowHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 60px;
   border-bottom: 1px solid #CCC;
`;

const ChatWindowHeaderInfo = styled.div`
   display: flex;
   align-items: center;
   cursor: pointer;
   color: black;
   font-size: 17px;
   img {
       height: 40px;
       width: 40px;
       border-radius: 50%;
       margin: 0 15px;
   }
`;

const ChatWindowHeaderButtons = styled.div`
    display: flex;
    margin-right: 15px;
    .chatWindow--btn{
       cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ChatWiwdowBody = styled.div`
  background: red;
  flex:1;
  overflow-y: auto;
  background: #E5DDD5;
  background-size: cover;
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
`;

const ChatWindowFooter = styled.div`
   height: 62px;
   display: flex;
   align-items: center;
   .chatWindow--btn{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 3px;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.3s ease;
    }

`;

const ChatWindowPre = styled.div`
   display: flex;
   margin: 0 15px;
`;

const ChatWindowPos = styled(ChatWindowPre)``;

const ChatWindowInputarea = styled.div`
  flex: 1;
  input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      background: #FFF;
      border-radius: 25px;
      font-size: 15px;
      color: #4A4A4A;
      padding-left: 15px;
  }
`;

const ChatWindowEmojiArea = styled.div`
    height: ${props => props.emojiOpen ? '200px' : '0px'};
    overflow-y: hidden;
    transition: all 0.3s ease;
    aside.emoji-picker-react{
      width: auto;
      background: none;
    }
    .emoji-picker-react .emoji-group:before{
       background:none;
    }

`;




export default ChatWindow;
