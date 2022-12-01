import React, { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    console.log(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user);

      resetFormFields();
      console.log(user);
    } catch (err) {
      console.log(`An error occurred ${err.message}`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        ></input>

        <label>Password </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          min={6}
        ></input>

        <button type="submit">Sign In</button>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
