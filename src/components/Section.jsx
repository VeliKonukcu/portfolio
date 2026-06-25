import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Section({ id, eyebrow, title, children, sx }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "72px", ...sx }}
    >
      <Container maxWidth="lg">
        {(eyebrow || title) && (
          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            {eyebrow && (
              <Typography
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontSize: 13,
                  mb: 1,
                }}
              >
                {eyebrow}
              </Typography>
            )}
            {title && (
              <Typography variant="h3" component="h2" sx={{ maxWidth: 720 }}>
                {title}
              </Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
}
