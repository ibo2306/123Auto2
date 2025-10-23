import * as React from "react";
import "./SearchStyling.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CarsList from "./CarsList";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


export default function PaperSearch() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100vw",
        },
      }}
    >
      <Paper className="paper" elevation={3}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={4}>
            <Autocomplete
              className="field"
              disablePortal
              options={CarsList}
              sx={{ width: 180 }}
              renderInput={(params) => (
                <TextField {...params} label="Alle Marken" />
              )}
            />
          </Grid>
          <Grid size={4}>
            <Autocomplete
              className="field"
              disablePortal
              options={CarsList}
              sx={{ width: 180 }}
              renderInput={(params) => (
                <TextField {...params} label="Alle Modelle" />
              )}
            />
          </Grid>
          <Grid size={4}>
            <Autocomplete
              className="field"
              disablePortal
              options={CarsList}
              sx={{ width: 180 }}
              renderInput={(params) => (
                <TextField {...params} label="Preis bis(€)" />
              )}
            />
          </Grid>
          <Grid size={4}>
            <Autocomplete
              className="field"
              disablePortal
              options={CarsList}
              sx={{ width: 180 }}
              renderInput={(params) => (
                <TextField {...params} label="Erstzulassuung ab" />
              )}
            />
          </Grid>
          <Grid size={4}>
            <TextField
              className="field"
              id="outlined-basic"
              label="Stadt/PLZ"
              variant="outlined"
              sx={{ width: 180 }}
            />
          </Grid>
          <Grid size={4}>
            <Button sx={{ width: 180, height:56 }} className="field" variant="contained">
              Ergebnisse
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
