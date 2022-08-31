import validaPedido from './validation'; 

const Row = ({ item, nome }) => {
    const keys = Object.keys(item);
    return (
        <tr key={item.id}>
            {nome === "Pedido de Venda" || nome === "Pedido de Compra" ?
                validaPedido({ item, nome }) :
                keys.map(key => <td key={key}>{item[key]}</td>)
            }
        </tr>
    )
}

export default Row;