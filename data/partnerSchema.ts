import { z } from "zod";

const nameValidation = z
  .string()
  .min(3, "Name must be at least 3 characters")
  .regex(/^[A-Za-z\s]+$/, "Only letters are allowed");

const textValidation = z
  .string()
  .min(3, "Minimum 3 characters required")
  .regex(/^[A-Za-z\s]+$/, "Only letters are allowed");

const gmailValidation = z
  .string()
  .min(1, "Email is required")
  .email("Invalid email address")
  .refine((email) => email.toLowerCase().endsWith("@gmail.com"), {
    message: "Only Gmail addresses are allowed",
  });

const phoneValidation = z
  .string()
  .min(1, "Phone number is required")
  .length(10, "Phone number must be 10 digits")
  .regex(/^[6-9]\d{9}$/, "Enter valid mobile number");

/* PARTNER */

export const partnerSchema = z.object({
  brokerageFirm: textValidation,

  fullName: textValidation,

  email: gmailValidation,

  city: textValidation,

  phone: phoneValidation,
});

export type PartnerFormData = z.infer<typeof partnerSchema>;

/* JOB */

export const jobSchema = z.object({
  name: nameValidation,

  email: gmailValidation,

  phone: phoneValidation,

  position: z.string().min(1, "Please select a position"),

  cvLink: z.string().url("Please enter a valid CV link"),

  message: z.string().min(10, "Please enter your message"),
});

export type JobFormData = z.infer<typeof jobSchema>;

export const positions = [
  "Sales Executive",
  "Pre-sales Executive",
  "Project Manager",
];
