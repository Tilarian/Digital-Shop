import Container from 'react-bootstrap/Container';

import { ItemCount } from './ItemCount';


export const ItemListContainer = (props) => {
    return (
        <Container class="mt-4">
            <h1>{props.greeting}</h1>
            <ItemCount />
        </Container>
    );

};