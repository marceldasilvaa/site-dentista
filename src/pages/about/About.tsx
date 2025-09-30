import Carousel from "../../components/carousel/Carousel";

const About = () => {
  return (
    <>
      <div className="max-w-2xl m-auto mt-10">
        <h2 className="text-center text-3xl text-(--colorTextsMain) font-semibold">
          Quem somos?
        </h2>
        <h3 className="text-center text-xl mt-6 text-(--secondColor) font-semibold">
          Nossa história
        </h3>
        <p className="my-8 px-2">
          Nossa clínica odontológica nasceu com o propósito de transformar a
          experiência de ir ao dentista. Há mais de 10 anos atuamos em Niterói,
          oferecendo um atendimento humanizado, seguro e acolhedor.
        </p>
        <p className="my-8 px-2">
          Contamos com uma equipe de especialistas em ortodontia, estética
          dental, implantodontia e prevenção, sempre atualizados com as mais
          modernas técnicas e equipamentos.
        </p>
        <p className="my-8 px-2">
          Acreditamos que cada paciente é único, e essa filosofia nos guia desde
          o primeiro atendimento, construindo uma trajetória marcada por
          sorrisos saudáveis e confiança.
        </p>
        <Carousel />
        <h3 className="text-center text-xl mt-6 text-(--secondColor) font-semibold">
          Nossa missão
        </h3>
        <p className="my-8 px-2">
          Nosso compromisso é ajudar você a conquistar e manter um sorriso
          saudável e bonito, refletindo bem-estar e autoestima.
        </p>
        <p className="my-8 px-2">
          Nosso cuidado vai além do sorriso: buscamos oferecer conforto,
          transparência e confiança em cada atendimento. Queremos transformar
          cada visita ao dentista em uma experiência positiva e acolhedora,
          promovendo saúde bucal de forma humanizada.
        </p>
      </div>
      <div className="grid grid-cols-1 text-center w-sm max-w-[80%] m-auto md:grid-cols-3 gap-8 mt-4 md:w-4xl">
        <div className="bg-white p-3 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="text-3xl mb-2">🦷</div>
          <h3 className="text-xl font-semibold mb-4 text-black">
            Tecnologia moderna
          </h3>
          <p className="text-black">
            Equipamentos digitais para procedimentos precisos.
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="text-3xl mb-2">👩‍⚕️</div>
          <h3 className="text-xl font-semibold mb-4 text-black">
            Equipe qualificada
          </h3>
          <p className="text-black">
            Dentistas experientes e especializados em várias áreas.
          </p>
        </div>
        <div className="bg-white p-3 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="text-3xl mb-2">❤️</div>
          <h3 className="text-xl font-semibold mb-4 text-black">
            Atendimento humanizado
          </h3>
          <p className="text-black">
            Acolhimento e empatia em cada atendimento.
          </p>
        </div>
        <div className="bg-white p-3 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="text-3xl mb-2">🦷</div>
          <h3 className="text-xl font-semibold mb-4 text-black">
            Tecnologia moderna
          </h3>
          <p className="text-black">
            Equipamentos digitais para procedimentos precisos.
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="text-3xl mb-2">👩‍⚕️</div>
          <h3 className="text-xl font-semibold mb-4 text-black">
            Equipe qualificada
          </h3>
          <p className="text-black">
            Dentistas experientes e especializados em várias áreas.
          </p>
        </div>
        <div className="bg-white p-3 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="text-3xl mb-2">❤️</div>
          <h3 className="text-xl font-semibold mb-4 text-black">
            Atendimento humanizado
          </h3>
          <p className="text-black">
            Acolhimento e empatia em cada atendimento.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
