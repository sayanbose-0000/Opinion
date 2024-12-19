import { z } from "zod";

const UserSchema = z.object({
  id: z
    .string({ message: "Id must be a string" })
    .nonempty({ message: "Id is required" }),

  name: z
    .string({ message: "Username must be a string" })
    .nonempty({ message: "Username is required" }),

  email: z
    .string({ message: "Email must be a string" })
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is invalid" }),

  image: z
    .string({ message: "Image must be a string" })
    .nonempty({ message: "Image is required" })
    .url({ message: "Image must be an url" }),
});

export default UserSchema;
