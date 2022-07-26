<template>
<header style="background: #0dbbc1"> verh verh verh verh verh  verh  verh  verh  verh  verh  verh  verh  verh  verh  verh  verh  verh  verh  verh  verh  verh  verh </header>
 <div class="container">
  <div class="flex left_side_menu cd-accordion-menu">  
<TreeComponent :model="treeData"></TreeComponent>
</div>
<div class="flex main_section" style="background: #a9dd2d">
основная секция основная секция основная секция основная секция
</div>
<div class="flex right_side_menu">
pravo pravo pravo 
pravo pravo pravo
</div>
</div>
</template>

<script>

import TreeComponent from './components/TreeComponent.vue'
export default {
  name: 'App',
  components: {
    TreeComponent 
  },
    data: function() {
    return {
      treeData: treeData
    }
  }, 

};
let treeData= {

        name: "group",        
  children: [
    {
      name: "Sub Group",
      children: [{ name: "Item" }, { name: "Item" }]
    },
     {
      name: "Sub Group1",
      children: [
        { name: "Item1" }, 
        { name: "Item1", 
         children: [
           {name: "subsub"}
         ]
        }
      ]
     },
    { name: "Item" }
  ] 
                };
</script>

<style>
.container {
display: -ms-flexbox;
display: flex;
}
.flex{
  position: relative;
    width: 100%;
}
.left_side_menu {
  -ms-flex: 1 0 0;
  flex: 1 0 0;
  min-width: 200px;
  max-width: 500px;
}
.main_section{
-ms-flex: 1 0 0;
    flex: 1 0 0;
}
.right_side_menu {
  -ms-flex: 1 0 0;
  flex: 1 0 0;
  min-width: 200px;
  max-width: 500px;
}

</style>