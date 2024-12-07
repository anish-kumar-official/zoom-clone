import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#161925]">
      <SignIn/>
    </div>
  );
};

export default SignInPage;
