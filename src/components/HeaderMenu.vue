<template>
<div class="container">
  <ul class ="menu dropdown-content"
    v-for="component in upperMenuSection" 
    v-bind:key="component.sectionName"
    @click="testing(component.ident)" 
  >
    {{component.sectionName}}
    <li class="dropdown-content"
      v-show="this.open"
      v-for="item in sectionsData" 
      v-bind:key="item.names">
      {{item.names}}
      </li>
  </ul>
 <!-- <div class="menu" 
    @click.prevent="toggle"
   >Файл
  <ul @click="stopClick"
   class="dropdown-content" v-show="this.open">
    <li
        @click="testing(component.ident)"  
        @mouseout="toggle"  
        v-for="component in fileSection" v-bind:key="component.names" class="dropdown-content">
        {{component.names}}
    </li>
  </ul>
  </div>
  <div class="menu" 
    @click.prevent="toggle"
    >Настройки
  <ul @click="stopClick" 
      class="dropdown-content" v-show="this.open">
    <li
        @mouseout="toggle"
        v-for="component in settingSection" 
        v-bind:key="component.names" 
        @click="testing(component.ident)" 
        class="dropdown-content">
    {{component.names}}
    </li>
  </ul>
  </div>-->  
  <!--    <div class="menu" @click="toggle">ntrcn
  <ul class="dropdown-content" v-show="this.open" :class="{'open': open}">
    <li>kzkz</li>
     <li>njgjkz</li>
  </ul>
  </div> -->

  </div>
<!--<li :class="[isFolder ? 'folder' : 'file']" :model="menuStructure">
{{model.name}}
</li>-->
</template>

<script>
export default {
  name: 'HeaderMenu',
  data: function () {
  
    return {
    open: false,
    upperMenuSection: [
      {sectionName: "settings", ident:"settings"},
      {sectionName: "functions", ident:"functions"}
  ],

    sectionsData: [
      {names: "menu", ident:"settings"},
      {names: "info", ident:"settings"},
      {names: "АААААААААААААААААААААА", ident:"settings"},
      {names: "menu1", ident:"functions"},
      {names: "info1", ident:"functions"},
      {names: "ААА1ААА1АА1АА", ident:"functions"}
  ]
    }
  },
  methods: {
 toggle: function (){
    this.open=!this.open;

 },
 // stopClick: function(e){
//e.preventDefault();
//},
stopClick: function(event){
event.stopPropagation();
},
    testing: function(e) {
console.log(e);
if (e=="settings")
//alert ('aaaaaaaaaaaaaaaaaaa')
this.open=!this.open; 
//this.addEventListener('click',e => console.log(e.target))
  } 
}
}
</script>

<style>
  div.container {
position: relative;
  }
  li.dropdown-content{
  /*ransform: scale(2)*/
  position: absolute;
  /*transform: scale(3);*/
  z-index: 1;
  /*padding-top: 16px;*/
  cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*-ms-flex: 1 0 0;
    flex: 1 0 0;*/
    border: 1px solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.0803);
    /*padding: 3px;*/
    background: #FFFFFF;
  }
  .headerMenuStyle{
    position: absolute;
  left: 0%;
  right: 0.07%;
  top: 40%;
  bottom: 0%;
  background: #FFFFFF;
  }
  
  /*div.menu*/
  ul.menu {
    margin: 0; /* Обнуляем значение отступов */
    padding: 0px; /* Значение полей */
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-flex: 1 0 0;
    flex: 1 0 0;
    border: 1px solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.0803);
    padding: 3px; 
  }
 
    ul.menu li {
    /*display: inline;
    margin-right: 0px;*/
    border: 1px solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.0803);
    padding: 3px; 
   }
   ul.menu li:hover{
  background: rgba(218,235,247,1);
}
   ul.menu li:active{
    background: rgba(0, 0, 0, 0.0373);
    /* Light/Fill Color/Subtle/Secondary */
    border: 1px solid rgba(0, 0, 0, 0.0373);
    border-radius: 4px;
   }
</style>
