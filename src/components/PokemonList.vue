<template>
  <div>
    <pokemon-detail :pokemon="pokemonData[currentPokemon]"></pokemon-detail>
    <pokemon-links :listPokemon="pokemonData" v-on:switch="setPokemon"></pokemon-links>
  </div>
</template>

<script>
import PokemonLinks from '@/components/PokemonLinks'
import PokemonDetail from '@/components/PokemonDetail'

  const PokemonData = {
    "charizard": {
      name: 'Charizard',
      type: '🔥',
      height: '188',
      weight: '75',
      hp: '78',
      imageSource: 'http://static.pokemonpets.com/images/monsters-images-800-800/6-Charizard.png'
    },
    "blastoise": {
        name: 'Blastoise',
        type: '💧',
        height: '170',
        weight: '220',
        hp: '100',
        imageSource: 'http://static.pokemonpets.com/images/monsters-images-800-800/9-Blastoise.png'
    }
  }

export default {
  components: { PokemonLinks, PokemonDetail },
  name: 'PokemonList',
  data: function() {
    return {
      pokemonData: PokemonData,
      currentPokemon: 'blastoise'
    }
  },
  methods: {
    setPokemon: function(pokemon) {
      this.currentPokemon = pokemon;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
