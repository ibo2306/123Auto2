import React from "react";
import "../chatBot/ChatBotPage.css";
import ChatWindow from "../chatBot/ChatWindow";
import ChatInput from "../chatBot/ChatInput";
import ChatSidebar from "./ChatSidebar";
import MessageList from "./MessageList";

export default function ChatBotPage() {
  return (
    <div className="chatbot-container">

      {/* Header */}
      <div className="chatbot-header">
        <h2>AutoBerater KI</h2>
        <p>Frag mich nach Autos, Modellen, Preisen oder Empfehlungen!</p>
      </div>

      {/* Chat-Verlauf */}
      <ChatWindow/>
      <div className="chatbot-messages">
        {/* später ChatMessages hier */}
      </div>

      {/* Input-Bereich */}
      <ChatInput/>

    </div>
  );
}



// import React from "react";
// import ChatWindow from "../chatBot/ChatWindow";
// import Sidebar from "../chatBot/ChatSidebar"; 

// export default function ChatBotPage() {
//   return (
//     <div style={{ display: "flex", height: "100vh", gap: 24 }}>
//       {/* Sidebar: Filters, Quick Actions (nur sichtbar auf breiten Bildschirmen) */}
//       <aside style={{ width: 320, padding: 20, background: "#f7f9fb" }}>
//         <Sidebar />
//       </aside>

//       {/* Chat area (flex-grow) */}
//       <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <ChatWindow />
//       </main>
//     </div>
//   );
// }
