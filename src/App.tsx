import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Comic } from "./pages/Comic";

import { GlobalStyle } from './styles/global';

import { CartProvider } from './hooks/useCart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/comic/:id">
            <Comic />
          </Route>
          <Route path="/carrinho">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer position="bottom-right" />
      <GlobalStyle />
    </CartProvider>
  );
}

export default App;
