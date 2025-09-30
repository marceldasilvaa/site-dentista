const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-200 mt-10 px-6 py-8">
        <div className="grid gap-8 px-2 md:grid-cols-4">
          <div>
            <a href="#" className="font-[cursive] text-2xl text-white my-2">
              Logo
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Cuidando do seu sorriso desde XXXX
            </p>
            <p className="text-sm mt-2">CNPJ: 00.000.000/0001-00</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3 font-(family-name:--titles)">Contato</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">Tel:</span>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-(--friendColor)"
                >
                  {" "}
                  (21) 99999-9999
                </a>
              </li>
              <li>
                <span className="font-semibold">WhatsApp:</span>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-(--friendColor)"
                >
                  {" "}
                  (21) 99999-9999
                </a>
              </li>
              <li>
                <span className="font-semibold">E-mail:</span>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-(--friendColor)"
                >
                  {" "}
                  contato@clinicadentista.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Endereço:</span>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-(--friendColor)"
                >
                  {" "}
                  Rua das Flores, 123 - Niterói/RJ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3 font-(family-name:--titles)">Horário</h2>
            <ul className="space-y-1 text-sm text-gray-200">
              <li>Seg - Sex: 08h - 18h</li>
              <li>Sáb: 08h - 13h</li>
              <li>Dom: Fechado</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3 font-(family-name:--titles)">Horário</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Agende sua consulta</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-6 text-sm text-gray-400 md:flex-row">
          <p>@ 2025 Clínica Sorriso Maroto. Todos os direitos reservados.</p>
          <div className="mt-3 flex gap-4 md:mt-0">
            <a href="#" target="_blank" className="hover:text-(--friendColor)">
              Instagram
            </a>
            <a href="#" target="_blank" className="hover:text-(--friendColor)">
              Facebook
            </a>
            <a href="#" target="_blank" className="hover:text-(--friendColor)">
              TikTok
            </a>
          </div>
          <p className="mt-3 md:mt-0">CRO-RJ 123456</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
