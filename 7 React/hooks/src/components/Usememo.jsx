import React, { useState, useMemo } from "react";

const Usememo = () => {
  const [userValue, setUserValue] = useState(0);
  const [userIteration, setUserIteration] = useState(0);
  const [withoutMemoValue, setWithoutMemoValue] = useState(0);
  const [withMemoValue, setWithMemoValue] = useState(0);
  const [withoutTime, setWithoutTime] = useState(0);
  const [withTime, setWithTime] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const noMemo = (value) => {
    for (let i = 0; i < userIteration; i++) {
      // Dummy operation to prevent optimization
      let dummy = i * 2;
    }
    return value;
  };

  // Without useMemo
  const handleWithoutMemo = () => {
    setIsCalculating(true);
    const start = performance.now();
    noMemo(userValue);
    const end = performance.now();
    setWithoutTime(end - start);
    setWithoutMemoValue((prev) => prev + 1);
    setIsCalculating(false);
  };

  // With useMemo
  const computedWithMemo = useMemo(() => {
    for (let i = 0; i < userIteration; i++) {
      // Dummy operation to prevent optimization
      let dummy = i * 2;
    }
    return userValue;
  }, [userValue, userIteration]);

  const handleWithMemo = () => {
    setIsCalculating(true);
    const start = performance.now();
    // Access the memoized value
    const value = computedWithMemo;
    const end = performance.now();
    setWithTime(end - start);
    setWithMemoValue((prev) => prev + 1);
    setIsCalculating(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 transition-colors duration-300">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-xl shadow-black/30 p-6">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          useMemo Performance Comparison
        </h1>

        <div className="mb-6 space-y-4">
          <label>Value</label>
          <input
            type="number"
            placeholder="Enter the value"
            value={userValue}
            onChange={(e) => setUserValue(Number(e.target.value))}
            className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label>Number of iteration</label>
          <input
            type="number"
            placeholder="Enter the number of iterations"
            value={userIteration}
            onChange={(e) => setUserIteration(Number(e.target.value))}
            className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="space-y-8">
          {/* Without useMemo Section */}
          <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30 hover:border-blue-700/50 transition-all duration-300">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-400">
                <span className="bg-blue-900/30 p-2 rounded-lg">
                  Without useMemo
                </span>
              </h2>
              <div className="space-y-2">
                <p className="text-gray-300">
                  Counter:{" "}
                  <span className="font-bold text-blue-300">
                    {withoutMemoValue}
                  </span>
                </p>
                <p className="text-gray-300">
                  Last calculation time:{" "}
                  <span className="font-bold text-blue-300">
                    {withoutTime.toFixed(2)}ms
                  </span>
                </p>
              </div>
              <button
                onClick={handleWithoutMemo}
                disabled={isCalculating}
                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCalculating ? "Calculating..." : "Increment"}
              </button>
            </div>
          </div>

          {/* With useMemo Section */}
          <div className="bg-green-900/20 p-6 rounded-xl border border-green-800/30 hover:border-green-700/50 transition-all duration-300">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-green-400">
                <span className="bg-green-900/30 p-2 rounded-lg">
                  With useMemo
                </span>
              </h2>
              <div className="space-y-2">
                <p className="text-gray-300">
                  Counter:{" "}
                  <span className="font-bold text-green-300">
                    {withMemoValue}
                  </span>
                </p>
                <p className="text-gray-300">
                  Last calculation time:{" "}
                  <span className="font-bold text-green-300">
                    {withTime.toFixed(2)}ms
                  </span>
                </p>
              </div>
              <button
                onClick={handleWithMemo}
                disabled={isCalculating}
                className="w-full bg-green-700 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCalculating ? "Calculating..." : "Increment"}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-400 text-sm italic border-t border-gray-700 pt-4">
          Note: The "With useMemo" version only recalculates when inputs change
        </p>
      </div>
    </div>
  );
};

export default Usememo;
