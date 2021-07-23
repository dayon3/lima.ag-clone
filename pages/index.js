import Container from '../components/container';
import Hero from '../components/hero';
import About from '../components/about';
import WhyLima from '../components/why-lima';
import Reach from '../components/reach';
import Partners from '../components/partners';
import Contact from '../components/contact-us';

export default function Home() {
  return (
    <Container>
      <div className="mx-auto">
        <div className="h-screen">
          <Hero />
        </div>
        <div id="about" className="">
          <About />
        </div>
        <div id="why-lima" className="px-10">
          <WhyLima />
        </div>
        <div id="reach" style={{ height: 'fit-content' }}>
          <Reach />
        </div>
        <div id="partners" className="px-10">
          <Partners />
        </div>
        <div id="contact-us">
          <Contact />
        </div>
      </div>
    </Container>
  );
}
