import { useState } from "react";
import "./App.css";
import InputToDo from "./AddingList/InputToDo";
import ListToDo from "./TodoAllList/ListToDo";

function App() {
  const [ToDoItem, setToDoItem] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "")
     setToDoItem([...ToDoItem, inputText]);
  };

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
          <div className="h-[55vh] w-[40vw] border-2 border-fuchsia-50 rounded-2xl p-3">
            <h1 className=" text-xl font-bold text-indigo-600 border-b-2 w-[6vw]">
              TODO List's
            </h1>
            {ToDoItem.map((listItem, i) => {
              return (
                <ListToDo
                  key={i}
                  index={i}
                  item={listItem}
                  deleteItem={deleteListItem}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
