<template>
  <div class="container">
      <div>
        <input v-model="controllerProperties.controllerInputName" />
        <input v-model="controllerProperties.controllerName" />
        <button  v-on:click="userAdd">Add</button>
      </div>
    <div class="element"
       v-for="controller in temporaryNamesMassive" 
       v-bind:key="controller"
       @click="makeActive(controller)" >
       {{controller}}
      <div class="elementContainer">
        <div
       class="inputOutputStyle"
       v-for="item in temporaryElement" 
       v-bind:key="item.controllerInputName"
       v-show="item.controllerInputName && item.controllerName==controller"
       @click="toggle(item)" >
       {{item.controllerInputName}}
        </div> 
      </div>
    </div>
    {{temporaryElement}}
  </div>
</template>

<script>
export default {
  name: 'MainSection',
  data: function() {
    return {
      ControllerNamesMassive: [
        "FirstController", "SecondController"
      ],
      controllerProperties: [
        {controllerInputName: "1", controllerName: "FirstController"},
        {controllerInputName: "2", controllerName: "FirstController"},
        {controllerPinNames: "D10000-D54544",controllerName: "FirstController"},
        {controllerInputName: "1", controllerName: "SecondController"},
        {controllerInputName: "2", controllerName: "SecondController"},
        {controllerPinNames: "A10000-A54544",controllerName: "SecondController"},
      ] 
    }
  },
  methods: {
    toggle: function(e) {
      console.log(e); 
      },
    makeActive: function(e) {
      console.log(e);
      //this.classList.add('activeModule'); 
      },
    userAdd: function() {
      this.controllerProperties.push({
        controllerInputName: this.controllerProperties.controllerInputName,
        controllerName: this.controllerProperties.controllerName
       }
      );
      this.$forceUpdate();
      console.log(this.controllerProperties);
    }          
  },
  computed: {
    temporaryElement() {
      return this.controllerProperties;
    },
    temporaryNamesMassive() {
      return this.ControllerNamesMassive;
    },
    InputNameFilter () {
      return this.controllerProperties.controllerInputName;
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
    margin: 4px;
    text-align: center;
}
.activeModule {
    border: 3px solid rgba(0, 95, 184, 0.8);
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;  
}
div.element{
    position: relative;
    /*width: 132px;*/
    height: 108px;
    min-width: 112px;
    max-width: 112px;
    margin:30px 25px;
    background: #FFFFFF;
    border-radius: 8px;
    border-color: rgba(0, 0, 0, 0.16); 
    /*text-align: center;
    vertical-align: middle;
    line-height: 132px;*/
}
</style>