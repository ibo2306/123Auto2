import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { getMe, logout } from "../../api/auth"; 
// ⚠️ Pfad ggf. anpassen: wenn dein auth.js woanders liegt

export default function UserMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [me, setMe] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // beim Laden prüfen, ob Token gültig ist
    getMe()
      .then((user) => setMe(user))
      .finally(() => setLoaded(true));
  }, []);

  const isLoggedIn = !!me;

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const go = (path) => {
    navigate(path);
    handleClose();
  };

  const handleLogout = () => {
    logout();      // token löschen
    setMe(null);   // UI umschalten
    handleClose();
    navigate("/"); // zurück zur Startseite
  };

  return (
    <>
      <IconButton onClick={handleOpen} aria-label="user menu">
        <PersonIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {/* Während getMe() lädt, optional nur deaktivierter Eintrag */}
        {!loaded && <MenuItem disabled>Lädt...</MenuItem>}

        {loaded && !isLoggedIn && (
          <MenuItem onClick={() => go("/auth")}>
            Login / Registrieren
          </MenuItem>
        )}

        {loaded && isLoggedIn && (
          <>
            <MenuItem disabled>{me.email}</MenuItem>
            <Divider />
            <MenuItem onClick={() => go("/profile")}>Profil</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        )}
      </Menu>
    </>
  );
}
