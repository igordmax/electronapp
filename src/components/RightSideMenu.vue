<template>
    <div>
        <form method="post">
                         номер аккаунта : 
            <input type="text" id="name" />
            <br /><br />
                         Пароль:
            <input type="text" id="pwd" />
            <br /><br />
            <input type="button" value="Отправить" @click="submit">
        </form>
    </div>
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
        <div> название селектора 3</div>
 <select :model="selectedItem">
 <option 
     v-for="item in items2" 
     v-bind:key="item.name2"
     @click="testing(item)"
     >
     {{item.name2}}
 </option>
 </select>
    </li>
    <li class="rightMenu">
        <div> название селектора</div>
 <select :model="selectedItem">
 <option v-for="item in items" v-bind:key="item.name">{{item.name}}</option>
 </select>
    </li >
    <!--rendering updown selectors components-->
        <li class="flexRightMenuItem rightMenu">
        <div> название селектора
         <UpDownSelect1></UpDownSelect1>
        </div>
        <div> название селектора
          <UpDownSelect2></UpDownSelect2> 
        </div>
    </li>

 </ul>
</template>

<script>
 //   let file="file:///C:/vue projects/electronapp/src/DataArrays/test.txt"
//alert(fileReading(file));
//function fileReading (file)
//{
  //  var rawFile = new XMLHttpRequest();
  //  rawFile.open("GET", file, false);
  //  rawFile.onreadystatechange = function ()
  //  {
  //      if(rawFile.readyState === 4)
  //      {
 //           if(rawFile.status === 200 || rawFile.status == 0)
 //           {
 //               var allText = rawFile.responseText;
 //               alert(allText);
 //           }
 //       }
 //   }
 //   rawFile.send(null);
//}  
import axios from 'axios'       
import UpDownSelect1 from './UpDownSelect1.vue';
//import text1 from "./text.txt";
import UpDownSelect2 from './UpDownSelect2.vue';
export default {
    name: 'RightSideMenu',
    components: {
      UpDownSelect2,
      UpDownSelect1
    },
    data:function() {
        return{
//selectors info arrays
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
       
       selectedItem:'поле для имени',
      // text: text1
    }
    },
    methods: {
    testing: function(e) {
      console.log(e); 
      },
      submit: function() {
                var name = document.getElementById("name").value;
                var pwd = document.getElementById("pwd").value;
                if (name == "" || pwd == "") {
                    alert(
                        'Учетная запись и пароль не могут быть пустыми')
                } else {
                    // Отправляем данные на сервер
                    axios.post('http://127.0.0.1:3000/login', {
                            name: name,
                            pwd: pwd
                        })
                        .then(function(response) {
                            // Сервер возвращает данные ответа в случае успеха
                            alert(response.data)
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            }
        } 
    }   

</script>

<style>
.right-side-menu-style {
    background: #F3F3F3
}

select {
    height: 30px;
    width: 295px;
    border-radius: 3px;
    border-color: rgba(0, 0, 0, 0.16);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    
}

li.flexRightMenuItem {
    display: flex;
    justify-content: space-between;
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