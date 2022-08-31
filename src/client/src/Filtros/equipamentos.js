import React, { useEffect, useState } from "react";

function TabE (busca){

    const [equipamentos, setEquipamentos] = useState([]);

    useEffect(() => {

        function loadApi() {
            fetch("/equipamentos")
                .then((res) => res.json())
                .then((json) => {
                    setEquipamentos(json);
                })
        }
        loadApi();
    }, []);

    equipamentos.filter((valorAtual) => {
        return valorAtual.EquipmentName.includes(busca);
    })
}

export default TabE;