import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";

export default function CarCards() {
  return (
    <Box sx={{ width: "80vw", margin: "auto", textAlign: "center" }}>
      <Grid container spacing={5}>
        <Grid size={4}>
          <Cards />
        </Grid>
        <Grid size={4}>
          <Cards />
        </Grid>
        <Grid size={4}>
          <Cards />
        </Grid>
        <Grid size={4}>
          <Cards />
        </Grid>
        <Grid size={4}>
          <Cards />
        </Grid>
        <Grid size={4}>
          <Cards />
        </Grid>
      </Grid>
    </Box>
  );
}
