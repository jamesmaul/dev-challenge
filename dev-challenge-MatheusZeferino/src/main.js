window.onload = function() {
    filtro()
};

function filtro(){

    document.getElementById("SpanQtdTotalEncontrada").innerHTML = 0;
    document.querySelector(".tablePedidosVenda").innerHTML 	= "";
    document.querySelector(".tablePedidosCompra").innerHTML = "";
    document.querySelector(".tableProdutos").innerHTML 		= "";
    document.querySelector(".tableEquipaments").innerHTML 	= "";
    document.querySelector(".tableMaoObra").innerHTML 		= "";

    var filtro = document.getElementById('filtro').value;
    const doGet = (url) => {
        const promiseCallBack = (resolve, reject) => {
            fetch(url)
                .then((response) => {
                    if(!response.ok) throw new Error ('Error ao executar requisição, status '+ response.status);
                    return response.json();	
                })
                .then(resolve)
                .catch(reject);
        }
        return new Promise(promiseCallBack);
    }

    //SALES
    doGet('http://localhost:3000/sales?q='+ filtro).then((result) => {
        document.getElementById("SpanQtdTotalEncontrada").innerHTML = parseInt(document.getElementById("SpanQtdTotalEncontrada").innerHTML) + result.length;
        
        QtdResult("PedidosVenda",result.length);
        threecols("tablePedidosVenda",result);
        
        /*
        result.forEach(element => {
            let row = document.createElement('tr');
            let col_1 = document.createElement('td');
            col_1.style.textDecoration = "underline";
            col_1.classList.add("link-danger");
            col_1.innerHTML = "#" + element.SalesOrderID;
            let col_2 = document.createElement('td');
            col_2.innerHTML = element.MaterialName;
            let col_3 = document.createElement('td');
            col_3.innerHTML = 'Qtd: ' + element.Quantity + ' pç';
            row.appendChild(col_1);
            row.appendChild(col_2);
            row.appendChild(col_3);
            document.getElementById("tablePedidosVenda").appendChild(row);
        });
        */
        
    }).catch(console.error);

    //PURCHASE
    doGet('http://localhost:3000/purchase?q='+ filtro).then((result) => {
        document.getElementById("SpanQtdTotalEncontrada").innerHTML = parseInt(document.getElementById("SpanQtdTotalEncontrada").innerHTML) + result.length;
        
        QtdResult("PedidosCompra",result.length);
        threecols("tablePedidosCompra",result);
        /*
        result.forEach(element => {
            let row = document.createElement('tr');
            let col_1 = document.createElement('td');
            col_1.style.textDecoration = "underline";
            col_1.classList.add("link-danger");
            col_1.innerHTML = "#" + element.PurchaseOrderID;
            let col_2 = document.createElement('td');
            col_2.innerHTML = element.MaterialName;
            let col_3 = document.createElement('td');
            col_3.innerHTML = 'Qtd: ' + element.Quantity + ' pç';
            row.appendChild(col_1);
            row.appendChild(col_2);
            row.appendChild(col_3);
            document.getElementById("tablePedidosCompra").appendChild(row);
        });
        */
        
    }).catch(console.error);

    //MATERIALS/Produtos
    doGet('http://localhost:3000/materials?q='+ filtro).then((result) => {
        document.getElementById("SpanQtdTotalEncontrada").innerHTML = parseInt(document.getElementById("SpanQtdTotalEncontrada").innerHTML) + result.length;
        
        QtdResult("Produtos",result.length);
        twocols("tableProdutos",result);
        /*
        result.forEach(element => {
            let row = document.createElement('tr');
            let col_1 = document.createElement('td');
            col_1.style.textDecoration = "underline";
            col_1.classList.add("link-danger");
            col_1.innerHTML = "#" + element.MaterialID;
            let col_2 = document.createElement('td');
            col_2.innerHTML = element.MaterialName;
            row.appendChild(col_1);
            row.appendChild(col_2);
            document.getElementById("tableProdutos").appendChild(row);
        });
        */
    
    }).catch(console.error);

    //EQUIPAMENTS
    doGet('http://localhost:3000/equipaments?q='+ filtro).then((result) => {
        document.getElementById("SpanQtdTotalEncontrada").innerHTML = parseInt(document.getElementById("SpanQtdTotalEncontrada").innerHTML) + result.length;
        
        QtdResult("Equipaments",result.length);
        twocols("tableEquipaments",result);
        /*
        result.forEach(element => {
            let row = document.createElement('tr');
            let col_1 = document.createElement('td');
            col_1.style.textDecoration = "underline";
            col_1.classList.add("link-danger");
            col_1.innerHTML = "#" + element.EquipmentID;
            let col_2 = document.createElement('td');
            col_2.innerHTML = element.EquipmentName;
            row.appendChild(col_1);
            row.appendChild(col_2);
            document.getElementById("tableEquipaments").appendChild(row);
        });
        */
    }).catch(console.error);

    //WORKFORCE
    doGet('http://localhost:3000/workforce?q='+ filtro).then((result) => {
        document.getElementById("SpanQtdTotalEncontrada").innerHTML = parseInt(document.getElementById("SpanQtdTotalEncontrada").innerHTML) + result.length;
        
        QtdResult("MaoObra",result.length);
        twocols("tableMaoObra",result);
        /*
        result.forEach(element => {
            let row = document.createElement('tr');
            let col_1 = document.createElement('td');
            col_1.style.textDecoration = "underline";
            col_1.classList.add("link-danger");
            col_1.innerHTML = "#" + element.WorkforceID;
            let col_2 = document.createElement('td');
            col_2.innerHTML = element.Name;
            row.appendChild(col_1);
            row.appendChild(col_2);
            document.getElementById("tableMaoObra").appendChild(row);
        });
        */
        
    }).catch(console.error);
}

