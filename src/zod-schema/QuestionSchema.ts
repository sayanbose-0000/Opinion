import { z } from "zod";

const QuestionSchema = z.object({
  question: z
    .string({ message: "Question must be a string" })
    .nonempty({ message: "Question must be provided" })
    .min(6, { message: "Question must be atleast 6 chars long" }),

  author: z
    .string({})
});

export default QuestionSchema;