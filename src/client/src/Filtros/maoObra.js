import React, { useEffect, useState } from "react";
import Table from "../Table";
import { fetchMaoObra } from '../api';

function TabMO ({busca}) {
    const [maoObra, setMaoObra] = useState([]);

    useEffect(() => {
        async function loadAPI() {
            const jsonMO = await fetchMaoObra();
            setMaoObra(jsonMO);
        }
        loadAPI();
    }, []);

    const tabMO = maoObra.filter((valorAtual) => {
        return valorAtual.Name.includes(busca);
    });
    return <Table tab={tabMO} nome="Mão de Obra" />
}

export default TabMO;