import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/">Hjem</Link>
        </li>
        <li>
          <Link href="/collection">Liste</Link>
        </li>
        <li>
          <Link href="/collection/create">Ny liste</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation