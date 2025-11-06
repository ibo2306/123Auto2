import { Box, Grid, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "40px",
        marginTop: "150px",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={35}>
          {/* Column 1 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom>
              123Auto
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Die beste Plattform für Automobilangebote.
            </Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Link href="/" underline="hover" display="block">
              Startseite
            </Link>
            <Link href="/autos" underline="hover" display="block">
              Autos
            </Link>
            <Link href="/kontakt" underline="hover" display="block">
              Kontakt
            </Link>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Rechtliches
            </Typography>
            <Link href="/impressum" underline="hover" display="block">
              Impressum
            </Link>
            <Link href="/datenschutz" underline="hover" display="block">
              Datenschutz
            </Link>
          </Grid>

        </Grid>

        {/* Bottom row */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} 123Auto. Alle Rechte vorbehalten.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
