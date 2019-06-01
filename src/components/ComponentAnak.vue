<template>
  <div class="component-anak">
    <h1> ini Component Anak </h1>
    <h3> {{ dataDiAnak }} </h3>
    <button v-on:click="$emit('state-dari-anak', dataDariAnak)"> mau lempar? klik aku </button> <br/>
  </div>
</template>

<script>
export default {
  name: 'ComponentAnak',
  props: {
    dataDiAnak: String,
  },
  data() {
      return {
          dataDariAnak: 'Halo ini data dari anak ke ortu'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
