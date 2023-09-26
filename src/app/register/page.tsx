"use client";
import {useState} from 'react';
import Link from "next/link";
import Layout from "../components/Layout";
import {redirect} from "next/navigation";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hasAccessToken = localStorage.getItem('accessToken');
    console.log(hasAccessToken)
    if (hasAccessToken && hasAccessToken !== 'undefined') redirect('/')

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            if (response.ok) {
                console.log('OK');
                const {access_token} = await response.json();

                // Store the access token securely (e.g., in a cookie or local storage)
                localStorage.setItem('access_token', access_token);

                // console.log(localStorage.getItem('access_token'))

                // Redirect to a protected route or dashboard
                // You can use Next.js router for navigation
                // import { useRouter } from 'next/router';
                // const router = useRouter();
                // router.push('/dashboard');
            } else {
                // Handle login error, display an error message, etc.
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <Layout>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-2xl font-semibold text-center text-gray-700">
                        Create an account
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                type="name"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <p className="text-xs text-gray-800 font-bold">
                            Password must be at least 8 characters long
                        </p>
                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600">
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-2 text-xs text-center text-gray-700">
                        {" "}
                        Already a member?{" "}
                        <a href="#" className="font-medium text-gray-600 hover:underline">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
}
// pages/register.js
/*"use client";
import Layout from '../components/Layout';
import RegistrationForm from '../components/RegistrationForm';

const RegisterPage = () => {
    const handleRegistration = (formData) => {
        // Implement registration logic here (API request to Laravel backend)
        console.log(formData);
    };

    return (
        <Layout>
            <h1>Registration Page</h1>
            <RegistrationForm onRegister={handleRegistration} />
        </Layout>
    );
};

export default RegisterPage;*/
