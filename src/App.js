import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      {/* <!-- navbar --> */}
      <Navbar />
      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        {/* <!-- header --> */}
        <Header />
        <hr class="mt-4" />

        {/* <!-- todo list --> */}
        <TodoList />

        <hr class="mt-4" />

        {/* <!-- footer --> */}
        <div class="mt-4 flex justify-between text-xs text-gray-500">
          <p>2 tasks left</p>
          <ul class="flex space-x-1 items-center text-xs">
            <li class="cursor-pointer font-bold">All</li>
            <li>|</li>
            <li class="cursor-pointer">Incomplete</li>
            <li>|</li>
            <li class="cursor-pointer">Complete</li>
            <li></li>
            <li></li>
            <li class="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
            <li class="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
            <li class="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
