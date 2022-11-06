import React from "react";

const Partners = () => {
  return (
    <div className="flex flex-col my-5 gap-3 text-center">
      {" "}
      <h1 className="sm:text-2xl text-sm font-semibold">
        The Official Metaverse Bitcoin Wallet Partners:
      </h1>{" "}
      <div className="flex gap-5 justify-center items-center">
        <img
          src="https://cyberfish.io/static/img/brands/luno-logo.png"
          alt="luno_img"
          className="sm:h-10 h-6 object-cover"
        />
        <img
          src="https://www.coinomi.com/svg/coinomi-logo-color.svg"
          alt="btc_logo"
          className="sm:h-12 h-8 object-cover"
        />
        <img
          src="https://cdn-images-1.medium.com/max/184/1*edHEjIkFn5YuPODO7wKOYw@2x.png"
                  alt="blok_logo"
                  className="sm:h-14 h-8 object-center"
        />
      </div>
    </div>
  );
};

export default Partners;
