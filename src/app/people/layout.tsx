export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    <p>This is the People Layout</p>
    {children}
  </section>
}