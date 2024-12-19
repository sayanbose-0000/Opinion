"use client";

import { signInToGoogle } from "@/lib/signIn";
import Image from "next/image";

const GoogleSignInComp: React.FC = () => {
  return (
    <form action={signInToGoogle}>
      <button>
        <Image src={"/icons/google-icon.svg"} alt="Google Icon" height={28} width={28}/>
      </button>
    </form>
  );
};

export default GoogleSignInComp;