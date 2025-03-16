import React from "react";

function InputToDo() {
  return (
    <div className=" flex justify-center">
      <div className="bg-fuchsia-50 mt-10 h-[40px] rounded-lg flex justify-between">
        <div className="  rounded-l-lg">
          <input
            type="text"
            className="h-[40px] p-4 rounded-lg focus:outline-none text-lg font-medium"
            placeholder="Add a Details"
          />
        </div>
        <div className="">
          <button className="bg-green-500 p-1 w-[80px] h-[40px] text-white rounded-r-lg ml-1 font-medium">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputToDo;
