import React , {useContext} from "react";
import { equipaments } from "../data/API/data";
import Context from '../Context/Context';

function Equipaments() {
  const {  filterMap } = useContext(Context);
   return (
    <div className="divs">
      <h3>Equipamentos</h3>
      {filterMap(equipaments, 'EquipmentName').map((e) => (
        <section className="section">
          <span>#{e.EquipmentID}</span>
          {' '}
          <span>{e.EquipmentName}</span>
        </section>
      ))}

    </div>
  );
}

export default Equipaments;
