<template>
<div class="container">
  <!--menu sections rendering-->
  <ul class ="menu dropdown-content"
    v-for="(component) in temporaryUpperMenuSection" 
    v-bind:key="component.sectionName"
    @click="toggle(component)"
  >
    {{component.sectionName}}
  <!--rendering points of menu-->
      <li class="dropdown-content"
        v-show="component.open && item.ident==component.ident"
        v-for="item  in temporarySectionsData" 
        v-bind:key="item.names">
      {{item.names}}
      </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data: function () {
    return {
  //names of menu sections
    upperMenuSection: [
      {sectionName: "settings", ident:"settings"},
      {sectionName: "functions", ident:"functions"}
  ],
  //names of menu points with their idents
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
//this method render menu points  
    toggle: function (e){
      e.open=!e.open;
      console.log(e);
      console.log(e.open);
    },
//just testing method
    testing: function(e) {
      console.log(e);
    } 
},
  computed: {
//temporary arrays for rendering
    temporaryUpperMenuSection () {
      return this.upperMenuSection
    },
    temporarySectionsData (){
      return this.sectionsData
    } 
  }
}
</script>

<style>
  div.container {
position: relative;
  }
  li.dropdown-content{
  position: relative;
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
