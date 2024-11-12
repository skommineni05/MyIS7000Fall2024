import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import HeatMap from './heatmap';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const MarketOverview = () => {
  // Mock data for demonstration purposes
  const gainData = [100, 105, 102, 110, 115];
  const lossData = [85, 62, 47, 31, 26];
  
  const topGainers = [
    { symbol: 'NVDA', name: 'NVIDIA Corporation', data: gainData },
    { symbol: 'AMD', name: 'AMD Inc.', data: gainData },
    { symbol: 'AAPL', name: 'Apple Inc.', data: gainData },
    { symbol: 'TSLA', name: 'Tesla Inc.', data: gainData },
    { symbol: 'MSFT', name: 'Microsoft Corp.', data: gainData },
  ];

  const topLosers = [
    { symbol: 'NFLX', name: 'Netflix Inc.', data: lossData },
    { symbol: 'FB', name: 'Meta Platforms', data: lossData },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', data: lossData },
    { symbol: 'BABA', name: 'Alibaba Group', data: lossData },
    { symbol: 'ORCL', name: 'Oracle Corp.', data: lossData },
  ];

  const mostActiveStocks = [
    { symbol: 'TSLA', name: 'Tesla Inc.', data: gainData },
    { symbol: 'AAPL', name: 'Apple Inc.', data: gainData },
    { symbol: 'NFLX', name: 'Netflix Inc.', data: lossData },
    { symbol: 'AMZN', name: 'Amazon.com', data: gainData },
    { symbol: 'ORCL', name: 'Oracle Corp.', data: lossData },
  ];

  const worldMarkets = [
    { name: 'S&P 500', data: gainData },
    { name: 'NASDAQ', data: gainData },
    { name: 'Dow Jones', data: gainData },
    { name: 'Nikkei 225', data: lossData },
    { name: 'Nifty 50', data: lossData },
  ];

  // Function to generate chart data with color coding
  const generateChartData = (data, color) => ({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data,
        borderColor: color,
        backgroundColor: color === '#34D399' ? 'rgba(52, 211, 153, 0.2)' : 'rgba(239, 68, 68, 0.2)',
        fill: true,
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      {/* <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">StocksApp</h1>
        </div>
      </nav> */}

      {/* Page Header */}
      <header className="bg-blue-500 text-white py-10 text-center">
        <h2 className="text-4xl font-bold">Market Overview</h2>
        <p className="mt-4 text-lg">Insights on top gainers, top losers, active stocks, and world markets.</p>
      </header>

      {/* Market Data Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        
        {/* Top Gainers Section */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Top Gainers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {topGainers.map((stock, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-semibold text-gray-700">{stock.name} ({stock.symbol})</h4>
                <Line data={generateChartData(stock.data, '#34D399')} options={{ responsive: true, plugins: { legend: { display: false } } }} />
              </div>
            ))}
          </div>
        </section>

        {/* Top Losers Section */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Top Losers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {topLosers.map((stock, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-semibold text-gray-700">{stock.name} ({stock.symbol})</h4>
                <Line data={generateChartData(stock.data, '#EF4444')} options={{ responsive: true, plugins: { legend: { display: false } } }} />
              </div>
            ))}
          </div>
        </section>

        {/* Most Active Stocks Section */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Most Active Stocks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {mostActiveStocks.map((stock, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-semibold text-gray-700">{stock.name} ({stock.symbol})</h4>
                <Line data={generateChartData(stock.data, '#34D399')} options={{ responsive: true, plugins: { legend: { display: false } } }} />
              </div>
            ))}
          </div>
        </section>

        {/* World Market Indices Section */}
        <section className="bg-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">World Market Indices</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {worldMarkets.map((market, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-700">{market.name}</h4>
                  <Line data={generateChartData(market.data, '#34D399')} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className='heatMap'>
        <HeatMap />
      </div>
    </div>
  );
};

export default MarketOverview