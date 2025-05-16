"use client";

import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

import React, { useState } from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import styles from "@/app/_styles/components/contact-form.module.scss";
import DoneIcon from "@mui/icons-material/Done";

export interface Int_Inquiry_details {
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  message: string;
  sendUpdates: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<Int_Inquiry_details>({
    name: "",
    city: "",
    address: "",
    phone: "",
    email: "",
    message: "",
    sendUpdates: false,
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, sendUpdates: e.target.checked });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      return "Enter a valid email address.";
    if (!formData.city.trim()) return "City is required.";
    if (!formData.address.trim()) return "Address is required.";
    if (!formData.phone.trim()) return "Phone number is required.";
    if (!formData.message.trim()) return "Message is required.";
    return null;
  };

  const sendEmail = async () => {
    if (isSubmitting) return;

    const errorMessage = validateForm();
    setErrors(errorMessage);
    if (errorMessage) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setErrors(null);
      } else {
        setErrors("Failed to send email. Please try again.");
      }
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

      <TextField
        fullWidth
        name="message"
        label="Message"
        variant="outlined"
        type="text"
        required
        rows={3}
        value={formData.message}
        onChange={handleChange}
        sx={textFieldStyles}
      />

      <FormControlLabel
        sx={{ alignItems: "center", mt: 1 }}
        control={
          <Checkbox
            checked={formData.sendUpdates}
            onChange={handleCheckboxChange}
            sx={{
              color: "#6B7280",
              "&.Mui-checked": { color: "#6366F1" },
            }}
          />
        }
        label={
          <Typography sx={{ fontSize: "14px", color: "#374151", mt: "2px" }}>
            You agree to our friendly&nbsp;
            <a
              href="#"
              style={{ color: "#6366F1", textDecoration: "underline" }}
            >
              privacy policy
            </a>
            .
          </Typography>
        }
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
