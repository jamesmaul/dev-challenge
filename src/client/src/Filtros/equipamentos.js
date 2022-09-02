import React, { useEffect, useState } from "react";
import Table from "../Table";
import { fetchEquipamentos } from '../api';

function TabE({ busca }) {
    const [equipamentos, setEquipamentos] = useState([]);

    useEffect(() => {
        async function loadAPI() {
            const jsonE = await fetchEquipamentos();
            setEquipamentos(jsonE);
        }
        loadAPI();
    }, []);

    const tabE = equipamentos.filter((valorAtual) => {
        return valorAtual.EquipmentName.includes(busca);
    });
    return <Table tab={tabE} nome="Equipamentos" />
}

export default TabE;