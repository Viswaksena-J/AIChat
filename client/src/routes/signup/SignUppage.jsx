import { SignUp } from "@clerk/clerk-react";
import "./signuppage.css";

const SignUppage = () => {
  return (
    <div className="signUppage">
      <SignUp path="/sign-up" forceRedirectUrl="/dashboard" />
    </div>
  );
};

export default SignUppage;
