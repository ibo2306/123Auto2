import * as React from "react";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Cards from "./Cards";

export default function CarCards() {
    const [cards, setCards] = React.useState([]);
    const [searchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    React.useEffect(() => {
        // URL mit optionalem type-Filter bauen
        const url = new URL("http://localhost:8000/cards");
        if (typeFilter) {
            url.searchParams.set("type", typeFilter);
        }

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Fehler beim Laden der Cards");
                }
                return res.json();
            })
            .then((data) => setCards(data))
            .catch((err) => {
                console.error("API-Fehler:", err);
            });
    }, [typeFilter]);

    return (
        <Box sx={{ width: "80vw", margin: "auto", textAlign: "center" }}>
            {typeFilter && (
                <Typography variant="h5" sx={{ mb: 3 }}>
                    Fahrzeugtyp: {typeFilter}
                </Typography>
            )}
            <Grid container spacing={5}>
                {cards?.map((card) => (
                    <Grid item xs={12} sm={6} md={4} key={card.id}>
                        <Cards
                            title={card.title}
                            subheader={card.subtitle}
                            imageUrl={card.imageUrl}
                            text={card.text}
                        />
                    </Grid>
                ))}
            </Grid>
            {typeFilter && cards.length === 0 && (
                <Typography sx={{ mt: 3, color: "text.secondary" }}>
                    Keine Fahrzeuge in der Kategorie "{typeFilter}" gefunden.
                </Typography>
            )}
        </Box>
    );
}