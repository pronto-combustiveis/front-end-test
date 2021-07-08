import '../styles/App.scss'
import { Header } from '../components/Header'
import { CartProvider } from '../components/Cart/CartContext'



function MyApp({ Component, pageProps }) {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Staatliches&family=Work+Sans:wght@400;700;900&display=swap" rel="stylesheet" />


      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>

    </div>
  )
}

export default MyApp
