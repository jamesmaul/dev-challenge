import React , {useContext} from "react";
import { materials } from "../data/API/data";
import Context from '../Context/Context';

function Materials() {
    const { filterMap } = useContext(Context);
    // if (!materials || materials.length === 0) {
    //   return <p>No planets found</p>;
    // }
  return (
    <div className="divs">
       <h3>Produtos</h3>
      {filterMap(materials, 'MaterialName').map((e) => (
        
        <section>
          <span>#{e.MaterialID}</span>
          {' '}
          <span>{e.MaterialName}</span>
        </section>
      ))}

    </div>
  );
}

export default Materials;
