<template>
        <!--temporary elements, testing adding controller-->
        <div>
        <input v-model="controllerProperties.controllerInputName" />
        <input v-model="controllerProperties.controllerName" />
        <button  v-on:click="userAdd">Add</button>
      </div>
    <!--controller rendering-->
    <ul class="element"
       v-for="(controller) in temporaryNamesMassive" 
       v-bind:key="controller"
       @click="makeActive(controller)"
       :class="{'active-module': controller.isActive}">
      <div class="element-container">
    <!--inputs rendering-->
        <div
       class="input-output-style"
       v-for="item in temporaryElement" 
       v-bind:key="item.controllerInputName"
       v-show="item.controllerInputName && item.controllerName==controller.controllerName"
       @click.stop="toggle(item)" >
       {{item.controllerInputName}}
        </div>
      </div>
    <!--rendering controller info-->
      <div class="frame-style"
       v-for="contFrames in temporaryElement" 
       v-bind:key="contFrames"
       v-show="!contFrames.controllerInputName && contFrames.controllerName==controller.controllerName"
       @click="toggle(contFrames)">
        {{contFrames.controllerSmth}}
        {{contFrames.controllerPinNames}}
        {{contFrames.controllerId}}
      </div> 
    </ul> 
</template>

<script>
    
export default {
    name: 'ControllerComponent',
    data: function() {
    return {
    //array with controller names
      ControllerNamesMassive: [
        {controllerName:"FirstController"},
        {controllerName:"SecondController"}
      ],
    //array with controller info
      controllerProperties: [
        {controllerInputName: "1", controllerName: "FirstController"},
        {controllerInputName: "2", controllerName: "FirstController"},
        {controllerId: "A464DIO", controllerName: "FirstController"},
        {controllerSmth: "AO00000", controllerName: "FirstController"},
        {controllerPinNames: "D10000-D54544",controllerName: "FirstController"},
        {controllerInputName: "1", controllerName: "SecondController"},
        {controllerInputName: "2", controllerName: "SecondController"},
        {controllerId: "A49AIO", controllerName: "SecondController"},
        {controllerSmth: "AO00001", controllerName: "SecondController"},
        {controllerPinNames: "A10000-A54544",controllerName: "SecondController"},
      ] 
    }
  },
  methods: {
  //temporary testing methods
    toggle: function(e) {
      console.log(e); 
      },
    makeActive: function(e) {
      e.isActive=!e.isActive;
      //this.classList.add('activeModule');
      console.log(e.isActive); 
      },
  //adding new controllers method
    userAdd: function() {
      this.controllerProperties.push({
        controllerInputName: this.controllerProperties.controllerInputName,
        controllerName: this.controllerProperties.controllerName,
       }
      );
      
      if (this.ControllerNamesMassive.indexOf(this.controllerProperties.controllerName) == -1) {
      this.ControllerNamesMassive.push({
        controllerName: this.controllerProperties.controllerName})
      console.log(this.controllerProperties);
      }
    }          
  },
  computed: {
  //temporary arrays for rendering
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