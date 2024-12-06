export default function CartIcon({ cartLength }) {
  return (
    <div className='relative p-3'>
      <button>
        <img src='/cart-shopping-fast-solid.svg' alt='cart' className='h-8 w-8' />
        {cartLength > 0 && <span className='absolute top-0 right-0 h-5 w-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center'>{cartLength}</span>}
      </button>
    </div>
  );
}
