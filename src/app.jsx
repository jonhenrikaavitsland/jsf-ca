import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/product/:productId' element={<ProductPage />} />
            <Route path='/checkout/' element={<CheckoutPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
