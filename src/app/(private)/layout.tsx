export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    <p>This is the Admin Layout</p>
    {children}
  </section>
}