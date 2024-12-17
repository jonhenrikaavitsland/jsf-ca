import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../stores/cartStore/CartContext";
import ReviewCard from "../../components/ReviewCard";

export default function ProductPage() {
  const { dispatch } = useCart();
  const addToCart = () => {
    dispatch({ type: "addProduct", payload: data.data });
  };

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { productId } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://v2.api.noroff.dev/online-shop/${productId}`);
  }, [productId]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 row-y-8 md:flex-row md:w-2/3 lg:w-1/2 mx-auto">
        <div className="flex justify-center">
          <div className="max-w-96">
            <img src={data.data.image.url} alt={data.data.image.alt} />
          </div>
        </div>
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl">{data.data.title}</h1>
            <p className="text-lg">{data.data.description}</p>
          </div>
          <div>
            {data.data.discountedPrice < data.data.price && (
              <span className="line-through text-red-600 font-semibold">
                ${data.data.price}
              </span>
            )}
            <div className="font-bold text-2xl">
              <span>${data.data.discountedPrice}</span>
              {data.data.discountedPrice < data.data.price && (
                <span className="bg-red-600 text-white font-bold px-2 ml-2 rounded-xl">{`-${((1 - data.data.discountedPrice / data.data.price) * 100).toFixed(0)}%`}</span>
              )}
            </div>
          </div>
          <div>
            <button
              className="p-6 bg-orange-600 rounded-xl text-white font-black text-3xl hover:bg-orange-700"
              onClick={addToCart}
            >
              BUY NOW
            </button>
          </div>
        </section>
      </div>
      <div>
        <section className="md:w-2/3 lg:w-1/2 mx-auto flex flex-col gap-4">
          <h2 className="font-bold text-xl">Customer Feedback:</h2>
          <div className="flex flex-col gap-8">
            {data.data.reviews?.map((review) => (
              <ReviewCard review={review} key={review.id}>
                test
              </ReviewCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
