import React, { useState } from "react";
import { login, register } from "../../api/auth";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  async function handleSubmit() {
    setLoading(true);
    setErrorMsg("");

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(email, password); // ✅ speichert Token direkt
      }
      navigate("/"); // nach Login/Register zur Startseite
    } catch (e) {
      setErrorMsg(e.message || "Fehler");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
      <Paper sx={{ p: 4, width: 380 }} elevation={3}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {mode === "login" ? "Login" : "Registrieren"}
        </Typography>

        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Passwort"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />

        {errorMsg && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {errorMsg}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          sx={{ mb: 2 }}
        >
          {loading ? "Bitte warten..." : mode === "login" ? "Einloggen" : "Registrieren"}
        </Button>

        <Button
          fullWidth
          variant="text"
          onClick={() => setMode(mode === "login" ? "register" : "login")}
        >
          {mode === "login"
            ? "Noch kein Konto? Registrieren"
            : "Schon ein Konto? Login"}
        </Button>
      </Paper>
    </Box>
  );
}
