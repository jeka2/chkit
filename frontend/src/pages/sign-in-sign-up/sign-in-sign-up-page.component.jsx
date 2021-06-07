import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUpPage = () => (
    <div className="authorization-page">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUpPage;