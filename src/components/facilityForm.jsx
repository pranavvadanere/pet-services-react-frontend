import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as authService from "../services/loginService";
import * as facultyService from "../services/facilityService";

class FaciltyForm extends Form {
  state = {
    data: {
      facilityName: "",
      address: "",
      phone: "",
      email: "",
      contactPerson: "",
    },
    errors: {},
  };

  schema = {
    facilityName: Joi.string().required().email().label("Facility Name"),
    address: Joi.string().required().min(2).label("Address"),
    phone: Joi.string().required().min(2).label("Phone"),
    email: Joi.string().required().min(5).label("Email"),
    contactPerson: Joi.string().required().min(10).label("Contact Person"),
  };

  doSubmit = async () => {
    try {
      console.log(this.state.data);
      let res = await facultyService.register(this.state.data);
      console.log(res);
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
          {this.renderInput("facilityName", "Facility Name")}
          {this.renderInput("address", "Address")}
          {this.renderInput("phone", "Phone No")}
          {this.renderInput("email", "Password", "password")}
          {this.renderInput("contactPerson", "Contact Person")}

          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default FaciltyForm;
