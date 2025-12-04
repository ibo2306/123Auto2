// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function SignUpPage() {
//   return (
//     <Box>
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }

import React from "react";
import "./UserInfoForm.css";
import UserInfoButton from "./UserInfoButton";
import UserInputField from "./UserInputField";
import { useState } from "react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    Passwort: "",
    Passwort_wiederholen: ""
  });

  return (
    <div
      style={{
        marginTop:"100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="fenster">
        <img src="public\assets\AutoLogo.png" width={100} />
        <p className="title">Registrieren</p>

        <UserInputField
          inputName="email:"
          myValue={formData.email}
          onValueChange={() =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <UserInputField
          inputName="Passwort:"
          myValue={formData.Passwort}
          onValueChange={() =>
            setFormData({ ...formData, Passwort: event.target.value })
          }
        />
        <UserInputField
          inputName="Passwort wiederholen:"
          myValue={formData.Passwort_wiederholen}
          onValueChange={() =>
            setFormData({ ...formData, Passwort_wiederholen: event.target.value })
          }
        />

        <UserInfoButton />
      </div>
    </div>
  );
}
