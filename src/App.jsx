import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center bg-fuchsia-100 h-[100vh]">
      <div className="w-[90vh] h-[70vh] bg-fuchsia-300 rounded-2xl">
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
        <div className="flex justify-center mt-8">
          <div className="h-[55vh] w-[85vh] border rounded-2xl p-5">
            <ul>
              <li className="border border-blue-400 bg-white w-[30vh] rounded-2xl text-center mb-2">Hy</li>
              <li className="border border-blue-400 bg-white w-[30vh] rounded-2xl text-center mb-2">Hello</li>
              <li className="border border-blue-400 bg-white w-[30vh] rounded-2xl text-center mb-2">Welcome</li>
              <li className="border border-blue-400 bg-white w-[30vh] rounded-2xl text-center mb-2">Travel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
