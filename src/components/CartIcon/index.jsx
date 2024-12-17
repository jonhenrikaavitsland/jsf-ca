import { useNavigate } from "react-router-dom";
import { useCart } from "../../stores/cartStore/CartContext";

export default function CartIcon() {
  const { cart } = useCart();
  const cartLength = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = useNavigate();

  function handleIconClick() {
    navigate(`/checkout/`);
  }

  return (
    <div className="relative m-3 p-3">
      <button onClick={handleIconClick}>
        <img
          src="/cart-shopping-fast-solid.svg"
          alt="cart"
          className="h-8 w-8"
        />
        {cartLength > 0 && (
          <span className="absolute top-0 right-0 h-5 w-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">
            {cartLength}
          </span>
        )}
      </button>
    </div>
  );
}
