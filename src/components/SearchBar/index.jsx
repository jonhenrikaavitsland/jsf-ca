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

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div style={{ position: 'relative', width: '300px', margin: '0 auto' }}>
      <input type='text' placeholder='Search for products...' value={searchTerm} onChange={handleInputChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
      {filteredProducts.length > 0 && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderTop: 'none',
            listStyleType: 'none',
            padding: '0',
            margin: '0',
            zIndex: '10',
          }}
        >
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #ccc',
              }}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
