import Image from 'next/image';

import kairos from '../../public/images/partners/kairos-society.png';
import climateKIC from '../../public/images/partners/climate-kic.png';
import kenyaCIC from '../../public/images/partners/kenya-cic.png';
import thinkIt from '../../public/images/partners/think-it.png';

export default function Partners() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center py-[2%] lg:px-8 mx-auto">
      <div className="lg:w-1/2 p-4 lg:pr-20 text-center md:text-left">
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold pb-8">
          Our Partners
        </h2>
        <p className="text-lg text-gray-700">
          We work with a dedicated team of established partners, advisors and
          global heavy weights to bring the best services to you.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex lg:flex-wrap">
        <div className="w-1/2 flex justify-center">
          <Image src={kairos} width={150} height={150} alt="Kairos Society" />
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src={climateKIC} width={150} height={150} alt="Climate KIC" />
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            src={kenyaCIC}
            width={150}
            height={150}
            alt="Kenya Climate Innovation Center"
          />
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src={thinkIt} width={150} height={150} alt="Think it" />
        </div>
      </div>
    </section>
  );
}
