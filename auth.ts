import dbConnect from "@/lib/dbConnect";
import UserModel from "@/mongo-schema/UserModel";
import UserSchema from "@/zod-schema/UserSchema";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { z } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],

  callbacks: { // this will perform after signIn funcn is called
    async signIn({ user }) {
      dbConnect();

      try {
        const validUser = UserSchema.parse(user);
        const { id, name, email, image } = validUser;

        const UserDoc = await UserModel.findOne({ email: email });

        if (UserDoc) {
          return "/";
        }

        await UserModel.create({
          userId: id,
          username: name,
          email: email,
          dp: image
        });

        return "/";
      }

      catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err.issues);
        }

        else {
          console.log("Database Error: Couldn't create user");
        }

        return false;
      }
    }
  }
});