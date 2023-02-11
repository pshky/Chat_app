import React from 'react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer,ConversationList,Conversation,Avatar, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import SideNav from './sideNav';
import { Layout, theme } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
const { Header, Sider, Content } = Layout;
const Chat =()=>{
  const { name} = useSelector(state => state.user)
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      {/* <SideNav/> */}
    
     <div style={{
      height: "340px"
    }}>
          <ConversationList>        
            <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
              <Avatar  name="Lilly" />
            </Conversation>
            
            <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
              <Avatar  name="Joe" />
            </Conversation>
            
            <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you">
              <Avatar  name="Emily" />
            </Conversation>
            
            <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you">
              <Avatar  name="Kai" />
            </Conversation>
                        
            <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
              <Avatar  name="Akane" />
            </Conversation>
                                
            <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
              <Avatar  name="Eliot" />
            </Conversation>
                                                
            <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
              <Avatar  name="Zoe" />
            </Conversation>
                                                            
            <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
              <Avatar  name="Patrik" />
            </Conversation>
            
          </ConversationList>
        </div>
        
    </>
  )
}

export default Chat;