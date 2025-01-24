import { createBrowserRouter, RouterProvider } from "react-router";
import DashBoard from "./components/DashBoard";
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex flex-col items-center h-screen mt-20 pt-11">
          {" "}
          <Home />
          <Navbar />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <div className="flex flex-col items-center h-screen mt-20 pt-11">
          {" "}
          <Navbar />
          <DashBoard />
        </div>
      ),
    },
    {
      path: "/addUser",
      element: (
        <div className="flex flex-col items-center h-screen mt-20 pt-11">
          {" "}
          <Navbar />
          <AddUser />
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
