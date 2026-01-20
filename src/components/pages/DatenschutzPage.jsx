import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function DatenschutzPage() {
    return (
        <Box sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Datenschutzerklärung
            </Typography>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    1. Datenschutz auf einen Blick
                </Typography>
                <Typography variant="body1" paragraph>
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und
                    entsprechend der gesetzlichen Datenschutzvorschriften sowie
                    dieser Datenschutzerklärung.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    2. Datenerfassung auf unserer Website
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Wer ist verantwortlich für die Datenerfassung?</strong>
                    <br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den
                    Websitebetreiber (siehe Impressum).
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Wie erfassen wir Ihre Daten?</strong>
                    <br />
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                    mitteilen (z.B. bei der Registrierung oder Kontaktaufnahme).
                    Andere Daten werden automatisch beim Besuch der Website erfasst.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    3. Cookies
                </Typography>
                <Typography variant="body1" paragraph>
                    Unsere Website verwendet Cookies. Das sind kleine Textdateien,
                    die auf Ihrem Endgerät gespeichert werden. Sie richten keinen
                    Schaden an und enthalten keine Viren.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    4. Registrierung auf dieser Website
                </Typography>
                <Typography variant="body1" paragraph>
                    Sie können sich auf unserer Website registrieren. Die dabei
                    eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung
                    des jeweiligen Angebotes. Die Pflichtangaben bei der
                    Registrierung müssen vollständig angegeben werden.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    5. Ihre Rechte
                </Typography>
                <Typography variant="body1" paragraph>
                    Sie haben jederzeit das Recht auf Auskunft über Ihre
                    gespeicherten personenbezogenen Daten, deren Herkunft und
                    Empfänger und den Zweck der Datenverarbeitung sowie ein Recht
                    auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    6. Kontakt
                </Typography>
                <Typography variant="body1">
                    Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                    <br />
                    E-Mail: datenschutz@123auto.at
                </Typography>
            </Paper>
        </Box>
    );
}
