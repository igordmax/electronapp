<template>
        <!--temporary elements, testing adding controller-->
        <div>
        <input v-model="moduleProperties.moduleInputName" />
        <input v-model="moduleProperties.moduleName" />
        <button  v-on:click="userAdd">Add</button>
      </div>
    <!--controller rendering-->
    <ul class="element"
       v-for="(module) in temporaryNamesMassive" 
       v-bind:key="module"
       @click="makeActive(module)"
       :class="{'active-module': module.isActive}">
      <div class="element-container">
    <!--inputs rendering-->
        <div
       class="input-output-style"
       v-for="item in temporaryElement" 
       v-bind:key="item.moduleInputName"
       v-show="item.moduleInputName && item.moduleName==module.moduleName"
       @click.stop="toggle(item)" >
       {{item.moduleInputName}}
        </div>
      </div>
    <!--rendering controller info-->
      <div class="frame-style"
       v-for="contFrames in temporaryElement" 
       v-bind:key="contFrames"
       v-show="!contFrames.moduleInputName && contFrames.moduleName==module.moduleName"
       @click="toggle(contFrames)">
        {{contFrames.moduleSmth}}
        {{contFrames.modulePinNames}}
        {{contFrames.moduleId}}
      </div> 
    </ul> 
</template>

<script>
 //let fs = require("fs");
// let text = fs.readFileSync("./src/DataArrays/test.txt");
 //let textByLine=text.split("\n")
  
export default {
    name: 'ModuleComponent',
    data: function() {
    return {
    //array with controller names
    moduleNamesMassive: [
        {moduleName:"FirstModule"},
        {moduleName:"SecondModule"}
      ],
    //array with controller info
    moduleProperties: [
        {moduleInputName: "1", moduleName: "FirstModule"},
        {moduleInputName: "2", moduleName: "FirstModule"},
        {moduleId: "A464DIO", moduleName: "FirstModule"},
        {moduleSmth: "AO00000", moduleName: "FirstModule"},
        {modulePinNames: "D10000-D54544",moduleName: "FirstModule"},
        {moduleInputName: "1", moduleName: "SecondModule"},
        {moduleInputName: "2", moduleName: "SecondModule"},
        {moduleId: "A49AIO", moduleName: "SecondModule"},
        {moduleSmth: "AO00001", moduleName: "SecondModule"},
        {modulePinNames: "A10000-A54544",moduleName: "SecondModule"},
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
      this.moduleProperties.push({
        moduleInputName: this.moduleProperties.moduleInputName,
        moduleName: this.moduleProperties.moduleName,
       }
      );
      //if (this.moduleNamesMassive.find(module => module.moduleName==this.moduleProperties.moduleName)) {
      this.moduleNamesMassive.push({
        moduleName: this.moduleProperties.moduleName})
      console.log(this.moduleProperties);
      console.log(this.moduleNamesMassive.moduleName)
      console.log(this.moduleProperties.moduleName)
      //}
    }          
  },
  computed: {
  //temporary arrays for rendering
    temporaryElement() {
      return this.moduleProperties;
    },
    temporaryNamesMassive() {
      return this.moduleNamesMassive;
    },
    InputNameFilter () {
      return this.moduleProperties.moduleInputName;
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