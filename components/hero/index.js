export default function Hero() {
  return (
    <section className="hero md:p-12 flex justify-center">
      <div className="mx-auto text-center sm:text-left w-full sm:w-2/4 self-center">
        <h1 className="leading-normal text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-black mb-6">
          We bring precision to agriculture.
        </h1>
        <a
          href="#contact-us"
          className="inline-block leading-4 text-lg text-white text-center no-underline align-middle mt-6 py-3 px-5 cursor-pointer border-2 rounded bg-[rgba(0,0,0,.8)]"
        >
          Let's Grow Together
        </a>
      </div>
      {/* <a href="#about">
        Learn More <br />
      </a> */}
    </section>
  );
}
