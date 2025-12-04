import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";

export default function CarCards() {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:8000/cards")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Fehler beim Laden der Cards");
                }
                return res.json();
            })
            .then((data) => setCards(data))
            .catch((err) => {
                console.error("API-Fehler:", err);
            });
    }, []);

     
    return (
        <Box sx={{ width: "80vw", margin: "auto", textAlign: "center" }}>
            <Grid container spacing={5}>
                {cards?.map((card) => (
                    <Grid item xs={12} sm={6} md={4} key={card.id}>
                        <Cards
                            title={card.title}
                            subheader={card.subtitle}
                            imageUrl={card.imageUrl}
                            text={card.text}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}



/*import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";

export default function CarCards() {
  return (
    <Box sx={{ width: "80vw", margin: "auto", textAlign: "center" }}>
      <Grid container spacing={5}>
        <Grid size={4}>
          <Cards />
        </Grid>
        <Grid size={4}>
          <Cards />
        </Grid>
        <Grid size={4}>
          <Cards />
        </Grid>
        <Grid size={4}>
          <Cards />
        </Grid>
        <Grid size={4}>
          <Cards />
        </Grid>
        <Grid size={4}>
          <Cards />
        </Grid>

      </Grid>
    </Box>
  );
}
*/
 


// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Cards from "./Cards";

// export default function CarCards() {
//   return (
//     <Box sx={{ width: "80vw", margin: "auto", textAlign: "center" }}>
//       <Grid container spacing={5}>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//         <Grid size={4}>
//           <Cards />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
