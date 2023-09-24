import { Container, Nav, Navbar } from "react-bootstrap";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //Esto instancia la base de datos
    const db = getFirestore();

    //Hago el query para recibir todos los datos de la tabla "Items"
    const refCollection = collection(db, "Items");

    //getDocs me devuelve todas las filas de la tabla "Items"
    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) StyleSheetList([]);
      else {

        //Mappeo el resultado del getDocs a un array. Accedo al data de cada doc y devuelvo la propiedad "category" de ella. allCategories entonces seria un array con la categoria de cada producto
        const allCategories = snapshot.docs.map((doc) => {
          return doc.data().category
        })

        //Guardo en un state el "set" de todas las categorias, es decir, un array con solo los datos unicos.
        setCategories(new Set(allCategories));
      }
        
    })
    .finally(() => {
    })
  }, []);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Digital Shop</Navbar.Brand>
        <Nav className="me-auto">
          {/* Mappeo el state que guarda cada categoria unica y genero un boton en la nav bar por cada una */}
          {[...categories].map((category) => (
            <Nav.Link as={NavLink} key={category} to={`/category/${category}`}>
              {category}
            </Nav.Link>
          ))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
  
};