/* eslint-disable react/prop-types */
export default function CartItem({ item }) {
  return (
    <div className="xsm:flex gap-2">
      <div className="aspect-square w-20 h-20">
        <img src={item.image.url} alt={item.image.alt} className="w-20 h-20" />
      </div>
      <section className="flex flex-col">
        <h2>Item: {item.title}</h2>
        <span>Quantity: {item.quantity}</span>
        <span>Price: ${item.discountedPrice}</span>
      </section>
    </div>
  );
}
