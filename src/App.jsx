import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

const App = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleIncrement = () => {
    if (count < 150) {
      setHistory([...history, count]);
      setRedoStack([]);
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setHistory([...history, count]);
      setRedoStack([]);
      setCount(count - 1);
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastValue = history.pop();
      setRedoStack([...redoStack, count]);
      setCount(lastValue);
      setHistory(history);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const lastRedo = redoStack.pop();
      setHistory([...history, count]);
      setCount(lastRedo);
      setRedoStack(redoStack);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className=' mb-16 text-pretty text-4xl '>
      Jarurat Care Assignment
      </div>
      <div className=" flex justify-center items-center mb-4">
        <button
          onClick={handleDecrement}
          className={"flex justify-center items-center gap-x-8 px-4 py-2 mx-2 text-white bg-red-500 rounded hover:bg-red-700 "+(count===0 ? "cursor-not-allowed":"")}
        >
          -1
          <FaArrowDownLong/>
        </button>
        <button
          onClick={handleIncrement}
          className={" flex justify-center items-center gap-x-8 px-4 py-2 mx-2 text-white bg-green-500 rounded hover:bg-green-700 "+ (count===150 ? "cursor-not-allowed":"")}
        >
          +1
          <FaArrowUpLong className=''/>
        </button>
      </div>
      <div className="mb-4 text-2xl font-bold">{count}</div>
      <div className="w-full max-w-md bg-gray-300 rounded-md h-12">
        <div
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-12 rounded-md transition-all duration-300"
          style={{ width: `${(count / 150) * 100}%` }}
        ></div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleUndo}
          className="px-4 py-2 mx-2 text-white bg-yellow-500 rounded hover:bg-yellow-700"
        >
          Undo
        </button>
        <button
          onClick={handleRedo}
          className="px-4 py-2 mx-2 text-white bg-purple-500 rounded hover:bg-purple-700"
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default App;
