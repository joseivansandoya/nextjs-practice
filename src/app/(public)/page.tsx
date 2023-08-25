import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div>Home</div>
      <div>
        <Link href="/people">People</Link>
      </div>
      <div>
        <Link href="/planets">Planets</Link>
      </div>
    </main>
  )
}
