import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { TypingComponent } from "../hooks/useLoopTypingEffect"; // kept import (unused), OK to remove if you prefer
import SubmitButton from "../components/SubmitButton";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, login } = useLogin();

  // step 0: email, step 1: password
  const [step, setStep] = useState(0);

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (!email.trim()) return;
    setStep(1);
    // focus password after transition
    setTimeout(() => {
      const pw = document.getElementById("password");
      if (pw) pw.focus();
    }, 0);
  };

  const handleBack = (e) => {
    if (e) e.preventDefault();
    setStep(0);
    setTimeout(() => {
      const em = document.getElementById("email");
      if (em) em.focus();
    }, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    const raw = localStorage.getItem("lgData");
    const data = raw ? JSON.parse(raw) : null;
    if (data) navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="min-h-screen w-full bg-surface flex items-center justify-center">
      <div className="xshell-card">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            className="h-36 w-auto"
            src="/xsell-tech-logo.png"
            alt="XSELL Technologies"
          />
        </div>

        {/* Email step */}
        {step === 0 && (
          <form className="mt-8 flex flex-col items-center" onSubmit={handleNext}>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="xshell-input"
            />

            <button type="submit" className="xshell-next mt-4 rounded-lg px-2 py-1 gap-2" aria-label="Next">
              Next <AiOutlineRight className=" h-5"/>
            </button>

            <p className="mt-4 text-xs text-slate-500">
              Not a member?
              <Link
                to="/signup"
                className="ml-1 font-semibold text-brand hover:text-brand-600"
              >
                Sign Up Today!
              </Link>
            </p>
          </form>
        )}

        {/* Password step */}
        {step === 1 && (
          <form className="mt-8 flex flex-col items-center" onSubmit={handleSubmit}>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="xshell-input"
            />

            <div className="mt-4 flex items-center space-x-3">
              <button
                type="button"
                className="xshell-back mt-4 rounded-lg px-2 py-1 gap-2"
                onClick={handleBack}
                aria-label="Back"
              >
                <AiOutlineLeft className=" h-5"/> Back
              </button>

              <button type="submit" className="xshell-next mt-4 rounded-lg px-2 py-1 gap-2" aria-label="Next">
                Next <AiOutlineRight className=" h-5"/>
              </button>
            </div>

            <a
              href="#"
              className="mt-3 text-xs font-medium text-brand hover:text-brand-600"
            >
              Forgot Password?
            </a>

            {error && (
              <div className="mt-4 xshell-error">
                <p className="text-red-700 text-xs">{error}</p>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
