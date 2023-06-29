import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState({
    username: "",
    lastLogIn: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Home />
    </UserContext.Provider>
  );
}

export default App;
