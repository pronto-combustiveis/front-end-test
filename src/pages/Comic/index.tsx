import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-spinners/SyncLoader";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { hash, publicKey } from "../../config/marvel";
import { useCart } from "../../hooks/useCart";
import { marvelApi } from "../../services/marvelApi";

import { Container, Content, Description, LoadContainer } from "./styles";

export function Comic() {
  let { id } = useParams<any>();

  const { addComic } = useCart();
  const [comic, setComic] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    marvelApi.get(`/comics/${id}?format=comic&apikey=${publicKey}&ts=thesoer&hash=${hash}`)
      .then(response => {
        if (response.data.data.results.length > 0) {
          setComic(response.data.data.results[0]);
        }
        setLoading(false);
      }).catch(err => {
        console.log(err);
        setLoading(false);
      })
  }, [])

  function handleAddComic() {
    const data = {
      id: comic.id,
      title: comic.title,
      price: comic.prices[0].price,
      amount: 1,
      image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      isRare: comic.isRare
    }

    addComic(data)
    toast.success('Adicionado no carrinho!')
  }

  return (
    <>
      <Header />
      <Container>
        { comic && 
          <Content>
        
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt=""/>

          <Description>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
            <h3>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(comic.prices[0].price)}
            </h3>
            <button onClick={handleAddComic}>Comprar</button>
          </Description>
          </Content>
        }
      </Container>
      <LoadContainer>
        <Loader color="#EC1D24" loading={loading} size={18}/>
      </LoadContainer>
    </>
  )
}