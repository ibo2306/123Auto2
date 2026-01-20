import React, { useState, useEffect } from "react";
import "./SearchStyling.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Skeleton from "@mui/material/Skeleton";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";
import Cards from "../cards/Cards";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CategoryIcon from "@mui/icons-material/Category";
import EuroIcon from "@mui/icons-material/Euro";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TuneIcon from "@mui/icons-material/Tune";

export default function PaperSearch() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const [priceMax, setPriceMax] = useState(null);
  const [regMin, setRegMin] = useState(null);
  const [city, setCity] = useState("");

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:8000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((err) => console.error("Fehler beim Laden der Marken:", err));
  }, []);

 
  useEffect(() => {
    if (selectedBrand) {
      fetch(`http://localhost:8000/models?brand=${encodeURIComponent(selectedBrand)}`)
        .then((res) => res.json())
        .then((data) => setModels(data))
        .catch((err) => console.error("Fehler beim Laden der Modelle:", err));
    } else {
      setModels([]);
    }
  }, [selectedBrand]);

  async function fetchFilteredCars() {
    setLoading(true);
    setErrorMsg("");

    try {
      const params = new URLSearchParams();

      if (selectedBrand) params.set("brand", selectedBrand);
      if (selectedModel) params.set("model", selectedModel);
      if (priceMax) params.set("price_max", priceMax);
      if (regMin) params.set("reg_min", regMin);
      if (city.trim()) params.set("city", city.trim());

      const res = await fetch(`http://localhost:8000/cards?${params.toString()}`);
      if (!res.ok) throw new Error("Fehler beim Laden der Cards");

      const data = await res.json();
      setCards(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setErrorMsg("Fehler beim Laden der Ergebnisse.");
      setCards([]);
    } finally {
      setLoading(false);
    }
  }


  function resetFilters() {
    setSelectedBrand(null);
    setSelectedModel(null);
    setPriceMax(null);
    setRegMin(null);
    setCity("");
    setCards([]);
    setErrorMsg("");
  }

  
  const activeFilters = [
    selectedBrand && { key: "brand", label: selectedBrand, onDelete: () => { setSelectedBrand(null); setSelectedModel(null); } },
    selectedModel && { key: "model", label: selectedModel, onDelete: () => setSelectedModel(null) },
    priceMax && { key: "price", label: `bis ${Number(priceMax).toLocaleString("de-DE")} €`, onDelete: () => setPriceMax(null) },
    regMin && { key: "reg", label: `ab ${regMin}`, onDelete: () => setRegMin(null) },
    city && { key: "city", label: city, onDelete: () => setCity("") },
  ].filter(Boolean);

  
  const SkeletonCard = () => (
    <Paper sx={{ p: 2, height: 320 }}>
      <Skeleton variant="rectangular" height={140} sx={{ mb: 2, borderRadius: 1 }} />
      <Skeleton variant="text" width="60%" height={28} />
      <Skeleton variant="text" width="40%" height={20} sx={{ mb: 1 }} />
      <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
        <Skeleton variant="rounded" width={60} height={24} />
        <Skeleton variant="rounded" width={80} height={24} />
      </Box>
      <Skeleton variant="text" width="50%" height={32} />
    </Paper>
  );

  return (
    <Box
      className="papersearch"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 3, md: 4 },
        py: 3,
      }}
    >
      
      <Paper
        className="paper"
        elevation={4}
        sx={{
          width: { xs: "100%", sm: "95%", md: "85%", lg: "80%" },
          maxWidth: 1200,
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 3,
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        }}
      >
        
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 1 }}>
            <TuneIcon sx={{ fontSize: 32, color: "primary.main" }} />
            <Typography variant="h4" fontWeight="bold" color="primary.main">
              Finde dein Traumauto
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            Nutze die Filter, um das perfekte Fahrzeug zu finden
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
              disablePortal
              options={brands}
              value={selectedBrand}
              onChange={(e, value) => {
                setSelectedBrand(value);
                setSelectedModel(null);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Marke"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <>
                        <InputAdornment position="start">
                          <DirectionsCarIcon color="action" />
                        </InputAdornment>
                        {params.InputProps.startAdornment}
                      </>
                    ),
                  }}
                />
              )}
              fullWidth
            />
          </Grid>

         
          <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
              disablePortal
              disabled={!selectedBrand}
              options={models}
              value={selectedModel}
              onChange={(e, value) => setSelectedModel(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Modell"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <>
                        <InputAdornment position="start">
                          <CategoryIcon color="action" />
                        </InputAdornment>
                        {params.InputProps.startAdornment}
                      </>
                    ),
                  }}
                />
              )}
              fullWidth
            />
          </Grid>

          
          <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
              freeSolo
              options={["5000", "10000", "20000", "50000"]}
              value={priceMax}
              onChange={(e, value) => setPriceMax(value)}
              onInputChange={(e, value) => setPriceMax(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Preis bis"
                  type="number"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <>
                        <InputAdornment position="start">
                          <EuroIcon color="action" />
                        </InputAdornment>
                        {params.InputProps.startAdornment}
                      </>
                    ),
                  }}
                />
              )}
              fullWidth
            />
          </Grid>

          
          <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
              freeSolo
              options={["2010", "2015", "2018", "2020", "2022", "2024"]}
              value={regMin}
              onChange={(e, value) => setRegMin(value)}
              onInputChange={(e, value) => setRegMin(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Erstzulassung ab"
                  type="number"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <>
                        <InputAdornment position="start">
                          <CalendarMonthIcon color="action" />
                        </InputAdornment>
                        {params.InputProps.startAdornment}
                      </>
                    ),
                  }}
                />
              )}
              fullWidth
            />
          </Grid>

          
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Stadt / PLZ"
              variant="outlined"
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", gap: 1, height: "100%" }}>
              <Button
                sx={{ flex: 2, height: 56 }}
                variant="contained"
                onClick={fetchFilteredCars}
                disabled={loading}
                startIcon={<SearchIcon />}
                size="large"
              >
                {loading ? "Suche..." : "Suchen"}
              </Button>
              <Button
                sx={{ flex: 1, height: 56 }}
                variant="outlined"
                onClick={resetFilters}
                color="secondary"
                title="Filter zurücksetzen"
              >
                <RestartAltIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>

    
        {activeFilters.length > 0 && (
          <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1, alignItems: "center" }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              Aktive Filter:
            </Typography>
            {activeFilters.map((filter) => (
              <Chip
                key={filter.key}
                label={filter.label}
                onDelete={filter.onDelete}
                color="primary"
                variant="outlined"
                size="small"
              />
            ))}
          </Box>
        )}

        
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button
            variant="text"
            component={Link}
            to="/cars"
            sx={{ textTransform: "none" }}
          >
            Alle Fahrzeuge anzeigen
          </Button>
        </Box>
      </Paper>

  
      <Paper
        elevation={2}
        sx={{
          width: { xs: "100%", sm: "95%", md: "85%", lg: "80%" },
          maxWidth: 1200,
          mt: 3,
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
        }}
      >
        
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6">
            Ergebnisse
          </Typography>
          {cards.length > 0 && (
            <Chip
              label={`${cards.length} Fahrzeug${cards.length !== 1 ? "e" : ""} gefunden`}
              color="success"
              size="small"
            />
          )}
        </Box>

        <Divider sx={{ mb: 3 }} />

        
        {errorMsg && (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography variant="body1" color="error">
              {errorMsg}
            </Typography>
          </Box>
        )}

        
        {loading && (
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <SkeletonCard />
              </Grid>
            ))}
          </Grid>
        )}

        
        {!loading && cards.length === 0 && !errorMsg && (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <DirectionsCarIcon sx={{ fontSize: 64, color: "text.disabled", mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Noch keine Ergebnisse
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Wähle Filter aus und klicke auf "Suchen"
            </Typography>
          </Box>
        )}

        
        {!loading && cards.length > 0 && (
          <Grid container spacing={3}>
            {cards.map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                <Cards
                  id={card.id}
                  title={card.title}
                  subheader={card.subtitle}
                  imageUrl={card.imageUrl}
                  text={card.text}
                  price={card.price}
                  brand={card.brand}
                  model={card.model}
                  city={card.city}
                  first_registration={card.first_registration}
                  type={card.type}
                  colour={card.colour}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </Box>
  );
}
