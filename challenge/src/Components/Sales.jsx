import React , {useContext} from "react";
import {sales_order} from "../data/API/data";
import Context from '../Context/Context';

function Sales() {
  const {  filterMap } = useContext(Context);
  return (

      <div className="border border-secondary">
        <div className="bord">
         <h5>Pedidos de Venda</h5>
       <p>(exibindo {filterMap(sales_order, 'MaterialName').length}/{sales_order.length} itens)</p>
      
       </div>
      {filterMap(sales_order, 'MaterialName').map((e, key) => (
        <section key={key} className="quadro">
          <span className="grifo">#{e.SalesOrderID}</span>
                   <span className="responsives">{e.MaterialName}</span>
                <span>Qtd: {e.Quantity} pç</span>
        </section>
      ))}

    </div>
   
  
  );
}

export default Sales;
