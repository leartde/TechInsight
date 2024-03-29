import React, { useState } from 'react';
import GoogleLogo from '../../assets/Google__G__logo.svg.png';
import GitHubLogo from '../../assets/github-mark-white.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        const enteredUsername = e.target.value;
        setUsername(enteredUsername);

        if (enteredUsername.trim() === '') {
            setUsernameError('Username cannot be empty');
        } else if (enteredUsername.length < 4 || enteredUsername.length > 16) {
            setUsernameError('Username must be 4-16 characters long');
        } else {
            setUsernameError('');
        }
    };

    const handleEmailChange = (e) => {
        const enteredEmail = e.target.value;
        setEmail(enteredEmail);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(emailRegex.test(enteredEmail) ? '' : 'Invalid email format');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            console.error('Please fill in all the required fields.');
            toast.error('Please fill in all the required fields.');
            return;
        }

        if (emailError || usernameError) {
            console.error('Invalid input. Please correct the errors.');
            toast.error('Invalid input. Please correct the errors.');
            return;
        }

        const userData = {
            Username: username,
            Email: email,
            Password: password,
            ConfirmPassword: confirmPassword,
        };

        try {
            const response = await fetch('https://localhost:7265/api/User/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('User registered successfully');
                toast.success('User registered successfully');
                navigate('/login');
            } else {
                console.error('Error during registration:', response.statusText);
                toast.error('Error during registration. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('Error during registration. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center mt-12">
           
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/3 xl:w-4/12 p-3 sm:p-6">
                    <div className="text-center">
                        <a href="/" className="w-32 mx-auto text-3xl font-bold text-black">
                            Tech<span className="text-[#009bd6]">Insight</span>
                        </a>
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
                        <div className="w-full flex-1 mt-8 text-sm">
                            <div className="flex flex-col items-center">
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                                >
                                    <div className="bg-white p-1 rounded-full">
                                        <a href="https://www.google.com">
                                            <img
                                                src={GoogleLogo}
                                                alt="Google Logo"
                                                className="w-6 h-6"
                                            />
                                        </a>
                                    </div>
                                    <span className="ml-4">Sign Up with Google</span>
                                </button>

                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                                >
                                    <div className="bg-black p-1 rounded-full">
                                        <img
                                            src={GitHubLogo}
                                            alt="GitHub Logo"
                                            className="w-6 h-6"
                                        />
                                    </div>
                                    <span className="ml-4">Sign Up with GitHub</span>
                                </button>
                            </div>

                            <div className="my-12 border-b text-center">
                                <div className="px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white">
                                    Or sign up with e-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        className={`w-full px-6 py-3 mb-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-gray-400 focus:bg-white ${
                                            usernameError ? 'border-red-500' : ''
                                        }`}
                                        type="name"
                                        placeholder="Username"
                                        value={username}
                                        onChange={handleUsernameChange}
                                    />
                                    {usernameError && (
                                        <p className="text-xs text-red-500 mt-1">{usernameError}</p>
                                    )}
                                    <input
                                        className={`w-full px-6 py-3 mb-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-gray-400 focus:bg-white ${
                                            emailError ? 'border-red-500' : ''
                                        }`}
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    {emailError && (
                                        <p className="text-xs text-red-500 mt-1">{emailError}</p>
                                    )}
                                    <input
                                        className="w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                    <input
                                        className="w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />

                                    <button
                                        type="submit"
                                        className="mt-5 tracking-wide font-semibold bg-[#009bd6] text-gray-100 w-full py-4 rounded-lg hover:bg-[#4597b8] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                    >
                                        <span className="ml-3">Sign Up</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
