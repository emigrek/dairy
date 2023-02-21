import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Roboto } from '@next/font/google';

interface Props {
  children: React.ReactNode
}

const roboto = Roboto({ 
  weight: ['400'],
  subsets: ['latin']
})

function Layout({ children }: Props) {
  return (
    <html className={roboto.className}>
      <head />
      <body className="container max-w-3xl mx-auto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout;
