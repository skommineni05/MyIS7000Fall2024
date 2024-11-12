import React from 'react'

const Profile = () => {
  const user = {
    name: "John Doe",
    username: "@john_doe",
    bio: "Investor | Tech Enthusiast | Coffee Lover",
    portfolioValue: "$50,000",
    stocks: [
      { ticker: "AAPL", name: "Apple Inc.", shares: 10, price: "$135" },
      { ticker: "TSLA", name: "Tesla Inc.", shares: 5, price: "$720" },
      { ticker: "AMZN", name: "Amazon.com Inc.", shares: 2, price: "$3,150" },
      { ticker: "GOOGL", name: "Alphabet Inc.", shares: 4, price: "$2,500" }
    ]
  };

  return (
    <div className='mt-2'>
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        {/* <img
          src={user.profilePicture}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        /> */}
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.username}</p>
          <p className="text-gray-700 mt-2">{user.bio}</p>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Portfolio Value</h3>
        <p className="text-2xl font-bold text-green-600">{user.portfolioValue}</p>
      </div>

      {/* Stocks List */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Stocks</h3>
        <div className="space-y-4">
          {user.stocks.map((stock, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <div>
                <p className="font-semibold">{stock.ticker}</p>
                <p className="text-sm text-gray-600">{stock.name}</p>
              </div>
              <div>
                <p className="text-gray-700">Shares: {stock.shares}</p>
                <p className="text-gray-900 font-semibold">{stock.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile