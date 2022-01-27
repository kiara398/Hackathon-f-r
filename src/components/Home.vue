<template>
<div class="body-bg">
  <Nav/>
<div class="body">
  <h1>Make And Accept <br> Payement In <span>One Scan</span> </h1>
  <p>We built the simplest, most reliable and quickest way to make <br> payements for your business</p>
  <div class="rect">

</div>
<div class="features">
  <h4>Features</h4>
  <div class="card-group">
  <div class="card ">
  <img src="" class="card-img-top" alt="">
  <div class="card-body">
    <h4>Shop</h4>
    <p class="card-text">We built the simplest, most reliable and quickest way to make <br> payements for your business</p>
  </div>
  </div>
  <div class="card">
  <img src="" class="card-img-top" alt="">
  <div class="card-body">
  <router-link to="/cart" class="r-link"><h4>Scan</h4></router-link>
    <p class="card-text">We built the simplest, most reliable and quickest way to make <br> payements for your business</p>
  </div>
  </div>
  <div class="card">
  <img src="" class="card-img-top" alt="">
  <div class="card-body">
    <h4>Pay</h4>
    <p class="card-text">We built the simplest, most reliable and quickest way to make <br> payements for your business</p>
  </div>
  </div>
</div>
</div>
</div>

</div>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
  name: 'Home',
  props: {
    msg: String, 
  },
   components:{
    Nav
  }

}
</script>

<style>
.container{
background: #FFFFFF;
}
.r-link,h4{
  color: black;
  text-decoration: none;
}
.body{
  background: white;
  margin: auto;
  padding-top: 5%; ;
  box-shadow: 0px -15px 22px rgba(0, 0, 0, 0.03);
}
.rect{
   background: white;
  width: 80%;
  height: 300px;
  margin: auto;
  padding-top: 5%;
  box-shadow: 0px -15px 22px rgba(0, 0, 0, 0.03);
}
 .features{
 background: white;
  width: 100%;
  height: 800px;
  margin: auto;
  padding-top: 60px;
  box-shadow: 0px -15px 22px rgba(0, 0, 0, 0.03);
 }
span{
  color: orangered;
}

body{
 
   min-height: 100%;
   margin: 0;
   padding: 0;
   width: 100%;
   
}
h1{
    color:#2D366A;
}
.card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 124vh;
    max-height: 100vh;
    margin: 12px ;
    /* transition: .15s all ease-in-out; */
}
.card-body{
   max-width: 84vh;
    max-height: 100vh;
    margin: 12px;
}
.card-img-top{
  height: 150px;
}


</style>