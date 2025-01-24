import { useForm } from "react-hook-form";
import { useUserContext } from "../lib/UserContext";
import { toast } from "react-toastify";

interface UserFormData {
  name: string;
  email: string;
}

const AddUser = () => {
  const { users, setUsers } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>();

  const onSubmit = (data: UserFormData) => {
    // Check if email already exists
    const emailExists = users.some((user) => user.email === data.email);
    if (emailExists) {
      toast.error("User Already Exist!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      toast.success("User Added Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    // Create new user with unique ID
    const newUser = {
      id: Date.now().toString(), // Simple ID generation
      ...data,
    };

    // Update users state
    setUsers((prevUsers) => [...prevUsers, newUser]);
    reset();
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-2xl backdrop-blur-lg bg-gray-800/30 border border-gray-700/50 shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        Add New User
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className={`w-full px-4 py-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border ${
              errors.name ? "border-red-400/80" : "border-gray-600/50"
            } text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-transparent transition-all`}
          />
          {errors.name && (
            <p className="text-red-400/90 text-sm mt-2">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-4 py-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border ${
              errors.email ? "border-red-400/80" : "border-gray-600/50"
            } text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-transparent transition-all`}
          />
          {errors.email && (
            <p className="text-red-400/90 text-sm mt-2">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500/90 to-pink-600/90 text-gray-100 py-3 px-6 rounded-lg font-medium hover:from-purple-500 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
