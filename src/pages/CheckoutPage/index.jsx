 
import { useNavigate } from "react-router-dom";
import { useCart } from "../../stores/cartStore/CartContext";
import CartItem from "../../components/CartItem";

export default function CheckoutPage() {
  const { dispatch, cart, total } = useCart();

  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch({ type: "clearCart" });
  };

  function handleCheckoutClick() {
    handleClearCart();
    navigate(`/success/`);
  }

  return (
    <section>
      <h1 className="font-black text-xl">Cart:</h1>
      <div className="border-2 p-4 flex flex-col gap-2">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
        <h3 className="font-bold mt-4">Total: ${total.toFixed(2)}</h3>
        <div className="flex flex-col gap-6">
          <div>
            <button
              className="bg-orange-600 text-white font-bold uppercase p-4 rounded-xl shadow-xl hover:bg-orange-700"
              onClick={handleCheckoutClick}
            >
              checkout
            </button>
          </div>
          <div>
            <button
              className="capitalize text-gray-400 hover:text-slate-700 p-2"
              onClick={handleClearCart}
            >
              clear cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
