import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { ItemList } from "./ItemList";


export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = id
    ? query(collection(db, "Items"), where("category", "==", id))
      : collection(db, "Items")

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) StyleSheetList([]);
      else
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    })
    .finally(() => {
      setLoading(false)
    })
  }, [id]);

  if (loading) return <div>Loading...</div>


  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <div className="cards">
        <ItemList products={products} />
      </div>
    </Container>
  );

};