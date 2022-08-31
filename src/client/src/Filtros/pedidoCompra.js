import React, { useEffect, useState } from "react";

function TabPC(busca) {

    const [pedidoCompra, setPedidoCompra] = useState([]);

    useEffect(() => {

        function loadApi() {
            fetch("/pedidoCompra")
                .then((res) => res.json())
                .then((json) => {
                    setPedidoCompra(json);
                })
        }
        loadApi();
    }, []);


    pedidoCompra.filter((valorAtual) => {
        return valorAtual.MaterialName.includes(busca);
    })

}

export default TabPC;