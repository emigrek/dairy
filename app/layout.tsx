import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <html>
      <head/>
      <body className="container max-w-3xl mx-auto">
        <Header/>
        { children }
        <Footer/>
      </body>
    </html>
  )
}

export default Layout;
