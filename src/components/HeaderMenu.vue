<template>
<!--<HeaderMenu>
    <button>menu</button>
<button>info</button>
<button>howareu</button>
</HeaderMenu>

<label :model="menuStructure">
{{model.menu}}
</label>-->

    <ul class="menu">
<li>Файл</li>
<li @click="toggle"
:class="{'open': open}">Правка</li>
<li @click="toggle"
:class="{'open': open}">Вставка</li>
<li @click="toggle"
:class="{'open': open}">Вид</li>
<li @click="toggle"
:class="{'open': open}">Окно</li>
</ul>

<!--<li :class="[isFolder ? 'folder' : 'file']" :model="menuStructure">
{{model.name}}
</li>-->
</template>

<script>
export default {
  name: 'HeaderMenu',
  data: function () {
   let menuStructure={
    children: [
    {names: "menu"},
    {names: "info"},
    {names: "АААААААААААААААААААААА"}

    ]
   };
    return {
        menuStructure: menuStructure,
        open: false
    }
  },
  methods: {
 toggle: function (){
  if (this.isFolder) {
    this.open=!this.open;
  }
 }
  },
  computed: {
    isFolder: function(){
     return this.model.children && this.model.children.length;
    }
  }
  
}
</script>

<style>
  .headerMenuStyle{
    position: absolute;
  left: 0%;
  right: 0.07%;
  top: 40%;
  bottom: 0%;
  background: #FFFFFF;
  }
  
   ul.menu {
    margin: 0; /* Обнуляем значение отступов */
    padding: 0px; /* Значение полей */
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
   }
 
  ul.menu li {
    display: inline;
    margin-right: 0px;
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
