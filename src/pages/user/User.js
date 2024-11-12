import React from 'react'

const About = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    accountType: "Premium",
    joinedDate: "January 1, 2023",
    description: "Passionate about investing in tech and energy sectors. Always on the lookout for the next big opportunity!"
  };

  return (
    <div className='mt-2'>
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* User Header */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-blue-500 text-white p-3 rounded-full">
          <span className="text-2xl font-bold">{user.name.charAt(0)}</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Account Details */}
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
          <span className="text-gray-600 font-semibold">Account Type</span>
          <span className="text-blue-600 font-bold">{user.accountType}</span>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
          <span className="text-gray-600 font-semibold">Joined Date</span>
          <span className="text-gray-700">{user.joinedDate}</span>
        </div>
      </div>

      {/* User Description */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">About</h3>
        <p className="text-gray-700 mt-2">{user.description}</p>
      </div>
    </div>
    </div>
  );
};

export default About