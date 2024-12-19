import GithubSignInComp from "@/components/signin/GithubSignInComp";
import GoogleSignInComp from "@/components/signin/GoogleSignInComp";

const SignInPage: React.FC = () => {
  return (
    <main className="gradient min-h-screen flex justify-center items-center text-center text-wrap">
      <div className="flex flex-col justify-center items-center gap-8 p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">
            Welcome to <span className="highlight">Opinion</span>
          </h1>
          <p className="text-gray-500">Share your opinion about anything, anonymously</p>
        </div>
        <div className="flex gap-2 flex-col justify-center items-center">
          <p>Continue with</p>
          <div className="flex gap-4 flex-wrap justify-center items-center">
            <GithubSignInComp />
            <GoogleSignInComp />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
