<template>
<div>
 <router-view/>
</div>
 

</template>

<script>
export default {
   
}
</script>
<style>
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
.container{
     box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;

}
@media only screen and (max-width: 800px){
  
}

/* --------media query forless than 600 screen size------ */
@media only screen and (max-width: 600px){
  .row{
      display: flex;
      text-align: center;
  }
  .anime, .iconText{
    display: none;
  }

}


</style>
