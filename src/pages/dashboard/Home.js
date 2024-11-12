import React from 'react'
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Home= () => {
  // Mock data for pie and bar charts
  const portfolioData = {
    labels: ['Tech', 'Finance', 'Healthcare', 'Energy', 'Consumer Goods'],
    datasets: [
      {
        label: 'Portfolio Allocation',
        data: [30, 20, 15, 25, 10],
        backgroundColor: ['#4A90E2', '#50E3C2', '#F5A623', '#E94E77', '#B8E986'],
      },
    ],
  };

  const sectorPerformanceData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Tech',
        data: [15, 25, 20, 30],
        backgroundColor: '#4A90E2',
      },
      {
        label: 'Finance',
        data: [10, 20, 15, 25],
        backgroundColor: '#50E3C2',
      },
      {
        label: 'Healthcare',
        data: [5, 10, 15, 10],
        backgroundColor: '#F5A623',
      },
    ],
  };

  const topStocksData = {
    labels: ['AAPL', 'TSLA', 'AMZN', 'GOOGL', 'MSFT'],
    datasets: [
      {
        label: 'Stock Prices',
        data: [150, 300, 320, 270, 250],
        backgroundColor: ['#4A90E2', '#E94E77', '#50E3C2', '#B8E986', '#F5A623'],
      },
    ],
  };


  return (
  <div className='min-h-screen'>
    {/* Hero Section */}
    <section className="bg-blue-500 text-white py-20 text-center">
    <h2 className="text-4xl font-bold">Welcome to StocksApp</h2>
    <p className="mt-4 text-xl">Track and manage your stocks and investments easily.</p>
    {/* <button
      onClick={handleSignupRedirect}
      className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
    >
      Get Started
    </button> */}
    </section>

  {/* Market Overview Section */}
  <section className="max-w-7xl mx-auto px-6 py-16 text-center">
    <h3 className="text-3xl font-semibold text-gray-800 mb-8">Market Overview</h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-bold text-gray-700">S&P 500</h4>
        <p className="text-2xl text-gray-800">$4,500.67</p>
        <p className="text-green-600 font-semibold">+0.34%</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-bold text-gray-700">NASDAQ</h4>
        <p className="text-2xl text-gray-800">$14,600.12</p>
        <p className="text-red-600 font-semibold">-0.56%</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-bold text-gray-700">Dow Jones</h4>
        <p className="text-2xl text-gray-800">$35,000.89</p>
        <p className="text-green-600 font-semibold">+0.10%</p>
      </div>
    </div>
  </section>

  {/* Featured Stocks Section */}
  <section className="bg-gray-200 py-16">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-semibold text-gray-800 mb-8">Featured Stocks</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-gray-700">Apple Inc. (AAPL)</h4>
          <p className="text-xl text-gray-800">$150.45</p>
          <p className="text-green-600 font-semibold">+2.30%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-gray-700">Tesla Inc. (TSLA)</h4>
          <p className="text-xl text-gray-800">$750.00</p>
          <p className="text-green-600 font-semibold">+3.10%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-gray-700">NVIDIA Corp. (NVDA)</h4>
          <p className="text-xl text-gray-800">$550.25</p>
          <p className="text-green-600 font-semibold">+4.50%</p>
        </div>
      </div>
    </div>
  </section>

  {/* Portfolio Stocks Section */}
  <section className="bg-gray-200 py-16">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-semibold text-gray-800 mb-8">Sector Performances</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Portfolio Distribution</h3>
        <Pie data={portfolioData} options={{ responsive: true }} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Quarterly Performance</h3>
        <Bar data={sectorPerformanceData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Stock Prices</h3>
        <Bar data={topStocksData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>
      </div>
    </div>
  </section>
  </div>
  );
}

export default Home