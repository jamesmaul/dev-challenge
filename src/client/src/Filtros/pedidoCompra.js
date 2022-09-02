import React, { useEffect, useState } from "react";
import Table from "../Table";
import { fetchPedidoCompra } from '../api';

function TabPC ({busca}) {
    const [pedidoCompra, setPedidoCompra] = useState([]);

    useEffect(() => {
        async function loadAPI() {
            const jsonPC = await fetchPedidoCompra();
            setPedidoCompra(jsonPC);
        }
        loadAPI();
    }, []);

    const tabPC = pedidoCompra.filter((valorAtual) => {
        return valorAtual.MaterialName.includes(busca);
    });
    return <Table tab={tabPC} nome="Pedido de Compra" />
}

export default TabPC;