function QtdResult(tabela,resultado) {
    if(resultado == 0){
        document.getElementById("p"+ tabela).innerHTML = "(Nenhum item encontrado)"
        document.getElementById("pCentro"+ tabela).innerHTML = "nenhum item encontrado";	
    }else if(resultado == 1){
        document.getElementById("p"+ tabela).innerHTML = "(1 item encontrado)"
        document.getElementById("pCentro"+ tabela).innerHTML = "";
    }else{
        document.getElementById("p"+ tabela).innerHTML = "(" + resultado + " itens encontrados)"
        document.getElementById("pCentro"+ tabela).innerHTML = "";	
    }  
}
function twocols(table,result) {
    console.log(result)
    result.forEach(element => {
        let row = document.createElement('tr');
        let col_1 = document.createElement('td');
        col_1.style.textDecoration = "underline";
        col_1.classList.add("link-danger");
        if(table == "tableEquipaments"){
            col_1.innerHTML = "#" + element.EquipmentID;
        }else if(table == "tableMaoObra"){
            col_1.innerHTML = "#" + element.WorkforceID;    
        }else{
            col_1.innerHTML = "#" + element.MaterialID;   
        }
        let col_2 = document.createElement('td');
        if(table == "tableEquipaments"){
            col_2.innerHTML = element.EquipmentName;
        }else if(table == "tableMaoObra"){
            col_2.innerHTML = element.Name;    
        }else{
            col_2.innerHTML = element.MaterialName;       
        }
        row.appendChild(col_1);
        row.appendChild(col_2);
        document.getElementById(table).appendChild(row);
    });  
}

function threecols(table,result) {
    console.log(result)
    result.forEach(element => {
        let row = document.createElement('tr');
        let col_1 = document.createElement('td');
        col_1.style.textDecoration = "underline";
        col_1.classList.add("link-danger");
        if(table == "tablePedidosVenda"){
            col_1.innerHTML = "#" + element.SalesOrderID;
        }else{
            col_1.innerHTML = "#" + element.PurchaseOrderID;   
        }
        let col_2 = document.createElement('td');
        col_2.innerHTML = element.MaterialName;   
        let col_3 = document.createElement('td');
        col_3.innerHTML = 'Qtd: ' + element.Quantity + ' pç';
        row.appendChild(col_1);
        row.appendChild(col_2);
        row.appendChild(col_3);
        document.getElementById(table).appendChild(row);
    });
}