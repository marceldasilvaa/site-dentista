import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

const styles = {
  links:
    "block font-bold text-center py-2 hover:bg-(--friendColor) md:w-[100px] text-white md:rounded-md uppercase md:text-sm",
  nav: "flex flex-row items-center px-4 py-2 md:py-0 justify-between md:max-w-[1200px] m-auto",
  active: "bg-(--friendColor)",
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => window.location.pathname === path;

  return (
    <nav className="bg-gray-900">
      <div className={styles.nav}>
        <a href="#" className="font-[cursive] text-2xl my-2 text-white">
          Logo
        </a>
        <ul className="hidden md:flex w-auto justify-around gap-2 my-4">
          <li>
            <a
              href="/"
              className={`${styles.links} ${
                isActive("/") ? styles.active : ""
              }`}
            >
              ínicio
            </a>
          </li>
          <li>
            <a
              href="/sobre"
              className={`${styles.links} ${
                isActive("/sobre") ? styles.active : ""
              }`}
            >
              Sobre nós
            </a>
          </li>
          <li>
            <a
              href="/servicos"
              className={`${styles.links} ${
                isActive("/servicos") ? styles.active : ""
              }`}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="/contato"
              className={`${styles.links} ${
                isActive("/contato") ? styles.active : ""
              }`}
            >
              Contato
            </a>
          </li>
        </ul>
        <div className="cursor-pointer md:hidden">
          {isMenuOpen ? (
            <RiCloseLargeFill
              size={25}
              onClick={toggleMenu}
              className="text-white"
            />
          ) : (
            <GiHamburgerMenu
              size={25}
              onClick={toggleMenu}
              className="text-white"
            />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <ul className="flex w-auto flex-col justify-around gap-2 my-4 md:hidden">
          <li>
            <a
              href="/"
              className={`${styles.links} ${
                isActive("/") ? styles.active : ""
              }`}
            >
              ínicio
            </a>
          </li>
          <li>
            <a
              href="/sobre"
              className={`${styles.links} ${
                isActive("/sobre") ? styles.active : ""
              }`}
            >
              Sobre nós
            </a>
          </li>
          <li>
            <a
              href="/servicos"
              className={`${styles.links} ${
                isActive("/servicos") ? styles.active : ""
              }`}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="/contato"
              className={`${styles.links} ${
                isActive("/contato") ? styles.active : ""
              }`}
            >
              Contato
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
