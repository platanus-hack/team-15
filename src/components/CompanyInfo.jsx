/* eslint-disable react/prop-types */
import { Paper, Typography, Grid, Box } from "@mui/material";
import { AccountBalance, CreditCard, AssignmentLate } from "@mui/icons-material";

const CompanyInfo = ({ data }) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3} color="textPrimary">
        Información de la Institución Financiera
      </Typography>

      {/* Tarjetas de Bancos */}
      <Grid container spacing={4}>
        {data.direct_debt_details.map((debt, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                borderRadius: 3,
                background: "linear-gradient(145deg, #f3f4f6, #ffffff)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)", // Efecto de agrandar la tarjeta
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // Sombra más pronunciada
                  background: "linear-gradient(145deg, #e8eaf6, #ffffff)", // Cambio en el color de fondo
                },
              }}
            >
              {/* Icono de Fondo */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  opacity: 0.1,
                  fontSize: "8rem",
                  color: "#3f51b5",
                }}
              >
                <AccountBalance fontSize="inherit" />
              </Box>

              {/* Información del Banco */}
              <Box sx={{ zIndex: 1, position: "relative" }}>
                <Typography variant="h6" fontWeight="bold" mb={2} color="#3f51b5">
                  {debt.financial_institution}
                </Typography>

                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="text.secondary"
                  mb={1}
                >
                  Tipo de Crédito: <span style={{ color: "#424242" }}>{debt.credit_type}</span>
                </Typography>

                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="text.secondary"
                  mb={1}
                >
                  Crédito Total: <span style={{ color: "#4caf50" }}>{debt.total_credit}</span>
                </Typography>

                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="text.secondary"
                  mb={1}
                >
                  Vigente: <span style={{ color: "#4caf50" }}>{debt.current}</span>
                </Typography>

                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="text.secondary"
                >
                  Atrasado:
                </Typography>
                <Grid container spacing={1} mt={1}>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <AssignmentLate fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        30-59 días: {debt["30_to_59_days"]}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <AssignmentLate fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        60-89 días: {debt["60_to_89_days"]}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <AssignmentLate fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        90+ días: {debt["90_or_more_days"]}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        ))}

        {/* Líneas de Crédito */}
        {data.credit_lines_details.map((credit, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                borderRadius: 3,
                background: "linear-gradient(145deg, #f3f4f6, #ffffff)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)", // Efecto de agrandar la tarjeta
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // Sombra más pronunciada
                  background: "linear-gradient(145deg, #e8eaf6, #ffffff)", // Cambio en el color de fondo
                },
              }}
            >
              {/* Icono de Fondo */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  opacity: 0.1,
                  fontSize: "8rem",
                  color: "#3f51b5",
                }}
              >
                <CreditCard fontSize="inherit" />
              </Box>

              {/* Información del Banco */}
              <Box sx={{ zIndex: 1, position: "relative" }}>
                <Typography variant="h6" fontWeight="bold" mb={2} color="#3f51b5">
                  {credit.financial_institution}
                </Typography>

                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="text.secondary"
                  mb={1}
                >
                  Línea de Crédito Directo: <span style={{ color: "#4caf50" }}>{credit.direct}</span>
                </Typography>

                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="text.secondary"
                  mb={1}
                >
                  Línea de Crédito Indirecto: <span style={{ color: "#f44336" }}>{credit.indirect}</span>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanyInfo;
