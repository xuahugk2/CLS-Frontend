'use client';
import { useForm } from 'react-hook-form';
// Custom components/libs

interface ContactFormDataType {
  name: string;
  email: string;
  phoneNumber: string;
  projectDetails: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-xl font-medium leading-relaxed font-in"
    >
      Hello! my ame is{' '}
      <input
        type="text"
        placeholder="your name"
        {...register('name', { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
        focus:border-gray bg-transparent"
      />
      and I want to discuss a potential project. You can email me at{' '}
      <input
        type="email"
        placeholder="your@email"
        {...register('email', { required: true })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
        focus:border-gray bg-transparent"
      />
      or reach out to me on{' '}
      <input
        type="tel"
        placeholder="your phone number"
        {...register('phoneNumber', { required: true })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
        focus:border-gray bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea
        {...register('projectDetails', {})}
        placeholder="My project is about..."
        rows={5}
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray
        focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value={'Send Request'}
        className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-dark rounded cursor-pointer"
      />
    </form>
  );
}
