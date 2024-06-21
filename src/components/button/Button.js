import React from "react";

const Button = ({
  onClick,
  className,
  children,
  full = false,
  type = "button",
  bgColor = "primary",
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;

    case "secondary":
      bgClassName = "bg-secondary";
      break;

    default:
      break;
  }
  return (
    <button
      className={`py-3 px-6 rounded-lg capitalize mt-auto bg-primary
       ${full ? "w-full" : ""}
        ${bgClassName} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}{" "}
    </button>
  );
};

export default Button;
