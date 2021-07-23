export default function Hero() {
  return (
    <section className="hero md:p-12 flex justify-center">
      <div className="mx-auto w-1/3 self-center">
        <h1 className="leading-tight text-7xl text-white font-black">
          We bring precision to agriculture.
        </h1>
        <a
          href="#contact-us"
          className="inline-block leading-4 text-lg text-white text-center no-underline align-middle mt-6 py-3 px-5 cursor-pointer border-2 rounded bg-[rgba(0,0,0,.8)]"
        >
          Let's Grow Together
        </a>
      </div>
      <a href="#about">
        Learn More <br />
      </a>
    </section>
  );
}
