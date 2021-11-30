import React , {useContext} from "react";
import { materials } from "../data/API/data";
import Context from '../Context/Context';

function Materials() {
    const { filterMap } = useContext(Context);
    
  return (
    <div className="border border-secondary">
         <div className="bord">
       <h5>Produtos</h5>
       <p>(exibindo {filterMap(materials, 'MaterialName').length}/{materials.length} itens) </p>
       </div>
      {filterMap(materials, 'MaterialName').map((e, key) => (
        
        <section key={key} className="quadro">
          <span  className="grifo">#{e.MaterialID}</span>
          {' '}
          <span className="responsives">{e.MaterialName}</span>
        </section>
      ))}

    </div>
  );
}

export default Materials;
