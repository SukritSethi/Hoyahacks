import React from "react";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const LandingPagePage = () => { 

  var yesVotes = 0;
  var noVotes = 0;
  
  const navigate = useNavigate();

  function votedYes() {
  
    navigate("/verificationpage");

    // const form = new FormData();
    // form.append('chain', 'polygon');
    // form.append('data', '[{"trait_type":"url","value":"https://www.amazon.com/All-new-Fire-HD-8-tablet/dp/B099Z8HLHT?ref_=Oct_DLandingS_D_4140c100_60"},{"trait_type":"name","value":"All-new Amazon Fire HD 8 tablet, 8” HD Display, 32 GB, 30% faster processor, designed for portable entertainment, (2022 release), Black"}, {"trait_type":"asin","value":"B09BG6BRQG"}]');
    // form.append('imageUrl', 'https://m.media-amazon.com/images/I/61fgc1OW1ZL._AC_SL1000_.jpg');
    // form.append('name', 'product1NFT');
    // form.append('description', 'product1 nft');

    // const options = {
    //   method: 'POST',
    //   headers: {
    //     accept: 'application/json',
    //     'X-API-Key': 'sk_live_7a24ca5d-7718-43b1-a77d-e520d851b091'
    //   }
    // };

    // options.body = form;

    // fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));

    
    // navigate("/verifiedpage");
    // console.log(yesVotes);
    yesVotes++;
    // console.log(yesVotes);
  }

  function votedNo() {

    navigate("/verificationpage");
  
    // const form = new FormData();
    // form.append('chain', 'polygon');
    // form.append('data', '[{"trait_type":"url","value":"https://www.amazon.com/All-new-Fire-HD-8-tablet/dp/B099Z8HLHT?ref_=Oct_DLandingS_D_4140c100_60"},{"trait_type":"name","value":"All-new Amazon Fire HD 8 tablet, 8” HD Display, 32 GB, 30% faster processor, designed for portable entertainment, (2022 release), Black"}, {"trait_type":"asin","value":"B09BG6BRQG"}]');
    // form.append('imageUrl', 'https://m.media-amazon.com/images/I/61fgc1OW1ZL._AC_SL1000_.jpg');
    // form.append('name', 'product1NFT');
    // form.append('description', 'product1 nft');

    // const options = {
    //   method: 'POST',
    //   headers: {
    //     accept: 'application/json',
    //     'X-API-Key': 'sk_live_7a24ca5d-7718-43b1-a77d-e520d851b091'
    //   }
    // };

    // options.body = form;

    // fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));

    
    // navigate("/verifiedpage");
    // console.log(noVotes);
    noVotes++;
    // console.log(noVotes);
  }
 
  // prodArray = [
  //   "product1.jpg",
  //   "product2.jpg",
  //   "product3.jpg",
  //   "product4.jpg",
  //   "product5.jpg"
  // ]

  // function products() {
  //   var randNum = Math.floor(Math.random() * prodArray.length);
  //   selectedProduct = prodArray[randNum];
  //   return selectedProduct;
  // }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-arial items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-deep_purple_A100 flex flex-col items-end justify-start p-[32px] sm:px-[20px] w-[100%]">
          <div className="flex flex-col justify-start mb-[78px] mr-[46px] md:pl-[20px] md:pr-[20px] md:w-[100%] sm:w-[100%] w-[78%]">
            <div className="flex flex-row gap-[64px] h-[44px] md:h-[auto] sm:h-[auto] items-center justify-center ml-[auto] w-[331px]">
              <Text
                className="text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                HOME
              </Text>
              <Text
                className="common-pointer text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
                onClick={() => navigate("/aboutpage")}
              >
                ABOUT
              </Text>
            </div>
            <div className="flex h-[677px] justify-end mr-[219px] mt-[73px] relative md:w-[100%] sm:w-[100%] w-[80%]">
              <Img
                src="images/img_group17701.svg"
                className="h-[418px] mb-[87px] mt-[auto] mx-[auto] w-[auto]"
                alt="Group17701"
              />
              <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <Text
                  className="font-arial leading-[66.00px] md:leading-[normal] sm:leading-[normal] mx-[auto] text-black_901 text-center"
                  as="h1"
                  variant="h1"
                >
                  “Do you think this item should <br />
                  be on Amazon?”
                </Text>
                <Img
                  src="images/product1.jpg"
                  className="h-[348px] sm:h-[auto] mt-[75px] object-cover md:w-[100%] sm:w-[100%] w-[35%]"
                  alt="imageTwo"
                />
                <Text
                  className="font-manrope mt-[100px] not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Decide below and wait to see if your vote wins the majority
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-manrope sm:gap-[40px] gap-[88px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[130px] mt-[28px] md:w-[100%] sm:w-[100%] w-[54%]">
              <Button
                className="common-pointer cursor-pointer font-semibold min-w-[43%] text-[18px] text-center text-white_A700 w-[max-content]"
                onClick={() => votedYes()}
                size="sm"
              >
                YES
              </Button>
              <Button
                className="common-pointer cursor-pointer font-semibold min-w-[43%] text-[18px] text-center text-white_A700 w-[max-content]"
                onClick={() => votedNo()}
                size="sm"
              >
                NO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
