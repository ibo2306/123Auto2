import React from "react";
import { useNavigate } from "react-router-dom";

export function Cars({imageSrc, carType}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Cars?type=${encodeURIComponent(carType)}`);
  };

  return (
    <div className="carForms2" onClick={handleClick} style={{ cursor: "pointer" }}>
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
