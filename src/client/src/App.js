import React, { useState, useEffect } from 'react';
import './index.css';
import Table from './Table';
import Navbar from './Navbar';
import Logo from './Logo';

function App() {

  const [busca, setBusca] = useState('');
  const [equipamentos, setEquipamentos] = useState([]);
  const [materiais, setMateriais] = useState([]);
  const [pedidoCompra, setPedidoCompra] = useState([]);
  const [pedidoVenda, setPedidoVenda] = useState([]);
  const [maoObra, setMaoObra] = useState([]);

  useEffect(() => {

    function loadApi() {
      fetch("/equipamentos")
        .then((res) => res.json())
        .then((json) => {
          setEquipamentos(json);
        })
      fetch("/materiais")
        .then((res) => res.json())
        .then((json) => {
          setMateriais(json);
        })
      fetch("/pedidoCompra")
        .then((res) => res.json())
        .then((json) => {
          setPedidoCompra(json);
        })
      fetch("/pedidoVenda")
        .then((res) => res.json())
        .then((json) => {
          setPedidoVenda(json);
        })
      fetch("/maoObra")
        .then((res) => res.json())
        .then((json) => {
          setMaoObra(json);
        })
    }
    loadApi();
  }, []);

  // ** FILTROS PARA BUSCA EM TEMPO REAL ** //
  const tabE = equipamentos.filter((valorAtual) => {
    return valorAtual.EquipmentName.includes(busca);
  })
  const tabM = materiais.filter((valorAtual) => {
    return valorAtual.MaterialName.includes(busca);
  })
  const tabPC = pedidoCompra.filter((valorAtual) => {
    return valorAtual.MaterialName.includes(busca);
  })
  const tabPV = pedidoVenda.filter((valorAtual) => {
    return valorAtual.MaterialName.includes(busca);
  })
  const tabMO = maoObra.filter((valorAtual) => {
    return valorAtual.Name.includes(busca);
  })

  return (
    <div className="App">
      <Logo />
      <div className="navbar">
        <nav >
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="text" placeholder="Pesquisar" aria-label="Search"
                value={busca}
                onChange={(ev) => setBusca(ev.target.value)} />
            </form>
          </div>
        </nav>
      </div>
      <Navbar />
      <div className="tab-content" id="nav-tabContent">

        <div className="tab-pane fade show active" id="nav-PV" role="tabpanel" aria-labelledby="nav-PV-tab" tabIndex="0">
          <Table tab={tabPV} nome="Pedido de Venda" />
        </div>

        <div className="tab-pane fade" id="nav-PC" role="tabpanel" aria-labelledby="nav-PC-tab" tabIndex="0">
          <Table tab={tabPC} nome="Pedido de Compra" />
        </div>

        <div className="tab-pane fade" id="nav-P" role="tabpanel" aria-labelledby="nav-P-tab" tabIndex="0">
          <Table tab={tabM} nome="Produtos" />
        </div>

        <div className="tab-pane fade" id="nav-E" role="tabpanel" aria-labelledby="nav-E-tab" tabIndex="0">
          <Table tab={tabE} nome="Equipamentos" />
        </div>

        <div className="tab-pane fade" id="nav-MO" role="tabpanel" aria-labelledby="nav-MO-tab" tabIndex="0">
          <Table tab={tabMO} nome="Mão de Obra" />
        </div>

      </div>

    </div>
  )
}

export default App;
