import { useEffect } from 'react';
import { useStore } from '../../../data/store';
import ProductCard from '../../ProductCard';

export default function Home() {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log('Store:', products);

  return (
    <div className='flex flex-wrap gap-6 justify-center'>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
