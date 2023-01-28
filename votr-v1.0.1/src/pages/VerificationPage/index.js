import React from "react";

import { Text, List, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const VerificationPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-deep_purple_A100 flex flex-col gap-[118px] md:gap-[40px] sm:gap-[40px] items-center justify-end p-[148px] sm:px-[20px] md:px-[40px] w-[100%]">
          <Text
            className="font-arial leading-[66.00px] md:leading-[normal] sm:leading-[normal] mt-[113px] text-black_901 text-left"
            as="h3"
            variant="h3"
          >
            Sent SMS Verification to: +1 (1**) ***-**23
            <br />
            Enter the code sent to your device:
          </Text>
          <List
            className="sm:flex-col flex-row font-montserrat sm:gap-[20px] grid sm:grid-cols-1 grid-cols-4 h-[156px] justify-center w-[501px]"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[10px] items-center justify-center mx-[0] p-[8px] md:self-stretch sm:self-stretch w-[100%]">
              <Text
                className="not-italic text-black_902 text-left tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h1"
                variant="h1"
              >
                0
              </Text>
              <Line className="bg-black_902 h-[1px] self-stretch w-[100%]" />
            </div>
            <div className="flex flex-col gap-[10px] items-center justify-center mx-[0] p-[8px] md:self-stretch sm:self-stretch w-[100%]">
              <Text
                className="not-italic text-black_902 text-left tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h1"
                variant="h1"
              >
                0
              </Text>
              <Line className="bg-black_902 h-[1px] self-stretch w-[100%]" />
            </div>
            <div className="flex flex-col gap-[10px] items-center justify-center mx-[0] p-[8px] md:self-stretch sm:self-stretch w-[100%]">
              <Text
                className="not-italic text-black_902 text-left tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h1"
                variant="h1"
              >
                0
              </Text>
              <Line className="bg-black_902 h-[1px] self-stretch w-[100%]" />
            </div>
            <div className="flex flex-col gap-[10px] items-center justify-center mx-[0] p-[8px] md:self-stretch sm:self-stretch w-[100%]">
              <Text
                className="not-italic text-black_902 text-left tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h1"
                variant="h1"
              >
                0
              </Text>
              <Line className="bg-black_902 h-[1px] self-stretch w-[100%]" />
            </div>
          </List>
          <Button
            className="common-pointer cursor-pointer font-manrope font-semibold min-w-[65%] sm:text-[36px] md:text-[38px] text-[40px] text-center text-white_A700 w-[max-content]"
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
