import React from "react";
import "./ChatSidebar.css";

export default function ChatSidebar({ sendMessage }) {
  const quickActions = [
    "Audi für unter 20k?",
    "Benziner in Linz?",
    "Auto mit Automatik?"
  ];

  return (
    <div className="chat-sidebar">
      <h3>Auto-Berater</h3>
      <p>Hey! Was suchst du heute? 🚗</p>
      <ul>
        {quickActions.map((action, index) => (
          <li
            key={index}
            onClick={() => sendMessage(action)}
            style={{ cursor: "pointer", listStyle: "none", margin: "5px 0" }}
          >
            {action}
          </li>
        ))}
      </ul>
    </div>
  );
}
