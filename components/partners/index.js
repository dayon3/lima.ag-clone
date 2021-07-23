import Image from 'next/image';

import kairos from '../../public/images/partners/kairos-society.png';
import climateKIC from '../../public/images/partners/climate-kic.png';
import kenyaCIC from '../../public/images/partners/kenya-cic.png';
import thinkIt from '../../public/images/partners/think-it.png';

export default function Partners() {
  return (
    <section className="flex justify-between items-center py-[2%] px-8 mx-auto">
      <div className="w-1/2 p-4 pr-20">
        <h2 className="text-black text-5xl font-bold pb-8">Our Reach</h2>
        <p className="text-xl">
          We work with a dedicated team of established partners, advisors and
          global heavy weights to bring the best services to you.
        </p>
      </div>
      <div className="w-1/2 flex flex-wrap">
        <div className="w-1/2">
          <Image src={kairos} width={200} height={200} alt="Kairos Society" />
        </div>
        <div className="w-1/2">
          <Image src={climateKIC} width={200} height={200} />
        </div>
        <div className="w-1/2">
          <Image src={kenyaCIC} width={200} height={200} />
        </div>
        <div className="w-1/2">
          <Image src={thinkIt} width={200} height={200} />
        </div>
      </div>
    </section>
  );
}
