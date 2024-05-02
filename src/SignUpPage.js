import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Typography, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "100px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
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
        <TextField
          fullWidth
          margin="normal"
          label="Confirm Password"
          type="password"
          style={{ marginBottom: "20px", width: "80%" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginBottom: "20px", width: "80%" }}>
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end" style={{ width: "80%" }}>
          <Grid item>
            <Typography variant="body2">
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SignUpPage;
