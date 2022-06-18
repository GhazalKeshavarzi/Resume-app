import React from "react";
import HobbiesSection from "../Components/Hobbies";
import HeaderHobbies from "../Components/HobbiesHeader";
import {
  Skate,
  Guitar,
  Biliard,
  Swimming,
  Reading,
  Jugging,
  Dancing,
} from "../Components/Hobbies/Data";
const Hobbies = () => {
  return (
    <>
      <HeaderHobbies />
      <HobbiesSection {...Skate} />
      <HobbiesSection {...Guitar} />
      <HobbiesSection {...Biliard} />
      <HobbiesSection {...Swimming} />
      <HobbiesSection {...Reading} />
      <HobbiesSection {...Jugging} />
      <HobbiesSection {...Dancing} />
    </>
  );
};

export default Hobbies;
