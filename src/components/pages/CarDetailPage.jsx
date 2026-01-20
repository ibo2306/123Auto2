import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CarDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8000/card/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Auto nicht gefunden");
                return res.json();
            })
            .then((data) => {
                setCar(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Auto konnte nicht geladen werden");
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.includes(id));
    }, [id]);

    const handleFavoriteClick = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        if (isFavorite) {
            const newFavorites = favorites.filter((favId) => favId !== id);
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            setIsFavorite(false);
        } else {
            favorites.push(id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: `${car?.brand} ${car?.model}`,
                text: `Schau dir dieses Auto an: ${car?.brand} ${car?.model} für ${car?.price?.toLocaleString("de-DE")} €`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link kopiert!");
        }
    };

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error || !car) {
        return (
            <Box sx={{ textAlign: "center", mt: 10 }}>
                <Typography variant="h5" color="error" gutterBottom>
                    {error || "Auto nicht gefunden"}
                </Typography>
                <Button variant="contained" onClick={() => navigate(-1)}>
                    Zurück
                </Button>
            </Box>
        );
    }

    const year = car.first_registration?.slice(-4) || car.first_registration;

    return (
        <Box sx={{ maxWidth: 1200, margin: "auto", p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
                    {car.brand} {car.model}
                </Typography>
                <IconButton
                    onClick={handleFavoriteClick}
                    color={isFavorite ? "error" : "default"}
                    sx={{ mr: 1 }}
                >
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton onClick={handleShare}>
                    <ShareIcon />
                </IconButton>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                    <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 2 }}>
                        {car.imageUrl ? (
                            <Box
                                component="img"
                                src={car.imageUrl}
                                alt={`${car.brand} ${car.model}`}
                                sx={{
                                    width: "100%",
                                    height: 400,
                                    objectFit: "cover",
                                }}
                            />
                        ) : (
                            <Box
                                sx={{
                                    width: "100%",
                                    height: 400,
                                    bgcolor: "grey.200",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <DirectionsCarIcon sx={{ fontSize: 100, color: "grey.400" }} />
                            </Box>
                        )}
                    </Paper>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                            <LocalOfferIcon sx={{ color: "success.main", mr: 1, fontSize: 32 }} />
                            <Typography
                                variant="h3"
                                sx={{ color: "success.main", fontWeight: "bold" }}
                            >
                                {car.price?.toLocaleString("de-DE")} €
                            </Typography>
                        </Box>

                        <Divider sx={{ mb: 3 }} />

                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                            {car.type && (
                                <Chip
                                    icon={<DirectionsCarIcon />}
                                    label={car.type}
                                    color="primary"
                                />
                            )}
                            {car.city && (
                                <Chip icon={<LocationOnIcon />} label={car.city} />
                            )}
                            {year && (
                                <Chip icon={<CalendarTodayIcon />} label={`EZ ${year}`} />
                            )}
                            {car.colour && (
                                <Chip
                                    icon={<ColorLensIcon />}
                                    label={car.colour}
                                    sx={{ textTransform: "capitalize" }}
                                />
                            )}
                        </Box>

                        {car.title && (
                            <Typography variant="h6" gutterBottom>
                                {car.title}
                            </Typography>
                        )}

                        {car.text && (
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                {car.text}
                            </Typography>
                        )}

                        <Divider sx={{ mb: 3 }} />

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<EmailIcon />}
                                fullWidth
                            >
                                Verkäufer kontaktieren
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<PhoneIcon />}
                                fullWidth
                            >
                                Telefonnummer anzeigen
                            </Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            Fahrzeugdaten
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={3}>
                                <Typography variant="body2" color="text.secondary">
                                    Marke
                                </Typography>
                                <Typography variant="body1" fontWeight="medium">
                                    {car.brand || "-"}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Typography variant="body2" color="text.secondary">
                                    Modell
                                </Typography>
                                <Typography variant="body1" fontWeight="medium">
                                    {car.model || "-"}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Typography variant="body2" color="text.secondary">
                                    Fahrzeugtyp
                                </Typography>
                                <Typography variant="body1" fontWeight="medium">
                                    {car.type || "-"}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Typography variant="body2" color="text.secondary">
                                    Erstzulassung
                                </Typography>
                                <Typography variant="body1" fontWeight="medium">
                                    {car.first_registration || "-"}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Typography variant="body2" color="text.secondary">
                                    Farbe
                                </Typography>
                                <Typography variant="body1" fontWeight="medium" sx={{ textTransform: "capitalize" }}>
                                    {car.colour || "-"}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Typography variant="body2" color="text.secondary">
                                    Standort
                                </Typography>
                                <Typography variant="body1" fontWeight="medium">
                                    {car.city || "-"}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Typography variant="body2" color="text.secondary">
                                    Preis
                                </Typography>
                                <Typography variant="body1" fontWeight="medium">
                                    {car.price?.toLocaleString("de-DE")} €
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
