const equipments = require('../data/equipments.json')
const materials = require('../data/materials.json')
const purchase_orders = require('../data/purchase_orders.json')
const sales_orders = require('../data/sales_orders.json')
const workforce = require('../data/workforce.json')

const express = require('express')
const app = express()
const port = 3000

app.get('/equipments', (req, res) => {
  res.header({ 'Access-Control-Allow-Origin': '*' })

  const obj = {}
  obj.items = equipments.filter(item => {
    for (const value of Object.values(item)) {
      if (String(value).split(' ').join('').toLocaleLowerCase().includes(req.query.term.toLocaleLowerCase())) return item
    }
  })

  obj.name = 'Equipamentos'

  res.json(obj)
})

app.get('/materials', (req, res) => {
  res.header({ 'Access-Control-Allow-Origin': '*' })

  const obj = {}
  obj.items = materials.filter(item => {
    for (const value of Object.values(item)) {
      if (String(value).split(' ').join('').toLocaleLowerCase().includes(req.query.term.toLocaleLowerCase())) return item
    }
  })

  obj.name = 'Materiais'

  res.json(obj)
})

app.get('/purchase_orders', (req, res) => {
  res.header({ 'Access-Control-Allow-Origin': '*' })

  const obj = {}
  obj.items = purchase_orders.filter(item => {
    for (const value of Object.values(item)) {
      console.log(value);
      if (String(value).split(' ').join('').toLocaleLowerCase().includes(req.query.term.toLocaleLowerCase())) return item
    }
  })

  obj.name = 'Pedidos de Compra'

  res.json(obj)

})

app.get('/sales_orders', (req, res) => {
  res.header({ 'Access-Control-Allow-Origin': '*' })

  const obj = {}
  obj.items = sales_orders.filter(item => {
    for (const value of Object.values(item)) {
      if (String(value).split(' ').join('').toLocaleLowerCase().includes(req.query.term.toLocaleLowerCase())) return item
    }
  })

  obj.name = 'Pedidos de Venda'

  res.json(obj)
})

app.get('/workforce', (req, res) => {
  res.header({ 'Access-Control-Allow-Origin': '*' })

  const obj = {}
  obj.items = workforce.filter(item => {
    for (const value of Object.values(item)) {
      if (String(value).split(' ').join('').toLocaleLowerCase().includes(req.query.term.toLocaleLowerCase())) return item
    }
  })

  obj.name = 'Mão de Obra'

  res.json(obj)

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})