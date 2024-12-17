import { Link } from "react-router-dom";

export default function CheckoutSuccessPage() {
  return (
    <section className="flex flex-col gap-2 items-center">
      <h1 className="font-bold text-6xl uppercase">Success!</h1>
      <p>Your order was successfully completed.</p>
      <Link to="/" className="text-slate-800 font-semibold">
        🔙 Go back to the Store
      </Link>
    </section>
  );
}
