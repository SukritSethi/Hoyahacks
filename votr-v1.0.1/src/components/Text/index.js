import React from "react";
const variantClasses = {
  h1: "font-normal md:text-[48px] sm:text-[48px] text-[64px]",
  h2: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  h4: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "font-normal text-[18px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
