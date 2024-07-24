import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email.current.value, password.current.value);

    // When using refs we don't manually reset .current.value,
    // instead we use the built-in reset function
    const emailIsValid = email.current.value.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
          {emailIsInvalid && <div className="control-error">Invalid email</div>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
