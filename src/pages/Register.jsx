import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contex/AuthContext";

export function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();

   const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !password.trim()) {
            setError('All fields are required.');
            return;
        } 
        setError('');
        // Log in the user immediately upon registration
        login({ name, email });
        navigate('/products');
    };

    return(
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-zinc-950">
            <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-xl shadow-2xl">
                
                {/* Header */}
                <h1 className="text-3xl font-extrabold text-white uppercase tracking-wider text-center mb-1">
                    CREATE ACCOUNT
                </h1>
                <p className="text-xs text-zinc-400 text-center uppercase tracking-widest mb-8">
                    Register to start shopping
                </p>
                {error && (
                    <div className="mb-6 p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs font-semibold rounded">
                        {error}
                    </div>
                )}
                {/* form  */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                    </div>
                   
                   <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                        </div>

                        <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-zinc-800 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest rounded border border-zinc-700 hover:border-emerald-500 transition-all duration-200 mt-2"
                    >
                        Register Account
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-zinc-800 text-center text-xs text-zinc-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-white font-bold uppercase hover:text-emerald-400 underline ml-1">
                        Log In
                    </Link>
                </div>
                    </div>
                    </div>
    );
};
export default Register;