import { Box, Stack, Typography } from "@mui/material";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  action?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      spacing={2}
    >
      <Box>
        {eyebrow ? (
          <Typography color="primary" variant="overline">
            {eyebrow}
          </Typography>
        ) : null}
        <Typography component="h2" sx={{ mt: 0.5 }} variant="h4">
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 720 }}>
          {description}
        </Typography>
      </Box>
      {action}
    </Stack>
  );
}