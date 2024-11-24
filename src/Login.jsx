import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router"; // Importar el hook de navegación

function Login() {
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate(); // Hook para redirección

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    navigate("/home"); // Redirigir a /home
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(145deg, #f3f4f6, #ffffff)",
        padding: 2,
      }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            align="center"
            gutterBottom
          >
            Login
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            mb={3}
          >
            Please fill in your details to access your account.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="RUT"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Age"
              type="number"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Income"
              type="number"
              variant="outlined"
              required
            />
            {/* File Upload Section */}
            <Box>
              <Typography
                variant="body1"
                color="text.secondary"
                mb={1}
              >
                Upload Supporting Document:
              </Typography>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  textTransform: "none",
                }}
              >
                Choose File
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              {fileName && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={1}
                >
                  Selected File: {fileName}
                </Typography>
              )}
            </Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                padding: 1.5,
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
