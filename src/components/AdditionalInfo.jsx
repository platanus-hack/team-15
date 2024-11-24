import { Paper, Typography, Divider, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { invokeLambda } from "../api/query";

const AdditionalInfo = () => {
  const [additionalInfo, setAdditionalInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await invokeLambda();

        if (!data || typeof data !== "object") {
          throw new Error("Invalid data format received.");
        }

        setAdditionalInfo(data.body);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const processResumen = (text) => {
    if (!text) return [];
    const sections = text.split(/(Deudas|Activos|Situaciones Preocupantes\/Alarmantes)/);
    const formattedSections = [];
    for (let i = 1; i < sections.length; i += 2) {
      formattedSections.push({
        title: sections[i],
        content: sections[i + 1]?.trim() || "",
      });
    }
    return formattedSections;
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Error
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      </Paper>
    );
  }

  if (!additionalInfo) {
    return (
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Informacion Adicional
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary">
          No data available.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Informacion Adicional
      </Typography>
      <Divider sx={{ my: 2 }} />

      {/* Resumen General */}
      <Typography variant="h6" color="primary" gutterBottom>
        Resumen General
      </Typography>
      {processResumen(additionalInfo.resumen_general)?.map((section, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {section.content}
          </Typography>
        </Box>
      ))}

      {/* Recomendaciones */}
      <Typography variant="h6" color="primary" gutterBottom>
        Recomendaciones
      </Typography>
      <Box sx={{ mb: 2 }}>
        {additionalInfo.recomendaciones
          ?.split(/(\d\.\s*\([^)]+\))/)
          .filter((item) => item.trim()) // Filtrar entradas vacías
          .map((item, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {item.trim()}
            </Typography>
          ))}
      </Box>

      {/* Puntaje Final */}
      <Typography variant="h6" color="primary" gutterBottom>
        Puntaje Final
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {additionalInfo.puntaje_final} - {additionalInfo.razon_puntaje}
      </Typography>
    </Paper>
  );
};

export default AdditionalInfo;
