import { SignIn } from "@clerk/clerk-react";
import "./signinpage.css";

const SignInpage = () => {
  return (
    <div className="signInpage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default SignInpage;
