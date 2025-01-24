import { Link } from "react-router";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="container  ">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 animate-fade-in">
            Welcome to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}
              UserHub
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Manage your users with modern interface and powerful features.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to={"/dashboard"}>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all">
            <div className="text-blue-400 mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">User Management</h3>
            <p className="text-gray-400">
              Easily manage and organize your users with intuitive controls.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all">
            <div className="text-purple-400 mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
            <p className="text-gray-400">
              Instant updates and synchronization across all devices.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-pink-400/30 transition-all">
            <div className="text-pink-400 mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-gray-400">
              Detailed insights and statistics about your users.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-400">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-400">1M+</div>
              <div className="text-gray-400">Users</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-pink-400">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-green-400">100%</div>
              <div className="text-gray-400">Secure</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
