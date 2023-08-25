export default function Person({ params }: { params: { slug: string } }) {
  return <div>Person: {params.slug}</div>
}

export async function generateStaticParams() {
  const people = ['luke-skywalker', 'leia-organa', 'han-solo']

  return people.map((slug) => ({ slug }))
}

export const dynamicParams = false;
