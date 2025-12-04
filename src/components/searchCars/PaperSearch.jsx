import React, { useState } from "react";
import "./SearchStyling.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CarsList from "./CarsList";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function PaperSearch() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  // Modellliste abhängig von der Marke
  const modelOptions = selectedBrand ? CarsList[selectedBrand] : [];

  return (
    <Box
      className="papersearch"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "80vw",
        },
      }}
    >
      <Paper className="paper" elevation={3}>
        <Grid container spacing={2}>
          
          {/* Marke Dropdown */}
          <Grid item xs={4}>
            <Autocomplete
              disablePortal
              options={Object.keys(CarsList)} // nur Marken
              value={selectedBrand}
              onChange={(e, value) => {
                setSelectedBrand(value);
                setSelectedModel(null); // Modell resetten
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
              disabled={!selectedBrand}      // disabled bis Marke gewählt wurde
              options={modelOptions}         // nur Modelle dieser Marke
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
              sx={{ width: 180 }}
              renderInput={(params) => (
                <TextField {...params} label="Preis bis (€)" />
              )}
            />
          </Grid>

          {/* Erstzulassung */}
          <Grid item xs={4}>
            <Autocomplete
              disablePortal
              options={["2010", "2015", "2018", "2020", "2022"]}
              sx={{ width: 180 }}
              renderInput={(params) => (
                <TextField {...params} label="Erstzulassung ab" />
              )}
            />
          </Grid>

          {/* Stadt */}
          <Grid item xs={4}>
            <TextField
              label="Stadt / PLZ"
              variant="outlined"
              sx={{ width: 180 }}
            />
          </Grid>

          {/* Button */}
          <Grid item xs={4}>
            <Button sx={{ width: 180, height: 56 }} variant="contained">
              Ergebnisse
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}







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
