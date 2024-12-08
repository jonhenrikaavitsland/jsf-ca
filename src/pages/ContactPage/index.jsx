import { useForm } from 'react-hook-form';

export default function ContactPage() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className='flex justify-center'>
      <fieldset className='border-2 border-black border-dotted w-11/12 sm:w-2/3 p-4 rounded-xl'>
        <legend className='bg-black text-white p-4 font-bold rounded-full'>
          <h1>Contact Us:</h1>
        </legend>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='full-name' className='font-semibold'>
                Full Name::
              </label>
              <input className='rounded-xl ps-2 h-8' name='full-name' placeholder='Your full name' {...register('fullName', { required: true, minLength: 3 })} />
            </div>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='subject' className='font-semibold'>
                Subject:
              </label>
              <input className='rounded-xl ps-2 h-8' name='subject' placeholder='Your subject' {...register('subject', { required: true, minLength: 3 })} />
            </div>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='email' className='font-semibold'>
                Email:
              </label>
              <input className='rounded-xl ps-2 h-8' name='email' placeholder='Your email address' type='email' {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
            </div>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='body' className='font-semibold'>
                Your message:
              </label>
              <textarea className='rounded-xl ps-2 h-28' name='body' placeholder='Your email address' {...register('body', { required: true, minLength: 3 })} />
            </div>
          </div>
          <div>
            <input type='submit' className='bg-orange-600 text-white p-4 font-bold uppercase rounded-xl hover:bg-orange-700 shadow-xl' />
          </div>
        </form>
      </fieldset>
    </div>
  );
}
