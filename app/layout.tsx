import "../styles/globals.css";

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default Layout;
