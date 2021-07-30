import Image from 'next/image';

export default function Feature({ src, title, description }) {
  return (
    <div className="md:w-1/2 max-w-lg flex flex-col items-center p-2 md:p-5 mb-5">
      <div className="bg-gray-100 rounded-full w-32 h-32 flex justify-center items-center mb-5 shadow-xl">
        <Image src={src} width={70} height={70} />
      </div>
      <h4 className="font-medium text-gray-900 text-2xl pb-6 text-center">
        {title}
      </h4>
      <p className="text-lg text-gray-700 text-center md:text-left">
        {description}
      </p>
    </div>
  );
}
