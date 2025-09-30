type ButtonMainProps = {
  width: number;
  marginTop?: number;
};

const ButtonMain = ({ width, marginTop }: ButtonMainProps) => {
  return (
    <>
      <a
        href="#"
        className={`p-3 mt-10 bg-(--actionColor) text-center text-white rounded-2xl shadow-sm`}
        style={{ width: `${width}%`, marginTop: `${marginTop}px` }}
      >
        Marcar consulta
      </a>
    </>
  );
};

export default ButtonMain;
