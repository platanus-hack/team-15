/* eslint-disable react/prop-types */
import { Paper, Typography, Divider, Box, Avatar, Grid } from "@mui/material";
import { MailOutline, CalendarToday, CreditCard } from "@mui/icons-material";

const InfoPanel = ({ personalInfo }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 5, // Mayor padding para que el contenido sea más espacioso
        borderRadius: 3,
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Encabezado con avatar */}
      <Box display="flex" alignItems="center" gap={3} mb={4}>
        <Avatar
          alt={personalInfo.name}
          sx={{
            width: 80, // Avatar más grande
            height: 80,
            bgcolor: "#3f51b5",
            fontSize: "2rem", // Letra más grande dentro del avatar
            fontWeight: "bold",
          }}
        >
          {personalInfo.name?.charAt(0).toUpperCase()}
        </Avatar>
        <Box flex={1}>
          <Typography variant="h3" fontWeight="bold" color="#212121" sx={{ fontSize: "2rem" }}>
            {personalInfo.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1rem" }}>
            Información personal
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Información Detallada */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={2}>
            <MailOutline color="action" sx={{ fontSize: "2rem" }} /> {/* Icono más grande */}
            <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
              <strong>Email:</strong> {personalInfo.email || "No especificado"}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={2}>
            <CalendarToday color="action" sx={{ fontSize: "2rem" }} /> {/* Icono más grande */}
            <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
              <strong>Edad:</strong> {personalInfo.age || "No especificada"}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={2}>
            <CreditCard color="action" sx={{ fontSize: "2rem" }} /> {/* Icono más grande */}
            <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
              <strong>RUT:</strong> {personalInfo.rut || "No especificado"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InfoPanel;
