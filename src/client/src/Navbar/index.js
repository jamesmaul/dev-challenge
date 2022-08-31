
const Navbar = () => {

    return (
        
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

    )
}

export default Navbar;