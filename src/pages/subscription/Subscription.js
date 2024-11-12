import React from 'react'
import { useNavigate } from 'react-router-dom';

const Subscription= () => {
  // const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    // Here you can add logic to handle plan subscription
    console.log(`Subscribed to ${plan} plan.`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      {/* <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">StocksApp</h1>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <h2 className="text-4xl font-bold">Choose Your Subscription Plan</h2>
        <p className="mt-4 text-xl">Get access to premium features and start trading like a pro!</p>
      </section>

      {/* Subscription Plans Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Pricing Plans</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-2xl font-semibold text-gray-800 text-center">Basic Plan</h4>
            <p className="text-center text-gray-600 mt-2">Ideal for beginners.</p>
            <div className="text-center mt-4">
              <p className="text-3xl font-bold text-gray-800">$19.99 / month</p>
              <p className="text-sm text-gray-500 mt-2">Access to basic stock tracking features</p>
            </div>
            <button
              onClick={() => handleSubscribe('Basic')}
              className="w-full py-2 mt-6 text-white bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Subscribe Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-2xl font-semibold text-gray-800 text-center">Premium Plan</h4>
            <p className="text-center text-gray-600 mt-2">For advanced traders.</p>
            <div className="text-center mt-4">
              <p className="text-3xl font-bold text-gray-800">$49.99 / month</p>
              <p className="text-sm text-gray-500 mt-2">Advanced analytics and real-time market data</p>
            </div>
            <button
              onClick={() => handleSubscribe('Premium')}
              className="w-full py-2 mt-6 text-white bg-yellow-500 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Subscribe Now
            </button>
          </div>

          {/* Ultimate Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-2xl font-semibold text-gray-800 text-center">Ultimate Plan</h4>
            <p className="text-center text-gray-600 mt-2">For professionals and investors.</p>
            <div className="text-center mt-4">
              <p className="text-3xl font-bold text-gray-800">$99.99 / month</p>
              <p className="text-sm text-gray-500 mt-2">Access to all premium features and exclusive content</p>
            </div>
            <button
              onClick={() => handleSubscribe('Ultimate')}
              className="w-full py-2 mt-6 text-white bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Subscription