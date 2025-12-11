import React, { useState } from 'react';
import "./ChatBotPage.css";

export default function ChatInput({ onSend }) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      onSend(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Was suchst du? 🚗"
        className="chat-textfield"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="chat-send-btn" onClick={handleSend}>Senden</button>
    </div>
  );
}
