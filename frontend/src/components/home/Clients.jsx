import burnerImg from "../../assets/images/burner.png";

const Clients = () => {
  return (
    <section className="py-20">

      <h2 className="text-center text-3xl font-bold mb-10">
        Our Clients
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">

        <img src={burnerImg} className="h-10" />
        <img src={burnerImg} className="h-10" />
        <img src={burnerImg} className="h-10" />

      </div>

    </section>
  );
};

export default Clients;