import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    fullName: yup.string().required('Please enter your full name').min(3, 'Your full name should be at least 3 characters long.'),
    subject: yup.string().required('Please enter your subject').min(3, 'Your subject is too short'),
    email: yup
      .string()
      .required('Please fill in your email address')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
    yourMessage: yup.string().required('How may we assist you?').min(3, 'Please enter your message'),
  })
  .required();

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
              <input className='rounded-xl ps-2 h-8' name='full-name' placeholder='Your full name' {...register('fullName')} />
              <div className='flex flex-shrink'>
                <p className='bg-white text-red-600 font-bold px-2 uppercase'>{errors.fullName?.message}</p>
              </div>
            </div>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='subject' className='font-semibold'>
                Subject:
              </label>
              <input className='rounded-xl ps-2 h-8' name='subject' placeholder='Your subject' {...register('subject')} />
              <div className='flex flex-shrink'>
                <p className='bg-white text-red-600 font-bold px-2 uppercase'>{errors.subject?.message}</p>
              </div>
            </div>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='email' className='font-semibold'>
                Email:
              </label>
              <input className='rounded-xl ps-2 h-8' name='email' placeholder='Your email address' type='email' {...register('email')} />
              <div className='flex flex-shrink'>
                <p className='bg-white text-red-600 font-bold px-2 uppercase'>{errors.email?.message}</p>
              </div>
            </div>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='body' className='font-semibold'>
                Your message:
              </label>
              <textarea className='rounded-xl ps-2 h-28' name='body' placeholder='Your email address' {...register('yourMessage')} />
              <div className='flex flex-shrink'>
                <p className='bg-white text-red-600 font-bold px-2 uppercase'>{errors.yourMessage?.message}</p>
              </div>
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
