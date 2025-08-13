import { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import CancelButton from "../components/CancelButton";
import SubmitButton from "../components/SubmitButton";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1); // 1 = username, 2 = password
  const { isLoading, error, login } = useLogin();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lgData") || "null");
    if (data) navigate("/dashboard");
  }, [navigate]);

  const handleNext = (e) => {
    e.preventDefault();
  
    switch (step) {
      case 1:
        if (!username.trim()) return;
        setStep(2);
        break;
  
      case 2:
        if (!companyCode.trim()) return;
        setStep(3);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div
      className="min-h-screen w-full bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('rockwell-automation-background.svg')" }}
    >
      {/* Card */}
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
          {/* Header logos */}
          <div className="flex items-center gap-5 border-b border-gray-100 ml-4 px-6 py-4 w-100 items-center justify-between">
            <img
              src="RA-PLEX-lockup-logo-color.svg"
              alt="Rockwell Automation"
            />
          </div>

          {/* Body */}
          <div className="px-6 py-7">
            <h2 className="text-gray-800 text-lg font-semibold">
              Let’s Get Started
            </h2>

            {/* Step 1: Username */}
            {step === 1 && (
              <form className="mt-4 space-y-4" onSubmit={handleNext}>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Username"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <SubmitButton isLoading={isLoading} label="Next" />
                </div>
              </form>
            )}

            {/* Step 2: Company Code + Next and Back) */}
            {step === 2 && (
              <form className="mt-4 space-y-4" onSubmit={handleNext}>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <button
                    id="username-display"
                    type="button"
                    onClick={() => {
                      setPassword(""); 
                      setStep(1);
                    }}
                    className="mt-1 block w-full rounded-md cursor-pointer
                              px-3 py-2 text-left text-sm text-gray-500"
                    aria-label="Username (click to change)"
                  >
                    {username || "Username"}
                  </button>
                </div>
                <div>
                  <label
                    htmlFor="Company Code"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Comapny Code
                  </label>
                  <input
                    id="companyCode"
                    name="companyCode"
                    type="text"
                    autoComplete="current-companyCode"
                    value={companyCode}
                    onChange={(e) => setCompanyCode(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Company Code"
                    required
                  />
                </div>

                <div className="flex justify-end items-center gap-x-2">
                  <CancelButton
                    label="Back"
                    onClick={() => {
                      setPassword(""); 
                      setStep(1);
                    }}
                  />
                  <SubmitButton isLoading={isLoading} label="Next" />
                </div>
              </form>
            )}

            {/* Step 3: Password + Sign in (uses your existing hook) */}
            {step === 3 && (
              <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Username
                  </label>
                  {/* A button styled like an input so it's clearly interactive */}
                  <button
                    id="username-display"
                    type="button"
                    onClick={() => {
                      setPassword(""); 
                      setStep(1);
                    }}
                    className="mt-1 block w-full rounded-md cursor-pointer
                              px-3 py-2 text-left text-sm text-gray-500"
                    aria-label="Username (click to change)"
                  >
                    {username || "Username"}
                  </button>
                </div>
                <div>
                  <label
                    htmlFor="companyCode"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Company code
                  </label>
                  {/* A button styled like an input so it's clearly interactive */}
                  <button
                    id="companyCode-display"
                    type="button"
                    onClick={() => {
                      setCompanyCode(""); 
                      setStep(2);
                    }}
                    className="mt-1 block w-full rounded-md cursor-pointer
                              px-3 py-2 text-left text-sm text-gray-500"
                    aria-label="Username (click to change)"
                  >
                    {companyCode || "Company Code"}
                  </button>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>

                {error && (
                  <div className="rounded bg-red-50 border border-red-200 p-2">
                    <p className="text-red-700 text-xs">{error}</p>
                  </div>
                )}

                <div className="flex justify-end items-center gap-x-2">
                  <CancelButton
                    label="Back"
                    onClick={() => {
                      setPassword(""); 
                      setStep(2);
                    }}
                  />
                  <SubmitButton isLoading={isLoading} label="Sign In" />
                </div>
              </form>
            )}

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <div className="text-[10px] tracking-wider text-gray-500">
                OR SIGN IN WITH
              </div>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Alt sign-in buttons */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => {
                  // add your Microsoft SSO handler here
                }}
              >
                {/* Microsoft icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="-ml-1"
                >
                  <path fill="#f35325" d="M11 11H3V3h8z" />
                  <path fill="#81bc06" d="M21 11h-8V3h8z" />
                  <path fill="#05a6f0" d="M11 21H3v-8h8z" />
                  <path fill="#ffba08" d="M21 21h-8v-8h8z" />
                </svg>
                Sign in with Microsoft
              </button>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => {
                  // add your certificate auth handler here
                }}
              >
                {/* Certificate icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="-ml-1"
                >
                  <path
                    d="M6 4a2 2 0 0 1 2-2h5l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14 2v4a1 1 0 0 0 1 1h4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="13" r="3" fill="currentColor" />
                </svg>
                Sign in with Certificate
              </button>
            </div>

            {/* Auxiliary links */}
            <div className="mt-6 text-xs text-gray-500">
              Not a member?
              <Link
                to="/signup"
                className="pl-1 font-medium text-gray-600 hover:text-gray-800"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-6 py-4 text-[10px] text-gray-500 flex items-center justify-between">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>© 2025 Rockwell Automation, Inc.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
