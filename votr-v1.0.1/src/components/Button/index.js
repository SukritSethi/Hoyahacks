import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder8: "rounded-radius8" };
const variants = { FillBlack900: "bg-black_900 text-white_A700" };
const sizes = { sm: "p-[20px]", md: "p-[26px] sm:px-[20px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["FillBlack900"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "FillBlack900",
  size: "md",
};

export { Button };
