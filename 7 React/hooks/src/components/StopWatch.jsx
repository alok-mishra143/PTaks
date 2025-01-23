import * as React from "react";

const StopWatch = () => {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const timerRef = React.useRef(null);

  const start = () => {
    if (!isRunning) {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
      setIsRunning(true);
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const reset = () => {
    setTime(0);
    stop();
  };

  // Calculate time units
  const seconds = Math.floor(time / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div className="relative group">
      {/* Animated gradient backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-1000 " />

      {/* Card container */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-96 border border-gray-700/50">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 animate-text-shimmer">
            STOPWATCH
          </h1>
          <div className="mt-8 flex items-end justify-center">
            <div className="relative">
              {/* Time display with dynamic gradient */}
              <div className="flex items-baseline gap-1">
                <span className="text-8xl font-mono font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-glow">
                  {seconds.toString().padStart(2, "0")}
                </span>
                <span className="text-4xl font-medium text-emerald-200/80">
                  .
                </span>
                <span className="text-5xl font-mono font-medium text-cyan-200/90">
                  {milliseconds.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Floating unit label */}
              <div className="absolute -bottom-5 right-2">
                <span className="text-sm font-semibold tracking-wide text-cyan-300/80 uppercase">
                  {seconds === 1 ? "second" : "seconds"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-gray-700/0 via-emerald-400/50 to-gray-700/0 my-8" />

        {/* Controls */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-center gap-5">
            <button
              onClick={start}
              disabled={isRunning}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 
                ${
                  isRunning
                    ? "bg-emerald-400/20 text-gray-400 cursor-not-allowed"
                    : "bg-emerald-500/90 text-white hover:bg-emerald-400 hover:scale-105"
                }
                shadow-lg hover:shadow-emerald-400/20`}
            >
              ▶ Start
            </button>
            <button
              onClick={stop}
              disabled={!isRunning}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 
                ${
                  !isRunning
                    ? "bg-rose-500/20 text-gray-400 cursor-not-allowed"
                    : "bg-rose-500/90 text-white hover:bg-rose-400 hover:scale-105"
                }
                shadow-lg hover:shadow-rose-400/20`}
            >
              ⏹ Stop
            </button>
          </div>

          <button
            onClick={reset}
            className="px-6 py-3 bg-transparent border-2 border-cyan-400/20 text-cyan-300 rounded-xl
                     font-medium hover:border-cyan-400/40 hover:text-cyan-200 transition-all
                     duration-300 hover:scale-[1.02] active:scale-95"
          >
            ↺ Reset
          </button>
        </div>

        {/* Status indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              isRunning ? "bg-emerald-400 animate-pulse" : "bg-rose-400"
            }`}
          />
          <span className="text-sm text-gray-400">
            {isRunning ? "Recording" : "Paused"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
