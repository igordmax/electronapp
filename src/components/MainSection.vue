<template>
  <div class="container">
    <ControllerComponent></ControllerComponent>
  </div>
</template>

<script>
import ControllerComponent from './ControllerComponent.vue';
export default {
  name: 'MainSection',
  components: {
  ControllerComponent
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