import React from "react";
export function Cars({imageSrc, carType}) {
  return (
    <div className="carForms2">
      <img
        src={imageSrc}
        alt={carType}
        className="Logo"
      />
      <br />
      <div>{carType}</div>
    </div>
  );
}
