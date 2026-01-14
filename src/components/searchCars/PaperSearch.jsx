import React, { useState } from "react";
import "./SearchStyling.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CarsList from "./CarsList";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Cards from "../cards/Cards"; // ✅ deine Card-Komponente

export default function PaperSearch() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const [priceMax, setPriceMax] = useState(null);
  const [regMin, setRegMin] = useState(null);
  const [city, setCity] = useState("");

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Modellliste abhängig von der Marke
  const modelOptions = selectedBrand ? CarsList[selectedBrand] : [];

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
      setErrorMsg("❌ Fehler beim Laden der Ergebnisse.");
      setCards([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      className="papersearch"
      sx={{
        display: "flex",
        flexDirection: "column",
        "& > :not(style)": {
          m: 1,
          width: "80vw",
        },
      }}
    >
      {/* Filter */}
      <Paper className="paper" elevation={3}>
        <Grid container spacing={3}>
          {/* Marke Dropdown */}
          <Grid item xs={4}>
            <Autocomplete
              disablePortal
              options={Object.keys(CarsList)}
              value={selectedBrand}
              onChange={(e, value) => {
                setSelectedBrand(value);
                setSelectedModel(null);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Alle Marken" />
              )}
              sx={{ width: 180 }}
            />
          </Grid>

          {/* Modell Dropdown */}
          <Grid item xs={4}>
            <Autocomplete
              disablePortal
              disabled={!selectedBrand}
              options={modelOptions}
              value={selectedModel}
              onChange={(e, value) => setSelectedModel(value)}
              renderInput={(params) => (
                <TextField {...params} label="Alle Modelle" />
              )}
              sx={{ width: 180 }}
            />
          </Grid>

          {/* Preis */}
          <Grid item xs={4}>
            <Autocomplete
              disablePortal
              options={["5000", "10000", "20000", "50000"]}
              value={priceMax}
              onChange={(e, value) => setPriceMax(value)}
              renderInput={(params) => (
                <TextField {...params} label="Preis bis (€)" />
              )}
              sx={{ width: 180 }}
            />
          </Grid>

          {/* Erstzulassung */}
          <Grid item xs={4}>
            <Autocomplete
              disablePortal
              options={["2010", "2015", "2018", "2020", "2022"]}
              value={regMin}
              onChange={(e, value) => setRegMin(value)}
              renderInput={(params) => (
                <TextField {...params} label="Erstzulassung ab" />
              )}
              sx={{ width: 180 }}
            />
          </Grid>

          {/* Stadt */}
          <Grid item xs={4}>
            <TextField
              label="Stadt / PLZ"
              variant="outlined"
              sx={{ width: 180 }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>

          {/* Button */}
          <Grid item xs={4}>
            <Button
              sx={{ width: 180, height: 56 }}
              variant="contained"
              onClick={fetchFilteredCars}
              disabled={loading}
            >
              {loading ? "Lädt..." : "Ergebnisse"}
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Button
            sx={{ width: 180, height: 56 }}
            variant="outlined"
            component={Link}
            to="/cars"
          >
          Alle Autos
          </Button>
        </Grid>
      </Paper>

      {/* Ergebnisse */}
      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Ergebnisse
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {errorMsg && (
          <Typography variant="body2" color="error" sx={{ mb: 2 }}>
            {errorMsg}
          </Typography>
        )}

        {!loading && cards.length === 0 && !errorMsg && (
          <Typography variant="body2">
            Noch keine Ergebnisse. Filter wählen und auf „Ergebnisse“ klicken.
          </Typography>
        )}

        <Grid container spacing={5}>
          {cards.map((card) => (
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
      </Paper>

    </Box>
  );
}


// import React, { useState } from "react";
// import "./SearchStyling.css";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import CarsList from "./CarsList";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";

// export default function PaperSearch() {
//   const [selectedBrand, setSelectedBrand] = useState(null);
//   const [selectedModel, setSelectedModel] = useState(null);

//   // Modellliste abhängig von der Marke
//   const modelOptions = selectedBrand ? CarsList[selectedBrand] : [];

//   return (
//     <Box
//       className="papersearch"
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         "& > :not(style)": {
//           m: 1,
//           width: "80vw",
//         },
//       }}
//     >
//       <Paper className="paper" elevation={3}>
//         <Grid container spacing={2}>
          
//           {/* Marke Dropdown */}
//           <Grid item xs={4}>
//             <Autocomplete
//               disablePortal
//               options={Object.keys(CarsList)} // nur Marken
//               value={selectedBrand}
//               onChange={(e, value) => {
//                 setSelectedBrand(value);
//                 setSelectedModel(null); // Modell resetten
//               }}
//               renderInput={(params) => (
//                 <TextField {...params} label="Alle Marken" />
//               )}
//               sx={{ width: 180 }}
//             />
//           </Grid>

//           {/* Modell Dropdown */}
//           <Grid item xs={4}>
//             <Autocomplete
//               disablePortal
//               disabled={!selectedBrand}      // disabled bis Marke gewählt wurde
//               options={modelOptions}         // nur Modelle dieser Marke
//               value={selectedModel}
//               onChange={(e, value) => setSelectedModel(value)}
//               renderInput={(params) => (
//                 <TextField {...params} label="Alle Modelle" />
//               )}
//               sx={{ width: 180 }}
//             />
//           </Grid>

//           {/* Preis */}
//           <Grid item xs={4}>
//             <Autocomplete
//               disablePortal
//               options={["5000", "10000", "20000", "50000"]}
//               sx={{ width: 180 }}
//               renderInput={(params) => (
//                 <TextField {...params} label="Preis bis (€)" />
//               )}
//             />
//           </Grid>

//           {/* Erstzulassung */}
//           <Grid item xs={4}>
//             <Autocomplete
//               disablePortal
//               options={["2010", "2015", "2018", "2020", "2022"]}
//               sx={{ width: 180 }}
//               renderInput={(params) => (
//                 <TextField {...params} label="Erstzulassung ab" />
//               )}
//             />
//           </Grid>

//           {/* Stadt */}
//           <Grid item xs={4}>
//             <TextField
//               label="Stadt / PLZ"
//               variant="outlined"
//               sx={{ width: 180 }}
//             />
//           </Grid>

//           {/* Button */}
//           <Grid item xs={4}>
//             <Button sx={{ width: 180, height: 56 }} variant="contained">
//               Ergebnisse
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
//   );
// }












// import * as React from "react";
// import "./SearchStyling.css";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import CarsList from "./CarsList";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";


// export default function PaperSearch() {
//   const [selectedBrand, setSelectedBrand] = useState(null);
//   const [selectedModel, setSelectedModel] = useState(null);

//   const modelOptions = selectedBrand ? CarsList[selectedBrand] : [];

//   return (
//     <Box
//       className= "papersearch"
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         "& > :not(style)": {
//           m: 1,
//           width: "80vw",
//         },
//       }}
//     >
//       <Paper className="paper" elevation={3}>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//           <Grid size={4}>
//             <Autocomplete
//               className="field"
//               disablePortal
//               options={CarsList}
//               sx={{ width: 180 }}
//               renderInput={(params) => (
//                 <TextField {...params} label="Alle Marken" />
//               )}
//             />
//           </Grid>
//           <Grid size={4}>
//             <Autocomplete
//               className="field"
//               disablePortal
//               options={CarsList}
//               sx={{ width: 180 }}
//               renderInput={(params) => (
//                 <TextField {...params} label="Alle Modelle" />
//               )}
//             />
//           </Grid>
//           <Grid size={4}>
//             <Autocomplete
//               className="field"
//               disablePortal
//               options={CarsList}
//               sx={{ width: 180 }}
//               renderInput={(params) => (
//                 <TextField {...params} label="Preis bis(€)" />
//               )}
//             />
//           </Grid>
//           <Grid size={4}>
//             <Autocomplete
//               className="field"
//               disablePortal
//               options={CarsList}
//               sx={{ width: 180 }}
//               renderInput={(params) => (
//                 <TextField {...params} label="Erstzulassuung ab" />
//               )}
//             />
//           </Grid>
//           <Grid size={4}>
//             <TextField
//               className="field"
//               id="outlined-basic"
//               label="Stadt/PLZ"
//               variant="outlined"
//               sx={{ width: 180 }}
//             />
//           </Grid>
//           <Grid size={4}>
//             <Button sx={{ width: 180, height:56 }} className="field" variant="contained">
//               Ergebnisse
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
//   );
// }
