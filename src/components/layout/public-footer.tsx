import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import { siteConfig } from "@/lib/constants/site";

export function PublicFooter() {
  return (
    <Box component="footer" sx={{ py: 6 }}>
      <Container maxWidth="xl">
        <Divider sx={{ mb: 3 }} />
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={2}
        >
          <Box>
            <Typography variant="subtitle1">{siteConfig.name}</Typography>
            <Typography color="text.secondary" variant="body2">
              Fondasi frontend untuk pencarian kamar dan pengelolaan kos.
            </Typography>
          </Box>
          <Typography color="text.secondary" variant="body2">
            © 2026 Rosatri Kos. Built with Next.js, MUI, Tailwind, and TypeScript.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}