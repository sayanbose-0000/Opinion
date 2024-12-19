"use server";

import { signIn } from "@/../auth";

const signInToGithub = async (): Promise<void> => {
  await signIn("github");
};

const signInToGoogle = async (): Promise<void> => {
  await signIn("google");
};

export { signInToGithub, signInToGoogle };