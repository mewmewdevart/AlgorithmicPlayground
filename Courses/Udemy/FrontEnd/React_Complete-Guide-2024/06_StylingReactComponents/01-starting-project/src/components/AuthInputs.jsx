import { useState } from "react";
import Button from "./Button";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Email
          </label>
          <input
            style={{
              backgroundColor: emailNotValid ? "#f73f3f" : "#eef7ff",
            }}
            className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Password
          </label>
          <input
            type="password"
            style={{
              backgroundColor: emailNotValid ? "#f73f3f" : "#eef7ff",
            }}
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <Button type="button">
          Create a new account
        </Button>
        <Button onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
