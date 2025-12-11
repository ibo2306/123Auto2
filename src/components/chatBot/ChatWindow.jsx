import React, { useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import "./ChatBotPage.css";

export default function ChatWindow(){
  const [messages, setMessages] = useState([
    { id: "m0", role: "assistant", text: "Hallo! Wie kann ich helfen?" }
  ]);

  const sendMessage = (text) => {
    const userMsg = { id: Date.now().toString(), role: "user", text };
    setMessages((m)=>[...m, userMsg]);

    // später: call backend/LLM; for now push placeholder bot reply:
    setMessages((m)=>[...m, { id: "bot_"+Date.now(), role:"assistant", text:"..." }]);
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%" }}>
      <MessageList messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  )
}
