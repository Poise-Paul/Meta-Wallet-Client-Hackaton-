import React from "react";
import { Link } from "react-router-dom";

const CryptoStarted = () => {
  const links = [
    "https://bitemycoin.com/guides/how-to-get-started-with-cryptocurrency/",
    "https://www.javatpoint.com/sending-and-receiving-bitcoin",
    "https://thebitcoinnews.com/what-are-private-keys-and-why-are-they-important/#:~:text=Because%20private%20keys%20are%20essentially%20the%20password%20that,controls%20are%20gone%20forever.%20Why%20They%20Are%20Important",
    "https://bitcoin.org/en/getting-started",
  ];
  const titles = [
    "get Started with bitcoin",
    "sending and recieving",
    "keep your crypto safe",
    "get more learning content",
  ];
  const description = [
    "Learn the basics of buying and selling crypto in no time.",
    " sending bitcoin is as easy as choosing the amount and deciding where it goes",
    "Not your keys, not your crypto. Stay safe while building your portfolio",
    "Want more? We have lots of great articles to get you to the pro level",
  ];
  const urls = [
    "https://app.bitcoin.com/images/uploads/get-started-what-is-bitcoin.png",
    "https://app.bitcoin.com/images/uploads/get-started-sending-receiving.png",
    "https://app.bitcoin.com/images/uploads/get-started-security.png",
    "https://app.bitcoin.com/images/uploads/get-started-basics.png",
  ];
  return (
    <div className="flex flex-col">
      <div className="">
        <h1 className="sm:text-4xl text-2xl font-bold">
          Getting Started with Metaverse Wallets
        </h1>{" "}
        <p className="text-gray-500 sm:text-sm text-xs">
          Earn your first crypto by completing these fun introduction courses
          and become a crypto native.
        </p>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-5 justify-between mt-5">
        {" "}
        {/* Learning Contents */}
        {titles.map((x, key) => {
          const index = titles.indexOf(x);
          return (
            <div key={key} className="flex flex-col rounded-b-2xl bg-[#2d3445]">
              <img
                src={`${urls[index]}`}
                alt="Learning-Img"
                className="object-cover rounded-t-2xl"
              />
              <div className="sm:p-5 p-3">
                <a href={`${links[index]}`} target="_blank">
                  <h1 className="font-semibold sm:text-lg text-sm capitalize hover:underline cursor-pointer">
                    {x}
                  </h1>
                </a>

                <div className="text-gray-400 sm:text-sm text-xs leading-[1.2em]">
                  {description[index]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoStarted;
