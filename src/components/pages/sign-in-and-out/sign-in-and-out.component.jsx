import React from "react";

import "./sign-in-and-out.styles.scss";
import SignIn from "../../sign-in/sign-in.component";
import SignUp from "../../sign-up/sign-up.component";

const SignInAndOutPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default SignInAndOutPage;
