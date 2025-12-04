import React from "react";
import "./UserInfoForm.css";
import UserInfoButton from "./UserInfoButton";
import UserInputField from "./UserInputField";
import { useState } from "react";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    Passwort: ""
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
        <p className="title">Anmelden</p>

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
        

        <UserInfoButton />
      </div>
    </div>
  );
}
