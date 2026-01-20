import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Cards from "../cards/Cards";
import { useAuth } from "../../context/AuthContext";

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { user, token } = useAuth();
    const navigate = useNavigate();

    // Favoriten laden
    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }

        fetch("http://localhost:8000/favorites", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Fehler beim Laden");
                return res.json();
            })
            .then((data) => {
                setFavorites(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Favoriten konnten nicht geladen werden");
                setLoading(false);
            });
    }, [token]);

    // Callback wenn Favorit entfernt wird
    const handleFavoriteRemoved = (carId) => {
        setFavorites((prev) => prev.filter((car) => car.id !== carId));
    };

    // Nicht eingeloggt
    if (!user) {
        return (
            <Box sx={{ textAlign: "center", mt: 10 }}>
                <FavoriteIcon sx={{ fontSize: 80, color: "grey.400", mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                    Melde dich an, um deine Favoriten zu sehen
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate("/auth")}
                    sx={{ mt: 2 }}
                >
                    Anmelden
                </Button>
            </Box>
        );
    }

    // Laden
    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                <CircularProgress />
            </Box>
        );
    }

    // Fehler
    if (error) {
        return (
            <Box sx={{ textAlign: "center", mt: 10 }}>
                <Typography variant="h5" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ width: "80vw", margin: "auto", mt: 4, mb: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                <FavoriteIcon sx={{ fontSize: 40, color: "error.main", mr: 2 }} />
                <Typography variant="h4">Meine Favoriten</Typography>
            </Box>

            {favorites.length === 0 ? (
                <Box sx={{ textAlign: "center", mt: 6 }}>
                    <FavoriteIcon sx={{ fontSize: 80, color: "grey.300", mb: 2 }} />
                    <Typography variant="h6" color="text.secondary">
                        Du hast noch keine Favoriten
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        Klicke auf das Herz-Icon bei einem Auto, um es zu deinen Favoriten hinzuzufügen.
                    </Typography>
                    <Button variant="contained" onClick={() => navigate("/Cars")}>
                        Autos durchsuchen
                    </Button>
                </Box>
            ) : (
                <Grid container spacing={3}>
                    {favorites.map((car) => (
                        <Grid item xs={12} sm={6} md={4} key={car.id}>
                            <Cards
                                id={car.id}
                                title={car.title}
                                subheader={car.subtitle}
                                imageUrl={car.imageUrl}
                                text={car.text}
                                price={car.price}
                                brand={car.brand}
                                model={car.model}
                                city={car.city}
                                first_registration={car.first_registration}
                                type={car.type}
                                colour={car.colour}
                                onFavoriteChange={handleFavoriteRemoved}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
