import React, { useState } from "react";
import "../chatBot/ChatBotPage.css";
import ChatWindow from "../chatBot/ChatWindow";
import ChatInput from "../chatBot/ChatInput";
import ChatSidebar from "../chatBot/ChatSidebar";

export default function ChatBotPage() {
  const [messages, setMessages] = useState([
    { id: "m0", role: "assistant", text: "Hey! Wie kann ich dir helfen? 🚗" }
  ]);

  const sendMessage = (text) => {
    const userMsg = { id: Date.now().toString(), role: "user", text };
    setMessages((m) => [...m, userMsg]);

    // Simulate a bot response after a delay
    setTimeout(() => {
      setMessages((m) => [...m, { id: "bot_" + Date.now(), role: "assistant", text: "Das ist eine Antwort von der KI." }]);
    }, 1000);
  };

  return (
    <div style={{ display: "flex", height: "100vh", gap: "24px" }}>
      <aside style={{ width: "320px", padding: "20px", background: "#f7f9fb" }}>
        <ChatSidebar sendMessage={sendMessage} />
      </aside>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div className="chatbot-header">
          <h2>AutoBerater KI</h2>
          <p>Frag mich nach Autos, Modellen, Preisen oder Empfehlungen!</p>
        </div>
        <ChatWindow messages={messages} sendMessage={sendMessage} />
        <ChatInput onSend={sendMessage} />
      </main>
    </div>
  );
}
