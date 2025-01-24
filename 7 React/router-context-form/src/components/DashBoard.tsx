import { toast } from "react-toastify";
import { useUserContext } from "../lib/UserContext";

const DashBoard = () => {
  const { users, setUsers } = useUserContext();

  const removeUser = (userId: string) => {
    toast.success("User Removed Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div className="p-8 mx-auto   items-center flex flex-col">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          User Management
        </h1>

        <div className="rounded-xl overflow-hidden border border-gray-700 backdrop-blur-lg bg-gray-800/30 min-w-full">
          <table className="min-w-full">
            <thead className="bg-gray-800/80">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-800/40 transition-colors border-b border-gray-800/30 last:border-0"
                >
                  <td className="px-6 py-4 text-gray-100 font-medium">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-gray-400">{user.email}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => removeUser(user.id)}
                      className="text-red-400 hover:text-red-300 font-medium px-3 py-1 rounded-md hover:bg-red-900/30 transition-colors"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No users found in database
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
