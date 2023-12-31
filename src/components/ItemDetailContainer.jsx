import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { getFirestore, doc, getDoc } from "firebase/firestore";


import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();



  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "Items", id);

    getDoc(refDoc).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    })
      .finally(() => {
        setLoading(false)
      })
  }, [id]);

  if (loading) return <div>loading...</div>

  return (
    <Container className="mt-4">
      <h1>Detalles</h1>
      <ItemDetail product={product} />
    </Container>
  );

};