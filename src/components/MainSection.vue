<template>
    <div class="container">
    <div class="element"> little element</div>
    <div class="element"> 2nd little element</div>
    </div>
</template>

<script>
export default {
  name: 'MainSection'
}
</script>

<style>
.container {
display: -ms-flexbox;
display: flex;
}
.main-section-style{
    background: #DDDDDD;
}
div.element{
    position: relative;
    /*width: 132px;*/
    height: 132px;
    min-width: 132px;
    max-width: 132px;
    margin:30px 25px;
    background: #FFFFFF;
    border-radius: 8px;
    border-color: rgba(0, 0, 0, 0.16); 
}
</style>