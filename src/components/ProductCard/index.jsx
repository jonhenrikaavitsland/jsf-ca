/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  function handleProductClick(productId) {
    navigate(`/product/${productId}`);
  }

  return (
    <div
      className="p-2 bg-slate-200 w-60 rounded-lg shadow-lg shadow-slate-400 cursor-pointer hover:bg-slate-300"
      onClick={() => handleProductClick(product.id)}
    >
      <div className="aspect-square bg-gray-300">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <section className="flex flex-col gap-4 p-3 text-center h-36 justify-between">
        <h2 className="font-bold">{product.title}</h2>
        <button className="p-3 bg-orange-400 rounded-xl font-semibold hover:bg-orange-700 hover:text-white">
          View Product
        </button>
      </section>
    </div>
  );
}
