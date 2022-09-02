import React from "react";
import Row from "./row";

const Table = ({ tab, nome }) => {
    return <table className="table table-hover">
        <thead className="table-light">
            <tr>
                <th scope="col">{nome}</th>
                <th scope="col" colSpan={3}>{Object.keys(tab).length} itens encontrados</th>
            </tr>
        </thead>
        <tbody>
            {tab.length === 0 ? <tr><td colSpan={3}>Nenhum resultado encontrado</td></tr> : tab.map(item => <Row item={item} nome={nome} />)}
        </tbody>
    </table>
}

export default Table;