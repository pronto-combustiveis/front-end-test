import { createContext, useState, ReactNode, useContext } from 'react';

interface Comic {
  id: number;
  title: string;
  price: number;
  amount: number;
  image: string;
  isRare?: boolean;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: Comic[];
  totalAmount: number;
  addComic: (data: Comic) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  resetCart: () => void;
}

const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Comic[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  function addComic(data: Comic) {
    setTotalAmount(totalAmount + 1)
    const duplicateComic = cart.findIndex(item => item.id === data.id);

    if (duplicateComic >= 0) {
      const index = duplicateComic;
      let newCart = cart;
      newCart[index].amount += 1;

      return setCart(newCart);
    }

    setCart([
      data,
      ...cart
    ])
  }

  function increment(id: number) {
    setTotalAmount(totalAmount + 1)

    let newCart = cart;
    newCart = newCart.map(item => {
      if (item.id === id) {
        item.amount+= 1;
      }
      return item
    })

    setCart(newCart)
  }

  function decrement(id: number) {
    setTotalAmount(totalAmount - 1)
    let newCart = cart;
    newCart = newCart.map(item => {
      if (item.id === id) {
        item.amount-= 1;
      }
      return item
    })

    setCart(newCart)
  }

  function resetCart() {
    setCart([]);
    setTotalAmount(0);
  }

  return (
    <CartContext.Provider value={{ cart, totalAmount, addComic, increment, decrement, resetCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}