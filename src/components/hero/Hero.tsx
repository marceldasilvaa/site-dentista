// imagem
import clinicaOdontologica from "../../images/clinica-odontologica.jpg";

// botoes
import ButtonWhats from "../button-whatsapp/ButtonWhats";
import ButtonMain from "../button/ButtonMain";

const Hero = () => {
  return (
    <>
      <div className="md:flex flex-col items-center p-6 bg-(--colorBackground) text-center">
        <section className="flex flex-col items-center md:grid md:grid-cols-[2fr_3fr] md:items-start md:gap-4 md:py-20 max-w-6xl">
          <div className="flex flex-col md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold font-(family-name:--titles) text-(--colorTextsMain)">
              Bem vindo a Clínica Sorriso Maroto
            </h1>
            <p className="text-sm italic mt-2 text-gray-500 md:text-md">
              Cuidando do seu sorriso com tecnologia e carinho.
            </p>
            <div className="hidden md:flex flex-row gap-6">
              <ButtonWhats width={40} />
              <ButtonMain width={40} />
            </div>
          </div>
          <img
            src={clinicaOdontologica}
            alt="Clínica Sorriso Maroto"
            className="w-xl m-auto rounded-2xl mt-8 object-cover h-80 shadow-sm md:mt-0 md:h-110"
          />
          <div className="md:hidden flex flex-col w-md items-center">
            <ButtonWhats width={70} />
            <ButtonMain width={70} marginTop={20} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
