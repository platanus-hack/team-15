/* eslint-disable react/prop-types */
import { Paper, Typography, Box } from "@mui/material";
import { useState } from "react";
import DonutMeter from "./DonutMeter";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import {
  Description as DocumentIcon,
  Home as PropertyIcon,
  DirectionsCar as VehicleIcon,
} from "@mui/icons-material";

const MoneyDistribution = ({ data }) => {
  const [dataSelected, setDataSelected] = useState(null);
  const total = data.reduce((acc, item) => acc + item.value, 0);

  // Mapeo de íconos para cada título
  const icons = {
    "Documentos impagos": <DocumentIcon sx={{ fontSize: 36, opacity: 0.8 }} />,
    "Valoracion de Propiedades": <PropertyIcon sx={{ fontSize: 36, opacity: 0.8 }} />,
    "Valoracion de Vehiculos": <VehicleIcon sx={{ fontSize: 36, opacity: 0.8 }} />,
  };

  return (
    <Box mb={4}>
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
        sx={{
          fontSize: "1.5rem",
          color: "#212121",
        }}
      >
        Distribución del dinero
      </Typography>
      <Paper
        elevation={3}
        sx={{
          px: 4,
          py: 3,
          borderRadius: 3,
          background: "linear-gradient(145deg, #f3f4f6, #ffffff)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={4}
          sx={{
            px: 4,
            pb: 4,
          }}
        >
          {/* Donut Meter */}
          <Box display="flex" justifyContent="center">
            <DonutMeter segments={data} setDataSelected={setDataSelected} />
          </Box>

          {/* Statistic Cards */}
          <Row gutter={[20, 20]} justify="center" style={{ width: "100%" }}>
            {data.map((item, id) => (
              <Col xs={24} sm={12} md={8} key={id}>
              <Card
                bordered={false}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "20px",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: dataSelected === id ? "scale(1.05)" : "scale(1)", // Escalar si está seleccionado
                  boxShadow:
                    dataSelected === id
                      ? "0px 6px 15px rgba(0, 0, 0, 0.2)"
                      : "0px 2px 8px rgba(0, 0, 0, 0.1)", // Cambiar sombra si está seleccionado
                }}
                onClick={() => setDataSelected(id)} // Cambiar selección al hacer clic
              >
                {/* Ícono al costado en el fondo */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "5%",
                    left: "5%",
                    zIndex: 0,
                  }}
                >
                  {icons[item.title]}
                </Box>
            
                {/* Contenido */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Statistic
                    title={item.title}
                    value={(item.value / total) * 100}
                    precision={2}
                    valueStyle={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color:
                        item.title === "Documentos impagos" ? "#cf1322" : "#3f8600",
                    }}
                    prefix={
                      item.title === "Documentos impagos" ? (
                        <ArrowDownOutlined />
                      ) : (
                        <ArrowUpOutlined />
                      )
                    }
                    suffix="%"
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      marginTop: "10px",
                      fontSize: "0.875rem",
                      color: "#757575",
                    }}
                  >
                    Total: {item.value}
                  </Typography>
                </Box>
              </Card>
            </Col>
            
            ))}
          </Row>
        </Box>
      </Paper>
    </Box>
  );
};

export default MoneyDistribution;
