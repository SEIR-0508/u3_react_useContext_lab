import { UserContext } from "../App";
import { useContext } from "react";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const formatDate = () => {
    const loginDate = new Date(user.lastLogIn);
    return loginDate.toDateString();
  };

  return (
    <div>
      {user.username ? (
        <div>
          <h1>Welcome back, {user.username}!</h1>
          <p>You logged in at: {formatDate()}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
