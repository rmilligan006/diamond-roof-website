import React, { useRef } from "react";

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full border-b-2 border-dotted border-gray-200 pb-5">
        <div className="bg-gray-600 rounded-lg shadow-xl text-center max-w-[500px] flex items-center justify-center mb-2 mt-5 text-white">
          <p className="text-4xl font-bold font-mono py-4 px-4">Contact us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px]">
          <div className="flex flex-col max-w-[1000px] text-center">
            <p className="text-xl font-bold">Sales</p>
            <p className="text-xl font-bold">Tel: 1-519-357-3760</p>
            <p className="text-xl">Toll Free: 1-888-810-7663</p>
          </div>
          <div className="flex flex-col max-w-[1000px] text-center px-4">
            <p className="text-xl font-bold">Phyiscal Address:</p>
            <p className="text-xl font-bold">40523 Amberely Rd, RR#4</p>
            <p className="text-xl">Wingham Ontario</p>
            <p className="text-xl">Canada</p>
            <p className="text-xl">N0G 2W0</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-w-[1000px] py-5">
        <h2 className="text-2xl py-2 px-2">Contact Us:</h2>
        <div className="text-center bg-gray-500 text-white px-5 py-5 shadow-lg shadow-black rounded-lg flex w-full">
          <form
            action="mailto:ryanemilligan2@gmail.com"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="py-2">
              <input
                type="text"
                placeholder="Name"
                name="name"
                aria-required
                className="bg-gray-100 px-5 py-2 outline-none w-96 text-black"
                required
              />
            </div>
            <div className="py-2">
              <input
                type="text"
                placeholder="Email"
                name="email"
                aria-required
                className="bg-gray-100 px-5 py-2 outline-none w-96 text-black"
                required
              />
            </div>
            <div className="py-2">
              <input
                type="tel"
                className="bg-gray-100 px-5 py-2 outline-none text-black w-96"
                required
              />
            </div>
            <div className="py-2">
              <input
                type="text"
                placeholder="Address"
                name="name"
                aria-required
                className="bg-gray-100 px-5 py-2 outline-none w-96 text-black"
                required
              />
            </div>
            <div className="py-2 w-96">
              <textarea
                name="questions"
                cols="42"
                rows="10"
                placeholder="Questions?"
                className="bg-gray-100 px-5 py-2 outline-none w-96 text-black"
              ></textarea>
            </div>
            <div className="">
              <input
                type="submit"
                name="submit"
                value="Send"
                className="bg-gray-200 text-black px-5 m-2 py-3 shadow-md shadow-black hover:bg-slate-600 hover:text-white hover:ease-in-out duration-300 cursor-pointer"
              />
              <input
                type="reset"
                name="reset"
                value="Clear Form"
                className="bg-gray-200 text-black px-5 m-2 py-3 shadow-md shadow-black hover:bg-slate-600 hover:text-white hover:ease-in-out duration-300"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
