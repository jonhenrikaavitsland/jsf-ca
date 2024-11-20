import { useEffect } from 'react';
import { useStore } from '../../../data/store';
import ProductCard from '../../ProductCard';
import SearchBar from '../../SearchBar';

export default function Home() {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log('Store:', products);

  return (
    <>
      <SearchBar products={products} />
      <div className='flex flex-wrap gap-6 justify-center'>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
