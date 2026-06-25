import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Section from "./Section.jsx";
import { profile } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setToast(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="İletişim"
      title="Birlikte proje geliştirelim."
    >
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={5}>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 3, fontSize: 17 }}
          >
            Eğer aklınızda bir proje varsa ya da beni ekibinize katmak
            istiyorsanız mesaj gönderin, size en kısa sürede geri dönüş
            yapacağım.
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <EmailIcon sx={{ color: "primary.main" }} />
              <Typography
                component="a"
                href={`mailto:${profile.email}`}
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {profile.email}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <LocationOnIcon sx={{ color: "primary.main" }} />
              <Typography sx={{ color: "text.secondary" }}>
                {profile.location}
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: { xs: 2.5, md: 4 },
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="İsim"
                  fullWidth
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mesaj"
                  fullWidth
                  required
                  multiline
                  minRows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                >
                  Mesajı gönder.
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={toast}
        autoHideDuration={4000}
        onClose={() => setToast(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setToast(false)}
        >
          Opening your email client…
        </Alert>
      </Snackbar>
    </Section>
  );
}
