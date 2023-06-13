import React from "react";

function ImageLinkForm() {
  return (
    <div>
      <p className="text-center text-xl font-semibold">This is the magic!!!</p>
      <div className="flex justify-center">
        <div className="backG rounded-md shadow-sm p-8  mt-4">
          <div className="display ml-3 flex justify-center w-[420px]">
            <input
              type="text"
              placeholder="URL"
              className="w-[70%] p-1 focus:outline-none"
            />
            <button className="w-[30%] bg-violet-600 font-thin text-lg text-white hover:scale-105 hover:bg-purple-500 active:scale-90 active:bg-purple-600">
              Detect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
