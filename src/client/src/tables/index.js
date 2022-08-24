import React from "react";

const Row = ({record}) => {
    const keys = Object.keys(record)
    return(
        <tr key={record.id}>
            {
                keys.map(key =>  <td key={key}>{record[key]}</td>)
            }
        </tr>
        )
}

const Table = ({equipamento, materiais, buscar}) => {

    const tab = equipamento.filter((valorAtual) => {
        return valorAtual.EquipmentName.includes(buscar);
    })

    const tabM = materiais.filter((valorAtual) => {
        return valorAtual.MaterialName.includes(buscar);
    })

    //console.log(buscar);

    const keys = Object.keys(equipamento[0])

    return <div className="tabelas">

        <table className="table table-hover">
            <thead className="table-light">
                <tr>
                    <th scope="col">Pedidos de Venda</th>
                    <th scope="col" colSpan={3}>X itens encontrados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>

        <table className="table table-hover">
            <thead className="table-light">
                <tr>
                    <th scope="col">Pedidos de Compra</th>
                    <th scope="col" colSpan={3}>X itens encontrados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>

        <table className="table table-hover">
            <thead className="table-light">
                <tr>
                    <th scope="col">Produtos</th>
                    <th scope="col" colSpan={3}>{Object.keys(tabM).length} itens encontrados</th>
                </tr>
            </thead>
            <tbody>

                {tabM.map(record => <Row record={record}/>)}

            </tbody>
        </table>

        <table className="table table-hover">
            <thead className="table-light">
                <tr>
                    <th scope="col">Equipamentos</th>
                    <th scope="col" colSpan={3}>{Object.keys(tab).length} itens encontrados</th>
                </tr>
            </thead>
            <tbody>

                {tab.map(record => <Row record={record}/>)}

            </tbody>
        </table>

        <table className="table table-hover">
            <thead className="table-light">
                <tr>
                    <th scope="col">Mão de Obra</th>
                    <th scope="col" colSpan={3}>X itens encontrados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>

    </div>

}

export default Table;