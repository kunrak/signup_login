import {
    Paper,
    TextField,
    Box,
    Container,
    Typography,
    Stack,
    Button
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters")
});

function SignupForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const handleFormSubmit = async e => {
        e.preventDefault();

        const result = await axios.post("http://localhost:4000/register", {
            email: values.email,
            password: values.password
        })

        if (!result.error) {
            setErrors({});
            dispatch({
                type: "REGISTER",
                payload: {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    isAuthenticated: !values.isAuthenticated
                }
            });
            localStorage.setItem("myData", JSON.stringify(values));
            navigate("/login");
        } else {
            console.log(result.error);
            const newErrors = {};
            result.error.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
            alert(newErrors);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={24} sx={{ mt: 14 }}>
                <Box pt={10} pb={10} border="1px solid">
                    <Box mb={5} align="center">
                        <Typography variant="h4" color="red">
                            Create Account
                        </Typography>
                    </Box>
                    <form onSubmit={handleFormSubmit}>
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
                            >
                                Sign Up
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Paper>
        </Container >
    );
}

export default SignupForm;