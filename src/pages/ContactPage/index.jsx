import { useState } from 'react';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  function onFullNameChange(event) {
    setFullName(event.target.value);
  }

  function onSubjectChange(event) {
    setSubject(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onBodyChange(event) {
    setBody(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    const message = {
      fullName,
      subject,
      email,
      body,
    };

    console.log(message);
  }

  return (
    <div className='flex justify-center'>
      <fieldset className='border-2 border-black border-dotted w-11/12 sm:w-2/3 p-4 rounded-xl'>
        <legend className='bg-black text-white p-4 font-bold rounded-full'>Contact Us:</legend>
        <form className='flex flex-col gap-8' onSubmit={onFormSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='full-name' className='font-semibold'>
                Full Name::
              </label>
              <input className='rounded-xl ps-2 h-8' name='full-name' value={fullName} placeholder='Your full name' onChange={onFullNameChange} />
            </div>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='subject' className='font-semibold'>
                Subject:
              </label>
              <input className='rounded-xl ps-2 h-8' name='subject' value={subject} placeholder='Your subject' onChange={onSubjectChange} />
            </div>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='email' className='font-semibold'>
                Email:
              </label>
              <input className='rounded-xl ps-2 h-8' name='email' value={email} placeholder='Your email address' onChange={onEmailChange} />
            </div>
            <div className='flex flex-col gap-1 p-2 bg-slate-300 rounded-xl'>
              <label htmlFor='body' className='font-semibold'>
                Your message:
              </label>
              <textarea className='rounded-xl ps-2 h-28' name='body' value={body} placeholder='Your email address' onChange={onBodyChange} />
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
