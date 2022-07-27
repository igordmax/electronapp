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
<li>fffffffffff   </li>
<li>fffffffffff   </li>
<li>fffffffffff   </li>
<li>fffffffffff   </li>
<li>fffffffffff   </li>
</ul>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data: function () {
   // menuOpen: false;
   let menuStructure={
    menu: "Menu",
    info: "Info",
    howareu: "Howeareu"
   };
    return {
        menuStructure: menuStructure
    }
  },
  methods: {

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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
   }
 
  ul.menu li {
    display: inline; /* Отображать как строчный элемент */
    margin-right: 0px; /* Отступ слева */
    box-shadow: inset 1px 1px rgba(0, 0, 0, 0.0803);
    padding: 3px; /* Поля вокруг текста */
   }
</style>
