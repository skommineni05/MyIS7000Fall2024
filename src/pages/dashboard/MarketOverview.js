import React from 'react'

const MarketOverview = () => {
  const marketData = {
    indices: [
      { name: "S&P 500", value: "4,500.67", change: "+0.34%" },
      { name: "Dow Jones", value: "35,000.89", change: "-0.23%" },
      { name: "NASDAQ", value: "14,600.12", change: "+1.12%" }
    ],
    topGainers: [
      { ticker: "AAPL", name: "Apple Inc.", price: "$150.45", change: "+2.30%" },
      { ticker: "TSLA", name: "Tesla Inc.", price: "$750.00", change: "+3.10%" },
      { ticker: "NVDA", name: "NVIDIA Corp.", price: "$550.25", change: "+4.50%" }
    ],
    topLosers: [
      { ticker: "AMZN", name: "Amazon.com Inc.", price: "$3,100.00", change: "-1.20%" },
      { ticker: "FB", name: "Meta Platforms", price: "$320.50", change: "-2.10%" },
      { ticker: "NFLX", name: "Netflix Inc.", price: "$450.75", change: "-1.50%" }
    ]
  };

  return (
    <div className='mt-2'>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Market Overview</h2>

      {/* Indices */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Indices</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {marketData.indices.map((index) => (
            <div key={index.name} className="p-4 bg-gray-50 rounded-lg shadow-sm text-center">
              <p className="text-gray-800 font-semibold">{index.name}</p>
              <p className="text-2xl font-bold">{index.value}</p>
              <p className={`font-semibold ${index.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {index.change}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Gainers */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Top Gainers</h3>
        <div className="space-y-3 mt-4">
          {marketData.topGainers.map((stock) => (
            <div key={stock.ticker} className="flex justify-between items-center p-4 bg-green-50 rounded-lg shadow-sm">
              <div>
                <p className="font-semibold text-gray-800">{stock.ticker}</p>
                <p className="text-sm text-gray-600">{stock.name}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{stock.price}</p>
                <p className="text-green-600 font-semibold">{stock.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Losers */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Top Losers</h3>
        <div className="space-y-3 mt-4">
          {marketData.topLosers.map((stock) => (
            <div key={stock.ticker} className="flex justify-between items-center p-4 bg-red-50 rounded-lg shadow-sm">
              <div>
                <p className="font-semibold text-gray-800">{stock.ticker}</p>
                <p className="text-sm text-gray-600">{stock.name}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{stock.price}</p>
                <p className="text-red-600 font-semibold">{stock.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MarketOverview