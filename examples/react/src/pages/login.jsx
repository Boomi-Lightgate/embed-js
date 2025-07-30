import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { TypingComponent } from "../hooks/useLoopTypingEffect";
import SubmitButton from "../components/SubmitButton";

export default function Login() {
  const textArray = ['Automate.', 'Integrate.', 'Embed.', 'Done!'];
  const enterKeyStrokeDurationInMs = 75;
  const stringDelayInMs = 4000;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('lgData'))
    if (data) {
      navigate("/dashboard");
    }
  }, [])

  return (
    <>
      <div className="flex min-h-full overflow-y-hidden">
        <div className="border-0 flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-boomi-darkBlack ">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <div className="flex lg:flex-1">
                <img className="h-16 w-auto" src="fxVE.gif" alt="" />
                <a href="/" className="pl-1.5 pt-2">
                  <span className=" text-gray-100 text-bolld text-5xl">OEM+</span>
                </a>
              </div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-400">Sign In</h2>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Not a Member?
                <Link to="/signup" className="font-semibold text-gray-500 hover:text-gray-300 pl-2">Sign Up Today!</Link>
              </p>
            </div>

            <div className="mt-2">
              {error && <div className="rounded bg-red-200 p-4 h-10 pt-3"><p className="text-red-500 text-xs italic">{error}</p></div>}
              <div>
                <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">Email <span className="text-gray-500 text-sm">(required)</span></label>
                    <div className="mt-2">
                      <input 
                        id="email" 
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        autoComplete="email" 
                        required 
                        className="block w-full rounded-md border-0 py-3 shadow-sm border-gray-500 focus:border-gray-500 active:border-gray-500 hover:border-gray-600 border-2 bg-boomi-login placeholder:text-gray-600 sm:text-sm sm:leading-6 pl-2 text-gray-400">
                        </input>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">Password <span className="text-gray-500 text-sm">required</span></label>
                    <div className="mt-2">
                      <input 
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                        autoComplete="current-password" 
                        required 
                        className="block w-full rounded-md border-0 py-3 shadow-sm border-gray-500 active:border-gray-500 hover:border-gray-600 border-2 bg-boomi-login placeholder:text-gray-600 sm:text-sm sm:leading-6 pl-2 text-gray-400">
                      </input>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-300 bg-boomi-login"></input>
                      <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-300">Remember me</label>
                    </div>

                    <div className="text-sm leading-6">
                      <a href="#" className="font-semibold text-gray-500 hover:text-gray-300 ">Forgot Password?</a>
                    </div>
                  </div>

                  <div>
                    <SubmitButton isLoading={isLoading} label='Sign In' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block bg-gradient-to-b from-gray-900 to-60% via-gray-900 via-40% to-purple-600 to-20% ">
          <img src={"login_background_indu.png"} className="absolute inset-0 h-full w-full object-cover opacity-10" />
          <div className="absolute flex-1 top-36 pl-24">
            <div className="mx-auto max-w-3xl flex-shrink-0 lg:mx-0 lg:max-w-4xl lg:pt-8">
              <h1 className="text-8xl mt--24 tracking-tight text-white sm:text-8xl font-extrabold relative z-10">
                Build.
              </h1>
              <h1 className="mt-10 text-8xl tracking-tight text-white sm:text-8xl font-extrabold relative z-10">
                Deploy.
              </h1>
              <h1 className="mt-10 text-8xl tracking-tight text-violet-400/85 sm:text-8xl font-extrabold relative z-10">
                <div className="h-24 relative z-10">
                  <TypingComponent textArray={textArray} enterKeyStrokeDurationInMs={enterKeyStrokeDurationInMs} stringDelayInMs={stringDelayInMs} />
                </div>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-400 max-w-xl">
                Harness the power of Boomi in your <span className="font-bold text-white">SaaS</span> applications. Our embeddable  <b className="text-gray-100 text-bold">UI</b> components natively embed into your existing JavaScript clients with ease. 
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}