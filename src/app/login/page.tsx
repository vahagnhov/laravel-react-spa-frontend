"use client";
import {useState} from 'react';
import Link from "next/link";
import Layout from "../components/Layout";
import {redirect} from "next/navigation";

/*type ResponseType = {
    'success' : boolean,
    'data': {
        'token': string,
        'name': string,
    },
    'message': string
}*/

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hasAccessToken = localStorage.getItem('accessToken');
    console.log(hasAccessToken)
    if (hasAccessToken && hasAccessToken !== 'undefined') redirect('/')

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            if (response.ok) {
                console.log('OK');
                //const {access_token} = await response.json();
                const data = await response.json();
                const accessToken = data.data.token;

                localStorage.setItem('accessToken', accessToken);
                // Store the access token securely (e.g., in a cookie or local storage)
                // localStorage.setItem('access_token', access_token);
                console.log(accessToken);
                // console.log(localStorage.getItem('accessToken'))
                if (accessToken) redirect('/')
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
            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
                    <form className="mt-6" onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <Link
                            href="/forget"
                            className="text-xs text-blue-600 hover:underline"
                        >
                            Forget Password?
                        </Link>
                        <div className="mt-2">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-700">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>

        /*         <div className='text-3xl text-green-600 p-2'>
                            <div>
                                <h1>Login</h1>
                                <form onSubmit={handleLogin}>
                                    <div>
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit">Log In</button>
                                </form>
                            </div>
                        </div>*/
    );
}
// pages/login.js


/*
"use client";
import { useState } from 'react';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        // Implement login logic here (API request to Laravel backend)
        // If login is successful, set isAuthenticated to true
        setIsAuthenticated(true);
    };

    return (
        <Layout>
            <h1>Login Page</h1>
            {isAuthenticated ? (
                <p>Hello, User!</p>
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </Layout>
    );
};

export default LoginPage;
*/
