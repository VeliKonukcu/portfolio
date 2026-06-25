import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Section from "./Section.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="teknoloji"
      title="Kullandığım yetenekler ve teknolojiler."
    >
      <Grid container spacing={3}>
        {skills.map((group) => (
          <Grid item xs={12} sm={6} md={3} key={group.category}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: "text.primary", fontSize: 18 }}
                >
                  {group.category}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {group.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={{
                        bgcolor: "rgba(45, 212, 191, 0.1)",
                        color: "primary.light",
                        border: "1px solid rgba(45, 212, 191, 0.22)",
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
