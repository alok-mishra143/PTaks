import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/features/counterSlice";

function App() {
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
          Counter App
        </h1>

        <div className="flex items-center gap-6">
          <button
            onClick={() => dispatch(decrement())}
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 
            shadow-lg hover:shadow-xl active:scale-95 text-2xl w-16 h-16 flex items-center justify-center
            border-2 border-gray-600 hover:border-cyan-500"
          >
            -
          </button>

          <div className="text-6xl font-bold min-w-[120px] text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
              {count}
            </span>
          </div>

          <button
            onClick={() => dispatch(increment())}
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 
            shadow-lg hover:shadow-xl active:scale-95 text-2xl w-16 h-16 flex items-center justify-center
            border-2 border-gray-600 hover:border-cyan-500"
          >
            +
          </button>
        </div>

        <p className="text-gray-400 text-lg mt-4">
          Click buttons to modify the count
        </p>
      </div>
    </div>
  );
}

export default App;
