import { useHistory } from "react-router-dom"
import { toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa';

import { useCart } from '../../hooks/useCart';

import { Container, Content, Description, Actions, Button } from "./styles";

interface CardProps {
  comic: Comic;
}

interface Comic {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  prices: Price[];
  isRare?: boolean;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Price {
  price: number;
  type: string;
}

export function Card({ comic }: CardProps) {
  const history = useHistory();

  const { addComic } = useCart();

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

  function goToInfos(id: number) {
    history.push(`/comic/${id}`)
  }

  return (
    <Container>
      <Content>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />

        <Description>
          <p>{comic.title} {comic.isRare ? <FaStar color="#fcbf49"/> : ''}</p>
          <p>{comic.isRare ? 'Raro' : ''}</p>
          <p>
            <strong>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(comic.prices[0].price)}
            </strong>
          </p>

          <Actions>
            <Button onClick={() => goToInfos(comic.id)}>Informações</Button>
            <Button onClick={handleAddComic}>Comprar</Button>
          </Actions>
        </Description>
      </Content>
    </Container>
  )
}