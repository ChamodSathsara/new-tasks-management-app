import { z } from "zod";

export const formSchema = z.object({
  id: z.string().max(3, { message: "Task Id most 3 Characters." }).min(2, {
    message: "Id must be at least 2 Character (like :  I0  I1  I01).",
  }),
  description: z
    .string()
    .max(30, { message: "description most 30 Characters." })
    .min(8, {
      message: "description must be at least 8 Characters.",
    }),
  status: z.string().max(8, { message: "status most 8 Characters." }).min(4, {
    message: "Set todo , Done or process",
  }),
  date: z
    .string()
    .max(11, { message: "Set the date this structure - 2000 10 01" })
    .min(8, {
      message: "Set the date this structure - 2000 10 01",
    }),
});
