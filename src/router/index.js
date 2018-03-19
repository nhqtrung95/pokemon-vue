import Vue from 'vue'
import Router from 'vue-router'
import PokemonList from '@/components/PokemonList'
import PokemonDetail from '@/components/PokemonDetail'
import PokemonLinks from '@/components/PokemonLinks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PokemonList',
      component: PokemonList

    },
    {
      path: '/Detail/:pokemonId',
      name: 'pokemonDetail',
      component: PokemonDetail
    },
    {
      path: '/links',
      name: 'PokemonLinks',
      component: PokemonLinks
    }
  ]
})
