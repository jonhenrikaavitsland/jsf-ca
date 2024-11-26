import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/pages/Home';
import ProductPage from './components/pages/ProductPage';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/product/:productId' element={<ProductPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
