"use client";

import { signInToGithub } from "@/lib/signIn";
import Image from "next/image";

const GithubSignInComp: React.FC = () => {
  return (
    <form action={signInToGithub}>
      <button>
        <Image src={"/icons/github-icon.svg"} alt="Google Icon" height={25} width={25} />
      </button>
    </form>
  );
};

export default GithubSignInComp;
