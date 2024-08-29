import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Link,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./Signup.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData ={
      email: username,
      password: password,
      role: role,
    };
    axios
      .post(`http://localhost:3100/api/user/signup`, finalData)
      .then((response) => {
        // handle successful login
        console.log('Signup Successful');
        // console.log(response.data);
       
        sessionStorage.setItem("User", JSON.stringify(response.data));
        // navigate('/');
      })
      .catch((error) => {
        // handle login error
        console.log("error", error);
      });
    alert("Signup successful!");
    navigate("/login");
  };

  const handleLoginpNavigation = () => {
    navigate("/login"); // Navigate to signup page
  };

  return (
    <div className="signup-page">
      <Container maxWidth="xs" style={{ marginLeft: "5%" }}>
        <Box
          sx={{
            p: 4,
            backgroundImage:
              "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
            boxShadow: '0 0 4px 4px rgba(0, 255, 0, 0.2)',
            borderRadius: 5,
          }}
        >
          <Typography variant="h2" color="green" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              error
              label="Username"
              margin="normal"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                style: { color: "red" }, // Text color inside the TextField
              }}
              InputLabelProps={{
                style: { color: "red" }, // Label color
              }}
            />
            <TextField
              fullWidth
              error
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                style: { color: "red" }, // Text color inside the TextField
              }}
              InputLabelProps={{
                style: { color: "red" }, // Label color
              }}
            />
             <FormControl fullWidth margin="normal" variant="outlined" color="red">
              <InputLabel id="role" style={{ color: "red" }}>
                Role
              </InputLabel>
              <Select
                labelId="role-label"
                error
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
                sx={{
                  color: "red",
                  "& .MuiSelect-select": {
                    padding: "12px", // Adjust padding for better spacing
                  },
                  "& .MuiInputLabel-root": {
                    color: "red", // Label color
                  },
                }}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="subadmin">Subadmin</MenuItem>
              </Select>
            </FormControl>
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
              Sign Up
            </Button>
          </form>
        
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant="body2" color="green">
            Already have an account ?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={handleLoginpNavigation}
            >
              Login
            </Link>
          </Typography>
        </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
