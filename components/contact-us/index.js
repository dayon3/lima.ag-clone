import Image from 'next/image';
import Map from './map';

export default function Contact() {
  return (
    <section className="flex items-center justify-between">
      <Map />
      <div className="bg-[#2c2d2d] w-1/2 p-8 text-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold pb-8 text-center">Get In Touch</h2>
          <div>
            <div className="flex items-center justify-between py-3">
              <Image src="/images/icons/map-pin.svg" width={32} height={32} />
              <span className="ml-4 text-xl">
                Kofisi Africa, 45 Africa Reit, Karen Road, Nairobi, Kenya
              </span>
            </div>
            <div className="flex items-center py-3">
              <Image src="/images/icons/phone.svg" width={32} height={32} />
              <span className="ml-4 text-xl">+254 712 345 678</span>
            </div>
            <div className="flex items-center py-3">
              <Image src="/images/icons/mail.svg" width={32} height={32} />
              <span className="ml-4 text-xl">info@lima.ag</span>
            </div>
          </div>
          <div className="my-3">
            <h4 className="text-center text-2xl py-3">
              Subscribe To Our Newsletter
            </h4>
            <form
              className="text-center flex flex-col lg:flex-row items-center justify-center"
              action="#"
              method="POST"
            >
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Your E-Mail Address"
                  className="py-2 px-4 bg-transparent border-2 border-gray-50 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="text-gray-900 bg-white py-2 px-4 rounded-md border-2 mt-4 lg:mt-0 lg:ml-4"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
