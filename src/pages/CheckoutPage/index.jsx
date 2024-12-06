import { useReducer } from 'react';
import { reducer, initialState } from '../../stores/cartStore';

export default function CheckoutPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.cart);

  return (
    <section>
      <h1 className='font-black text-xl'>Cart:</h1>
      <div className='border-2 p-4 flex flex-col gap-2'>
        {state.cart.map((item) => {
          console.log(item);
          return (
            <div key={item.id} className='xsm:flex gap-2'>
              <div className='aspect-square w-20 h-20'>
                <img src={item.image.url} alt={item.image.alt} className='w-20 h-20' />
              </div>
              <section className='flex flex-col'>
                <h2>Item: {item.title}</h2>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.discountedPrice}</span>
              </section>
            </div>
          );
        })}
        <h3 className='font-bold mt-4'>Total: ${state.total}</h3>
        <div className='flex flex-col gap-6'>
          <div>
            <button className='bg-orange-600 text-white font-bold uppercase p-4 rounded-xl shadow-xl hover:bg-orange-700'>checkout</button>
          </div>
          <div>
            <button className='capitalize text-gray-400 hover:text-slate-700 p-2'>clear cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
