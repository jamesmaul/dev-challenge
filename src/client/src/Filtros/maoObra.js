import React, { useEffect, useState } from "react";

function TabMO  (busca)  {

    const [maoObra, setMaoObra] = useState([]);

    useEffect(() => {

        function loadApi() {
            fetch("/maoObra")
                .then((res) => res.json())
                .then((json) => {
                    setMaoObra(json);
                })
        }
        loadApi();
    }, []);


    maoObra.filter((valorAtual) => {
        return valorAtual.Name.includes(busca);
    })


}

export default TabMO;