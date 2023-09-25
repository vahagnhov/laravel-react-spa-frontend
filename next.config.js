/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.API_URL | '127.0.0.1:8000/api',
        stripeKey: process.env.STRIPE_KEY,
    },
}

module.exports = nextConfig
