import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.header}>
        <Link href='/' passHref>
          <h2>Dev Blog</h2>
        </Link>
        <Link href='/'>
            <button className={headerStyles.button}>Create Blog</button>
        </Link>
      </div>
    </header>
  )
}