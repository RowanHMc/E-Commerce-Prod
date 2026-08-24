import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogIn, Mail, Lock, Eye, EyeOff} from "lucide-react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Input field empty");
      return;
    }
    setError("");
    login({ email });

    navigate(from, { replace: true });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
            <LogIn className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-extrabold text-white uppercase tracking-wider">
            Welcome Back
          </h1>
          <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">
            Sign in
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded text-xs text-red-400 text-center font-semibold">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          {/* password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                Password
              </label>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-10 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-widest rounded transition-all shadow-lg shadow-emerald-950/40 mt-2"
          >
            Log In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-zinc-800 text-center text-xs text-zinc-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-wider ml-1 transition-colors"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
