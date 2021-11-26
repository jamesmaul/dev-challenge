import React , {useContext} from "react";
import {sales_order} from "../data/API/data";
import Context from '../Context/Context';

function Sales() {
  const {  filterMap } = useContext(Context);
  return (
    <div className="divs">
       <h3>Pedidos de Venda</h3>
      {filterMap(sales_order, 'MaterialName').map((e) => (
        <section>
          <span>#{e.SalesOrderID}</span>
          {' '}
          <span>{e.MaterialName}</span>
          {' '}
          <span>Qtd: {e.Quantity} pç</span>
        </section>
      ))}

    </div>
  );
}

export default Sales;
