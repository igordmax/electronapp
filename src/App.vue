<template>
<header class="flex"> 
<HeaderMenu> </HeaderMenu>
</header>
 <div class="container">
  <div class="flex left_side_menu cd-accordion-menu">  
<TreeComponent :model="treeData"></TreeComponent>
</div>
<div class="flex main_section main-section-style" >
<MainSection></MainSection>
</div>
<div class="flex right_side_menu right-side-menu-style" >
<RightSideMenu></RightSideMenu>
</div>
</div>
</template>

<script>
//including app components
import TreeComponent from './components/TreeComponent.vue';
import HeaderMenu from './components/HeaderMenu.vue';
import RightSideMenu from './components/RightSideMenu.vue';
import MainSection from './components/MainSection.vue';
export default {
  name: 'App',
  components: {
    TreeComponent,
    HeaderMenu,
    RightSideMenu,
    MainSection
},
//including menu structure
    data: function() {
    return {
      treeData: treeData
    }
  }, 

};
//menu structure
let treeData= {

     name: "LeftMenu",           
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