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
 <option v-for="item in items1" v-bind:key="item.name1">{{item.name1}}</option>
 </select>
    </li>
    <li class="rightMenu">
        <div> название селектора</div>
 <select :model="selectedItem">
 <option v-for="item in items2" v-bind:key="item.name2">{{item.name2}}</option>
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
        {name:'name1', id:12342},
        {name:'name1', id:256442},
        {name:'name1', id:234768},
       ],
       items1:[
        {name1:'name2', id:234768},
        {name1:'name2', id:234768},
        {name1:'name2', id:234768},
        {name1:'name2', id:234768},
       ],
       items2:[
        {name2:'name3', id:234768},
        {name2:'name3', id:234768},
        {name2:'name3', id:234768},
        {name2:'name3', id:234768},
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