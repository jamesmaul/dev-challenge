import React, { useEffect, useState } from "react";
import Table from "../Table";
import { fetchMateriais } from '../api';

function TabM({ busca }) {
    const [materiais, setMateriais] = useState([]);

    useEffect(() => {
        async function loadAPI() {
            const jsonM = await fetchMateriais();
            setMateriais(jsonM);
        }
        loadAPI();
    }, []);

    const tabM = materiais.filter((valorAtual) => {
        return valorAtual.MaterialName.includes(busca);
    });
    return <Table tab={tabM} nome="Materiais" />
}

export default TabM;