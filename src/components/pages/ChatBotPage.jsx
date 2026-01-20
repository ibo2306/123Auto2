import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ChatWindow from "../chatBot/ChatWindow";
import ChatSidebar from "../chatBot/ChatSidebar";

export default function ChatBotPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: "m0",
      role: "assistant",
      text: "Hey! Ich bin dein AutoBerater. Wie kann ich dir heute helfen?",
      timestamp: new Date(),
    },
  ]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    if (isMobile) {
      setDrawerOpen(false);
    }

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      if (!response.ok) {
        throw new Error("Backend error");
      }

      const data = await response.json();

      const botMsg = {
        id: "bot_" + Date.now(),
        role: "assistant",
        text: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: "bot_error_" + Date.now(),
          role: "assistant",
          text: "Entschuldigung, es gab einen Fehler. Bitte versuche es erneut.",
          timestamp: new Date(),
          isError: true,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "m0",
        role: "assistant",
        text: "Chat wurde zurückgesetzt. Wie kann ich dir helfen?",
        timestamp: new Date(),
      },
    ]);
  };

  const sidebarContent = (
    <ChatSidebar
      sendMessage={sendMessage}
      onClearChat={clearChat}
      messageCount={messages.length}
    />
  );

  return (
    <Box
      sx={{
        display: "flex",
        height: { xs: "calc(100vh - 64px)", md: "calc(100vh - 64px)" },
        bgcolor: "#f5f7fa",
        overflow: "hidden",
      }}
    >
    
      {!isMobile && (
        <Paper
          elevation={0}
          sx={{
            width: 320,
            borderRight: "1px solid",
            borderColor: "divider",
            bgcolor: "#ffffff",
            overflow: "hidden",
          }}
        >
          {sidebarContent}
        </Paper>
      )}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
          },
        }}
      >
        {sidebarContent}
      </Drawer>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
            bgcolor: "#ffffff",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              bgcolor: "primary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SmartToyIcon sx={{ color: "white", fontSize: 28 }} />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              AutoBerater KI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {isTyping ? "tippt..." : "Online - Frag mich alles über Autos!"}
            </Typography>
          </Box>
        </Paper>

        <ChatWindow
          messages={messages}
          sendMessage={sendMessage}
          isTyping={isTyping}
        />
      </Box>
    </Box>
  );
}
