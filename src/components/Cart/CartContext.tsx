import { useState } from 'react'
import { ReactNode } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react'
import { useContext } from 'react';



interface Comic {

    id: number;
    title: string;
    price: number;
    image: string;

};

interface CartContextData {
    cart: CartItem[];
    addToCart: (comic: Comic) => void;
    removeFromCart: (comicId) => void;
    getItemCount: () => void;
    countFinal: () => number;
    removeItemCount: (number) => void;


}

interface CartItem {
    comic: Comic;
    quantity: number;
}






export const CartContext = createContext({} as CartContextData)

type CartContextProviderProps = {
    children: ReactNode;
}



export function CartProvider({ children }: CartContextProviderProps) {

    const [cart, setCart] = useState<CartItem[]>([])
    const [itemCount, setItemCount] = useState(0)



    function addToCart(comic: Comic) {

        const comicList = [...cart]



        if (comicList.find(item => item.comic == comic)) {

            const aux = comicList.map((item) => {

                if (item.comic.id == comic.id) {

                    item["quantity"] = item.quantity + 1;
                    return item
                }
                return item
            })
            setCart(aux)
        }

        else {
            setCart([...cart, { comic: comic, quantity: 1 }])
        }

    }


    function removeFromCart(comicId) {

        const comicList = [...cart]

        const filteredList = comicList.filter(({ comic }) => comic.id !== comicId)

        setCart(filteredList)


    }

    function getItemCount() {
        setItemCount(itemCount + 1)

    }

    function removeItemCount(quantidade: number) {
        setItemCount(itemCount - quantidade)
    }


    function countFinal() {
        return itemCount
    }





    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, getItemCount, countFinal, removeItemCount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}



