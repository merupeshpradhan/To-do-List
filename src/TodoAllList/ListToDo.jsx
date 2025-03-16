import React from "react";

function ListToDo(props) {
  return (
    <ul className="pt-5">
      <li className="border-2 border-blue-300 bg-white w-[15vw] h-[4vh] rounded-lg text-center mb-2 flex justify-between items-center">
        <span className="pl-2">{props.item}</span>
        <span className="pr-3">
          <i className="fa-solid fa-trash-can text-red-600"></i>
        </span>
      </li>
    </ul>
  );
}

export default ListToDo;
