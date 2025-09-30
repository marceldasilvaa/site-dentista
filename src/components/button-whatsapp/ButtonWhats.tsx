type ButtonWhatsProps = {
  width: number;
  marginTop?: number;
};

const ButtonWhats = ({ width, marginTop }: ButtonWhatsProps) => {
  return (
    <>
      <a
        href="#"
        className={`p-3 mt-10 bg-green-500 text-center text-white rounded-2xl shadow-sm`}
        style={{ width: `${width}%`, marginTop: `${marginTop}px` }}
      >
        WhatsApp
      </a>
    </>
  );
};

export default ButtonWhats;
