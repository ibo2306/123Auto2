import React from "react";


export default function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message-bubble ${msg.isUser ? "user" : "bot"}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
