// IMPORTS

import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

const SignupForm = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({
      username: "",
      email: "",
      password: "",
    });