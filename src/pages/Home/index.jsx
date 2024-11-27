import { useEffect, useState } from 'react';
import ProductCard from '../../ProductCard';
import SearchBar from '../../SearchBar';

function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url]);
  return { data, isLoading, isError };
}

export default function Home() {
  const { data, isLoading, isError } = useApi('https://v2.api.noroff.dev/online-shop');

  if (isLoading) {
    return <div className='flex justify-center'>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className='flex flex-col gap-4'>
      <SearchBar products={data.data} />
      <div className='flex flex-wrap gap-6 justify-center'>
        {data.data?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
