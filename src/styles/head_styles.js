import styled from "styled-components";

export const HeadApp = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease-in-out;
  background-color: hsl(236, 33%, 92%);
  background-image: url("https://res.cloudinary.com/dbzo53yx4/image/upload/v1645906346/todo-app/bg-desktop-light_hnt2qw.jpg");
  background-repeat: no-repeat;
  background-position: center 0;
  background-attachment: fixed;
  &.dark {
    background-image: url("https://res.cloudinary.com/dbzo53yx4/image/upload/v1645906345/todo-app/bg-desktop-dark_lljqwz.jpg");
    background-color: hsl(235, 21%, 11%);
  }
  @media screen and (max-width: 375px) {
    background-image: url("https://res.cloudinary.com/dbzo53yx4/image/upload/v1645906345/todo-app/bg-mobile-light_ob0r5j.jpg");
    &.dark {
      background-image: url("https://res.cloudinary.com/dbzo53yx4/image/upload/v1645906346/todo-app/bg-mobile-dark_qtatnu.jpg");
    }
  }
`;

export const Sep = styled.div`
  width: 500px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Tit = styled.h1`
  font-size: 35px;
  color: white;
  letter-spacing: 7px;
  text-align: left;
  text-transform: uppercase;
  flex-grow: 1;
`;

export const BtnHead = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 510px) {
    width: 95%;
    margin-top: 30px;
  }
`;
