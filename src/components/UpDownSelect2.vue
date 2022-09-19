<template>
    <div class="ScrollSelect">
      <label 
      id="UpDownContent2" 
      class="UpDownTextSection">
      </label>
      <button
      @click="scrollUp" 
      class="UpButtonStyle">
        <div 
          style="font-size: 20px;
          margin: auto;
          text-align: center;">
        &#708;</div>
      </button>
      <button
      @click="scrollDown"
      class="DownButtonStyle">
        <div
          style="font-size: 20px;
          margin: auto;
          text-align: center;">
        &#709;</div>
       </button>
    </div>
  </template>
  
  <script>
  let i=1;
  
  export default {
    name: 'UpDownSelect2',
    data: function() {
     return{ 
      sectionsData: [10, 20, 30, 40, 50
          ]
        }       
    },
    methods: {
      scrollUp: function() {
        if (i<(this.sectionsData.length-1)){ 
        i++;
        console.log(this.sectionsData[i]);
        document.getElementById("UpDownContent2").innerHTML=this.sectionsData[i];
        }
  
      },
      scrollDown: function() {
        if (i>0) {
        i--;
        console.log(this.sectionsData[i]);
        document.getElementById("UpDownContent2").innerHTML=this.sectionsData[i];
        }
      }
    }
  }
  
  </script>
  
  <style scoped>
  
  .ScrollSelect {
      display: -ms-flexbox;
      display: flex;
      position: relative;
      height: 30px;
      width: 140px;
      border-width: 2px solid;
      border-radius: 3px;
      border-color: rgba(0, 0, 0, 0.16);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
      sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      background-color: rgba(255, 255, 255, 0.7);   
  }
  .UpDownTextSection {
      min-width: 48px;
      margin: auto;
  }
  .UpButtonStyle {
     background-color: Transparent;
     background-repeat:no-repeat;
     border: none;
     cursor:pointer;
     overflow: hidden;
     width: 16px;
     height: 16px;
     margin: 7px 10px 7px 10px;
    /* content: "\25B2";*/
  }
  
  .DownButtonStyle {
     background-color: Transparent;
     background-repeat:no-repeat;
     border: none;
     cursor:pointer;
     overflow: hidden;
     width: 16px;
     height: 16px;
     margin: 7px 10px 7px 10px; 
     /*content: "\25BC";  */ 
  }
  </style>
  