import React , {useContext} from "react";
import {workforce} from "../data/API/data";
import Context from '../Context/Context';

function Workforce() {
  const {  filterMap } = useContext(Context);
  return (
    <div className="border border-secondary">
    <div className="bord">
       <h5>Mão de Obra</h5>
     
       <p>(exibindo {filterMap(workforce, 'Name').length}/{workforce.length} itens)</p>
       </div>
      {filterMap(workforce, 'Name').map((e, key) => (
       <section key={key} className="quadro">
          <span className="grifo">#{e.WorkforceID}</span>
           <span className="responsives">{e.Name}</span>
           <span>{e.Shift}</span>
        </section>
      ))}

    </div>
  );
}

export default Workforce;
