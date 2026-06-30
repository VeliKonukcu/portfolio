import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Section from "./Section.jsx";
import { about } from "../data.js";

export default function About() {
  return (
    <Section id="about" eyebrow="Introduction" title={about.heading}>
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid item xs={12} md={7}>
          {about.paragraphs.map((p, i) => (
            <Typography
              key={i}
              variant="body1"
              sx={{ color: "text.secondary", mb: 2, fontSize: 17 }}
            >
              {p}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            {about.stats.map((stat) => (
              <Grid item xs={4} md={12} key={stat.label}>
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    height: "100%",
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: "background.paper",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "primary.main", fontSize: { xs: 18, md: 22 } }}
                  >
                    {stat.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
