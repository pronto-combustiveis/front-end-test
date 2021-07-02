
import { useState, useEffect } from 'react';
import Loader from 'react-spinners/SyncLoader';

import { marvelApi } from '../../services/marvelApi';
import { hash, publicKey } from '../../config/marvel';

import { Card } from '../Card/';
import { CardContainer, Container, Content, LoadContainer } from './styles';

export function Catalog() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true);
    marvelApi.get(`/comics?format=comic&limit=30&apikey=${publicKey}&ts=thesoer&hash=${hash}`)
      .then(response => {
        let results = response.data.data.results;
        let pastNumbers: Number[] = [];
        let i = 0;

        while (i < 3) {
          let randomNumber = Math.floor(Math.random() * results.length);
          
          if (!pastNumbers.includes(randomNumber)) {
            results[randomNumber].isRare = true;
            pastNumbers = [randomNumber, ...pastNumbers]
            i++;
          }
        }

        setComics(results);
        setLoading(false);
      })
  }, [])

  return (
    <Container>
      <Content>
        <CardContainer>
          {comics.map((item, index) => (
            <Card comic={item} key={index} />
          ))}
        </CardContainer>

      </Content>
      <LoadContainer>
        <Loader color="#EC1D24" loading={loading} size={18}/>
      </LoadContainer>
    </Container>
  )
}