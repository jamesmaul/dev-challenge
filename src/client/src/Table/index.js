import React from "react";

const Table = ({ tabE, tabM, tabPC, tabPV, tabMO }) => {

    return <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-PV" role="tabpanel" aria-labelledby="nav-PV-tab" tabIndex="0">

            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Pedidos de Venda</th>
                        <th scope="col" colSpan={3}>{Object.keys(tabPV).length} itens encontrados</th>
                    </tr>
                </thead>
                <tbody>
                    {tabPV.length === 0 ? <tr><td colSpan={3}>Nenhum resultado encontrado</td></tr> : tabPV.map(item => {
                        return (
                            <tr>
                                <td key={item.id}>{item.SalesOrderID}</td>
                                <td key={item.id}>{item.MaterialName}</td>
                                <td key={item.id}>Qtde: {item.Quantity} pç</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
        <div className="tab-pane fade" id="nav-PC" role="tabpanel" aria-labelledby="nav-PC-tab" tabIndex="0">

            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Pedidos de Compra</th>
                        <th scope="col" colSpan={3}>{Object.keys(tabPC).length} itens encontrados</th>
                    </tr>
                </thead>
                <tbody>
                    {tabPC.length === 0 ? <tr><td colSpan={3}>Nenhum resultado encontrado</td></tr> : tabPC.map(item => {
                        return (
                            <tr>
                                <td key={item.id}>{item.PurchaseOrderID}</td>
                                <td key={item.id}>{item.MaterialName}</td>
                                <td key={item.id}>Qtde: {item.Quantity} pç</td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>

        </div>
        <div className="tab-pane fade" id="nav-P" role="tabpanel" aria-labelledby="nav-P-tab" tabIndex="0">

            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Produtos</th>
                        <th scope="col" colSpan={3}>{Object.keys(tabM).length} itens encontrados</th>
                    </tr>
                </thead>
                <tbody>
                    {tabM.length === 0 ? <tr><td colSpan={3}>Nenhum resultado encontrado</td></tr> : tabM.map(item => {
                        return (
                            <tr>
                                <td key={item.id}>{item.MaterialID}</td>
                                <td key={item.id}>{item.MaterialName}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
        <div className="tab-pane fade" id="nav-E" role="tabpanel" aria-labelledby="nav-E-tab" tabIndex="0">

            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Equipamentos</th>
                        <th scope="col" colSpan={3}>{Object.keys(tabE).length} itens encontrados</th>
                    </tr>
                </thead>
                <tbody>
                    {tabE.length === 0 ? <tr><td colSpan={3}>Nenhum resultado encontrado</td></tr> : tabE.map(item => {
                        return (
                            <tr>
                                <td key={item.id}>{item.EquipmentID}</td>
                                <td key={item.id}>{item.EquipmentName}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
        <div className="tab-pane fade" id="nav-MO" role="tabpanel" aria-labelledby="nav-MO-tab" tabIndex="0">

            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Mão de Obra</th>
                        <th scope="col" colSpan={3}>{Object.keys(tabMO).length} itens encontrados</th>
                    </tr>
                </thead>
                <tbody>
                    {tabMO.length === 0 ? <tr><td colSpan={3}>Nenhum resultado encontrado</td></tr> : tabMO.map(item => {
                        return (
                            <tr>
                                <td key={item.id}>{item.WorkforceID}</td>
                                <td key={item.id}>{item.Name}</td>
                                <td key={item.id}>{item.Shift}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    </div>

}

export default Table;