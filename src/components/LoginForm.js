import {
    Paper,
    TextField,
    Box,
    Container,
    Typography,
    Stack,
    Button
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const schema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters")
});

function LoginForm() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/login", {
                email: values.email,
                password: values.password,
            });

            if (response.data.accesstoken) {
                setValues({
                    accessToken: response.data.accesstoken,
                });
                navigate("/profile");
            } else {
                setErrors({ password: "Incorrect Password" });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={24} sx={{ mt: 14 }}>
                <Box pt={10} pb={10}>
                    <Box mb={5} align="center">
                        <Typography variant="h4" color="red">
                            Log In
                        </Typography>
                    </Box>
                    <Stack spacing={3} width="80%" margin="auto">
                        <TextField
                            type="email"
                            label="Email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            type="password"
                            label="Password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={handleFormSubmit}
                        >
                            Log In
                        </Button>
                    </Stack>
                </Box>
            </Paper>
        </Container>
    );
}

export default LoginForm;
