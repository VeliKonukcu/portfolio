import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import Section from "./Section.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Projelerim">
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} key={project.title}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 160ms ease, border-color 160ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(45, 212, 191, 0.5)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ mb: 1, fontSize: 22 }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      variant="outlined"
                      sx={{ color: "text.secondary", borderColor: "divider" }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  size="small"
                  startIcon={<LaunchIcon />}
                  href={project.demo}
                  target="_blank"
                  rel="noopener"
                >
                  Live demo
                </Button>
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={project.source}
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "text.secondary" }}
                >
                  Source
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
