import { Box, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; // Ícono más nítido

const DebtPanel = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #ffffff, #f8f8f8)",
        padding: 4,
        borderRadius: 5,
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 64,
          height: 64,
          backgroundColor: "#ffeb3b",
          borderRadius: "50%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          flexShrink: 0,
        }}
      >
        <MonetizationOnIcon sx={{ fontSize: "2rem", color: "#424242" }} />
      </Box>

      <Box
        sx={{
          textAlign: "left",
          ml: 6,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            color: "#2c3e50",
            lineHeight: "1.2",
          }}
        >
          Cantidad de deuda:{" "}
          <Typography
            component="span"
            sx={{
              color: "#e74c3c",
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "1.2",
            }}
          >
            $12,500
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#7f8c8d",
            fontWeight: "medium",
            lineHeight: "1.5",
          }}
        >
          Documentos atrasados:{" "}
          <Typography
            component="span"
            sx={{
              color: "#2c3e50",
              fontWeight: "bold",
            }}
          >
            3
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default DebtPanel;
