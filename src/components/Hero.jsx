import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { profile } from "../data.js";

export default function Hero() {
  return (
    <Box
      id="top"
      component="header"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 10, md: 16 },
        pb: { xs: 10, md: 16 },
        background:
          "radial-gradient(1100px 500px at 70% -10%, rgba(45, 212, 191, 0.12), transparent 60%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 820 }}>
          <Chip
            label={`• ${profile.location}`}
            variant="outlined"
            sx={{
              alignSelf: "flex-start",
              color: "primary.light",
              borderColor: "rgba(45, 212, 191, 0.4)",
            }}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 40, sm: 56, md: 68 } }}
          >
            {profile.name}
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: 40, sm: 56, md: 68 }, color: "primary.main" }}
          >
            {profile.role}.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: "text.secondary", fontWeight: 400, maxWidth: 640 }}
          >
            {profile.tagline}
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ pt: 1, flexWrap: "wrap", gap: 1 }}
          >
            <Button
              variant="contained"
              size="large"
              href="#projects"
              endIcon={<ArrowForwardIcon />}
            >
              Projelerim
            </Button>
            <Button variant="outlined" size="large" href="#contact">
              İletişime geçmek için
            </Button>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
            <IconButton
              aria-label="GitHub"
              href={profile.github}
              target="_blank"
              rel="noopener"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="Email"
              href={`mailto:${profile.email}`}
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
