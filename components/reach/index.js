export default function Reach() {
  return (
    <section className="py-[6%] px-8 bg-fixed bg-center bg-cover custom-img">
      <h2 className="text-white text-center text-5xl font-bold pb-20">
        Our Reach
      </h2>
      <div className="flex items-center text-white py-8 text-center">
        <div className="w-1/4">
          <h3 className="font-bold text-6xl">
            {/* TODO: counter */}
            <span>20</span>
          </h3>
          <h4 className="text-xl">Active Partners</h4>
        </div>
        <div className="w-1/4">
          <h3 className="font-bold text-6xl">
            <span>380 Ha</span>
          </h3>
          <h4 className="text-xl">Working On</h4>
        </div>
        <div className="w-1/4">
          <h3 className="font-bold text-6xl">
            <span>600</span>
          </h3>
          <h4 className="text-xl">Devices Being Deployed</h4>
        </div>
        <div className="w-1/4">
          <h3 className="font-black text-6xl">
            <span>2M Ha</span>
          </h3>
          <h4 className="text-xl">Market Size</h4>
        </div>
      </div>
    </section>
  );
}
