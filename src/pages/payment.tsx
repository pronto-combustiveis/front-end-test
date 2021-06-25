import Head from 'next/head';
import styles from '../styles/payment.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useCart } from '../components/Cart/CartContext';
import { apitest } from '../services/api';
import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';






interface Cupom {
  id: number;
  name: string;
}

type PaymentProps = {
  allCupoms: Cupom[]
}




export default function Payment({ allCupoms }: PaymentProps) {

  const [precoTotal, setPrecoTotal] = useState(0);
  const [hasCupom, setHasCupom] = useState(false);
  const [cupom, setCupom] = useState('');


  const {
    cart,
    removeFromCart,
    removeItemCount
  } = useCart();

  function getPrecoTotal(price: number) {

    let soma = 0

    cart.forEach(item => {
      soma += item.quantity * item.comic.price
    });
    setPrecoTotal(soma - price)



  }

  function handleChange(event) {
    let upperCase = event.target.value.toUpperCase()
    setCupom(upperCase)

  }

  function handleClick() {
    setHasCupom(false)

    console.log(cupom)

    allCupoms.forEach(item => {

      if (item.name == cupom) {
        setHasCupom(true)
        console.log(item.name)
        alert("Seu cupom foi ativado")

      }

    })


  }


  function checkCupom() {
    console.log(hasCupom)
  }




  useEffect(() => {
    getPrecoTotal(0)

  }, []);



  return (

    <div className={styles.paymentPage}>

      <Head>
        <title>ProntoComic Pagamento</title>
      </Head>
      <h1>PAGAMENTO</h1>

      <div >
        <Container>
          <Row xs={5} md={5} lg={5}>
            <Col>
              <p>PRODUTO</p>
            </Col>
            <Col>
              <p>Quantidade</p>
            </Col>
            <Col>
              <p>Preço</p>
            </Col>
            <Col>
              <p>Preço Total</p>
            </Col>
          </Row>



          {cart.map(({
            comic, quantity
          }) => (
            <div key={comic.id}>
              <Row xs={5} md={5} lg={5} style={{
                marginBottom: '1rem'
              }}>

                <div className={styles.tableCart}

                  style={{ justifyContent: 'center' }}>

                  <img src={comic.image} className={styles.comicImage} alt="" />

                </div>

                <div className={styles.tableCart}
                  style={{ justifyContent: 'center' }}>
                  <p className={styles.quant}>{quantity}</p>

                </div>
                <div className={styles.tableCart}
                  style={{ justifyContent: 'center' }}>
                  <p className={styles.price}>${comic.price}</p>

                </div>
                <div className={styles.tableCart}
                  style={{ justifyContent: 'center' }}>
                  <p className={styles.totalPrice}>${comic.price * quantity}</p>

                </div>
                <div className={styles.tableCart}
                  style={{ justifyContent: 'center' }}>
                  <button onClick={() => { removeFromCart(comic.id); getPrecoTotal(comic.price); removeItemCount(quantity) }}
                    style={{
                      border: '0',
                      marginBottom: '1.8rem',
                    }}>
                    <AiIcons.AiOutlineClose style={{
                      height: '20px',
                      width: 'auto'
                    }} />
                  </button>
                </div>

              </Row>
            </div>
          ))}

          <div className={styles.payContainer}>
            <Col xs={2}>
              <Button className={styles.cupomButton} style={{
              }}
                onClick={() => handleClick()}
              >
                ADICIONAR CUPOM
              </Button>

            </Col>
            <Col xs={3}>

              <input onChange={handleChange} type="text" defaultValue={cupom} />

            </Col>

            <Col style={{
              display: 'flex',
              marginLeft: '2rem'


            }} xs={5}>
              <p>Preço Final</p>
              <p>${hasCupom ? (
                (precoTotal * 0.9).toFixed(2)

              ) : (
                precoTotal.toFixed(2)
              )}</p>
            </Col>
          </div>
        </Container>
      </div>
    </div>
  )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const response = await apitest.get('')

  const cupoms = response.data.map(cupom => {
    return {
      id: cupom.id,
      name: cupom.name

    };
  })

  const allCupoms = cupoms

  return {
    props: {
      allCupoms
    }
  }


}