import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const VerifiedPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-deep_purple_A100 flex flex-col gap-[109px] md:gap-[40px] sm:gap-[40px] items-center justify-center p-[214px] sm:px-[20px] md:px-[40px] w-[100%]">
          <Text
            className="font-arial leading-[66.00px] md:leading-[normal] sm:leading-[normal] mt-[68px] mx-[auto] text-black_901 text-center"
            as="h1"
            variant="h1"
          >
            <span className="text-black_901 text-[64px] font-bold sm:text-[48px] md:text-[48px]">
              Congratulations!
              <br />
            </span>
            <span className="text-black_901 text-[48px] font-normal sm:text-[38px] md:text-[44px]">
              You casted your vote, now sit back and wait to see if your side
              wins.
              <br />
            </span>
          </Text>
          <Button
            className="common-pointer cursor-pointer font-manrope font-semibold mb-[65px] min-w-[73%] sm:text-[36px] md:text-[38px] text-[40px] text-center text-white_A700 w-[max-content]"
            onClick={() => navigate("/")}
          >
            CONTINUE
          </Button>
        </div>
      </div>
    </>
  );
};

export default VerifiedPagePage;
