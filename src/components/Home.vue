<template>
<div class="body-bg">
        <div class="container">
               <div class="container-fluid custom-nav">
        <nav class="navbar navbar-expand-lg">
            <a href="#" class="navbar-brand brandname">Paymera
            </a>
            <span class="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu"><i class="bi bi-list"></i></span>
            <div class="collapse navbar-collapse" id="navbar-menu">
                <ul class="navbar-nav left-nav">
                    <li class="nav-item"><router-link to="/" class="nav-link">Features</router-link></li>
                    <li class="nav-item"><router-link to="/" class="nav-link">How it works</router-link></li>
                    <li class="nav-item"><router-link to="/" class="nav-link">About Paymera</router-link></li>
                    <li class="nav-item"><router-link to="/dashboard" class="nav-link">Paymera Vendor</router-link></li>
                </ul>
                <div class="ml-auto">
                    <ul class="navbar-nav">
                        <li class="nav-item"><router-link to="/login" class="nav-link">Login</router-link></li>
                        
                         <button class="button-nav" type="button"><router-link to="/signup">Create Vendor Account</router-link></button>
                    </ul>
                </div>
            </div> 
        </nav>
       </div>
        
    </div>
<div class="body">
  <h1>Make And Accept <br> Payement In <span>One Scan</span> </h1>
  <p>We built the simplest, most reliable and quickest way to make <br> payements for your business</p>
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style>
.custom-nav, .container{
background: #FFFFFF;

}
.body{
  background: white;
  width: 85%;
  height: 800px;
  margin: auto;
  padding-top: 60px;
  /* box-shadow: 0px -15px 22px rgba(0, 0, 0, 0.03); */
 
}
span{
  color: orangered;
}

.brandname{
    color:#2D366A;
}

.nav-link{
    color: gray;
}
.body-bg{
    background-color: #E5E5E5;
    height:750px;
   
}
h1{
    color:#2D366A;
}


.button-nav{
      background-color: #444f8f;
    color: white;
      border-radius: 8px;
      margin-left: 60px;
      margin-top: 5px;
      padding: 0;
      height: 30px;
      width: 200px;
}
.ml-auto{
    float: right;
    margin-left: 350px;
}
</style>