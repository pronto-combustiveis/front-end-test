import { FaStar } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { Container, Content, Actions } from "./styles";

interface CardItemProps {
  comic: Comic;
}

interface Comic {
  id: number;
  title: string;
  price: number;
  amount: number;
  image: string;
  isRare?: boolean;
}

export function CardItem({ comic }: CardItemProps) {
  const { increment, decrement } = useCart();

  return (
    <Container>
      <Content>
        <h3>{comic.title} {comic.isRare ? <FaStar color="#fcbf49"/> : ''}</h3>
        <Actions>
          <span>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(comic.price)}
          </span>
          <button onClick={() => decrement(comic.id)}>-</button>
          <p><strong>{comic.amount}</strong></p>
          <button onClick={() => increment(comic.id)}>+</button>
        </Actions>
      </Content>
    </Container>
  )
}