import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Link href={{
          pathname: '/[username]',
          query: {username: 'mustafa123'},
        }}>
        <a>Mustafa's Profile</a>
        </Link>
    </div>
  );
}
