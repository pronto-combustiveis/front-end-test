import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"

import Swal from "sweetalert";

import { CardItem } from "../../components/CardItem";
import { Header } from "../../components/Header";
import { useCart } from "../../hooks/useCart";
import { api } from "../../services/api";
import { Container, Actions, ButtonCoupon, ButtonBuy } from "./styles";

interface Coupon {
  id: number;
  coupon: string;
  discount: number;
  isRare?: boolean;
}

export function Cart() {
  const history = useHistory();

  const { cart, resetCart } = useCart();
  const [coupon, setCoupon] = useState('');
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    api.get('')
    .then(response => {
      setCoupons(response.data.coupons)
    })
  }, [])

  useEffect(() => {
    let totalPrice = 0;
    cart.map(item => {
      return totalPrice += item.price * item.amount
    })
    const totalWithDiscount = totalPrice - discount;

    setTotal(totalWithDiscount >= 0 ? totalWithDiscount : 0)
  }, [cart, discount])

  function handleValidityCoupon() {
    const hasCoupon = coupons.find(item => item.coupon === coupon)
    const hasComicRare = cart.find(item => item.isRare && item.amount > 0) ? true : false;

    if (!hasCoupon?.isRare && hasComicRare) {
      return Swal("Cupom comum", "Quadrihos raros necessitam um cupom raro", "error");
    }

    if (hasCoupon) {
      const totalDiscount = ((total + discount) * hasCoupon.discount) / 100;

      setDiscount(totalDiscount)
      return Swal("Cupom válido", "Cupom aplicado com sucesso!", "success");
    }

    setDiscount(0)
    return Swal("Cupom inválido", "Cupom não foi aplicado!", "error");
  }

  function handleBuy() {
    resetCart();
    history.push('/');
    return Swal("Compra finalizada", "Compra finalizada com sucesso!", "success");
  }

  return (
    <>
      <Header />
      <Container>
        {cart.length > 0 ? 
        <>
          <h1>Carrinho</h1>
          {cart.map((item, index) => (
            <CardItem comic={item} key={index}/>
          ))}

          <Actions>
            <div>
              <input onChange={(e) => setCoupon(e.target.value.toLowerCase())} placeholder="Cupom" type="text" />
              <ButtonCoupon onClick={handleValidityCoupon} >Validar</ButtonCoupon>
            </div>
            <div>
              <h4>Total: 
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(total)}
              </h4>
              <ButtonBuy onClick={handleBuy}>Finalizar</ButtonBuy>
            </div>
          </Actions>
        </>
        : <h1>Nenhum produto no carrinho</h1> }
      </Container>
    </>
  )
}