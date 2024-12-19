import { Model, model, models, Schema } from "mongoose";

interface QuestionInterface {
  question: string,
  author: Schema.Types.ObjectId,
}

const QuestionSchema: Schema<QuestionInterface> = new Schema({
  question: {
    type: String,
    required: [true, "Question is required"],
  },

  author: {
    type: Schema.Types.ObjectId,
    required: ["true", "Authur is required"]
  }
}, { timestamps: true });

const QuestionModel = models["opinion-questions"] as Model<QuestionInterface> || model<QuestionInterface>("opinion-questions", QuestionSchema);

export default QuestionModel;