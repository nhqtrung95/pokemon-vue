<template>
  <div class="card pokemon-card" :class="pokemon.name.toLowerCase()">
    <div class="card-image">
      <div class="card-image-container">
        <img :src="pokemon.imageSource">
      </div>
    </div>
    <div class="card-info">
      <div class="card-name">{{ pokemon.name }}</div>
      <div class="card-hp">hp {{ pokemon.hp }}</div>
      <div class="card-detail">
        <div class="card-content card-type">
          <div class="value">{{ pokemon.type }}</div>
          <div class="tag is-warning">Type</div>
        </div>
        <div class="card-content card-weight card-center">
          <div class="value">{{ pokemon.weight }} lbs</div>
          <div class="tag is-warning">Weight</div>
        </div>
        <div class="card-content card-height">
          <div class="value">{{ pokemon.height }} m</div>
          <div class="tag is-warning">Height</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PokemonDetail',
    props: ['pokemon'],
  }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700|Nunito:600');
  .card {
    font-family: Cinzel Decorative, sans-serif;
    border-radius: 20px;
    color: white;
    width: 272px;
    margin: auto;
    font-weight: 700;
  }
  .charizard.card {
        border: 1px solid gold;
  }
  .blastoise.card {
        border: 1px solid #72d0fb;
  }
  .card-image {
    height: 185px;
    position: relative;
    margin-bottom: 20px;
  }
  .card-image-container {
      position: absolute;
  }
  .blastoise .card-image-container {
      top: -10px;
      width: 200px;
      left: 40px;
  }

  .charizard .card-image-container {
    top: -85px;
    width: 285px;
  }

  .card-image-container img {
    max-width: 100%;
  }

  .card-info {
    padding: 10px;
  }

  .card-name {
    text-align: center;
    font-size: 25px;
    letter-spacing: 0.2em;
    font-weight: 700;
    text-transform: capitalize;
  }

  .card-hp {
    font-size: 16px;
  }

  .card-hp:before {
    content: '';
    display: block;
    margin: auto;
    width: 120px;
    height: 5px;
    border-radius: 5px;
    margin: 5px auto;
  }
  .charizard .card-hp:before {
      background: gold;
  }
  .blastoise .card-hp:before {
      background: #72d0fb;
  }

  .card-detail {
    display: flex;
    justify-content: space-between;
  }

  .card-content {
    padding: 0.75em;
  }

  .card-center {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }

  .tag.is-warning {
    border-radius: 30px;
    color: black;
    font-size: 10px;
    padding: 5px 10px;
    margin: 4px 0 0 0;
  }
  .charizard .is-warning {
      background: gold;
  }
  .blastoise .is-warning {
      background: #72d0fb;
  }
</style>
