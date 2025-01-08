import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const roles = [
  {
    value: "MNG",
    label: "Manager",
  },
  {
    value: "ADM",
    label: "Admin",
  },
  {
    value: "USR",
    label: "User",
  },
];

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    role: "USR", 
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    role: "",
  });

   const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      newErrors.firstName = "Please Add Your First Name";
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "Please Add Your Last Name";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Please Add Your Email";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Please Add Your Phone Number";
      isValid = false;
    }

    if (!formData.address1) {
      newErrors.address1 = "Please Add Address 1";
      isValid = false;
    }

    if (!formData.address2) {
      newErrors.address2 = "Please Add Address 2";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Form has errors, not submitting");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box
      onSubmit={handleSubmit}
      p={3}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} className="w-full space-x-2">
        <TextField
          error={!!errors.firstName}
          helperText={errors.firstName}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          error={!!errors.lastName}
          helperText={errors.lastName}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Stack>

      <TextField
        error={!!errors.email}
        helperText={errors.email}
        label="Email"
        variant="filled"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <TextField
        error={!!errors.phone}
        helperText={errors.phone}
        label="Phone Number"
        variant="filled"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <TextField
        error={!!errors.address1}
        helperText={errors.address1}
        label="Address 1"
        variant="filled"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
      />
      <TextField
        error={!!errors.address2}
        helperText={errors.address2}
        label="Address 2"
        variant="filled"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
      />

      <TextField
        variant="filled"
        id="outlined-select-role"
        select
        label="Select Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;
