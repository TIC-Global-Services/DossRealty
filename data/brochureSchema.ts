import { z } from "zod";

const nameValidation = z
  .string()
  .min(3, "Name must be at least 3 characters")
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

export const brochureSchema = z.object({
  name: nameValidation,
  email: gmailValidation,
  phone: phoneValidation,
  project: z.string(),
});

export type BrochureFormData = z.infer<typeof brochureSchema>;
