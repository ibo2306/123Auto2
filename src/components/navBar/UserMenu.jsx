import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function UserMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { user, loading, isLoggedIn, logout } = useAuth();

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const go = (path) => {
    navigate(path);
    handleClose();
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate("/");
  };

  return (
    <>
      <IconButton onClick={handleOpen} aria-label="user menu">
        <PersonIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {loading && <MenuItem disabled>Lädt...</MenuItem>}

        {!loading && !isLoggedIn && (
          <MenuItem onClick={() => go("/auth")}>
            Login / Registrieren
          </MenuItem>
        )}

        {!loading && isLoggedIn && (
          <>
            <MenuItem disabled>{user.email}</MenuItem>
            <Divider />
            <MenuItem onClick={() => go("/profile")}>Profil</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        )}
      </Menu>
    </>
  );
}
