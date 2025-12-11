import React from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import "./ChatBotPage.css";

export default function ChatWindow({ messages, sendMessage }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <MessageList messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
