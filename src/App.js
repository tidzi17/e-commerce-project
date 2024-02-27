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
import Footer from './components/footer';
import ProductPage from './pages/productPage';
import Article from './pages/article'

function App() {
  return (
    <div  className='px-5'>
    <BrowserRouter >
      <Navbar />

      <div className='pt-20'>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products" element={<Navigate to="/products/all" replace />} />
      <Route path="/products/:category" element={<Shop />} />
      <Route path="/products/:cathegory/:id" element={<ProductPage />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/blog/:id" exact element={<Article />} />
      <Route path="/cart" exact element={<Cart />} />
      <Route path="/wishlist" exact element={<Wishlist />} />
      <Route path="*" exact element={<NotFound />} />
      </Routes>
      </div>

      <Footer />
     <div className='block md:hidden bottom-0 fixed left-0 right-0'>
     <MobileBottomBar />
     </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
