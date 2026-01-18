import React, { useState } from "react";
import "../chatBot/ChatBotPage.css";
import ChatWindow from "../chatBot/ChatWindow";
import ChatSidebar from "../chatBot/ChatSidebar";

export default function ChatBotPage() {
  const [messages, setMessages] = useState([
    { id: "m0", role: "assistant", text: "Hey! Wie kann ich dir helfen? 🚗" }
  ]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      text
    };

    // User Message sofort anzeigen
    setMessages((prev) => [...prev, userMsg]);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: text
        })
      });

      if (!response.ok) {
        throw new Error("Backend error");
      }

      const data = await response.json();

      const botMsg = {
        id: "bot_" + Date.now(),
        role: "assistant",
        text: data.reply
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: "bot_error_" + Date.now(),
          role: "assistant",
          text: "❌ Entschuldigung, es gab einen Fehler beim Chatbot."
        }
      ]);
    }
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

        <ChatWindow
          messages={messages}
          sendMessage={sendMessage}
        />
      </main>
    </div>
  );
}