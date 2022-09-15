<template>
  <div class="container">
      <div>
        <input v-model="controllerProperties.controllerInputName" />
        <input v-model="controllerProperties.controllerName" />
        <button  v-on:click="userAdd">Add</button>
      </div>
    <ul class="element"
       @click="makeActive(controller)"
       :class="{'active-module': isActive}"
       v-for="controller in temporaryNamesMassive" 
       v-bind:key="controller">
      <div class="element-container">
        <div
       class="input-output-style"
       v-for="item in temporaryElement" 
       v-bind:key="item.controllerInputName"
       v-show="item.controllerInputName && item.controllerName==controller"
       @click.stop="toggle(item)" >
       {{item.controllerInputName}}
        </div>
      </div>
      <div class="frame-style"
       v-for="contFrames in temporaryElement" 
       v-bind:key="contFrames"
       v-show="!contFrames.controllerInputName && contFrames.controllerName==controller"
       @click="toggle(contFrames)">
        {{contFrames.controllerPinNames}}
        {{contFrames.controllerId}}
      </div> 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainSection',
  data: function() {
    return {
      isActive: false,
      ControllerNamesMassive: [
        "FirstController", "SecondController"
      ],
      controllerProperties: [
        {controllerInputName: "1", controllerName: "FirstController"},
        {controllerInputName: "2", controllerName: "FirstController"},
        {controllerId: "A464DIO", controllerName: "FirstController"},
        {controllerPinNames: "D10000-D54544",controllerName: "FirstController"},
        {controllerInputName: "1", controllerName: "SecondController"},
        {controllerInputName: "2", controllerName: "SecondController"},
        {controllerId: "A49AIO", controllerName: "SecondController"},
        {controllerPinNames: "A10000-A54544",controllerName: "SecondController"},
      ] 
    }
  },
  methods: {
    toggle: function(e) {
      console.log(e); 
      },
    makeActive: function() {
      this.isActive=!this.isActive;
      //this.classList.add('activeModule'); 
      },
    userAdd: function() {
      this.controllerProperties.push({
        controllerInputName: this.controllerProperties.controllerInputName,
        controllerName: this.controllerProperties.controllerName,
       }
      );
      if(this.ControllerNamesMassive.indexOf(this.controllerProperties.controllerName) == -1) {
      this.ControllerNamesMassive.push(this.controllerProperties.controllerName)
      console.log(this.controllerProperties);
      }
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
    },
    //noInputsMassive () {
      //for (let j=1; j<this.controllerProperties.length;j++){
       // if (this.controllerProperties.controllerInputName=false) {
       //   return this.controllerProperties
       // }
     // }
    //}
  }
  
}
</script>

<style>
.container {
display: -ms-flexbox;
display: flex;
flex-wrap: wrap;
}

.element-container {
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
} 
.main-section-style{
    background: #DDDDDD;
}
/*controller inputs style*/
.input-output-style {
    width: 50px;
    height: 16px;
    background: #EAEAEA;
    border-radius: 4px;
    margin: 4px;
    text-align: center;
}
.active-module {
    border: 3px solid rgba(0, 95, 184, 0.8);
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;  
}
ul.element{
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

.frame-style{
    width: 112px;
    height: 20px;
    border-bottom: 1px solid #EAEAEA;
    text-align: center;
 
}
</style>