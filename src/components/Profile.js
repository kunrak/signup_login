import React from "react";
import { Container, Paper, Box, Button, Link } from "@mui/material";
import PrivateRoute from "./PrivateRoutes";
// import { Link } from "react-router-dom";

const Profile = () => {
  const users = localStorage.getItem("myData")
  const user = JSON.parse(users)

  return (
    <Container maxWidth="sm">
      <Paper elevation={24} sx={{ mt: 24 }}>
        <Box p={5} align="center">
          <h1>Profile</h1>
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
        </Box>
        <Box align="center" pb={2}>
          <Button variant="contained">
            <Link href="/" color="#ffffff" underline="none">
              Log Out
            </Link>
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;