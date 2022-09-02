export const fetchEquipamentos = async () => {
    try {
      const response = await fetch('/equipamentos');
      const apiJson = response.json();
      return apiJson;
    } catch (error) {
      console.log(error)
      return error;
    }
  };
  export const fetchMateriais= async () => {
    try {
      const response = await fetch('/materiais');
      const apiJson = response.json();
      return apiJson;
    } catch (error) {
      console.log(error)
      return error;
    }
  };
  export const fetchPedidoCompra = async () => {
    try {
      const response = await fetch('/pedidoCompra');
      const apiJson = response.json();
      return apiJson;
    } catch (error) {
      console.log(error)
      return error;
    }
  };
  export const fetchPedidoVenda = async () => {
    try {
      const response = await fetch('/pedidoVenda');
      const apiJson = response.json();
      return apiJson;
    } catch (error) {
      console.log(error)
      return error;
    }
  };
  export const fetchMaoObra = async () => {
    try {
      const response = await fetch('/maoObra');
      const apiJson = response.json();
      return apiJson;
    } catch (error) {
      console.log(error)
      return error;
    }
  };