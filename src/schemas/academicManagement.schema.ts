import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  year: z.string({ required_error: "Select a year" }),
  startMonth: z.string({ required_error: "Give starting month" }),
  endMonth: z.string({ required_error: "Give ending month" }),
});
