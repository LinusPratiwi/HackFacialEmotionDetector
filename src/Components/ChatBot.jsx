import React, { useState } from 'react';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import {MainContainer, ChatContainer, MessageList,Message, MessageInput,TypingIndicator} from '@chatscope/chat-ui-kit-react';

function ChatBot() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Universe",
      sender: "ChatGPT"
    }
  ]) 

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...messages, newMessage]; // all the old mesages + the new message
    
    // update our message state
    setMessages(newMessages);

    //set a tyoing indicator (chatgpt is typing)
    setTyping(true);

    //process message to chatgpt (send it over and see the req)
    processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) { 
    // chatMessages {sender: "user" or "CHatGPT", message:}
    // apiMessages {role: "user" ir "assistant", content:}

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role= "assistant"
      } else {
        role= "user"
      }
      return { role:role, content:messageObject.message }
    });

    // role: "user" , "assistant", system

    const systemMessage = {
      role: "system",
      content: "Talk to me like you are my friend and universe and can make me happier and only write in three to five lines"
    }
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]
      );
      setTyping(false);
    })
   }
  return (
    <div>
      <MainContainer>
        <ChatContainer>
          <MessageList scrollBehavior='smooth' typingIndicator={typing ? <TypingIndicator content="Universe is typing" /> : null }>
            {messages.map((message,i)=> {
              return <Message key={i} model={message}/>
            })}
          </MessageList>
          <MessageInput placeholder='Type message here' onSend={handleSend}/>
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default ChatBot