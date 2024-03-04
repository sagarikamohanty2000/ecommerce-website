import { Outlet } from "react-router-dom";
import RootHeader from "../Header/RootHeader";

const Navigation = () => {
  return (
    <>
      <RootHeader></RootHeader>
      <Outlet />
    </>
  );
};

export default Navigation;
