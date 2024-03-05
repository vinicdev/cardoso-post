import Link from "next/link";
import { useState } from "react";
import style from "@/styles/navBar.module.scss";
import { ImMenu } from "react-icons/im";
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

export default function Header() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <header className={style.nav}>
      <Link href="/" passHref className={style.nav__logo}>
        <p className={style.nav__title}>
          cardoso<strong>post</strong>
        </p>
      </Link>

      <nav
        className={active ? style.nav__menuActive : style.nav__containetLink}
      >
        <div
          className={
            active ? style.nav__containetLinkHamburg : style.nav__container
          }
        >
          <Link href="/">
            <p className={style.nav__link} onClick={() => setActive(false)}>
              Home
            </p>
          </Link>
          <hr className={active ? style.nav__line : style.disabled} />
          <Link href="/about">
            <p className={style.nav__link} onClick={() => setActive(false)}>
              Sobre
            </p>
          </Link>
          <hr className={active ? style.nav__line : style.disabled} />
        </div>

        <div className={active ? style.nav__linkSocial : style.disabled}>
          <ul>
            <li>
              <Link href="https://www.linkedin.com/in/vinicdev/">
                <FaInstagram />
              </Link>
            </li>

            <li>
              <Link href="https://github.com/vinicdev">
                <FaGithub />
              </Link>
            </li>

            <li>
              <Link href="https://api.whatsapp.com/send?phone=5541998304073">
                <FaWhatsapp />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <button className={style.menu} onClick={toggleMenu}>
        <ImMenu />
      </button>
    </header>
  );
}
