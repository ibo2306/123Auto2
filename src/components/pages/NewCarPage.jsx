import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function NewCarPage() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    text: "",
    imageUrl: "",
    brand: "",
    model: "",
    price: "",
    colour: "",
    first_registration: "",
    city: "",
    type: "",
  });

  const carTypes = [
    "Kleinwagen",
    "Limousine",
    "Kombi",
    "SUV",
    "Van",
    "Transporter",
    "Coupe",
    "Cabrio",
  ];

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    const response = await fetch("http://localhost:8000/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price),
      }),
    });

    setLoading(false);

    if (response.ok) {
      setMessage("Auto erfolgreich gespeichert!");
      setFormData({
        title: "",
        subtitle: "",
        text: "",
        imageUrl: "",
        brand: "",
        model: "",
        price: "",
        colour: "",
        first_registration: "",
        city: "",
        type: "",
      });
    } else {
      setMessage("Fehler beim Speichern");
    }
  };

  const fieldLabels = {
    title: "Titel",
    subtitle: "Untertitel",
    text: "Beschreibung",
    imageUrl: "Bild-URL",
    brand: "Marke",
    model: "Modell",
    price: "Preis (€)",
    colour: "Farbe",
    first_registration: "Erstzulassung",
    city: "Stadt",
    type: "Fahrzeugtyp",
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4, width: 600 }} elevation={3}>
        <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
          Neues Auto hinzufügen
        </Typography>

        <Grid container spacing={2}>
          {Object.keys(formData).map((key) => (
            <Grid item xs={6} key={key}>
              {key === "type" ? (
                <FormControl fullWidth>
                  <InputLabel>Fahrzeugtyp</InputLabel>
                  <Select
                    value={formData.type}
                    label="Fahrzeugtyp"
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
                    {carTypes.map((t) => (
                      <MenuItem key={t} value={t}>
                        {t}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <TextField
                  fullWidth
                  label={fieldLabels[key] || key}
                  value={formData[key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                />
              )}
            </Grid>
          ))}
        </Grid>

        {message && (
          <Typography
            sx={{ mt: 2, textAlign: "center" }}
            color={message.includes("Fehler") ? "error" : "success.main"}
          >
            {message}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          sx={{ mt: 3 }}
        >
          {loading ? "Speichern..." : "Auto speichern"}
        </Button>
      </Paper>
    </Box>
  );
}
