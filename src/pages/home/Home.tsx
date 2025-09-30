// hooks
import { useState, useEffect } from "react";

// paginas
import Hero from "../../components/hero/Hero";

// imagens
import sorriso from "../../images/sorriso.jpg";

const Home = () => {
  const [current, setCurrent] = useState(0);

  const total = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [total]);

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <>
      <Hero />
      <div className="max-w-2xl m-auto">
        <h2 className="text-center text-3xl text-(--colorTextsMain) font-semibold">
          Quem somos?
        </h2>
        <p className="my-8 text-center px-2">
          Somos uma clínica odontológica em Niterói, especializada em
          ortodontia, estética e implantes. Há mais de 10 anos cuidamos de
          sorrisos com atendimento humanizado, seguro e de alta qualidade.
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
      </div>
      <div className="max-w-[50%] text-center m-auto mt-10 md:max-w-[20%]">
        <a
          href="/about"
          className="block px-2 py-3 md:p-2 bg-(--actionColor) text-white font-medium text-xl rounded-xl shadow-md hover:bg-(--actionColorHover) transition durantion"
        >
          Saiba mais
        </a>
      </div>
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
              Implantes Dentários
            </h4>
            <p className="text-left">
              Restaure sua mastigação e autoestima com dentes fixos e naturais.
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
              Restaure sua mastigação e autoestima com dentes fixos e naturais.
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
              Restaure sua mastigação e autoestima com dentes fixos e naturais.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[50%] text-center m-auto mt-10 md:max-w-[20%]">
        <a
          href="/services"
          className="block px-2 py-3 md:p-2 bg-(--actionColor) text-white font-medium text-xl rounded-xl shadow-md hover:bg-(--actionColorHover) transition durantion"
        >
          Ver todos serviços
        </a>
      </div>
      <section className="reviews-carousel max-w-2xl mx-auto mt-15 px-4 md:px-0 text-center space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          ⭐⭐⭐⭐⭐ 4,9/5
        </h2>
        <p className="text-gray-700 text-xl">
          Baseado em 212 avaliações no <br />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="google-logo inline-block h-15"
          />
        </p>
        <div className="carousel relative overflow-hidden">
          <div
            className={`review-card bg-white rounded-xl shadow p-4 transition-opacity duration-500 ${
              current === 0 ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <p className="italic md:text-xl">“Atendimento excelente.”</p>
            <span className="md:text-md text-gray-600 block mt-2">
              – Pedro R. (21/08/2024)
            </span>
          </div>
          <div
            className={`review-card bg-white rounded-xl shadow p-4 transition-opacity duration-500 ${
              current === 1 ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <p className="italic md:text-xl">
              “Ambiente agradável e acolhedor.”
            </p>
            <span className="md:text-md text-gray-600 block mt-2">
              – Larissa F. (10/08/2024)
            </span>
          </div>
          <div
            className={`review-card bg-white rounded-xl shadow p-4 transition-opacity duration-500 ${
              current === 2 ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <p className="italic md:text-xl">“Equipe muito profissional.”</p>
            <span className="md:text-md text-gray-600 block mt-2">
              – Marcos T. (02/08/2024)
            </span>
          </div>
        </div>
        <a
          href="/servicos"
          className="block m-auto max-w-[60%] md:max-w-sm px-2 py-3 md:p-2 bg-(--actionColor) text-white font-medium text-xl rounded-xl shadow-md hover:bg-(--actionColorHover) transition durantion"
        >
          Ver todas no google
        </a>
        <div className="controls flex justify-center gap-4 mt-4">
          <button
            onClick={prevReview}
            className="prev text-2xl bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            ❮
          </button>
          <button
            onClick={nextReview}
            className="next text-2xl bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            ❯
          </button>
        </div>
      </section>

      <div className="w-full m-auto mt-14 md:max-w-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5199.306524406595!2d-43.23392686395377!3d-22.859278566305267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1758151941224!5m2!1sen!2sbr"
          loading="lazy"
          className="rounded-xl shadow-md w-full h-80 md:h-100"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
