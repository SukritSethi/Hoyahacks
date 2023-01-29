import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const AboutPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 font-arial h-[1024px] mx-[auto] relative w-[100%]">
      <div className="bg-deep_purple_A100 flex flex-col items-end justify-start p-[32px] sm:px-[20px] w-[100%]">

        <Img
          src="images/img_headersectiondesign.png"
          className="h-[1024px] m-[auto] object-cover w-[auto]"
          alt="HeaderSectionDesign"
        />
        <div className="absolute flex flex-col gap-[118px] md:gap-[40px] sm:gap-[40px] h-[max-content] inset-y-[0] justify-start my-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] right-[6%] w-[82%]">
          <div className="flex flex-row gap-[64px] h-[44px] md:h-[auto] sm:h-[auto] items-center justify-center ml-[auto] w-[331px]">
            <Text
              className="common-pointer text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
              onClick={() => navigate("/")}
            >
              HOME
            </Text>
            <Text
              className="text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              ABOUT
            </Text>
          </div>
          <Text
            className="leading-[66.00px] md:leading-[normal] sm:leading-[normal] mr-[105px] text-black_901 text-center"
            as="h1"
            variant="h1"
          >
            <span className="text-black_901 text-[64px] font-arial font-bold sm:text-[48px] md:text-[48px]">
              About
              <br />
              <br />
            </span>
            <span className="text-black_901 text-[48px] font-arial font-normal sm:text-[38px] md:text-[44px]">
              VOTR is a simple voting application that utilizes smart contracts
              to securely store and tally votes on a blockchain. Place your vote
              and watch how easy it is to impact the marketplace.
              <br />
            </span>
          </Text>
          <Img
            src="images/img_image6.png"
            className="h-[325px] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[359px] object-cover md:w-[100%] sm:w-[100%] w-[30%]"
            alt="imageSix"
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutPagePage;
