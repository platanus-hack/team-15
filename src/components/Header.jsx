import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Link } from "react-router";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#212121", // Color negro/gris oscuro
  color: "#ffffff",
  boxShadow: "none",
  paddingBottom: 4,
  paddingTop: 4,
});

const StyledAddButton = styled(IconButton)({
  backgroundColor: "#3f51b5", // Fondo azul oscuro
  color: "#ffffff", // Ícono blanco
  borderRadius: "50%", // Forma circular
  padding: "12px", // Tamaño del botón
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra sutil
  transition: "transform 0.2s ease, box-shadow 0.2s ease", // Animaciones suaves
  "&:hover": {
    backgroundColor: "#283593", // Cambio de color en hover
    transform: "scale(1.1)", // Efecto de agrandar
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", // Sombra más pronunciada
  },
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        {/* Título */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
          }}
        >
          My App
        </Typography>

        <Box>
          <StyledAddButton component={Link} to="/">
            <AddIcon />
          </StyledAddButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
