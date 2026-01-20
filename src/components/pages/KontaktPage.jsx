import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function KontaktPage() {
    return (
        <Box sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Kontakt
            </Typography>

            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    So erreichen Sie uns
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <EmailIcon sx={{ mr: 2, color: "primary.main" }} />
                    <Typography>info@123auto.at</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <PhoneIcon sx={{ mr: 2, color: "primary.main" }} />
                    <Typography>+43 123 456 789</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon sx={{ mr: 2, color: "primary.main" }} />
                    <Typography>Musterstraße 1, 1010 Wien</Typography>
                </Box>
            </Paper>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Nachricht senden
                </Typography>

                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="E-Mail"
                    variant="outlined"
                    type="email"
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Nachricht"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" size="large">
                    Absenden
                </Button>
            </Paper>
        </Box>
    );
}
