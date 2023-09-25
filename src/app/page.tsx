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

export default App;