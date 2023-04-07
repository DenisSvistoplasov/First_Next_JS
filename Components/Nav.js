import Link from 'next/link';
import styles from '../styles/nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">main</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
}