import { useState } from "react";
import { EyeIcon ,EyeSlashIcon } from "@heroicons/react/20/solid";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [showPassword,setShowPassword]=useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-green-500/90 backdrop-blur-md border border-green-400/30 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center border-2 border-white/50">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-white text-center mb-8 drop-shadow-lg">
          Sign in
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="text-white text-sm font-bold mb-2 drop-shadow text-left">
              Email
            </div>
            <input
              type="email"
              placeholder="Enter Your email"
              required
              value={email}
              title="Enter a valid email address like example@domain.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:bg-white/30 transition-all duration-200"
            />
          </div>

          <div>
      <div className="text-white text-sm text-left font-semibold mb-2 drop-shadow">
        Password
      </div>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Your Password"
          required
          value={password}
          minLength={6}
          title="Password must be at least 6 characters"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 pr-12 bg-white/20 border border-white/40 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:bg-white/30 transition-all duration-200"
        />

        <button
          type="button"
          onClick={()=>setShowPassword((prev)=> !prev)}
          className="absolute inset-y-0 right-3 flex items-center text-white"
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5 " />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-white drop-shadow">
              <input
                type="checkbox"
                className="mr-2 rounded accent-yellow-400"
              />
              Remember me
            </div>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-200 drop-shadow"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-green-700 font-bold py-3 px-4 rounded-lg hover:bg-yellow-300 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 cursor-pointer shadow-lg"
          >
            Login
          </button>

          <div className="text-center">
            <a
              href="#"
              className="text-white hover:text-yellow-300 text-sm transition-colors duration-200 drop-shadow"
            >
              Don't have an account? Register now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
