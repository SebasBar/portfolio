import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useAsyncError from "../../hooks/useAsyncError";
import fetchApi from "../../hooks/fetch";
import "./Login.css";

export const TokenContext = React.createContext();

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const throwError = useAsyncError();
  const [token, setToken] = useState(false);

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login function");
    fetch(`/auth/login/1`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ user, password }),
    }).then((resp) => {
      if (!resp.ok) {
        resp.json().then((json) => {
          const error = new Error(json.message);
          error.status = resp.status;
          throwError(error);
        });
      } else {
        setToken(true);
        history.push("/admin");
      }
    });
  };

  return (
    <TokenContext.Provider value={token}>
      <div className="login-wrapper">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="user">User: </label>
          <input
            type="user"
            placeholder="john doe"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          ></input>
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />

          <input type="submit" value="Login"></input>
        </form>
      </div>
    </TokenContext.Provider>
  );
}
