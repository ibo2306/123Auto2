import React from "react";
import "./ChatSidebar.css";

export default function ChatSidebar() {
  return (
    <div className="chat-sidebar">
      <h3>Auto-Berater</h3>
      <p>Sag mir, was für ein Auto du suchst 🚗</p>
      <ul>
        <li>„Finde mir einen Audi unter 20.000 €“</li>
        <li>„Zeige nur Benziner in Linz“</li>
        <li>„Modelle mit Automatik“</li>
      </ul>
    </div>
  );
}


// import React from "react";

// export default function ChatSidebar() {
//   return (
//     <div
//       style={{
//         width: "240px",
//         borderRight: "1px solid #ddd",
//         padding: "20px",
//         display: "flex",
//         flexDirection: "column",
//         gap: "16px",
//       }}
//     >
//       <h3>Auto-Berater</h3>

//       <button style={buttonStyle}>Finde ein Auto</button>
//       <button style={buttonStyle}>Empfehlungen</button>
//       <button style={buttonStyle}>Preisfilter</button>

//       <div style={{ marginTop: "20px" }}>
//         <h4>Schnellauswahl</h4>
//         <ul>
//           <li>Audi A3</li>
//           <li>BMW 320</li>
//           <li>Golf GTI</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// const buttonStyle = {
//   padding: "10px 14px",
//   background: "#eee",
//   border: "1px solid #ccc",
//   borderRadius: "6px",
//   cursor: "pointer",
// };
