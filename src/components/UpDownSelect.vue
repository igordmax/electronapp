<template>
  <div class="ScrollSelect">
    <label class="UpDownTextSection">dsfsdf</label>
    <button class="UpButtonStyle"></button>
    <button class="DownButtonStyle"></button>
  </div>
</template>

<script>
export default {
  name: 'UpDownSelect',
  data: function() {
   return{ 
    sectionsData: [
      {names: "10"},
      {names: "20"},
      {names: "30"},
      {names: "40"},
      {names: "50"}
        ]
      }       
  },
  methods: {
    scroll: {

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
   width: 16px;
   height: 16px;
   margin: 7px 10px 7px 10px;
   content: "\25B2";
}
.DownButtonStyle {
   width: 16px;
   height: 16px;
   margin: 7px 10px 7px 10px; 
   content: "\25BC";   
}
</style>
