import lupa from '../images/lupa.svg'
import logo from '../images/logo_multisearch.png'
import React, { useContext } from 'react';
import Context from '../Context/Context';

function Header() {
  const { setSearchText, searchText } = useContext(Context);
  return (
    <div className="header">
      <img src={logo} alt=""/>
      <section> 
      <input
        type="text"
        placeholder="Buscar pelo nome do produto"
        value={ searchText }
        onChange={ (e) => setSearchText(e.target.value) }
      />
      <button 
       type="button"
      >  
       <img src={lupa} alt="lupa" width="10px" />
       </button>
    </section>
    </div>
  );
}


export default Header;
