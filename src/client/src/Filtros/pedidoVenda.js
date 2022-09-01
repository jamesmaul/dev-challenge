import React, { useEffect, useState } from "react";
import Table from "../Table";
import { fetchPedidoVenda } from '../api';

function TabPV ({busca}) {
    const [pedidoVenda, setPedidoVenda] = useState([]);

    useEffect(() => {
        async function loadAPI() {
            const jsonPV = await fetchPedidoVenda();
            setPedidoVenda(jsonPV);
        }
        loadAPI();
    }, []);

    const tabPV = pedidoVenda.filter((valorAtual) => {
        return valorAtual.MaterialName.includes(busca);
    });
    return <Table tab={tabPV} nome="Pedido de Venda" />
}

export default TabPV;