import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EuroIcon from "@mui/icons-material/Euro";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const quickActionCategories = [
  {
    title: "Marken & Modelle",
    icon: <DirectionsCarIcon fontSize="small" />,
    actions: [
      "Zeig mir Audi Modelle",
      "BMW unter 30.000€?",
      "Welche Mercedes gibt es?",
    ],
  },
  {
    title: "Preis & Budget",
    icon: <EuroIcon fontSize="small" />,
    actions: [
      "Autos unter 15.000€",
      "Beste Autos für 25.000€?",
      "Günstige Familienautos?",
    ],
  },
  {
    title: "Standort",
    icon: <LocationOnIcon fontSize="small" />,
    actions: [
      "Autos in Wien?",
      "Was gibt es in Linz?",
      "Händler in Salzburg?",
    ],
  }
];

const helpQuestions = [
  { text: "Was kannst du alles?", icon: <HelpOutlineIcon fontSize="small" /> },
  { text: "Tipps für den Autokauf", icon: <TipsAndUpdatesIcon fontSize="small" /> },
];

export default function ChatSidebar({ sendMessage, onClearChat, messageCount }) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Schnellauswahl
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Klicke auf eine Frage oder schreibe deine eigene
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ flex: 1, overflowY: "auto" }}>
        {quickActionCategories.map((category, catIndex) => (
          <Box key={catIndex} sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
                color: "text.secondary",
              }}
            >
              {category.icon}
              <Typography variant="caption" fontWeight="medium">
                {category.title}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {category.actions.map((action, actionIndex) => (
                <Chip
                  key={actionIndex}
                  label={action}
                  size="small"
                  variant="outlined"
                  onClick={() => sendMessage(action)}
                  sx={{
                    cursor: "pointer",
                    fontSize: "0.75rem",
                    "&:hover": {
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                      borderColor: "primary.main",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
        <Button
          variant="outlined"
          color="error"
          size="small"
          fullWidth
          startIcon={<DeleteOutlineIcon />}
          onClick={onClearChat}
          sx={{ textTransform: "none" }}
        >
          Chat zurücksetzen
        </Button>
      </Box>
    </Box>
  );
}
