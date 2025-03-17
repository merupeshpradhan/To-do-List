import { useState } from "react";
import "./App.css";
import InputToDo from "./AddingList/InputToDo";
import ListToDo from "./TodoAllList/ListToDo";

function App() {
  const [ToDoItem, setToDoItem] = useState([]);

  // Add List Item
  let addList = (inputText) => {
    if (inputText !== "") setToDoItem([...ToDoItem, inputText]);
  };

  // Delete List Item
  const deleteListItem = (key) => {
    let newListTodo = [...ToDoItem];
    newListTodo.splice(key, 1);
    setToDoItem([...newListTodo]);
  };

  return (
    <div className="bg-fuchsia-100 h-[100vh] flex items-center justify-center">
      <div className="w-[90vh] h-[70vh] bg-fuchsia-300 rounded-2xl">
        <InputToDo addList={addList} />

        <div className="flex justify-center mt-8">
          <div className="h-[50vh] w-1/2 border-2 border-fuchsia-50 rounded-2xl p-3">
            <h1 className=" text-xl font-bold text-indigo-600 border-b-2 w-1/2">
              TODO List's
            </h1>
            <div className=" flex justify-center overflow-y-auto overflow-bg-red-300  h-[90%]">
              <ListToDo items={ToDoItem} deleteItem={deleteListItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
