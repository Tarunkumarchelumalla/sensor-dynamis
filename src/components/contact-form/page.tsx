"use client";

import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

import React, { useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import styles from "@/app/_styles/components/contact-form.module.scss";
import DoneIcon from "@mui/icons-material/Done";

export interface Int_Inquiry_details {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone: string;
  address: string;
  city: string;
  preferredContact: 'email' | 'phone';
}

const ContactForm = () => {
  const [formData, setFormData] = useState<Int_Inquiry_details>({
    name: "",
    email: "",
    subject: "Inquiry",
    message: "",
    company: "",
    phone: "",
    address: "",
    city: "",
    preferredContact: "email",
  });

  const [phoneValue, setPhoneValue] = useState("");
  const [numberPreFix, setNumberPreFix] = useState("");
  const [errors, setErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneNumberChange = (isValid: boolean, value: string) => {
    setPhoneValue(value.trim());
  };

  const handlePhoneNumberBlurChange = (
    isValid: boolean,
    value: string,
    country: any
  ) => {
    setNumberPreFix(country.dialCode || "");
    setFormData({ ...formData, phone: `${country.dialCode}${value.trim()}` });
  };



  const validateForm = () => {
    if (!formData.name.trim() || formData.name.length < 2 || formData.name.length > 100) 
      return "Name must be between 2 and 100 characters.";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (!formData.phone.trim() || formData.phone.length < 7 || formData.phone.length > 20) 
      return "Phone number must be between 7 and 20 characters.";
    if (!/^[\d\s\+\-\(\)\.]+$/.test(formData.phone))
      return "Phone number can only contain digits, spaces, +, -, (, ), and .";
    if (!formData.address.trim() || formData.address.length < 5 || formData.address.length > 250) 
      return "Address must be between 5 and 250 characters.";
    if (!formData.city.trim() || formData.city.length < 2 || formData.city.length > 100) 
      return "City must be between 2 and 100 characters.";
    if (!formData.preferredContact || (!['email', 'phone'].includes(formData.preferredContact)))
      return "Please select a preferred contact method.";
    return null;
  };

  const sendEmail = async () => {
    if (isSubmitting) return;
    const errorMessage = validateForm();
    setErrors(errorMessage);
    if (errorMessage) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.sensordynamis.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.message || "Failed to submit form. Please try again.");
        return;
      }
      setIsSubmitted(true);
      setErrors(null);
    } catch (error) {
      console.error("Error sending email:", error);
      setErrors("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        color: "var(--black-color)",
        padding: "40px",
        borderRadius: "18px",
        maxWidth: "614px",
        border: "3px solid white",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <Typography
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: "center",fontSize:{
          xs:'24px',
          md:'48px'
        },
      fontWeight:600 }}
      >
        {`Let’s talk we’d love to hear from you!`}
      </Typography>

      {errors && (
        <Typography sx={{ color: "var(--primary-color)" }}>
          * {errors}
        </Typography>
      )}

      <TextField
        fullWidth
        name="name"
        label="Name"
        variant="outlined"
        required
        value={formData.name}
        onChange={handleChange}
        sx={textFieldStyles}
      />

      <TextField
        fullWidth
        name="email"
        label="Email"
        variant="outlined"
        required
        type="email"
        value={formData.email}
        onChange={handleChange}
        sx={textFieldStyles}
      />

      <TextField
        fullWidth
        name="company"
        label="Company (Optional)"
        variant="outlined"
        value={formData.company}
        onChange={handleChange}
        sx={textFieldStyles}
      />


      <TextField
        fullWidth
        name="city"
        label="City"
        variant="outlined"
        required
        value={formData.city}
        onChange={handleChange}
        sx={textFieldStyles}
      />

      <TextField
        fullWidth
        name="address"
        label="Address"
        variant="outlined"
        required
        value={formData.address}
        onChange={handleChange}
        sx={textFieldStyles}
      />

      <Box className={`${styles["form-group"]} text-[#000]`}>
        <IntlTelInput
          defaultCountry="in"
          preferredCountries={["in"]}
          containerClassName="intl-tel-input w-full"
          value={phoneValue}
          inputClassName={` overflow-hidden text-blue-900 text-sm w-full bg-[var(--white-color)] border-1`}
          onPhoneNumberChange={handlePhoneNumberChange}
          onPhoneNumberBlur={handlePhoneNumberBlurChange}
          placeholder="Enter your phone number"
        />
      </Box>

      <FormControl fullWidth sx={textFieldStyles}>
        <InputLabel>Preferred Contact Method</InputLabel>
        <Select
          value={formData.preferredContact}
          onChange={(e: SelectChangeEvent<'email' | 'phone'>) => setFormData({ ...formData, preferredContact: e.target.value as 'email' | 'phone' })}
          label="Preferred Contact Method"
          required
        >
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        name="message"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        required
        value={formData.message}
        onChange={handleChange}
        sx={textFieldStyles}
      />


      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={isSubmitting || isSubmitted ? () => {} : sendEmail}
          startIcon={
            isSubmitting ? (
              <CircularProgress size={20} sx={{ color: "#0F1C3F" }} />
            ) : isSubmitted ? (
              <DoneIcon sx={{ color: "green", fontSize: 20 }} />
            ) : (
              <></>
            )
          }
          sx={{
            backgroundColor: "var(--primary-color)",
            color: "var(--white-color)",
            width: "100%",
            height: "44px",
            textTransform: "none",
            padding: "6px 12px",
            fontSize: "14px",
            borderRadius: "6px",
          }}
        >
          {isSubmitting
            ? "Sending..."
            : isSubmitted
            ? "Submitted"
            : "Send Message"}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;

const textFieldStyles = {
  marginBottom: "16px",
  backgroundColor: "#fff",
  borderRadius: "6px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    "& fieldset": {
      borderColor: "#D1D5DB",
    },
    "&:hover fieldset": {
      borderColor: "var(--primary-color)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--primary-color)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#6B7280",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--primary-color)",
  },
};
