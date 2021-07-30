import Feature from './feature';

export default function WhyLima() {
  return (
    <section className="py-[6%] px-4 lg:px-8">
      <h2 className="text-black text-center text-5xl font-bold pb-10">
        Why Lima?
      </h2>
      <div className="w-full flex flex-wrap justify-center">
        <Feature
          src="/images/icons/agritech.svg"
          title="Green Challenges"
          description="We focus on problems worth solving to prevent climate change and help
          companies do their bit to reach the global SDGs."
        />
        <Feature
          src="/images/icons/machine-vision.svg"
          title="AI & Machine Vision"
          description="Sight is one of the most versatile and sensitive human senses. We automate it with state of the art hardware and machine learning to collect useful data sets for our customers."
        />
        <Feature
          src="/images/icons/data-analytics.svg"
          title="Easy To Use Analytics"
          description="Most of our customers are not data scientists, and we don't want to change that. So we develop easy to use tools so everyone can understand the data and value being generated."
        />
        <Feature
          src="/images/icons/saving-money.svg"
          title="Value Driven Data"
          description="Data is everywhere, and some data sets are more valuable than others. We only generate and process the data that creates value for our customers by listening to you."
        />
      </div>
    </section>
  );
}
