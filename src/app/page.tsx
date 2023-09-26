/*
"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SubscriptionForm from "./pages/SubscriptionForm";

const stripePromise = loadStripe(process.env.stripeKey);

function App() {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SubscriptionForm />
            </Elements>
        </div>
    );
}

export default App;*/
// pages/index.js
/*import Layout from './components/Layout';

const HomePage = () => {
    return (
        <Layout>
            <h1>Welcome to My Next.js App</h1>
            {/!* Add your content here *!/}
        </Layout>
    );
};

export default HomePage;*/
/*
"use client";
import { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState(null);

   /!* useEffect(() => {
        // Define your API endpoint
        const apiUrl = 'http://your-backend-server-url/api/data'; // Replace with your API endpoint

        // Make a GET request to the API
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                // Handle the API data
                setData(result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);*!/

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-500 p-4 text-white">
                <nav className="container mx-auto flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold">Your Logo</a>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:text-gray-300">Home</a></li>
                        <li><a href="/login" className="hover:text-gray-300">Login</a></li>
                        <li><a href="/register" className="hover:text-gray-300">Register</a></li>
                        {/!* Add other navigation items *!/}
                    </ul>
                </nav>
            </header>

            <main className="container mx-auto my-8 p-4 bg-white rounded shadow-lg">
                <h1 className="text-3xl font-bold">Welcome to Your Website</h1>
                {data ? (
                    <div>
                        <p>Data from the API:</p>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </main>

            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    &copy; {new Date().getFullYear()} Your Company
                </div>
            </footer>
        </div>
    );
};

export default Home;*/

"use client";
import Layout from './components/Layout';

const Home = () => {
    return (
        <Layout>
            <main className="container mx-auto my-8 p-4 bg-white rounded shadow-lg">
                <h1 className="text-3xl font-bold">Welcome to Your Website</h1>
                {/* Add your page content here */}
            </main>
        </Layout>
    );
};

export default Home;
