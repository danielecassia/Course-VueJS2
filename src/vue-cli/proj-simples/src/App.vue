<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'"> Alterar </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      titulo: 'Teste de DATA usando VUE JS'
    }
  }
}
</script>

<style>
#app {
  background-color: cornflowerblue;
  color: #fff;
}
</style>


