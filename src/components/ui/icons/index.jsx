import React from "react";
import Hamburger from "./Hamburger";

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case "hamburger":
      return <Hamburger {...props} />;
    case "logo":
      return <Logo {...props} />;
    case "theme":
      return <Theme {...props} />;
    default:
      return <div />;
  }
};

export { Icon };
