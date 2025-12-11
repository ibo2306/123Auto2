import React from "react";
import "./ChatSidebar.css";

export default function ChatSidebar() {
  return (
    <div className="chat-sidebar">
      <h3>Auto-Berater</h3>
      <p>Hey! Was suchst du heute? 🚗</p>
      <ul>
        <li>Audi für unter 20k?</li>
        <li>Benziner in Linz?</li>
        <li>Auto mit Automatik?</li>
      </ul>
    </div>
  );
}
