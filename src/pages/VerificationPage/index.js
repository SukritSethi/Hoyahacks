import React from "react";

import { Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const VerificationPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-deep_purple_A100 flex flex-col items-center justify-end p-[148px] sm:px-[20px] md:px-[40px] w-[100%]">
          <Text
            className="font-arial leading-[66.00px] md:leading-[normal] sm:leading-[normal] mt-[113px] text-black_901 text-left"
            as="h2"
            variant="h2"
          >
            Sent SMS Verification to: +1 (1**) ***-**23
            <br />
            Enter the code sent to your device:
          </Text>
          <div className="bg-gray_100 flex flex-col font-arial h-[76px] md:h-[auto] sm:h-[auto] items-start justify-center max-w-[688px] mt-[172px] p-[16px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-radius8 w-[100%]">
            <Input
              className="font-normal leading-[normal] sm:mx-[0] p-[0] sm:text-[28px] md:text-[30px] text-[32px] placeholder:text-black_900_7f text-black_900_7f text-left md:tracking-ls1 sm:tracking-ls1 tracking-ls125 w-[100%]"
              wrapClassName="w-[auto]"
              name="FrameOne"
              placeholder="Enter Code"
            ></Input>
          </div>
          <Button
            className="common-pointer cursor-pointer font-manrope font-semibold min-w-[65%] mt-[144px] sm:text-[36px] md:text-[38px] text-[40px] text-center text-white_A700 w-[max-content]"
            onClick={() => navigate("/verifiedpage")}
          >
            VERIFY
          </Button>
        </div>
      </div>
    </>
  );
};

export default VerificationPagePage;
