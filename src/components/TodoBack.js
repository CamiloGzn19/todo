import React, { useState } from "react";
import TodoList from "./TodoList";
import { cambiarTema, obtenerTema } from "../helpers/Estilo";
import { BtnHead, HeadApp, Sep, Tit } from "../styles/head_styles";

const CntrMain = () => {
  const moon =
    "https://res.cloudinary.com/dilwbkj5s/image/upload/v1645901038/Reto%206/icon-moon_tgzyc2.svg";
  const sun =
    "https://res.cloudinary.com/dilwbkj5s/image/upload/v1645901038/Reto%206/icon-sun_z0upjv.svg";
  const [tema, setTema] = useState(obtenerTema());
  const icon = tema === "light" ? moon : sun;

  return (
    <HeadApp className={tema}>
      <Sep>
        <Tit>Todo</Tit>
        <BtnHead onClick={() => setTema(cambiarTema())}>
          <img src={icon} alt="icon" />
        </BtnHead>
      </Sep>
      <TodoList />
    </HeadApp>
  );
};

export default CntrMain;
