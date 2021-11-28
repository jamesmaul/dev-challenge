import React , {useContext} from "react";
import {purchase_orders} from "../data/API/data";
import Context from '../Context/Context';

function Orders() {
  const {  filterMap } = useContext(Context);
  return (
    <div className="border border-secondary">
    <div className="bord">
       <h5>Pedidos de Compra</h5>
       <p>(exibindo {filterMap(purchase_orders, 'MaterialName').length}/{purchase_orders.length} itens)</p>
       </div>
      {filterMap(purchase_orders, 'MaterialName').map((e, key) => (
       <section key={key} className="quadro">
          <span className="grifo">#{e.PurchaseOrderID}</span>
           <span className="responsives">{e.MaterialName}</span>
           <span className="resp">Qtd: {e.Quantity} pç</span>
        </section>
      ))}

    </div>
  );
}

export default Orders;
