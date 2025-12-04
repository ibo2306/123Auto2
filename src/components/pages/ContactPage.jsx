import React from "react";
import "./UserInfoForm.css";
import UserInfoButton from "./UserInfoButton";
import UserInputField from "./UserInputField";
import { useState } from "react";

export default function ContactPage() {
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
        <p className="title">Sign Up</p>

        <UserInputField
          inputName="email:"
          myValue={formData.name}
          onValueChange={() =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <UserInputField
          inputName="Passwort:"
          myValue={formData.age}
          onValueChange={() =>
            setFormData({ ...formData, age: event.target.value })
          }
        />
        <UserInputField
          inputName="Passwort wiederholen:"
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
