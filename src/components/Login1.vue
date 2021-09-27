<template>
<div class="body-bg">
    <h4>LOGIN</h4>
    <section class="hero-area">
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
   
            <div class="row">
                <div class="col-sm-6 align-items-left content">
                    <div class="hero-content">
                        <h2>Welcome Back</h2>
                        <p>Receive and track payements from your shoppers, all on your dashboard. Login to access your dashboard.
                            <img :src="require('@/assets/Mask Group.png')" alt="">
                        </p>
                    </div>
                    <!-- <div>
                        
                    </div> -->
                </div>
                 <div class="col-sm-6 form-side">
                 <h4>Login to Vendor Account</h4>
                   <p>Enter your Login details to access your store dashboard</p>
                   <form action="" method="post">
                       <form>
                         <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> 
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                         <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Keep me Logged in</label>
                        </div>
                        <p>Forgot Password? <router-link to="/recover">Recover Password</router-link></p>
                        
                        <button type="submit" class="butn">Login</button> <br> <br>
                         <p>Have no account yet? <router-link to="/signup">Create Account</router-link></p> 
</form>
                   </form>
                </div>
            </div>
        </div>
    </section>
   
</div> 
   
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style>
.form-label{
    float: left;
    /* font: size 1px; */
}
.nav-item{
    text-decoration: none;
}
p, h4{
    text-align: left;
}
.content{
    /* background-color: #E2E7FF; */
     background-color: rgb(250, 252, 253);
    text-align: left;
}
img{
    height: 410px;
}
/* .container{
    background-color:#ffffff;
} */
.custom-nav{
background: #FFFFFF;
box-shadow: 0px 2px 58px rgba(0, 0, 0, 0.05);
}
.form-side, .form-control{
    background-color: white; 
}
.brandname{
    color:#2D366A;
}
.form-check-label{
    float: left;
}
.nav-link{
    color: gray;
}
.body-bg{
    background-color: #E5E5E5;
    height:623px;
   
}
h2{
    color:navy;
}
.ml-auto{
    float: right;
    margin-left: 350px;
}
.butn{
    background-color: #2D366A;
    color: white;
    height: 36px;
    width: 400px;
    left: 0px;
    top: 729.16650390625px;
    border-radius: 8px;
    padding: 5px;
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

</style>