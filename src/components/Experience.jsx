import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Section from "./Section.jsx";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Kariyer" title="Çalıştığım yerler">
      <Box
        sx={{
          position: "relative",
          pl: { xs: 3, md: 4 },
          borderLeft: "2px solid",
          borderColor: "divider",
        }}
      >
        <Stack spacing={5}>
          {experience.map((job) => (
            <Box key={job.role} sx={{ position: "relative" }}>
              {/* Timeline dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: -28, md: -36 },
                  top: 6,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  boxShadow: "0 0 0 4px rgba(45, 212, 191, 0.15)",
                }}
              />
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                sx={{ mb: 1 }}
              >
                <Typography variant="h6" sx={{ fontSize: 19 }}>
                  {job.role}{" "}
                  <Box component="span" sx={{ color: "primary.main" }}>
                    @ {job.company}
                  </Box>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", whiteSpace: "nowrap" }}
                >
                  {job.period}
                </Typography>
              </Stack>
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                {job.points.map((point, i) => (
                  <Typography
                    key={i}
                    component="li"
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 0.5 }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Section>
  );
}
