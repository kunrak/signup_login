import { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Form() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const submitForm = () => {
        setFormSubmitted(true);
    }

    return (
        <div>
            {
                !formSubmitted ? <SignupForm submitForm={submitForm} /> : <LoginForm />
            }
        </div>
    )
}

export default Form;