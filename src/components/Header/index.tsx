import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import { useCart } from '../../hooks/useCart';
import { Container, Content } from './styles';

export function Header() {
  const { totalAmount } = useCart();

  return (
    <Container>
      <Content>
        <Link to="/" ><h1>Marvel</h1></Link>

        <Link to="/carrinho">
          <FaShoppingCart size={16} />
          ({totalAmount})
        </Link>
      </Content>
    </Container>
  )
}