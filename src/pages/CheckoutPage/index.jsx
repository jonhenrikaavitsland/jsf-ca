import { useCartStore } from '../../stores/cartStore';

export default function CheckoutPage() {
  const { cart, emptyCart } = useCartStore();

  console.log(cart);
  console.log(emptyCart);

  return <div>cart</div>;
}
