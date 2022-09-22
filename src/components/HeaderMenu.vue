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
        v-bind:key="item.names"
        @click.stop="testing(item)"
        @mouseout="toggle(component)">
      {{item.names}}
      </li>
  </ul>
  <ul class ="menu"></ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data: function () {
    return {
  //names of menu sections
    upperMenuSection: [
      {sectionName: "Файл", ident:"Файл"},
      {sectionName: "Правка", ident:"Правка"},
      {sectionName: "Вставка", ident:"Вставка"},
      {sectionName: "Вид", ident:"Вид"},
      {sectionName: "Окно", ident:"Окно"},
      {sectionName: "Справка", ident:"Справка"},
  ],
  //names of menu points with their idents
    sectionsData: [
      {names: "menu", ident:"Файл"},
      {names: "info", ident:"Правка"},
      {names: "АААААААААА", ident:"Правка"},
      {names: "menu1", ident:"Вставка"},
      {names: "info1", ident:"Вид"},
      {names: "ААА1ААА1АА1АА", ident:"Справка"}
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

  li.dropdown-content {

  position: relative;
  z-index: 1;
  cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.0803);
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
    height: 24px;
    cursor: pointer;
    position: relative;
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

  }
 
    /*ul.menu li {
    /*display: inline;
    margin-right: 0px;*/
    /*border: 1px solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.0803);

   }*/
   ul.menu li:hover{
  background: rgba(218,235,247,1);
}
   ul.menu li:active{
    background: rgba(0, 0, 0, 0.0373);
    /* Light/Fill Color/Subtle/Secondary */
    border: 1px solid rgba(0, 0, 0, 0.0373);
    border-radius: 4px;
   }
   ul.menu:hover{
  background: rgba(218,235,247,1);
}
   ul.menu:active{
    background: rgba(0, 0, 0, 0.0373);
    /* Light/Fill Color/Subtle/Secondary */
    border: 1px solid rgba(0, 0, 0, 0.0373);
    border-radius: 4px;
   }
</style>
