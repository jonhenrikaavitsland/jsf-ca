import { Link } from 'react-router-dom';

export default function CheckoutSuccessPage() {
  return (
    <section>
      <h1>Success!</h1>
      <p>Your order was successfully completed.</p>
      <Link to='/'>Go back to the Store</Link>
    </section>
  );
}
