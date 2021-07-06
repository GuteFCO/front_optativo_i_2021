import React from 'react';
import FormLayout from '../layouts/FormLayout';
import PedidoDetalle from '../containers/PedidoDetalle';


const pedidoLinks = [
    {href: '/pedidos', label: 'Pedidos'},
    {href: '/about', label: 'Acerca de'},
    {href: '/contact', label: 'Contacto'}
];


function Pedido() {
    return (
        <FormLayout
            links={pedidoLinks}
            title="Pedido"
            Component={PedidoDetalle}
        />
    );
}

export default Pedido;
