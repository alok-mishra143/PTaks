import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSub(data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  }

  return (
    <div className="bg-black text-white h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <form
          onSubmit={handleSubmit(onSub)}
          action=""
          className="max-w-md mx-auto bg-slate-800 p-6 rounded-lg shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            <input
              {...register("name", {
                required: true,
                minLength: { value: 3, message: "min length is 3" },
              })} // Add this line
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
            {errors.name && (
              <p className="text-red-600 "> {errors.name.message}</p>
            )}
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address",
                },
              })} // Add this line
              type="text"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
            {errors.email && (
              <p className="text-red-600 "> {errors.email.message}</p>
            )}
            <input
              {...register("password", {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/,
                  message:
                    "Password must contain 1 uppercase, 1 lowercase, 1 special character ",
                },
                minLength: {
                  value: 8,
                  message: "Password Minimum  length is 8",
                },
              })} // Add this line
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
            {errors.password && (
              <p className="text-red-600 "> {errors.password.message}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
