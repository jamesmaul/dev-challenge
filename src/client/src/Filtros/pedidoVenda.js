import React, { useEffect, useState } from "react";

function TabPV (busca)  {

    const [pedidoVenda, setPedidoVenda] = useState([]);

    useEffect(() => {

        function loadApi() {
            fetch("/pedidoVenda")
                .then((res) => res.json())
                .then((json) => {
                    setPedidoVenda(json);
                })
        }
        loadApi();
    }, []);


    pedidoVenda.filter((valorAtual) => {
        return valorAtual.MaterialName.includes(busca);
    })
}

export default TabPV;