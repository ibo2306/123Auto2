import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function ChatInput({ onSend, disabled }) {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() !== "" && !disabled) {
      onSend(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "#ffffff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: 1,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        
        <IconButton
          size="small"
          sx={{
            color: "text.secondary",
            "&:hover": { color: "primary.main" },
          }}
          disabled
          title="Datei anhängen (bald verfügbar)"
        >
          <AttachFileIcon />
        </IconButton>

        <TextField
          fullWidth
          multiline
          maxRows={4}
          placeholder="Schreibe eine Nachricht..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              bgcolor: "#f5f7fa",
              "&:hover": {
                bgcolor: "#eef1f5",
              },
              "&.Mui-focused": {
                bgcolor: "#ffffff",
              },
            },
          }}
        />

        <IconButton
          onClick={handleSend}
          disabled={!inputValue.trim() || disabled}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            width: 44,
            height: 44,
            "&:hover": {
              bgcolor: "primary.dark",
            },
            "&.Mui-disabled": {
              bgcolor: "action.disabledBackground",
              color: "action.disabled",
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
