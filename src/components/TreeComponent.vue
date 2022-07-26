<template>
<li :class="[isFolder ? 'folder' : 'file']">
 
   <label id=clickToAct @click="stopClick" 
   >
          <button :class="{'open': open}"
      @click="toggle">
      <span >
      </span>
     </button>
          
      {{ model.name }} 

    </label>
    <ul v-show="open" v-if="isFolder" :class="{'open': open}">
      <TreeComponent
        v-for="(model, index) in model.children"
        :key="index"
        :model="model">
      </TreeComponent>
    </ul>
  </li>
</template>

<script>

export default {
  name: 'TreeComponent',
  props: {
    model: Object
  },
  data: function() {
    return {
      open: true
    };
  },
  computed: {
    isFolder: function(){
     return this.model.children && this.model.children.length;
    }
  },
  methods: {
    stopClick: function (e) {
      e.preventDefault();
    },
    toggle: function () {
      if (this.isFolder) {
        this.open= !this.open;
      }
    }
  },
 

};

</script>


<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto");
  /*src: url("\src\components\fonts\SegoeUIVF.ttf") format("ttf");*/
  font-weight: 600;
}

.cd-accordion-menu {
padding: 0px 0px 4px;
position: relative;
left: 0%;
right: 79.5%;
top: 0.15%;
bottom: 0%;
/*Light/Background/Fill Color/Solid Background/Base */
background: #F3F3F3;
font-family: "Roboto";
font-weight: 600;
font-size: 14px;
line-height: 20px;
}

ol, ul, li {
	list-style: none;
  padding: 0px;
}

.cd-accordion-menu li {
  user-select: none;
  
}

.cd-accordion-menu label, .cd-accordion-menu a {
  position: relative;
  display: block;
  padding: 18px 18px 18px 45px;
  /*box-shadow: inset 1px 1px #000;
  
  color: rgba(0,0,0,.8);*/
}

.cd-accordion-menu label::before,
.cd-accordion-menu label::after,
.cd-accordion-menu a::after {
  /* icons */
content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.cd-accordion-menu label {
  cursor: pointer;
}

.cd-accordion-menu button {     
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;       
}

/*adding icons*/
.cd-accordion-menu li.folder >label> button span::before {
  content: "\1433";
  font-family: 'Font Awesome 5 Free', 'Font Awesome 5 Brands';
  font-weight: 900; 
}
.cd-accordion-menu li.folder >label> button.open span::before {
 
   content: "\142F";
  font-family: 'Font Awesome 5 Free', 'Font Awesome 5 Brands';
  font-weight: 900; 
}

.cd-accordion-menu ul label:hover{
  background: rgba(218,235,247,1);
}
.cd-accordion-menu ul a:hover {
  background: rgba(218,235,247,1);
}
.cd-accordion-menu ul label:active{  

  background: rgba(0, 0, 0, 0.0373);
/* Light/Fill Color/Subtle/Secondary */

border: 1px solid rgba(0, 0, 0, 0.0373);
border-radius: 4px;
}

.cd-accordion-menu > li:last-of-type > label,
.cd-accordion-menu > li:last-of-type > a,
.cd-accordion-menu > li > ul > li:last-of-type label,
.cd-accordion-menu > li > ul > li:last-of-type a {
  box-shadow: none;
}

</style>
