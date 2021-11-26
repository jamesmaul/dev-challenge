import React , {useContext} from "react";
import {purchase_orders} from "../data/API/data";
import Context from '../Context/Context';

function Orders() {
  const {  filterMap } = useContext(Context);
  return (
    <div className="divs">
       <h3>Pedidos de Compra</h3>
      {filterMap(purchase_orders, 'MaterialName').map((e) => (
        <section>
          <span>#{e.PurchaseOrderID}</span>
          {' '}
          <span>{e.MaterialName}</span>
          {' '}
          <span>Qtd: {e.Quantity} pç</span>
        </section>
      ))}

    </div>
  );
}

export default Orders;
