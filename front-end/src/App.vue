<template>
  <div id="app">
    <div class="container">

      <div class="row mb-4">
        <div class="col-12 p-0">
          <img src="@/assets/logo_multisearch.png" alt="">
          <div class="input-group mb-3">
            <input type="text" class="form-control" ref="input-search">
            <div class="input-group-append pointer" @click="search()">
              <span class="input-group-text">
                <icon-search></icon-search>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-auto p-0">
          <small class="text-muted">Foram encontrados {{ 14 }} resultados:</small>
        </div>
      </div>

      <template v-if="loading === false">
        <div class="mb-5" v-for="(table, key) in tables" :key="key">
          <div class="row py-2 border rounded">
            <strong class="col-auto m-0">{{ table.name }}</strong>
            <small class="col-auto ml-auto text-muted">{{ table.items.length > 0 ? `(${table.items.length} itens encontrados)` : '(nenhum item encontrado)' }}</small>
          </div>
          <div class="row border rounded">
            <table class="table m-0" v-if="table.items.length > 0">
              <tr v-for="(item, key) in table.items" :key="key">
                <td v-for="(number, key) in dwaojdawopdawdk(item)" :key="key">
                  {{ number }}
                </td>
              </tr>
            </table>
            <div class="col-12 my-3" v-else>
              <small class="col-auto ml-auto text-muted text-center">nenhum item encontrado</small>
            </div>
          </div>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import IconSearch from '@/Icons/Search'
import Requests from '@/Requests.js'

export default {
  name: 'App',
  components: {
    IconSearch
  },
  data: () => {
    return {
      loading: false,
      tables: [
        {
          name: 'Pedidos de Venda',
          items: [
            { id: '#2000', name: 'Mesa Retangular', qtd: '20' },
            { id: '#2000', name: 'Mesa Retangular', qtd: '20' },
            { id: '#2000', name: 'Mesa Retangular', qtd: '20' },
            { id: '#2000', name: 'Mesa Retangular', qtd: '20' },
            { id: '#2000', name: 'Mesa Retangular', qtd: '20' },
          ]
        },
        {
          name: 'Pedidos de Venda',
          items: [
            { id: '#2000', name: 'Mesa Retangular', qtd: '20' },
            { id: '#2000', name: 'Mesa Retangular', qtd: '20' },
          ]
        },
         {
          name: 'Pedidos de Venda',
          items: [
          ]
        },
      ]
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.loading = true
      const term = this.$refs['input-search'].value || null
      Promise.all([Requests.equipments(term), Requests.materials(term), Requests.purchaseOrders(term), Requests.salesOrders(term), Requests.workforce(term)]).then(([...response]) => {
        this.tables = response.map(res => res.data)
      }).finally(() => {
        this.loading = false
      }) 
    },
    dwaojdawopdawdk(item) {
      return Object.values(item)
    }

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.pointer {
  cursor: pointer;  
}

@import './assets/styles/_bootstrap.scss';
@import './assets/styles/_variables.scss';
</style>
