import React from "react";
import Box from "@mui/material/Box";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function ChatWindow({ messages, sendMessage, isTyping }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflow: "hidden",
      }}
    >
      <MessageList messages={messages} isTyping={isTyping} />
      <ChatInput onSend={sendMessage} disabled={isTyping} />
    </Box>
  );
}
