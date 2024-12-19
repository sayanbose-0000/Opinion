import { Model, model, models, Schema } from "mongoose";

interface UserInterface {
  userId: string,
  username: string,
  email: string,
  dp: string;
}

const UserSchema: Schema<UserInterface> = new Schema({
  userId: {
    type: String,
    required: [true, "User Id is required"]
  },

  username: {
    type: String,
    required: [true, "Username is required"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },

  dp: {
    type: String,
    required: [true, "Dp is required"]
  },
}, { timestamps: true });

const UserModel =  models["opinion-users"] as Model<UserInterface> || model<UserInterface>("opinion-users", UserSchema);

export default UserModel;