import Link from "next/Link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/Assets/moonShip.png"
            width="100"
            height="100"
            alt="Ship moon logo"
            className={styles.image}
          />
        </Link>
        <h1>SeaTask</h1>
      </div>
      <ul className={styles.link_itens}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre nós</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
