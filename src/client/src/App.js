import React, { useState, useEffect } from 'react';
import logo from './assets/logo_multisearch.png';
import './index.css';
import Table from './tables';

const Row = ({ record }) => {
  const keys = Object.keys(record)
  return (
    <tr key={record.id}>
      {
        keys.map(key => <td key={key}>{record[key]}</td>)
      }
    </tr>
  )
}

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
          console.log(json)
          setEquipamentos(json);
        })
      fetch("/materiais")
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setMateriais(json);
        })
      fetch("/pedidoCompra")
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setPedidoCompra(json);
        })
      fetch("/pedidoVenda")
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setPedidoVenda(json);
        })
      fetch("/maoObra")
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setMaoObra(json);
        })
    }
    loadApi();
  }, []);

  const tab = equipamentos.filter((valorAtual) => {
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

      <div className="tabelas">

        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">Pedidos de Venda</th>
              <th scope="col" colSpan={2}>{Object.keys(tabPV).length} itens encontrados</th>
            </tr>
          </thead>
          <tbody>

            {tabPV.map(item => {
              return (
                <tr>
                  <td key={item.id}>{item.SalesOrderID}</td>
                  <td key={item.id}>{item.MaterialName}</td>
                  <td key={item.id}>Qtde: {item.Quantity} pç</td>
                </tr>
              )
            })}

          </tbody>
        </table>

        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">Pedidos de Compra</th>
              <th scope="col" colSpan={3}>{Object.keys(tabPC).length} itens encontrados</th>
            </tr>
          </thead>
          <tbody>

            {tabPC.map(item => {
              return (
                <tr>
                  <td key={item.id}>{item.PurchaseOrderID}</td>
                  <td key={item.id}>{item.MaterialName}</td>
                  <td key={item.id}>Qtde: {item.Quantity} pç</td>
                </tr>
              )

            })}

          </tbody>
        </table>

        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">Produtos</th>
              <th scope="col" colSpan={3}>{Object.keys(tabM).length} itens encontrados</th>
            </tr>
          </thead>
          <tbody>

            {tabM.map(record => <Row record={record} />)}

          </tbody>
        </table>

        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">Equipamentos</th>
              <th scope="col" colSpan={3}>{Object.keys(tab).length} itens encontrados</th>
            </tr>
          </thead>
          <tbody>

            {tab.map(record => <Row record={record} />)}

          </tbody>
        </table>

        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">Mão de Obra</th>
              <th scope="col" colSpan={3}>{Object.keys(tabMO).length} itens encontrados</th>
            </tr>
          </thead>
          <tbody>

            {!tabMO ? "Nenhum resultado encontrado" : tabMO.map(record => <Row record={record} />)}

          </tbody>
        </table>

      </div>

    </div>
  )
}

export default App;
