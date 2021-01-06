import styled from 'styled-components';

export const AppWindow = styled.div`
    display: flex;
    background: #EDEDED;
    height: 100vh;
`;

export const SideBar = styled.div`
    width: 30%;
    max-width: 415px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DDD;
`;

export const SideBarHeader = styled.header`
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          cursor: pointer;
      }
`;

export const HeaderButtons = styled.div`
    display: flex;
    width: 140px;
    justify-content: space-around;
    .header-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
    }
`;

export const Search = styled.div`
   background: #F6F6F6;
   border-bottom: 1px solid #EEE;
   padding: 5px 15px;
`;

export const SearchInput = styled.div`
       background: #FFF;
       height: 40px;
       border-radius: 20px;
       display: flex;
       align-items: center;
       padding: 0 10px;
       input {
           flex: 1;
           border: none;
           outline: none;
           background: transparent;
           margin-left: 30px;
       }

`;

export const ChatList = styled.div`
  background: #FFF;
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar{
      width: 6px;
      height: 6px;
  }
  &::-webkit-scrollbar-thumb{
    background: rgba(0, 0, 0, .2);
  }
`;

export const ContentArea = styled.div`
   flex: 1;
`;
