/* eslint-disable react/prop-types */
import { Typography, Paper, Box } from "@mui/material";

const SpeedMeter = ({ speed, maxSpeed }) => {
  const getColor = (speed) => {
    if (speed / maxSpeed <= 0.33) {
      return "green";
    } else if (speed / maxSpeed <= 0.66) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        flex: 1,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 3,
      }}
    >
      {/* Título */}
      <Typography
        variant="h5"
        fontWeight="bold"
        align="center"
        mb={2}
      >
        Índice de Riesgo
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "200px", // Altura suficiente para contener el semicírculo
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 55" // Ajustado para incluir todo el semicírculo
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Fondo del semicírculo */}
          <path
            d="M5 50 A 45 45 0 1 1 95 50"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Arco de color */}
          <path
            d="M5 50 A 45 45 0 0 1 95 50"
            fill="none"
            stroke={getColor(speed)}
            strokeWidth="10"
            strokeDasharray={`${(speed / maxSpeed) * 141.37}, 141.37`}
            strokeLinecap="round"
          />
        </svg>
        {/* Valor dentro del círculo */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            mt: 4,
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color={getColor(speed)}
          >
            {speed}
          </Typography>
          <Typography variant="body1" fontSize={18} color="text.secondary">
            of {maxSpeed}
          </Typography>
        </Box>
      </Box>

      {/* Descripción */}
      <Typography fontSize={12} sx={{ textAlign: "center", color: "#757575", mt: 2 }}>
        El Puntaje es un valor que puede variar entre 1 y {maxSpeed}. A mayor
        puntaje, menor es el riesgo. Puntaje basado en Información de Protesto
        y Morosidades de personas jurídicas en sistema comercial.
      </Typography>
    </Paper>
  );
};

export default SpeedMeter;
