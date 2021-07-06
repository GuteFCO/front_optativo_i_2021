import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function PedidoRow({ pedido }) {
    return (
        <tr>
            <td>{pedido.id}</td>
            <td>{pedido.descripcion}</td>
            <td>
                <Link to={`/pedidos/${pedido.uuid}`}>
                    {pedido.uuid}
                </Link>
            </td>
        </tr>
    );
}


function PedidosList () {
    const [ pedidos, setPedidos ] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:5001/pedidos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // 'Bearer ' + token;
            }
        }).then(response => {
            return response.json();
        }).then(pedidos => {
            setPedidos(pedidos);
        })

        return () => {
            return true;
        }
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Descripción</th>
                    <th>UUID</th>
                </tr>
            </thead>
            <tbody>
                {pedidos.map(pedido => (
                    <PedidoRow key={pedido.id} pedido={pedido} />
                ))}
            </tbody>
        </table>
    );
}

export default PedidosList;
