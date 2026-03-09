import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { publicNavigation } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";

export function PublicHeader() {
  return (
    <AppBar color="transparent" elevation={0} position="sticky">
      <Container maxWidth="xl">
        <Toolbar className="min-h-20 px-0">
          <Box className="flex flex-1 items-center gap-3">
            <Chip color="primary" label="Rosatri" size="small" />
            <Typography component="a" href="/" variant="h6">
              {siteConfig.name}
            </Typography>
          </Box>

          <Box className="hidden items-center gap-2 md:flex">
            {publicNavigation.map((item) => (
              <Button href={item.href} key={item.href} color="inherit">
                {item.label}
              </Button>
            ))}
          </Box>

          <Box className="ml-4 hidden md:block">
            <Button href="/admin" variant="contained">
              Masuk Admin
            </Button>
          </Box>

          <IconButton className="md:hidden" color="inherit">
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
