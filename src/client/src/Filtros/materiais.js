import React, { useEffect, useState } from "react";

function TabM(busca) {

    const [materiais, setMateriais] = useState([]);

    useEffect(() => {

        function loadApi() {
            fetch("/materiais")
                .then((res) => res.json())
                .then((json) => {
                    setMateriais(json);
                })
        }
        loadApi();
    }, []);


    materiais.filter((valorAtual) => {
        return valorAtual.MaterialName.includes(busca);
    })

}

export default TabM;