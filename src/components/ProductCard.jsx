export default function ProductCard({ product }) {
  return (
    <div className='p-2 bg-slate-200 w-40'>
      <div className='aspect-square bg-gray-300'>
        <img src={product.image.url} alt={product.image.alt} className='w-full h-full object-cover' />
      </div>
      <section className='flex flex-col gap-4 p-3 text-center h-36 justify-between'>
        <h2 className='font-bold'>{product.title}</h2>
        <button className='p-3 bg-orange-400 rounded-xl font-semibold hover:bg-orange-700 hover:text-white'>SEE MORE</button>
      </section>
    </div>
  );
}
