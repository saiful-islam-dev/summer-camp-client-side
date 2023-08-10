import faq from "../../../assets/FAQ.jpg";

const Faq = () => {
  return (
    <div className="pt-6">
      <h1 className="text-center font-bold text-2xl lg:text-4xl italic">
        Frequently Asked Question
      </h1>
      <div className="py-8">
        <div className="card lg:card-side bg-base-100">
          <img className="lg:w-1/2" src={faq} alt="Album" />
          <div className="card-body text-start">
            <h2 className="card-title">
              Why is learning through toys important for kids?
            </h2>
            <p>
              Learning through toys is important because it offers an
              interactive and engaging way for children to explore and
              understand the world around them. Toys can promote various
              developmental skills, such as fine motor skills, problem-solving
              abilities, creativity, language development, social skills, and
              more.
            </p>
            <h2 className="card-title">
              How can toys enhance a child cognitive development?
            </h2>
            <p>
              Toys can enhance cognitive development by promoting critical
              thinking, problem-solving, and logical reasoning. They can also
              improve memory, concentration, and spatial awareness. Educational
              toys often require children to use their minds actively,
              encouraging cognitive growth.
            </p>
            <h2 className="card-title">
              Can toys help develop social skills in children?
            </h2>
            <p>
              Yes, certain toys can help develop social skills in children. Toys
              that encourage cooperative play, such as board games or pretend
              play sets, can teach kids about taking turns, sharing, teamwork,
              and communication. They can also help children develop empathy and
              understanding of others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
