import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login'); // Adjust the path to match your routing setup
      };

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle sign-up logic here
      console.log('Sign Up data:', formData);
    };
  
    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className='text-center'>
            <p>Already a member?{''} <break></break>
                <button onClick={handleLoginRedirect} className='hover:underline'>Login Here!</button>
            </p>
        </div>
          <h2 className="text-2xl mt-2 font-bold text-center text-gray-700">Sign Up</h2>
          <p className="text-center text-gray-600 mt-2 mb-6">
            Create a new account to start trading with us!
          </p>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-600 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>
  
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-600 font-semibold">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>
  
            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-600 font-semibold">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
  
            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      
    );
  };

export default Signup