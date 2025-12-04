import React, { useState } from "react";
import "./UserInfoForm.css";
import UserInfoButton from "./UserInfoButton";
import UserInputField from "./UserInputField";

export default function NewCarPage() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    text: "",
    imageUrl: "",
    brand: "",
    model: "",
    price: "",
    colour: "",
    first_registration: "",
    city: "",
  });

  const handleSubmit = async () => {
  const response = await fetch("http://localhost:8000/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("Car saved in database!");
  } else {
    alert("Error saving car");
  }
};


  return (
    <div className="newcar-container">

      <div className="fenster">
        <img src="/assets/AutoLogo.png" width={100} alt="logo" />

        <p className="title">Neues Auto hinzufügen</p>

        <div className="form-grid">
          {Object.keys(formData).map((key) => (
            <UserInputField
              key={key}
              inputName={key + ":"}
              myValue={formData[key]}
              onValueChange={(e) =>
                setFormData({ ...formData, [key]: e.target.value })
              }
            />
          ))}
        </div>

        <UserInfoButton onClick={handleSubmit}/>

      </div>
    </div>
  );
}




// import React from "react";
// import "./UserInfoForm.css";
// import UserInfoButton from "./UserInfoButton";
// import UserInputField from "./UserInputField";
// import { useState } from "react";

// export default function NewCarPage() {
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     text: "",
//     imageUrl: "",
//     brand: "",
//     model: "",
//     price: "",
//     colour: "",
//     first_registration: "",
//     city: ""
//   });

//   return (
//     <div
//       style={{
//         marginTop:"100px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div className="fenster">
//         <img src="public\assets\AutoLogo.png" width={100} />
//         <p className="title">Registrieren</p>

//         <UserInputField
//           inputName="title:"
//           myValue={formData.title}
//           onValueChange={(event) =>
//             setFormData({ ...formData, title: event.target.value })
//           }
//         />
//         <UserInputField
//           inputName="subtitle:"
//           myValue={formData.subtitle}
//           onValueChange={(event) =>
//             setFormData({ ...formData, subtitle: event.target.value })
//           }
//         />
//         <UserInputField
//           inputName="text:"
//           myValue={formData.text}
//           onValueChange={(event) =>
//             setFormData({ ...formData, text: event.target.value })
//           }
//         />

//         <UserInputField
//           inputName="imageUrl:"
//           myValue={formData.imageUrl}
//           onValueChange={(event) =>
//             setFormData({ ...formData, imageUrl: event.target.value })
//           }
//         />

//         <UserInputField
//           inputName="brand:"
//           myValue={formData.brand}
//           onValueChange={() =>
//             setFormData({ ...formData, brand: event.target.value })
//           }
//         />

//         <UserInputField
//           inputName="model:"
//           myValue={formData.model}
//           onValueChange={() =>
//             setFormData({ ...formData, model: event.target.value })
//           }
//         />

//         <UserInputField
//           inputName="price:"
//           myValue={formData.price}
//           onValueChange={() =>
//             setFormData({ ...formData, price: event.target.value })
//           }
//         />

//         <UserInputField
//           inputName="colour:"
//           myValue={formData.colour}
//           onValueChange={() =>
//             setFormData({ ...formData, colour: event.target.value })
//           }
//         />

//         <UserInputField
//           inputName="first_registration:"
//           myValue={formData.first_registration}
//           onValueChange={() =>
//             setFormData({ ...formData, first_registration: event.target.value })
//           }
//         />

//         <UserInputField
//           inputName="city:"
//           myValue={formData.city}
//           onValueChange={() =>
//             setFormData({ ...formData, city: event.target.value })
//           }
//         />

//         <UserInfoButton />
//       </div>
//     </div>
//   );
// }
