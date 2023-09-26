/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        reactStrictMode: true,
        apiUrl: process.env.API_URL | '127.0.0.1:8000/api',
        stripeKey: process.env.STRIPE_KEY,
    },
}

module.exports = nextConfig
