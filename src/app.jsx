import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
