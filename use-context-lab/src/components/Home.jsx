import { UserContext } from "../App";
import { useContext } from "react";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      {user.username ? (
        <div>
          <h1>Welcome back, {user.username}!</h1>
          <p>You logged in at: {user.lastLogIn}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
