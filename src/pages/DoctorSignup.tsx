import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  age: yup.number().required('Age is required').positive().integer(),
  email: yup.string().email().required('Email is required'),
  phone: yup.string().matches(/^(\+91)?[6-9]\d{9}$/, 'Enter valid phone number').required(),
  otp: yup.string().length(6, 'OTP must be 6 digits'),
  accessCode: yup.string().required('Access Code required'),
  password: yup.string().min(6).required(),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password required'),
  acceptTerms: yup.bool().oneOf([true], 'Please accept Terms & Policy')
});

export default function ClinicAdminSignup() {
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [otpInputActive, setOtpInputActive] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    const sendOtp = () => {
        setOtpSent(true);
        setOtpVerified(false);
        alert('OTP sent to phone (mocked)');
    };

    const verifyOtp = () => {
        setOtpVerified(true);
    };

    // Prevent special characters or letters in age input
    const handleAgeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            [8, 9, 13, 27, 46, 37, 38, 39, 40].includes(e.keyCode) ||
            ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase()))
        ) {
            return;
        }
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value !== '') {
            const num = Math.min(Number(value), 100);
            e.target.value = num.toString();
        }
    };

    // Prevent special characters or letters in phone input
    const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            [8, 9, 13, 27, 46, 37, 38, 39, 40].includes(e.keyCode) ||
            ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase()))
        ) {
            return;
        }
        // Block if not a number
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
        // Prevent entering more than 10 digits
        const input = e.currentTarget;
        if (
            /^[0-9]$/.test(e.key) &&
            input.value.replace(/\D/g, '').length >= 10 &&
            input.selectionStart === input.selectionEnd // only block if not replacing selection
        ) {
            e.preventDefault();
        }
    };

    // Only allow numbers and max 10 digits in phone input
    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
    };

    // Only allow numbers and max 6 digits in OTP input
    const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            [8, 9, 13, 27, 46, 37, 38, 39, 40].includes(e.keyCode) ||
            ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase()))
        ) {
            return;
        }
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
        const input = e.currentTarget;
        if (
            /^[0-9]$/.test(e.key) &&
            input.value.replace(/\D/g, '').length >= 6 &&
            input.selectionStart === input.selectionEnd
        ) {
            e.preventDefault();
        }
    };

    const handleOtpInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length > 6) {
            value = value.slice(0, 6);
        }
        e.target.value = value;
    };

    // Only allow alphabets and spaces in name input
    const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            [8, 9, 13, 27, 46, 32, 37, 38, 39, 40].includes(e.keyCode) || // allow backspace, tab, enter, escape, delete, arrows, space
            ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase()))
        ) {
            return;
        }
        if (!/^[a-zA-Z]$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
        e.target.value = value;
    };

    // Reset OTP input color on focus and reset Send OTP/Verify button color
    const handleOtpFocus = () => {
        setOtpInputActive(true);
        setOtpSent(false);
        setOtpVerified(false);
    };
    const handleOtpBlur = () => {
        setOtpInputActive(false);
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-white to-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
                <h2 className="text-center text-lg font-semibold text-gray-800 mb-1">
                    Create Doctor Account
                </h2>
                <p className="text-center text-sm text-gray-500 mb-4">
                    Fill in the details below to get started
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

                    <Input
                        name="name"
                        placeholder="Full Name"
                        register={register}
                        error={errors.name?.message}
                        onKeyDown={handleNameKeyDown}
                        onInput={handleNameInput}
                    />
                    <div>
                        <input
                            {...register('age')}
                            type="text"
                            placeholder="Age"
                            maxLength={3}
                            onInput={handleAgeInput}
                            onKeyDown={handleAgeKeyDown}
                            className={`w-full rounded-md border ${errors.age ? 'border-red-500' : 'border-gray-300'} bg-blue-50 px-3 py-2 text-sm focus:outline-none`}
                            inputMode="numeric"
                            pattern="[0-9]*"
                        />
                        {errors.age && <p className="text-xs text-red-500 mt-1">{errors.age.message}</p>}
                    </div>
                    <Input name="email" placeholder="youremail@example.com" register={register} error={errors.email?.message} />
                    <div>
                        <input
                            {...register('phone')}
                            type="text"
                            placeholder="9XXXXXXXXX"
                            maxLength={10}
                            onKeyDown={handlePhoneKeyDown}
                            onInput={handlePhoneInput}
                            className={`w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} bg-blue-50 px-3 py-2 text-sm focus:outline-none`}
                            inputMode="tel"
                            pattern="^[0-9]{10}$"
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                    </div>

                    <div className="flex space-x-2">
                        <input
                            {...register('otp')}
                            type="text"
                            placeholder="6-digit OTP"
                            maxLength={6}
                            onKeyDown={handleOtpKeyDown}
                            onInput={handleOtpInput}
                            onFocus={handleOtpFocus}
                            onBlur={handleOtpBlur}
                            className={`flex-1 rounded-md border ${
                                otpInputActive
                                    ? 'border-gray-300'
                                    : errors.otp
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                            } bg-blue-50 px-3 py-2 text-sm focus:outline-none`}
                            inputMode="numeric"
                            pattern="[0-9]{6}"
                        />
                        <button
                            type="button"
                            onClick={sendOtp}
                            className={`text-sm px-3 py-2 border rounded-md 
                                ${otpSent ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-50 text-gray-600 border-gray-300'}
                                hover:bg-blue-700 hover:text-white hover:border-blue-700
                                transition-colors duration-150`}
                        >
                            Send OTP
                        </button>
                        <button
                            type="button"
                            onClick={verifyOtp}
                            className={`text-sm px-3 py-2 border rounded-md 
                                ${otpVerified ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-50 text-gray-600 border-gray-300'}
                                hover:bg-blue-700 hover:text-white hover:border-blue-700
                                transition-colors duration-150`}
                        >
                            Verify
                        </button>
                    </div>
                    {errors.otp && <p className="text-xs text-red-500 mt-1">{errors.otp.message}</p>}

                    <Input name="accessCode" placeholder="Enter clinic access code" register={register} error={errors.accessCode?.message} />
                    <Input name="password" placeholder="Password" type="password" register={register} error={errors.password?.message} />
                    <Input name="confirmPassword" placeholder="Confirm Password" type="password" register={register} error={errors.confirmPassword?.message} />

                    <div className="flex items-start space-x-2 text-xs text-gray-600">
                        <input type="checkbox" {...register('acceptTerms')} className="mt-1" />
                        <label>
                            I accept the <a className="text-blue-600 underline" href="#">Terms of Service</a> and <a className="text-blue-600 underline" href="#">Privacy Policy</a>
                        </label>
                    </div>
                    {errors.acceptTerms && <p className="text-xs text-red-500 mt-1">{errors.acceptTerms.message}</p>}

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium">
                         Create Account
                    </button>

                    <p className="text-center text-sm text-gray-700">
                        Already have an account? <a href="doctor-login" className="text-blue-700 font-medium">Sign In</a>
                    </p>

                    <p className="text-center text-xs text-gray-400 mt-2">
                        Need help? Contact <a href="mailto:support@fikarplus.com" className="text-blue-600">support@fikarplus.com</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

// Modified Input to accept onKeyDown and onInput for name field
function Input({ name, placeholder, type = "text", register, error, onKeyDown, onInput }: any) {
    return (
        <div>
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className={`w-full rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} bg-blue-50 px-3 py-2 text-sm focus:outline-none`}
                onKeyDown={onKeyDown}
                onInput={onInput}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
}
