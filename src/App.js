import Navbar from './header/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/dashboard/Home';
import Contact from './pages/Contact';
import MarketOverview from './pages/dashboard/MarketOverview';
import Subscription from './pages/subscription/Subscription';
import Wallet from './pages/wallet/Wallet';
import User from './pages/user/User';
import Profile from './pages/profile/Profile';
import Signup from './pages/user/signup';
import Login from './pages/user/Login';
import Footer from './header/footer';

function App() {
  return (
    <div className="App	  w-full h-screen" >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/markets' element={<MarketOverview />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/user' element={<User />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
