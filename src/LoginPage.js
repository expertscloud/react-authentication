import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Container, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function LoginPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      // Perform any additional validation if needed
      // For simplicity, assume validation is passed
      console.log("Username:", values.username);
      console.log("Password:", values.password);
      navigate("/dashboard");
      setSubmitting(false);
    },
  });

  return (
    <Container maxWidth="xs" sx={{ marginTop: "100px" }}>
      <form
        onSubmit={formik.handleSubmit}
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
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={formik.isSubmitting}
          style={{ marginBottom: "20px", width: "80%" }}
          startIcon={<LockOutlinedIcon />}>
          {formik.isSubmitting ? "Logging In..." : "Login"}
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
