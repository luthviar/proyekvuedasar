<template>
  <div class="component-ortu">
    <h1> Ini adalah Component Ortu </h1>
    <component-anak
        data-di-anak="halo ini data dari ortu"
        @state-dari-anak="alertBindEvent"
        > 
    </component-anak>
  </div>
</template>

<script>
import ComponentAnak from "./ComponentAnak"

export default {
  name: 'ComponentOrtu',
  components: {
      ComponentAnak
  },
  methods: {
    alertBindEvent(params) {
      alert(params)
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
