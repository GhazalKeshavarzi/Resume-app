import React, { useState } from "react";
import MainPage from "../Components/MainPage";
const Home = () => {
  const [Gradient, SetTheme] = useState(false);
  const changeTheme = () => {
    SetTheme(!Gradient);
  };
  return (
    <>
      <MainPage Gradient={Gradient} changeTheme={changeTheme} />
    </>
  );
};

export default Home;
