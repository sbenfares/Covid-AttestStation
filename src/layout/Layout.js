import React from "react";

import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";

export default (props) => {
  return (
    <div>
      <Header />
      <NavigationMenu />
      {props.children}
      <Footer />
    </div>
  );
};
