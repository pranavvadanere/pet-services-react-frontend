import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as authService from "../services/loginService";

class RegisterForm extends Form {
  state = {
    data: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      mobile: "",
      notes: "",
      phone: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    firstName: Joi.string().required().min(2).label("First Name"),
    lastName: Joi.string().required().min(2).label("Last Name"),
    password: Joi.string().required().min(5).label("Password"),
    mobile: Joi.string().required().min(10).label("Mobile No"),
    notes: Joi.string().label("Notes"),
    phone: Joi.string().label("phone"),
  };

  doSubmit = async () => {
    try {
      let res = await authService.register(this.state.data);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("lastName", "LastName")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("mobile", "Mobile")}
          {this.renderInput("lastName", "LastName")}
          {this.renderInput("notes", "Notes")}
          {this.renderInput("phone", "Phone")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
