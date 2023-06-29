import { UserContext } from "../App";
import { useContext, useState } from "react";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, username: input, lastLogIn: Date.now() });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleLogout = () => {
    setUser({ ...user, username: "", password: "", lastLogIn: "" });
  };

  return (
    <div>
      {!user.username ? (
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            onChange={handleChange}
            value={input}
          ></input>
          <button type="submit">Login</button>
        </form>
      ) : null}
      {user.username ? (
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default Login;
