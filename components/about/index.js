import Image from 'next/image';

import limaTriWhite from '../../public/images/lima-tri-white.png';

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center lg:flex-row lg:justify-between w-full bg-[#2c2d2d] py-[6%] px-8"
    >
      <div className="w-full pb-10 lg:pb-0 lg:w-2/5 flex justify-center">
        <Image src={limaTriWhite} width={380} height={360} placeholder="blur" />
      </div>
      <div className="w-full lg:w-3/5 text-white lg:pl-5 p-2 text-center lg:text-left">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl pb-10">
          We automate human sight.
        </h2>
        <p className="text-lg pb-5">
          Lima wants to empower farms and the teams that nurture them with data
          driven decision making.
        </p>
        <p className="text-lg pb-5">
          At Lima, we use machine vision to help farmers monitor their crops in
          a whole new way. Our technology seamlessly automates the data
          collection process which is used to unlock a farm's full potential.
          Data that we make easy to access, understand and act on.
        </p>
        <p className="text-lg pb-5">
          As a company, Lima is championing a remote-first, distributed team
          culture with a focus on individual and collective growth. We pride
          ourselves in our inclusive, diverse and safe environment where
          exceptional talent can work, learn & thrive.
        </p>
      </div>
    </section>
  );
}
