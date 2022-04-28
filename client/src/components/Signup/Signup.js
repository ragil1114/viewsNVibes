// // import React, { useState } from 'react';
// // import  {Link}  from 'react-router-dom';
// // import { useMutation } from '@apollo/client';
// // import Auth from '../../utils/auth';
// // import { ADD_USER } from '../../utils/mutations';
// // import './Signup.css'

// // function Signup(props) {
// //   const [formState, setFormState] = useState({ email: '', password: '' });
// //   const [addUser] = useMutation(ADD_USER);

// //   const handleFormSubmit = async (event) => {
// //     event.preventDefault();
// //     const mutationResponse = await addUser({
// //       variables: {
// //         email: formState.email,
// //         password: formState.password,
// //         firstName: formState.firstName,
// //         lastName: formState.lastName,
// //       },
// //     });
// //     const token = mutationResponse.data.addUser.token;
// //     Auth.login(token);
// //   };

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setFormState({
// //       ...formState,
// //       [name]: value,
// //     });
// //   };

// //   return (
// //     <div className="container my-1">
// //       <Link to="/login">←Already have an account? Sign in</Link>

// //       <h2>Signup</h2>
// //       <form onSubmit={handleFormSubmit}>
// //         <div className="flex-row space-between my-2">
// //           <label htmlFor="firstName">First Name:</label>
// //           <input
// //             placeholder="First"
// //             name="firstName"
// //             type="firstName"
// //             id="firstName"
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div className="flex-row space-between my-2">
// //           <label htmlFor="lastName">Last Name:</label>
// //           <input
// //             placeholder="Last"
// //             name="lastName"
// //             type="lastName"
// //             id="lastName"
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div className="flex-row space-between my-2">
// //           <label htmlFor="email">Email:</label>
// //           <input
// //             placeholder="youremail@test.com"
// //             name="email"
// //             type="email"
// //             id="email"
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div className="flex-row space-between my-2">
// //           <label htmlFor="pwd">Password:</label>
// //           <input
// //             placeholder="******"
// //             name="password"
// //             type="password"
// //             id="pwd"
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div className="flex-row flex-end">
// //           <button type="submit">Submit</button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Signup;



import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

// import { createUser } from "../utils/API";
import Auth from "../../utils/auth";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
// * `SignupForm.js`: Replace the `addUser()` functionality imported from the `API` file with the `ADD_USER` mutation functionality.

const Signup = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({ variables: { ...userFormData } });

      if (!data) {
        throw new Error("something went wrong!");
      }

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    
    <section id="signup">
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default Signup;






// import React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import { useMutation } from '@apollo/client';
// // import { ADD_USER } from '../utils/mutations';

// // import Auth from '../utils/auth';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive travel inspiration, tour guide sales, and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default SignUp;


