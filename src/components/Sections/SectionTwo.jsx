import React from 'react'

const SectionTwo = () => {
  return (
      <section>
        <div className="grid sm:grid-cols-2 text-gray-700 p-10 gap-5">
          <div className="text-right items-center">
            <h1 className="sm:text-4xl text-2xl font-bold">Deposit and Get Interests</h1>
            <p>
              We give you 7% interest per annum while you keep holding you{" "}
              assets in your wallet
            </p>
          </div>
          <div>
            <img
              src="/Save.png"
              alt="save-img"
              className="sm:h-[12rem] h-[8rem] object-cover"
            />
          </div>
        </div>
      </section>
  );
}

export default SectionTwo