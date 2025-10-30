import { Cars } from "./Cars";
import React from "react";

export default function CarForms() {
  return (
    <div className="carForms">

      <Cars imageSrc="public\assets\Kleinwagen.png" carType="Kleinwagen" />

      <Cars imageSrc="public\assets\Limousine.png" carType="Limousine" />

      <Cars imageSrc="public\assets\Kombi.png" carType="Kombi" />

      <Cars imageSrc="public\assets\SUV.png" carType="SUV" />

      <Cars imageSrc="public\assets\Van.png" carType="Van" />

      <Cars imageSrc="public\assets\Transporter.png" carType="Transporter" />

      <Cars imageSrc="public\assets\Coupe.png" carType="Coupe" />
      
      <Cars imageSrc="public\assets\Cabrio.png" carType="Cabrio" />
      
    </div>
  );
}
