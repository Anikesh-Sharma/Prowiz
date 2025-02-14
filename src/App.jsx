import { AiOutlineDownload } from "react-icons/ai";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import Charts from "./Components/Charts";
import List from "./Components/List";

const App = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="w-full">
        <Navbar />

        <div className="p-8 bg-white rounded-md mx-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <select className="w-full h-10 bg-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Applications</option>
              <option value="completed">Completed</option>
            </select>
            <select className="w-full h-10 bg-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Line Number</option>
              <option value="completed">Completed</option>
            </select>
            <select className="w-full h-10 bg-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Reason For Rejection</option>
              <option value="completed">Completed</option>
            </select>
            <select className="w-full h-10 bg-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Date Range</option>
              <option value="completed">Completed</option>
            </select>
            <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
              <AiOutlineDownload className="text-xl" />
              Download
            </button>
          </div>
        </div>

        <div className="p-8">
          <Content />
        </div>

        <div className="px-2">
          <Charts />
        </div>

        <div className="px-8">
          <List />
        </div>
      </div>
    </div>
  );
};

export default App;
