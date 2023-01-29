import React from "react";

import { Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const VerificationPagePage = () => {
  const navigate = useNavigate();

  function getUserInput() {
    let input = document.getElementById("userInput").value;

    const form = new FormData();
    form.append('chain', 'polygon');
    form.append('data', '[{"trait_type":"url","value":"https://www.amazon.com/All-new-Fire-HD-8-tablet/dp/B099Z8HLHT?ref_=Oct_DLandingS_D_4140c100_60"},{"trait_type":"name","value":"All-new Amazon Fire HD 8 tablet, 8” HD Display, 32 GB, 30% faster processor, designed for portable entertainment, (2022 release), Black"}, {"trait_type":"asin","value":"B09BG6BRQG"}]');
    form.append('imageUrl', 'https://m.media-amazon.com/images/I/61fgc1OW1ZL._AC_SL1000_.jpg');
    form.append('name', 'product1NFT');
    form.append('description', 'product1 nft');
    if (input != '') {
      form.append('recipientAddress', input);
    }

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-API-Key': 'sk_live_7a24ca5d-7718-43b1-a77d-e520d851b091'
      }
    };

    options.body = form;

    fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    
    navigate("/verifiedpage");

    // alert(input);
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-deep_purple_A100 flex flex-col items-center justify-end p-[148px] sm:px-[20px] md:px-[40px] w-[100%]">
          <Text
            className="font-normal leading-[66.00px] md:leading-[normal] sm:leading-[normal] mt-[113px] text-black_901 text-left"
            as="h2"
            variant="h2"
          >
            If you have a Wallet to store this NFT, then enter it below. Otherwise, leave it blank and click "Next".
            <br />
            <b>Enter Wallet Address:</b>
          </Text>
          {/* <Text
            className="font-arial leading-[66.00px] md:leading-[normal] sm:leading-[normal] text-black_901 text-left"
            as="h2"
            variant="h2"
          >
            Enter Wallet Address:
          </Text> */}
          <div className="bg-gray_100 flex flex-col font-arial h-[76px] md:h-[auto] sm:h-[auto] items-start justify-center max-w-[688px] mt-[100px] p-[16px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-radius8 w-[100%]">
            <Input
              className="font-normal leading-[normal] sm:mx-[0] p-[0] sm:text-[28px] md:text-[30px] text-[32px] placeholder:text-black_900_7f text-black_900_7f text-left md:tracking-ls1 sm:tracking-ls1 tracking-ls125 w-[100%]"
              wrapClassName="w-[auto]"
              name="FrameOne"
              placeholder="Enter Code"
              id="userInput"
            ></Input>
          </div>
          <Button
            className="common-pointer cursor-pointer font-manrope font-semibold min-w-[65%] mt-[144px] sm:text-[36px] md:text-[38px] text-[40px] text-center text-white_A700 w-[max-content]"
            onClick={() => getUserInput()}
          >
            NEXT
          </Button>
        </div>
      </div>
    </>
  );
};

export default VerificationPagePage;
