import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import {getFirestore,collection,getDocs} from "firebase/firestore";
import { ItemList } from "./ItemList";


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const { id } = useParams();
    
    
    useEffect(() => {
        const db = getFirestore();
    
        const refCollection = collection(db, "Items");
    
        getDocs(refCollection).then((snapshot) => {
          if (snapshot.size === 0) console.log("no results");
          else
            setProducts(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
        });
      }, [id]);


    return (
        <Container className="mt-4">
            <h1>{props.greeting}</h1>
            <div className="cards">
                <ItemList products={products} />
            </div>
        </Container>
    );

};