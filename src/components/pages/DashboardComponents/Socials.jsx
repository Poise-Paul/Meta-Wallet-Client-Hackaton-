import React from "react";

const Socials = () => {
  const links = [];
  const urls = [
    "https://app.bitcoin.com/images/uploads/social-telegram.png",
    "https://app.bitcoin.com/images/uploads/social-twitter.png",
    "https://app.bitcoin.com/images/uploads/social-instagram.png",
    "https://app.bitcoin.com/images/uploads/social-youtube.png",
    "https://app.bitcoin.com/images/uploads/social-facebook.png",
    "https://app.bitcoin.com/images/uploads/social-discord.png",
  ];
  const socials = [
    "Telegram",
    "Twitter",
    "Instagram",
    "Youtube",
    "Facebook",
    "Discord",
  ];
  return (
    <div className="flex flex-col my-10">
      <div className="">
        <h1 className="sm:text-4xl text-2xl font-bold">
          Join the conversation
        </h1>{" "}
        <p className="text-gray-500 sm:text-base text-sm">
          Connect with the community through social media
        </p>
      </div>
      <div className="flex flex-wrap gap-5 mt-5">
        {" "}
        {/* All Socials */}
        {socials.map((x, key) => {
          const index = socials.indexOf(x);
          return (
            <div
              key={key}
              className="flex justify-center items-center sm:p-10 p-4 rounded-lg text-center rounded-b-2xl bg-[#2d3445]"
            >
              <a target="_blank">
                <div className="flex justify-center flex-col items-center gap-1 cursor-pointer">
                  {" "}
                  <img
                    src={urls[index]}
                    alt="Social-twitter"
                    className="object-cover rounded-t-2xl sm:w-12 sm:h-12 w-8"
                  />
                  <h1 className="font-semibold sm:text-sm text-xs capitalize">
                    {x}
                  </h1>
                </div>
              </a>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Socials;
