import React from "react";
import { Container, Typography } from "@mui/material";

function DashboardPage() {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: "20px",
      }}>
      <Container
        sx={{
          textAlign: "center",
          backgroundColor: "#ffffff",
          color: "#333",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
        maxWidth="xl">
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">Welcome to your dashboard!</Typography>
      </Container>
    </div>
  );
}

export default DashboardPage;
