import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box,Link } from "@mui/material";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
        setError("Both username and password are required");
        alert("Invalid credentials");
        return;
    }

    const finalData = {
        email: username,
        password: password,
    };

    try {
        const response = await axios.post(`http://localhost:3100/api/user/signin`, finalData);
        // handle successful login
        console.log('Login Successful');
        console.log(response.data.role);

        sessionStorage.setItem("User", JSON.stringify(response.data.token)); // Store the token in session storage

        // Navigate to respective dashboards based on role
        const role = response.data.role;
        if (role === "user") {
            navigate('/user');
        } else if (role === "admin") {
            navigate('/admin/dashboard');
        } else if (role === "subadmin") {
            navigate('/subadmin');
        } else {
            setError("Unrecognized role");
        }

    } catch (error) {
        // handle login error
        console.log("error", error);
        setError("Invalid username or password");
    }
};




  const handleSignupNavigation = () => {
    navigate("/signup"); // Navigate to signup page
  };

  return (
    <div className="signup-page">
      <Container maxWidth="xs" style={{ marginLeft: "5%" }} >
        <Box
          sx={{
            p: 4,
            backgroundImage:
              "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
            boxShadow: '0 0 4px 4px rgba(0, 255, 0, 0.2)',
            borderRadius: 2,
          }}
        >
          <Typography variant="h2" color="green" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              error
              label="Username"
              margin="normal"
              variant="outlined"
              value={username}
              sx={{
                "& .MuiInputBase-input": {
                  color: "red", // Change text color here
                },
              }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              error
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              value={password}
              sx={{
                "& .MuiInputBase-input": {
                  color: "red", // Change text color here
                },
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              
              type="submit"
              sx={{
                mt: 2,
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "darkgreen", // Darker green on hover
                },
              }}
            >
              Login
            </Button>
          </form>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2" color="green">
              Don't have an account ?{" "}
              <Link component="button" variant="body2" onClick={handleSignupNavigation}>
                Signup
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
