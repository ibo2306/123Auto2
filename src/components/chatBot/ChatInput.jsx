import React from 'react'
import "./ChatBotPage.css";

export default function ChatInput() {
  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Was suchst du? 🚗"
        className="chat-textfield"
      />
      <button className="chat-send-btn">Senden</button>
    </div>
  )
}
