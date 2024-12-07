import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product/:productId' element={<ProductPage />} />
          <Route path='/checkout/' element={<CheckoutPage />} />
          <Route path='/success/' element={<SuccessPage />} />
        </Route>
      </Routes>
    </div>
  );
}
