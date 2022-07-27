<template>
<ul>
    <li class="rightMenu">
        <div> название селектора</div>
 <select :model="selectedItem">
 <option v-for="item in items" v-bind:key="item.name">{{item.name}}</option>
 </select>
    </li>
    <li class="rightMenu">
        <div> название селектора</div>
 <select :model="selectedItem">
 <option v-for="item in items" v-bind:key="item.name">{{item.name}}</option>
 </select>
    </li>
    <li class="rightMenu">
        <div> название селектора</div>
 <select :model="selectedItem">
 <option v-for="item in items" v-bind:key="item.name">{{item.name}}</option>
 </select>
    </li>
    <li class="rightMenu">
        <div> название селектора</div>
 <select :model="selectedItem">
 <option v-for="item in items" v-bind:key="item.name">{{item.name}}</option>
 </select>
    </li>
 </ul>
</template>

<script>
export default {
    name: 'RightSideMenu',
    data:function() {
        return{
    items:[
        {name:'name1', id:23442},
        {name:'name2', id:12342},
        {name:'name3', id:256442},
        {name:'name4', id:234768},
       ],
       selectedItem:'поле для имени'
    }
    }
}
</script>

<style>
select {
    height: 30px;
    width: 295px;
    border-radius: 3px;
    border-color: rgba(0, 0, 0, 0.16);
    
}

li.rightMenu {
    position: relative;
    top: 1px;
    left: 1px;
    margin-bottom: 50px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
}
</style>