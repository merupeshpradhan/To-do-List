import React from "react";

function ListToDo() {
  return (
    <div className="flex justify-center mt-8">
      <div className="h-[55vh] w-[85vh] border rounded-2xl p-5">
        <ul>
          <li className="border border-blue-400 bg-white w-[30vh] rounded-2xl text-center mb-2">
            Hy
          </li>
          <li className="border border-blue-400 bg-white w-[30vh] rounded-2xl text-center mb-2">
            Hello
          </li>
          <li className="border border-blue-400 bg-white w-[30vh] rounded-2xl text-center mb-2">
            Welcome
          </li>
          <li className="border border-blue-400 bg-white w-[30vh] rounded-2xl text-center mb-2">
            Travel
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListToDo;
