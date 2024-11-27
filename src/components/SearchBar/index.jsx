import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    // Clear matches if the input is empty
    if (input.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    // Filter products based on the input
    const matches = products.filter((product) => product.title.toLowerCase().includes(input.toLowerCase()));
    setFilteredProducts(matches);
  };

  function handleProductClick(productId) {
    navigate(`/product/${productId}`);
  }

  return (
    <div className='relative w-2/3 mx-auto'>
      <input className='w-full p-2 rounded-xl border-4 border-slate-400' type='text' placeholder='Search for products...' value={searchTerm} onChange={handleInputChange} />
      {filteredProducts.length > 0 && (
        <ul className='absolute top-full inset-x-0 bg-white border-[1px] z-10 p-0 m-0'>
          {filteredProducts.map((product) => (
            <li className='p-2.5 cursor-pointer border-b-[1px] border-slate-400 flex gap-3 items-end hover:bg-slate-200' key={product.id} onClick={() => handleProductClick(product.id)}>
              <img src={product.image.url} alt={product.image.alt} className='size-20 object-cover' />
              <span>{product.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
