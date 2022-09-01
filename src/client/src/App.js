import React, { useState } from 'react';
import './css/index.css';
import Navbar from './Navbar';
import Logo from './Logo';
import TabM from './Filtros/materiais';
import TabE from './Filtros/equipamentos';
import TabPC from './Filtros/pedidoCompra';
import TabPV from './Filtros/pedidoVenda';
import TabMO from './Filtros/maoObra';

function App() {
  const [busca, setBusca] = useState('');

  return (
    <div className="App">
      <Logo />
      <div className="pesquisa">
        <input className="form-control me-2" type="text" placeholder="Pesquisar" aria-label="Search"
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)} />
      </div>
      <Navbar />
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-PV" role="tabpanel" aria-labelledby="nav-PV-tab" tabIndex="0">
          <TabPV busca={busca} />
        </div>

        <div className="tab-pane fade" id="nav-PC" role="tabpanel" aria-labelledby="nav-PC-tab" tabIndex="0">
          <TabPC busca={busca} />
        </div>

        <div className="tab-pane fade" id="nav-P" role="tabpanel" aria-labelledby="nav-P-tab" tabIndex="0">
          <TabM busca={busca} />
        </div>

        <div className="tab-pane fade" id="nav-E" role="tabpanel" aria-labelledby="nav-E-tab" tabIndex="0">
          <TabE busca={busca} />
        </div>

        <div className="tab-pane fade" id="nav-MO" role="tabpanel" aria-labelledby="nav-MO-tab" tabIndex="0">
          <TabMO busca={busca} />
        </div>
      </div>
    </div>
  )
}

export default App;
