import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import { TypingComponent } from "../hooks/useLoopTypingEffect";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const textArray = ['Automate.', 'Integrate.', 'Aggregate.', 'Done!'];
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, signup } = useSignup();

  useEffect(() => {
    if (localStorage.getItem('lgData')) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, firstName, lastName);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left form panel */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 bg-white px-8 sm:px-12">
        <div className="max-w-md mx-auto">
          <Link to="/" className="flex items-center mb-8">
            <img src="fxVE.gif" alt="Lightgate logo" className="h-12 w-auto" />
            <span className="ml-2 text-3xl font-semibold text-gray-800">Lightgate</span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign Up</h2>
          <p className="text-sm text-gray-600 mb-6">
            Already have an account?
            <Link to="/login" className="text-red-600 font-medium hover:underline ml-2">Sign In</Link>
          </p>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded p-3 mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-red-600 border-gray-300 rounded" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-red-600 hover:underline">Forgot password?</a>
            </div>
            <div>
              <SubmitButton isLoading={isLoading} label="Sign Up" />
            </div>
          </form>
        </div>
      </div>

      {/* Right hero panel */}
      <div className="hidden lg:flex flex-1 bg-red-600 text-white items-center justify-center px-16">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4">Accelerate Autonomous Finance</h1>
          <p className="text-lg mb-6">Benchmark your progress and unlock automation with our assessment tool and embedable components.</p>
          <button
            type="button"
            onClick={() => window.open("/assessment", "_blank")}
            className="bg-white text-red-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100"
          >
            Start Now
          </button>
          <div className="mt-12 text-4xl font-extrabold">
            <TypingComponent textArray={textArray} enterKeyStrokeDurationInMs={75} stringDelayInMs={4000} />
          </div>
        </div>
      </div>
    </div>
  );
}
