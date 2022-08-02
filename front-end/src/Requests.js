import Api from '@/Api.js'

class Request {

  equipments(term) {
    return Api.get('/equipments', {
      params: {
        term
      }
    })
  }

  materials(term) {
    return Api.get('/materials', {
      params: {
        term
      }
    })
  }

  purchaseOrders(term) {
    return Api.get('/purchase_orders', {
      params: {
        term
      }
    })
  }

  salesOrders(term) {
    return Api.get('/sales_orders', {
      params: {
        term
      }
    })
  }

  workforce(term) {
    return Api.get('/workforce', {
      params: {
        term
      }
    })
  }

}

export default new Request()