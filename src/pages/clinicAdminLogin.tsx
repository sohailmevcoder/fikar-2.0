import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

export default function ClinicAdminLogin() {
    const [activeTab, setActiveTab] = useState('password');
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [identifierError, setIdentifierError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();


    // Validate email or phone
    const isValidEmail = (value: string) =>
        /^[^\s@]+@gmail\.com$/.test(value); // Only allow @gmail.com

    const isValidPhone = (value: string) =>
        /^[0-9]{10}$/.test(value);

    // Allow only 10 digits for phone input, no special chars except '@' for email
    const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        // If input looks like a phone (all digits, no '@'), restrict to 10 digits
        if (!val.includes('@')) {
            val = val.replace(/[^0-9]/g, '').slice(0, 10);
        } else {
            // For email, allow all chars but not spaces
            val = val.replace(/\s/g, '');
        }
        setIdentifier(val);
        setIdentifierError('');
        setPasswordError('');
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIdentifierError('');
        setPasswordError('');
        if (!isValidEmail(identifier) && !isValidPhone(identifier)) {
            setIdentifierError('Please enter a valid @gmail.com email or 10-digit phone number.');
            return;
        }
        if (activeTab === 'password') {
            if (password === '12345') {
                navigate('/admin-dashboard');
            } else {
                setPasswordError('Wrong password');
            }
        } else if (activeTab === 'otp') {
            // For OTP, you can add your OTP validation logic here
            if (otp === '123456') {   
                navigate('/admin-dashboard');
            } else {
                setPasswordError('');
                setError('Invalid OTP');
            }
            
        }   
    };

    return (
        // Admin Login
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
            <h3 className="text-center text-lg font-semibold text-slate-700 mb-4">Admin Access</h3>
            <p className="text-sm text-center text-gray-500 mb-6">Choose how you want to access your account</p>

                <div className="flex border rounded-xl overflow-hidden mb-6">
                    <button
                        onClick={() => { setActiveTab('password'); setIdentifierError(''); setPasswordError(''); }}
                        className={`flex-1 py-2 text-sm font-medium ${activeTab === 'password' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-600'}`}
                    >
                        Password
                    </button>
                    <button
                        onClick={() => { setActiveTab('otp'); setIdentifierError(''); setPasswordError(''); }}
                        className={`flex-1 py-2 text-sm font-medium ${activeTab === 'otp' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-600'}`}
                    >
                        OTP Login
                    </button>
                </div>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email or Phone Number</label>
                        <input
                            type="text"
                            value={identifier}
                            onChange={handleIdentifierChange}
                            placeholder="Enter email or phone"
                            required
                            className={`mt-1 w-full px-4 py-2 border ${identifierError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
                        />
                        {identifierError && (
                            <p className="text-red-500 text-xs mt-1">{identifierError}</p>
                        )}
                    </div>

                    {activeTab === 'password' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }}
                                placeholder="********"
                                required
                                className={`mt-1 w-full px-4 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
                            />
                            {passwordError && (
                                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                            )}
                            <div className="text-right mt-1">
                                <a href="#" className="text-sm text-blue-600">Forgot Password?</a>
                            </div>
                        </div>
                    )}

                    {activeTab === 'otp' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">OTP</label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter OTP"
                                required
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-center mt-4 text-sm text-gray-600">
                    Don't have an account? <a href="admin-signup" className="text-blue-600 font-medium">Create Account</a>
                </div>

                <div className="text-center text-xs text-gray-500 mt-6">
                    Need help? Contact <a href="mailto:support@fikarplus.com" className="text-blue-600">support@fikarplus.com</a>
                </div>
            </div>
    );
}
