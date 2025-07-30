import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import SubmitButton from "../components/SubmitButton";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lgData"));
    if (data) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="max-w-sm w-full space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Username or Email *</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded bg-red-100 p-3 text-sm text-red-700">{error}</div>
            )}
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Password *</h2>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-sky-600 border-gray-300 rounded"
                />
                <span>Remember Username</span>
              </label>
            </div>
            <SubmitButton isLoading={isLoading} label="Sign In" className="bg-sky-600 shadow-md text-white px-6 py-3 hover:bg-sky-500" />
            <div className="flex justify-center items-center mt-4">
              <Link to="#" className="text-sky-600 hover:underline text-lg font-semibold">
                Forgot Password
              </Link>
            </div>
          </form>
        </div>
        <div className="absolute bottom-4 text-xs text-gray-900 opacity-70 text-center w-full">
          This is a mokup login page for Workday Adaptive Planning.<br />
          It is not a real login page and does not connect to any backend.<br />
          <br />
          Boomi Embed JS Example<br />
        </div>
      </div>

      {/* Right - Branding */}
      <div className="hidden lg:flex w-1/2 bg-sky-700 items-center justify-center relative">
        <div className="text-center text-white">
          <div className="flex flex-col items-center mb-6">
            <div className="rounded-full p-3">
                <img src="/workday-logo.png" alt="Workday Logo"/>
            </div>
            <div className="mt-4 text-lg font-semibold tracking-wide">WORKDAY ADAPTIVE PLANNING</div>
          </div>
        </div>

      </div>
    </div>
  );
}










