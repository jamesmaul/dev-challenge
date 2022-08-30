import React, { useState, useEffect } from 'react';
import logo from './assets/logo_multisearch.png';
import './index.css';
import Table from './Table';

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
      <div className="img-logo">
        <img src={logo} alt='Logo MultiSearch' />
      </div>

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

      <div className="navbar-menu">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-PV-tab" data-bs-toggle="tab" data-bs-target="#nav-PV" type="button" role="tab" aria-controls="nav-PV" aria-selected="true">Pedidos de Venda</button>
            <button className="nav-link" id="nav-PC-tab" data-bs-toggle="tab" data-bs-target="#nav-PC" type="button" role="tab" aria-controls="nav-PC" aria-selected="false">Pedidos de Compra</button>
            <button className="nav-link" id="nav-P-tab" data-bs-toggle="tab" data-bs-target="#nav-P" type="button" role="tab" aria-controls="nav-P" aria-selected="false">Produtos</button>
            <button className="nav-link" id="nav-E-tab" data-bs-toggle="tab" data-bs-target="#nav-E" type="button" role="tab" aria-controls="nav-E" aria-selected="false">Equipamentos</button>
            <button className="nav-link" id="nav-MO-tab" data-bs-toggle="tab" data-bs-target="#nav-MO" type="button" role="tab" aria-controls="nav-MO" aria-selected="false">Mão de Obra</button>
          </div>
        </nav>
      </div>

      <Table tabE={tabE} tabM={tabM} tabPC={tabPC} tabPV={tabPV} tabMO={tabMO} />
      
    </div>
  )
}

export default App;
