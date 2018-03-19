<template>
  <div class="pokemon-links">
    <a v-for="poke in listPokemon" @click="switchPokemon(poke.name.toLowerCase())">{{ poke.name }}</a>
  </div>
</template>

<script>
export default {
    name: 'PokemonLinks',
    props: ['listPokemon'],
    methods: {
        switchPokemon: function(pokemon) {
            this.$emit('switch', pokemon);
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700|Nunito:600');
    .pokemon-links {
        font-family: Cinzel Decorative, sans-serif;
        margin: 40px;
    }
    .pokemon-links a {
        padding: 0 25px;
        color: #68c8b7;
        font-size: 18px;
        text-decoration: none;
        text-transform: capitalize;
        cursor: pointer;
    }
    .pokemon-links a.active {
        color: white;
    }
</style>

