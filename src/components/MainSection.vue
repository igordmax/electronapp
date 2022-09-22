<template>
  <div class="container">
    <ModuleComponent></ModuleComponent>
  </div>
</template>

<script>
import ModuleComponent from './ModuleComponent.vue';
export default {
  name: 'MainSection',
  components: {
    ModuleComponent,
  }, 
}
</script>

<style>
.container {
display: -ms-flexbox;
display: flex;
flex-wrap: wrap;
}
</style>