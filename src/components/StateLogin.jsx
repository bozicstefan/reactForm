import { useState } from "react";
import Input from "./Input";
import {
  isEmail,
  hasMinLength,
  isNotEmpty,
  isEqualsToOtherValue,
} from "../util/validation";
import { useInput } from "../hooks/useInput";
export default function StateLogin() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
    setEnteredValue: setEmailValue,
    setDidEdit: setEmailDidEdit,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
    setEnteredValue: setPasswordValue,
    setDidEdit: setPasswordDidEdit,
  } = useInput("", (value) => hasMinLength(value, 8) && isNotEmpty(value));

  function handleSubmit(e) {
    e.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log("values:", emailValue, passwordValue);
    // reset form
    setEmailValue("");
    setPasswordValue("");
    setEmailDidEdit(false);
    setPasswordDidEdit(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          value={emailValue}
          error={emailHasError && "Invalid email"}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
        />

        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          value={passwordValue}
          error={passwordHasError && "Invalid password"}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
