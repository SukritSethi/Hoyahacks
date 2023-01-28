import React from "react";

import { Img, Button, Text } from "components";
import { useNavigate } from "react-router-dom";

const ConfirmationPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row gap-[25px] items-start mx-[auto] sm:pl-[20px] md:pl-[40px] pl-[42px] w-[100%]">
        <Img
          src="images/img_image2.png"
          className="h-[721px] sm:h-[auto] md:mt-[0] sm:mt-[0] mt-[178px] object-cover md:w-[100%] sm:w-[100%] w-[43%]"
          alt="imageTwo"
        />
        <div className="h-[1024px] relative md:w-[100%] sm:w-[100%] w-[56%]">
          <div className="absolute bg-deep_purple_A100 flex flex-col font-manrope md:gap-[40px] sm:gap-[40px] gap-[61px] h-[max-content] inset-y-[0] items-center justify-end my-[auto] p-[148px] sm:px-[20px] md:px-[40px] right-[0] w-[91%]">
            <Button
              className="common-pointer cursor-pointer font-semibold min-w-[88%] mt-[487px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
              onClick={() => navigate("/verificationpage")}
            >
              CONFIRM
            </Button>
            <Button
              className="common-pointer cursor-pointer font-semibold min-w-[88%] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
              onClick={() => navigate("/")}
            >
              DECLINE
            </Button>
          </div>
          <Text
            className="absolute font-arial inset-x-[0] leading-[66.00px] md:leading-[normal] sm:leading-[normal] mx-[auto] text-black_901 text-center top-[33%]"
            as="h3"
            variant="h3"
          >
            Would you like to confirm your
            <br />
            vote for this product?
          </Text>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPagePage;
