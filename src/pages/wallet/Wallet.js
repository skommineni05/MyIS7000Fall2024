import React from 'react'

const Locations = () => {
  const wallet = {
    balance: "$10,000",
    transactions: [
      { id: 1, type: "Deposit", amount: "$1,000", date: "2024-10-01" },
      { id: 2, type: "Withdrawal", amount: "$500", date: "2024-10-05" },
      { id: 3, type: "Deposit", amount: "$2,000", date: "2024-10-10" },
      { id: 4, type: "Stock Purchase", amount: "$1,200", date: "2024-10-15" }
    ]
  };

  return (
    <div className='mt-2'>
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Wallet Balance */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Wallet Balance</h2>
        <p className="text-3xl font-semibold text-green-600 mt-2">{wallet.balance}</p>
      </div>

      {/* Recent Transactions */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700">Recent Transactions</h3>
        <ul className="mt-4 space-y-3">
          {wallet.transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <div>
                <p className="font-semibold text-gray-800">{transaction.type}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <p className={`font-semibold ${transaction.type === "Deposit" ? "text-green-600" : "text-red-600"}`}>
                {transaction.amount}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Deposit & Withdraw Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="w-full py-2 text-white bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Deposit
        </button>
        <button className="w-full py-2 text-white bg-red-500 rounded-lg font-semibold hover:bg-red-600 transition-colors">
          Withdraw
        </button>
      </div>
    </div>
    </div>
  );
};

export default Locations