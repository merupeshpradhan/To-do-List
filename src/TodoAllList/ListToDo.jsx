import React from "react";

function ListToDo(props) {
  return (
    <ul className="pt-5">
      {props.items.map((lisItem, i) => (
        <li
          key={i}
          className="border-2 border-blue-300 bg-white w-[15vw] h-[4vh] mb-2 rounded-lg text-center flex justify-between items-center"
        >
          <span className="pl-2">{lisItem}</span>
          <span className="pr-3">
            <i
              className="fa-solid fa-trash-can text-black hover:text-red-600 hover:scale-125"
              onClick={(e) => props.deleteItem(i)}
            ></i>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListToDo;
