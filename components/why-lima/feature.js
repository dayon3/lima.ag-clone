import Image from 'next/image';

export default function Feature({ src, title, description }) {
  return (
    <div className="w-1/2 max-w-lg flex flex-col items-center p-10">
      <div className="bg-gray-100 rounded-full w-32 h-32 flex justify-center items-center mb-5 shadow-xl">
        <Image src={src} width={70} height={70} />
      </div>
      <h4 className="font-bold text-2xl pb-6">{title}</h4>
      <p className="text-lg">{description}</p>
    </div>
  );
}
