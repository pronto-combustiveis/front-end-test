import { useState } from 'react';
import styles from './styles.module.scss';

import { ImCart } from "react-icons/im";
import Link from 'next/link'
import { useCart } from '../Cart/CartContext'
import Button from 'react-bootstrap/Button'





export function Header() {

    const [sidebar, setSidebar] = useState(false)


    const showSidebar = () => setSidebar(!sidebar)

    const {
        countFinal, cart
    } = useCart();



    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>



                <Link href='/'>
                    <a>
                        <img style={{
                            marginBottom: '1rem'
                        }} src="/logoloja.png" alt="LogoLoja" />

                    </a>
                </Link>
                <p>A loja feita para o nerd raiz</p>


            </div >

            <div className={styles.cartContainer}>

                <Link href='/payment'>
                    <Button className={styles.cartButton}>
                        <ImCart className={styles.cart} />
                        <span> ({countFinal()})</span>
                    </Button>

                </Link>

            </div>
        </div>
    )
}