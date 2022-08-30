<template>
    <div class="container">
    <div class="element">
      <div class="elementContainer">
        <div
       class="inputOutputStyle"
       v-for="item in controllerProperties" 
       v-bind:key="item.controllerInputName1"
       @click="toggle(item)" >
       {{item.controllerInputName1}}
        </div> 
        
      </div>
    </div>
    <div class="element"> 2nd little element
      {{InputNameFilter}}
    </div>
    </div>
</template>

<script>
export default {
  name: 'MainSection',
  data: function() {
    return {
  controllerProperties: {
        controllerInputName1: "1" ,
        controllerInputName2: "2" ,
        controllerOutputName: "com1",
        controllerName: "sdfsdds",
        controllerPinNames: "D10000-D54544"
    } 
    }
  },
  methods: {
    toggle: function(e) {
      console.log(e); 
      }         
  },
  computed: {
    InputNameFilter () {

      return this.controllerProperties.controllerInputName
    }
  }
  
}
</script>

<style>
.container {
display: -ms-flexbox;
display: flex;
}

.elementContainer {
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
} 
.main-section-style{
    background: #DDDDDD;
}
.inputOutputStyle {
    width: 50px;
    height: 16px;
    background: #EAEAEA;
    border-radius: 4px;
}

div.element{
    position: relative;
    /*width: 132px;*/
    height: 132px;
    min-width: 132px;
    max-width: 132px;
    margin:30px 25px;
    background: #FFFFFF;
    border-radius: 8px;
    border-color: rgba(0, 0, 0, 0.16); 
    /*text-align: center;
    vertical-align: middle;
    line-height: 132px;*/
}
</style>