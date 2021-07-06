import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function PedidoDetalle() {
    const { uuid } = useParams();

    const [ pedido, setPedido ] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch(`http://localhost:5001/pedidos/${uuid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // 'Bearer ' + token;
            }
        }).then(response => {
            return response.json();
        }).then(pedido => {
            setPedido(pedido);
        })

        return () => {
            return true;
        }
    }, [uuid]);

    return (
        <>
            <div>ID: {pedido.id}</div>
            <div>Descripción: {pedido.descripcion}</div>
            <div>UUID: {pedido.uuid}</div>
        </>
    );
}

export default PedidoDetalle;
