import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { api } from '../services/api';
import { GetServerSideProps } from 'next';
import { useCart } from '../components/Cart/CartContext';








interface Comic {

  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  isRare: boolean;
}

type HomeProps = {

  allComics: Comic[];


}



export default function Home({ allComics }: HomeProps) {


  const {
    getItemCount,
    addToCart,

  } = useCart();

  console.log(allComics)



  return (
    <div className={styles.homePage}>
      <Head>
        <title>ProntoComic</title>
      </Head>
      <h1>CATÁLOGO DE QUADRINHOS</h1>

      <div className={styles.cardList}>
        <Container>
          <Row xs={1} md={2} lg={3}>

            {allComics.map((comic) => {
              return (
                <div key={comic.id}>

                  <div className={styles.topCard}>
                    {comic.isRare ? (
                      <img src="wow.png" className={styles.cardRare} />

                    ) : (
                      []
                    )}

                  </div>
                  <Col>
                    <Card className={styles.cardContainer}>
                      <Card.Body style={{
                        padding: '0',
                        border: 'light'
                      }}>

                        <img className={styles.cardImage}
                          src={comic.image}
                          alt="Comic Image" />
                      </Card.Body>
                    </Card>

                    <h1 className={styles.comicName}>{`${comic.title}`}</h1>
                    <h1 className={styles.comicPrice}>${`${comic.price}`}</h1>
                    <Button
                      className={styles.buyButton}
                      variant="dark"
                      onClick={() => { addToCart(comic); getItemCount() }}
                    >

                      <img className={styles.cartIcon} src="shopping-cart.png" alt="" />
                    </Button>



                  </Col>
                </div>
              )
            })}
          </Row>
        </Container>
      </div>



    </div >
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const response = await api.get('')

  const comics = response.data.data.results.map(comic => {
    return {
      id: comic.id,
      title: comic.title,
      image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      description: comic.description,
      price: comic.prices[0].price,
      isRare: false
    };
  })

  const allComics = comics
  let rare = []


  for (let i = 0; i < allComics.length; i = i + 1) {

    rare[i] = Math.floor(Math.random() * 10 + 1)

    if (rare[i] == 1) {

      allComics[i].isRare = true
    }

  }


  return {
    props: {
      allComics
    }
  }


}







