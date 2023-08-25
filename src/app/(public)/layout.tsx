export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    <p>This is the Public Layout</p>
    {children}
  </section>
}