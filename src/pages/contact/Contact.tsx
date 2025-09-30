const Contact = () => {
  return (
    <>
      <section className="m-auto max-w-2xl px-4 py-20 md:py-30">
        <h1 className="mb-6 text-center text-3xl font-semibold">
          Entre em Contato
        </h1>
        <p className="m-auto max-w-md text-center text-gray-600">
          Tire suas dúvidas ou agende uma consulta rapidamente pelos canais
          abaixo:
        </p>
        <div className="my-8 flex flex-col justify-around text-white flex-wrap gap-4 text-center">
          <a
            href="#"
            target="_blank"
            className="w-full m-auto block rounded-xl bg-green-500 px-6 py-3 shadow-md hover:bg-green-600 md:text-xl md:w-sm"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#"
            target="_blank"
            className="w-full m-auto block rounded-xl bg-blue-500 px-6 py-3 shadow-md hover:bg-blue-600 md:text-xl md:w-sm"
          >
            Enviar E-mail
          </a>
        </div>
        <div className="mt-10">
          <h2 className="text-center text-3xl font-semibold">
            Localização
          </h2>
        </div>
        <div className="mt-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5199.306524406595!2d-43.23392686395377!3d-22.859278566305267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1758151941224!5m2!1sen!2sbr"
            loading="lazy"
            className="rounded-xl shadow-md w-full h-80 md:h-100"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
