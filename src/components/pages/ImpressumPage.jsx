import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function ImpressumPage() {
    return (
        <Box sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Impressum
            </Typography>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Angaben gemäß § 5 ECG
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>123Auto GmbH</strong>
                    <br />
                    Musterstraße 1
                    <br />
                    4020 Linz
                    <br />
                    Österreich
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Kontakt
                </Typography>
                <Typography variant="body1" paragraph>
                    Telefon: +43 123 456 789
                    <br />
                    E-Mail: info@123auto.at
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Unternehmensgegenstand
                </Typography>
                <Typography variant="body1" paragraph>
                    Online-Plattform für den Kauf und Verkauf von Fahrzeugen.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    UID-Nummer
                </Typography>
                <Typography variant="body1" paragraph>
                    ATU12345678
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Firmenbuchnummer
                </Typography>
                <Typography variant="body1" paragraph>
                    FN 123456a
                    <br />
                    Handelsgericht Wien
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Geschäftsführung
                </Typography>
                <Typography variant="body1">
                    Max Mustermann
                </Typography>
            </Paper>
        </Box>
    );
}
