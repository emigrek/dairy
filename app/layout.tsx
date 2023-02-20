import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <html>
      <head/>
      <body className="container max-w-3xl mx-auto">
        <Navbar/>
        { children }
        <Footer/>
      </body>
    </html>
  )
}

export default Layout;
