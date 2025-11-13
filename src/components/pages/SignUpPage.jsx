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
    name: "",
    age: "",
    email: "",
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
        <img src="react.svg" width={100} />
        <p className="title">React form</p>

        <UserInputField
          inputName="name"
          myValue={formData.name}
          onValueChange={() =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <UserInputField
          inputName="age"
          myValue={formData.age}
          onValueChange={() =>
            setFormData({ ...formData, age: event.target.value })
          }
        />
        <UserInputField
          inputName="email:"
          myValue={formData.email}
          onValueChange={() =>
            setFormData({ ...formData, email: event.target.value })
          }
        />

        <UserInfoButton />
      </div>
    </div>
  );
}
