import React from 'react';
import FormLayout from '../layouts/FormLayout';
import PedidosList from '../containers/PedidosList';


const pedidosLinks = [
    {href: '/about', label: 'Acerca de'},
    {href: '/contact', label: 'Contacto'}
];


function Pedidos() {
    return (
        <FormLayout
            links={pedidosLinks}
            title="Pedidos"
            Component={PedidosList}
        />
    );
}

export default Pedidos;
