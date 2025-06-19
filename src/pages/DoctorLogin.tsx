import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

export default function DoctorLogin() {
    const [activeTab, setActiveTab] = useState<'password' | 'otp'>('password');
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [identifierError, setIdentifierError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [resendTimer, setResendTimer] = useState(0);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const navigate = useNavigate();

    const isValidEmail = (value: string) => /^[^\s@]+@gmail\.com$/.test(value);
    const isValidPhone = (value: string) => /^[0-9]{10}$/.test(value);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (resendTimer > 0) {
            interval = setInterval(() => {
                setResendTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [resendTimer]);

    useEffect(() => {
        if (showToast) {
            const timeout = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timeout);
        }
    }, [showToast]);

    const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        if (activeTab === 'password') {
            val = val.replace(/\s/g, '');
        } else {
            val = val.replace(/[^0-9]/g, '').slice(0, 10);
        }

        setIdentifier(val);
        setIdentifierError('');
        setPasswordError('');
        setError('');
    };

    const handleSendOtp = () => {
        if (!isValidPhone(identifier)) {
            setIdentifierError('Please enter a valid 10-digit phone number.');
            return;
        }
        setOtpSent(true);
        setResendTimer(30);
        setToastMessage(`OTP sent to +91${identifier} (for testing use 123456)`);
        setShowToast(true);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIdentifierError('');
        setPasswordError('');
        setError('');

        if (activeTab === 'password') {
            if (!isValidEmail(identifier)) {
                setIdentifierError('Please enter a valid @gmail.com email.');
                return;
            }
            if (password === '12345') {
                navigate('/doctor-dashboard');
            } else {
                setPasswordError('Incorrect password.');
            }
        } else {
            if (!isValidPhone(identifier)) {
                setIdentifierError('Please enter a valid 10-digit phone number.');
                return;
            }
            if (otp === '123456') {
                navigate('/doctor-dashboard');
            } else {
                setError('Invalid OTP.');
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 relative">
            {/* OTP Toast */}
            {showToast && (
                <div className="absolute bottom-4 right-4 bg-blue-50 text-blue-900 text-sm p-4 rounded-md shadow-lg border border-blue-200 max-w-xs w-full">
                    <p className="font-semibold">OTP Sent</p>
                    <p>{toastMessage}</p>
                </div>
            )}

            <div className="w-full max-w-md bg-white p-8 shadow-xl rounded-xl">
                <div className="flex justify-center mb-6">
                    <img src="/fikar-logo.svg" alt="Fikar Plus Logo" className="h-20" />
                </div>

                <h3 className="text-center text-lg font-semibold text-slate-700 mb-4">Doctor Access</h3>
                <p className="text-sm text-center text-gray-500 mb-6">Choose how you want to access your account</p>

                <div className="flex border rounded-xl overflow-hidden mb-6">
                    <button
                        onClick={() => {
                            setActiveTab('password');
                            setIdentifier('');
                            setPassword('');
                            setOtp('');
                            setOtpSent(false);
                            setResendTimer(0);
                            setIdentifierError('');
                            setPasswordError('');
                            setError('');
                        }}
                        className={`flex-1 py-2 text-sm font-medium ${activeTab === 'password' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-600'}`}
                    >
                        Email Login
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab('otp');
                            setIdentifier('');
                            setPassword('');
                            setOtp('');
                            setOtpSent(false);
                            setResendTimer(0);
                            setIdentifierError('');
                            setPasswordError('');
                            setError('');
                        }}
                        className={`flex-1 py-2 text-sm font-medium ${activeTab === 'otp' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-600'}`}
                    >
                        OTP Login
                    </button>
                </div>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            {activeTab === 'password' ? 'Email Address' : 'Phone Number'}
                        </label>

                        <div className="mt-1 flex">
                            {activeTab === 'otp' && (
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700 text-sm">
                                    +91
                                </span>
                            )}
                            <input
                                type="text"
                                value={identifier}
                                onChange={handleIdentifierChange}
                                placeholder={activeTab === 'password' ? 'Enter @gmail.com email' : 'Enter 10-digit phone number'}
                                required
                                className={`w-full px-4 py-2 border ${identifierError ? 'border-red-500' : 'border-gray-300'} ${activeTab === 'otp' ? 'rounded-r-md' : 'rounded-md'} focus:outline-none focus:ring focus:ring-blue-200`}
                            />
                        </div>

                        {identifierError && <p className="text-red-500 text-xs mt-1">{identifierError}</p>}
                    </div>

                    {activeTab === 'password' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError('');
                                }}
                                placeholder="********"
                                required
                                className={`mt-1 w-full px-4 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
                            />
                            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                            <div className="text-right mt-1">
                                <a href="#" className="text-sm text-blue-600">Forgot Password?</a>
                            </div>
                        </div>
                    )}

                    {activeTab === 'otp' && (
                        <>
                            {!otpSent ? (
                                <button
                                    type="button"
                                    onClick={handleSendOtp}
                                    className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
                                >
                                    Send OTP
                                </button>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Verification Code</label>
                                        <input
                                            type="text"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            placeholder="Enter 6-digit OTP"
                                            required
                                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                        />
                                        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                                    </div>
                                    <div className="text-right text-xs text-gray-600 flex justify-end items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm1-15v5.414l3.293 3.293-1.414 1.414L11 13.414V7h2z" />
                                        </svg>
                                        {resendTimer > 0 ? (
                                            <span>Resend in {resendTimer}s</span>
                                        ) : (
                                            <button type="button" onClick={handleSendOtp} className="text-blue-600 font-medium">
                                                Resend OTP
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </>
                    )}

                    {((activeTab === 'password') || (activeTab === 'otp' && otpSent)) && (
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
                        >
                            Verify & Login
                        </button>
                    )}
                </form>

                <div className="text-center mt-4 text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/doctor-signup" className="text-blue-600 font-medium">Create Account</a>
                </div>

                <div className="text-center text-xs text-gray-500 mt-6">
                    Need help? Contact <a href="mailto:support@fikarplus.com" className="text-blue-600">support@fikarplus.com</a>
                </div>

                <div className="text-center text-[11px] text-gray-400 mt-4">© 2025 Fikar Plus. All rights reserved.</div>
            </div>
        </div>
    );
}
