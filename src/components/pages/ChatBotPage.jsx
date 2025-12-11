import React from "react";
import "../chatBot/ChatBotPage.css";
import ChatWindow from "../chatBot/ChatWindow";
import ChatInput from "../chatBot/ChatInput";
import ChatSidebar from "../chatBot/ChatSidebar";

export default function ChatBotPage() {
  return (
    <div style={{ display: "flex", height: "100vh", gap: "24px" }}>
      {/* Sidebar: Filters, Quick Actions */}
      <aside style={{ width: "320px", padding: "20px", background: "#f7f9fb" }}>
        <ChatSidebar />
      </aside>

      {/* Main chat area */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div className="chatbot-header">
          <h2>AutoBerater KI</h2>
          <p>Frag mich nach Autos, Modellen, Preisen oder Empfehlungen!</p>
        </div>

        {/* Chat messages */}
        <ChatWindow />

        {/* Input area */}
        <ChatInput />
      </main>
    </div>
  );
}
