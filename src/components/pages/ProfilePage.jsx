import React, { useEffect, useState } from "react";
import { getMe, logout } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ProfilePage() {
  const [me, setMe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMe().then((u) => {
      if (!u) navigate("/auth");
      else setMe(u);
    });
  }, [navigate]);

  if (!me) return null;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
      <Paper sx={{ p: 4, width: 420 }} elevation={3}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Profil
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Eingeloggt als: <b>{me.email}</b>
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
}
