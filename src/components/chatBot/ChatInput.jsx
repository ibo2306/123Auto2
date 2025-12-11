import React from 'react'
import "./ChatBotPage.css";

export default function ChatInput() {
  return (
    <div className="chat-input">
  <input
    type="text"
    placeholder="Frag den Auto-Berater..."
    className="chat-textfield"
  />
  <button className="chat-send-btn">Senden</button>
</div>

  )
}
