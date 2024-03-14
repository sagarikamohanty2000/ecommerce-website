import RootHeader from "../Header/RootHeader";

const Navigation = (props) => {
  return (
    <>
      <RootHeader></RootHeader>
    <main>{props.children}</main>
    </>
  );
};

export default Navigation;
