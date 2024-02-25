import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Cart from './pages/cart';
import NotFound from './pages/notFound';
import './index.css'
import Wishlist from './pages/wishlist';
import MobileBottomBar from './components/mobileBottomBar';

function App() {
  return (
    <div  className=' min-h-screen'>
    <BrowserRouter >

  
<div className='w-full py-1 text-[0.4rem] md:text-xs  bg-beigeBanner text-zinc-200 uppercase font-inter flex items-center justify-center'>
      Free shipping for all orders! Only this week!
      </div>

      <Navbar />

      <div>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products" exact element={<Shop />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/cart" exact element={<Cart />} />
      <Route path="/wishlist" exact element={<Wishlist />} />
      <Route path="*" exact element={<NotFound />} />
      </Routes>
      </div>

     <div className='block md:hidden bottom-0 fixed left-0 right-0'>
     <MobileBottomBar />
     </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
