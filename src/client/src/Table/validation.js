function validaPedido({ item, nome }) {
    if (nome === "Pedido de Venda") {
        return <><td>{item.SalesOrderID}</td><td>{item.MaterialName}</td><td>Qtd: {item.Quantity} pç</td></>;
    } else {
        return <><td>{item.PurchaseOrderID}</td><td>{item.MaterialName}</td><td>Qtd: {item.Quantity} pç</td></>;
    }
}

export default validaPedido;