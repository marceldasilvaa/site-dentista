// imagens
import sorriso from "../../images/sorriso.jpg";

const Services = () => {
  return (
    <>
      <div className="max-w-xl md:max-w-2xl m-auto mt-12 text-center">
        <h2 className="text-3xl text-(--colorTextsMain) font-semibold">
          Nossos serviços
        </h2>
        <p className="mt-4 text-gray-500 max-w-md m-auto">
          Cuidamos do seu sorriso com tratamentos completos e tecnologia
          moderna.
        </p>
        <div className="max-w-[70%] m-auto mt-8 md:flex md:max-w-2xl">
          <img
            src={sorriso}
            alt="Serviços"
            className="rounded-t-xl shadow-md object-cover object-bottom md:object-center 
               w-full h-40 
               md:w-1/2 md:h-50 md:rounded-l-xl md:rounded-r-none"
          />
          <div className="p-4 bg-white rounded-b-xl md:rounded-bl-none md:rounded-r-xl shadow-md flex flex-col justify-center">
            <h4 className="mt-2 mb-4 font-semibold text-xl md:text-left md:text-2xl text-(--colorTextsMain)">
              Clareamento Dental
            </h4>
            <p className="text-left">
              Nosso tratamento de clareamento devolve o brilho natural ao seu
              sorriso, removendo manchas e proporcionando resultados visíveis em
              poucas sessões, sem prejudicar a saúde dos dentes.
            </p>
          </div>
        </div>
        <div className="max-w-[70%] m-auto mt-8 md:flex md:max-w-2xl">
          <img
            src={sorriso}
            alt="Serviços"
            className="rounded-t-xl shadow-md object-cover object-bottom md:object-center 
               w-full h-40 
               md:w-1/2 md:h-50 md:rounded-l-xl md:rounded-r-none"
          />
          <div className="p-4 bg-white rounded-b-xl md:rounded-bl-none md:rounded-r-xl shadow-md flex flex-col justify-center">
            <h4 className="mt-2 mb-4 font-semibold text-xl md:text-left md:text-2xl text-(--colorTextsMain)">
              Implantes Dentários
            </h4>
            <p className="text-left">
              Os implantes dentários são a solução definitiva para substituir
              dentes ausentes, oferecendo conforto, segurança e uma aparência
              natural. Recuperar a mastigação e o sorriso nunca foi tão simples.
            </p>
          </div>
        </div>
        <div className="max-w-[70%] m-auto mt-8 md:flex md:max-w-2xl">
          <img
            src={sorriso}
            alt="Serviços"
            className="rounded-t-xl shadow-md object-cover object-bottom md:object-center 
               w-full h-40 
               md:w-1/2 md:h-50 md:rounded-l-xl md:rounded-r-none"
          />
          <div className="p-4 bg-white rounded-b-xl md:rounded-bl-none md:rounded-r-xl shadow-md flex flex-col justify-center">
            <h4 className="mt-2 mb-4 font-semibold text-xl md:text-left md:text-2xl text-(--colorTextsMain)">
              Ortodontia
            </h4>
            <p className="text-left">
              Com aparelhos fixos e alinhadores modernos, corrigimos o
              posicionamento dos dentes e a mordida, garantindo estética,
              funcionalidade e um sorriso mais harmônico.
            </p>
          </div>
        </div>
        <div className="max-w-[70%] m-auto mt-8 md:flex md:max-w-2xl">
          <img
            src={sorriso}
            alt="Serviços"
            className="rounded-t-xl shadow-md object-cover object-bottom md:object-center 
               w-full h-40 
               md:w-1/2 md:h-50 md:rounded-l-xl md:rounded-r-none"
          />
          <div className="p-4 bg-white rounded-b-xl md:rounded-bl-none md:rounded-r-xl shadow-md flex flex-col justify-center">
            <h4 className="mt-2 mb-4 font-semibold text-xl md:text-left md:text-2xl text-(--colorTextsMain)">
              Limpeza Profissional
            </h4>
            <p className="text-left">
              Mais do que estética, a limpeza é fundamental para prevenir
              cáries, gengivite e mau hálito. Um procedimento simples que faz
              toda a diferença na saúde bucal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
