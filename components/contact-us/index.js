import Contact from './contact';
import Map from './map';

export default function Index() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between">
      <Map />
      <Contact />
    </section>
  );
}
