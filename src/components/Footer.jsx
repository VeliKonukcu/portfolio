import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { profile } from "../data.js";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: "1px solid", borderColor: "divider", py: 4 }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © {new Date().getFullYear()} {profile.name}. Built with React, Vite & MUI.
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <IconButton
              aria-label="GitHub"
              href={profile.github}
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="Email"
              href={`mailto:${profile.email}`}
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
