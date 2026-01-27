import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {

            const response = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            // Server now will send back a stream of data below line tells the browser Wait for the data to finish arriving, then translate it from JSON text into a JavaScript object.
            const data = await response.json();

            if (response.ok) {

                // now to stay logged in, we will store the token in local memory of the browser
                localStorage.setItem('token', data.token);
                navigate('/admin/dashboard');
            }
            else {
                setError(data.message || 'Invalid credentials');
            }


        }

        catch (error) {
            setError('Connection failure: Check if backend is running.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h1 className="text-2xl font-bold text-white mb-6 text-center font-mono tracking-tight">
                    SYSTEM ACCESS
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-slate-500 text-xs font-mono uppercase mb-2 ml-1">
                            Identity_ID
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white font-mono focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                            placeholder="Enter credentials..."
                            autoComplete="off"
                        />
                    </div>

                    <div>
                        <label className="block text-slate-500 text-xs font-mono uppercase mb-2 ml-1">
                            Access_Key
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white font-mono focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-lg font-mono">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold py-3 rounded-lg transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98]"
                    >
                        AUTHENTICATE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
