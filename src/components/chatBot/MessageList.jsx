import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function TypingIndicator() {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1.5, mb: 2 }}>
      <Avatar
        sx={{
          width: 36,
          height: 36,
          bgcolor: "primary.main",
        }}
      >
        <SmartToyIcon sx={{ fontSize: 20 }} />
      </Avatar>
      <Paper
        elevation={0}
        sx={{
          px: 2,
          py: 1.5,
          bgcolor: "#ffffff",
          borderRadius: "18px 18px 18px 4px",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "text.disabled",
                animation: "typing 1.4s infinite ease-in-out",
                animationDelay: `${i * 0.2}s`,
                "@keyframes typing": {
                  "0%, 60%, 100%": {
                    transform: "translateY(0)",
                    opacity: 0.4,
                  },
                  "30%": {
                    transform: "translateY(-4px)",
                    opacity: 1,
                  },
                },
              }}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
}

function Message({ message }) {
  const isUser = message.role === "user";
  const isError = message.isError;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isUser ? "row-reverse" : "row",
        alignItems: "flex-end",
        gap: 1.5,
        mb: 2,
      }}
    >
      
      <Avatar
        sx={{
          width: 36,
          height: 36,
          bgcolor: isUser ? "secondary.main" : isError ? "error.main" : "primary.main",
        }}
      >
        {isUser ? (
          <PersonIcon sx={{ fontSize: 20 }} />
        ) : isError ? (
          <ErrorOutlineIcon sx={{ fontSize: 20 }} />
        ) : (
          <SmartToyIcon sx={{ fontSize: 20 }} />
        )}
      </Avatar>

      
      <Box sx={{ maxWidth: "70%", display: "flex", flexDirection: "column" }}>
        <Paper
          elevation={0}
          sx={{
            px: 2,
            py: 1.5,
            bgcolor: isUser ? "primary.main" : isError ? "error.light" : "#ffffff",
            color: isUser ? "white" : isError ? "error.contrastText" : "text.primary",
            borderRadius: isUser
              ? "18px 18px 4px 18px"
              : "18px 18px 18px 4px",
            border: isUser ? "none" : "1px solid",
            borderColor: isError ? "error.main" : "divider",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              lineHeight: 1.5,
            }}
          >
            {message.text}
          </Typography>
        </Paper>

        
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            px: 1,
            color: "text.disabled",
            alignSelf: isUser ? "flex-end" : "flex-start",
          }}
        >
          
        </Typography>
      </Box>
    </Box>
  );
}

export default function MessageList({ messages, isTyping }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        p: { xs: 2, sm: 3 },
        bgcolor: "#f5f7fa",
      }}
    >
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}

      {isTyping && <TypingIndicator />}

      <div ref={messagesEndRef} />
    </Box>
  );
}
