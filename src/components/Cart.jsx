import { Container, Table, Button, Form } from "react-bootstrap"
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

export const Cart = () => {
    const [formValues, SetFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const { items, removeItem, clear } = useContext(CartContext)

    const total = () =>
        items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price, 0
        )

    const handleChange = ev => {
        SetFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    const sendOrder = () => {
        const order = {
            buyer: formValues,
            items,
            total: total(),
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                SetFormValues({
                    name: "",
                    phone: "",
                    email: "",
                })
                clear()
                Swal.fire({

                    position: 'center',
                    icon: 'success',
                    title: `Su compra a sido completada! \n Código de factura: ${id}`,
                    showConfirmButton: false,
                    timer: 4000
                })
            }
        })
    };

    return (
        <Container>
            <h1>Cart</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{`$${item.price}`}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Button variant="danger" onClick={() => removeItem(item.id)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{total()}</td>
                    </tr>
                </tfoot>
            </Table>
            <h2>Ingresar datos de usuario</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={formValues.name}
                        type="text"
                        name="name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={formValues.email}
                        type="email"
                        name="email"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Tel</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={formValues.phone}
                        type="text"
                        name="phone"
                    />
                </Form.Group>
            </Form>
            <Button variant="success" onClick={sendOrder}>Finalizar compra</Button>
        </Container>
    )
}