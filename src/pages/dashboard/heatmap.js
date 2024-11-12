import React from 'react';

const stocksData = [
    { name: 'AAPL', priceChange: 1.2 },
    { name: 'GOOGL', priceChange: -0.8 },
    { name: 'AMZN', priceChange: 3.1 },
    { name: 'MSFT', priceChange: -2.5 },
    { name: 'TSLA', priceChange: 5.0 },
    { name: 'NVDA', priceChange: -1.3 },
    { name: 'NFLX', priceChange: 4.2 },
    { name: 'META', priceChange: -3.0 },
    { name: 'DIS', priceChange: 0.5 },
    { name: 'INTC', priceChange: -0.2 },
    { name: 'CSCO', priceChange: 1.8 },
    { name: 'WMT', priceChange: -1.5 },
    { name: 'PYPL', priceChange: 2.4 },
    { name: 'SQ', priceChange: -2.0 },
    { name: 'NVDA', priceChange: 2.8 },
    { name: 'ZM', priceChange: -1.1 },
    { name: 'ADBE', priceChange: 4.6 },
    { name: 'TSM', priceChange: -0.3 },
    { name: 'BABA', priceChange: 6.3 },
    { name: 'UBER', priceChange: -2.1 },
    { name: 'BA', priceChange: 0.2 },
    { name: 'V', priceChange: -0.5 },
    { name: 'MA', priceChange: 3.8 },
    { name: 'IBM', priceChange: -1.0 },
    { name: 'CRM', priceChange: 2.0 },
    { name: 'SPOT', priceChange: -3.5 },
    { name: 'GS', priceChange: 0.9 },
    { name: 'AMAT', priceChange: -0.4 },
    { name: 'LMT', priceChange: 5.2 },
    { name: 'VZ', priceChange: -2.3 },
];

// Function to calculate background color based on price change
const getBackgroundColor = (priceChange) => {
  if (priceChange > 0) {
    // Shades of green for positive change
    return `rgba(34, 197, 94, ${Math.min(priceChange / 10, 1)})`;
  } else {
    // Shades of red for negative change
    return `rgba(239, 68, 68, ${Math.min(Math.abs(priceChange) / 10, 1)})`;
  }
};

const HeatMap = () => {
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
        <h2 className="text-4xl font-bold">Market Heat Map</h2>
        <p className="mt-4 text-lg">Visual representation of stock performance</p>
      </header>

      {/* Heat Map Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {stocksData.map((stock, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105"
            style={{ backgroundColor: getBackgroundColor(stock.priceChange) }}
          >
            <h3 className="text-lg font-semibold text-gray-800">{stock.name}</h3>
            <p className="text-gray-700">
              {stock.priceChange > 0 ? '+' : ''}
              {stock.priceChange}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatMap;