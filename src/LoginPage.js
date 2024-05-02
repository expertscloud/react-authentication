import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Container, Grid } from "@mui/material";

function LoginPage() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: "100px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Username"
          style={{ marginBottom: "20px", width: "80%" }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          style={{ marginBottom: "20px", width: "80%" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginBottom: "20px", width: "80%" }}>
          Login
        </Button>
        <Grid container justifyContent="flex-end" style={{ width: "80%" }}>
          <Grid item>
            <Typography variant="body2">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default LoginPage;
