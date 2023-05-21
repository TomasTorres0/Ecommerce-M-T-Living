import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
const products = [
  {id: 1, name:'Sillon Ivory', description:'Medidas Standar', stock:'number'},
  {id: 2, name:'Sillon Mv Esquinero', description:'5mts x 5mts', stock:'number'},
  {id: 3, name:'Sillon Escandinado', description:'Estilo Natural', stock:'number'},
  {id: 4, name:'Sillon Lemon Crush', description:'Maquiaveli', stock:'number'}
]

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  
  useEffect(() => {
    console.log(categoryName);
  }, [categoryName])

  return (
    <Container>
      <h1>Bienvenidos a Nuestro Show Room</h1>
      <h3 className="greeting">{greeting}</h3>
      <ItemList products={products} />
    </Container>
  );
}
 
export default ItemListContainer;