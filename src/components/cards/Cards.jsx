import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useAuth } from "../../context/AuthContext";


export default function Cards({
    id,
    title,
    subheader,
    imageUrl,
    text,
    price,
    brand,
    model,
    city,
    first_registration,
    type,
    colour,
    onFavoriteChange,
}) {
    const navigate = useNavigate();
    const { user, token } = useAuth();
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (user && token) {
            fetch(`http://localhost:8000/favorites/check/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((res) => res.json())
                .then((data) => setIsFavorite(data.isFavorite))
                .catch(() => setIsFavorite(false));
        } else {
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
            setIsFavorite(favorites.includes(id));
        }
    }, [id, user, token]);

    const handleFavoriteClick = async (e) => {
        e.stopPropagation();

        if (!user) {
            navigate("/auth");
            return;
        }

        setLoading(true);

        try {
            if (isFavorite) {
                await fetch(`http://localhost:8000/favorites/${id}`, {
                    method: "DELETE",
                    headers: { Authorization: `Bearer ${token}` },
                });
                setIsFavorite(false);
                if (onFavoriteChange) onFavoriteChange(id);
            } else {
                await fetch(`http://localhost:8000/favorites/${id}`, {
                    method: "POST",
                    headers: { Authorization: `Bearer ${token}` },
                });
                setIsFavorite(true);
            }
        } catch (err) {
            console.error("Favoriten-Fehler:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleShare = (e) => {
        e.stopPropagation();
        if (navigator.share) {
            navigator.share({
                title: `${brand} ${model}`,
                text: `Schau dir dieses Auto an: ${brand} ${model} für ${price?.toLocaleString("de-DE")} €`,
                url: window.location.origin + `/car/${id}`,
            });
        } else {
            navigator.clipboard.writeText(window.location.origin + `/car/${id}`);
            alert("Link kopiert!");
        }
    };

    
    const handleCardClick = () => {
        navigate(`/car/${id}`);
    };


    const year = first_registration?.slice(-4) || first_registration;

    return (
        <Card
            sx={{
                maxWidth: { xs: "100%", sm: 345 },
                width: "100%",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                },
            }}
            onClick={handleCardClick}
        >
            <CardHeader
                avatar={
                    <Avatar  aria-label="brand">
                        {brand?.[0] ?? "A"}
                    </Avatar>
                }
                title={
                    <Typography variant="subtitle1" fontWeight="bold">
                        {brand} {model}
                    </Typography>
                }
                subheader={title || subheader}
            />

           
            {imageUrl && (
                <CardMedia
                    component="img"
                    height="180"
                    image={imageUrl}
                    alt={`${brand} ${model}`}
                    sx={{ objectFit: "cover" }}
                />
            )}

            <CardContent sx={{ pb: 1 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1.5 }}>
                    {type && (
                        <Chip
                            icon={<DirectionsCarIcon />}
                            label={type}
                            size="small"
                            variant="outlined"
                            color="primary"
                        />
                    )}
                    {city && (
                        <Chip
                            icon={<LocationOnIcon />}
                            label={city}
                            size="small"
                            variant="outlined"
                        />
                    )}
                    {year && (
                        <Chip
                            icon={<CalendarTodayIcon />}
                            label={year}
                            size="small"
                            variant="outlined"
                        />
                    )}
                    {colour && (
                        <Chip
                            label={colour}
                            size="small"
                            variant="outlined"
                            sx={{ textTransform: "capitalize" }}
                        />
                    )}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <LocalOfferIcon sx={{ color: "success.main", mr: 0.5 }} />
                    <Typography
                        variant="h5"
                        component="span"
                        sx={{ color: "success.main", fontWeight: "bold" }}
                    >
                        {price?.toLocaleString("de-DE")} €
                    </Typography>
                </Box>

                {text && (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                        }}
                    >
                        {text}
                    </Typography>
                )}
            </CardContent>

            <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                <Box>
                    <IconButton
                        aria-label="zu Favoriten hinzufügen"
                        onClick={handleFavoriteClick}
                        color={isFavorite ? "error" : "default"}
                        disabled={loading}
                    >
                        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton aria-label="teilen" onClick={handleShare}>
                        <ShareIcon />
                    </IconButton>
                </Box>
                <Button
                    variant="contained"
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/car/${id}`);
                    }}
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}
