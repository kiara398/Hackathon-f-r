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
  <div class="card" style="width: 8rem;">
  <img src="" class="card-img-top" alt="">
  <div class="card-body">
    <h4>Shop</h4>
    <p class="card-text">We built the simplest, most reliable and quickest way to make <br> payements for your business</p>
  </div>
  </div>
  <div class="card" style="width: 8rem;">
  <img src="" class="card-img-top" alt="">
  <div class="card-body">
  <h4>Scan</h4>
    <p class="card-text">We built the simplest, most reliable and quickest way to make <br> payements for your business</p>
  </div>
  </div>
  <div class="card" style="width: 8rem;">
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
.body{
  background: white;
  width: 85%;
  /* min-height: 100%; */
  margin: auto;
  padding-top: 60px;
  box-shadow: 0px -15px 22px rgba(0, 0, 0, 0.03);
}
.rect, .features{
   background: white;
  width: 100%;
  height: 300px;
  margin: auto;
  padding-top: 60px;
  box-shadow: 0px -15px 22px rgba(0, 0, 0, 0.03);
}
span{
  color: orangered;
}

body{
    background-color: #E5E5E5;
   min-height: 100%;
   margin: 0;
   padding: 0;
   width: 100%;
   
}
h1{
    color:#2D366A;
}



</style>