import React , {useContext} from "react";
import { equipaments } from "../data/API/data";
import Context from '../Context/Context';

function Equipaments() {
  const {  filterMap} = useContext(Context);

   return (
    <div className="border border-secondary">
       <div className="bord">
      <h5>Equipamentos</h5> 
      <p>(exibindo {filterMap(equipaments, 'EquipmentName').length}/{equipaments.length} itens)</p>
      </div>
      {filterMap(equipaments, 'EquipmentName').map((e, key) => (
        <section key={key}  className="quadro">
          <span className="grifo">#{e.EquipmentID}</span>
          <span className="responsives">{e.EquipmentName}</span>
        </section>
      ))}
    </div>
  );
}

export default Equipaments;
