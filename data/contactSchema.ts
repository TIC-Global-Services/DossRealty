import { z } from "zod";

const nameValidation = z
  .string()
  .min(3, "Name must be at least 3 characters")
  .regex(/^[A-Za-z\s]+$/, "Only letters are allowed");

const phoneValidation = z
  .string()
  .min(1, "Phone number is required")
  .length(10, "Phone number must be 10 digits")
  .regex(/^[6-9]\d{9}$/, "Enter valid mobile number");

const gmailValidation = z
  .string()
  .min(1, "Email is required")
  .email("Invalid email address")
  .refine((email) => email.toLowerCase().endsWith("@gmail.com"), {
    message: "Only Gmail addresses are allowed",
  });

/* CONTACT */

export const contactSchema = z.object({
  name: nameValidation,
  email: gmailValidation,
  phone: phoneValidation,
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/* REFER  */

export const referSchema = z.object({
  yourName: nameValidation,
  yourEmail: gmailValidation,
  yourPhone: phoneValidation,

  friendName: nameValidation,
  friendEmail: gmailValidation,
  friendPhone: phoneValidation,

  project: z.string().min(2, "Project name is required"),
});

export type ReferFormData = z.infer<typeof referSchema>;
