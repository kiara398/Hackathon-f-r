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
                    <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">How it works</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Paymera Vendors</a></li>
                </ul>
                <div class="ml-auto">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="/Login.vue" class="nav-link item">Login</a></li>
                         <button class="button-nav" type="button">Create Vendor Account</button>
                    </ul>
                </div>
            </div>
            
        </nav>
    </div>
   
            <div class="row">
                <div class="col-sm-6 align-items-left content">
                    <div class="hero-content">
                        <h2>Let's help you recover your password</h2>
                        <p>Receive and track payements from your shoppers, all on your dashboard. Login to access your dashboard.
                            <img :src="require('@/assets/lady.png')" alt="">
                        </p>
                    </div>
                </div> 
                 <div class="col-sm-6 form-side">
                 <div class="right-side">
                 <h4>Recover your Password</h4> <br>
                   <p>We will send a link to your email to help you recover your password. Click the link to reset your password.</p> <br>
                   <form action="" method="post">
                         <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> 
                        </div>
                        <br>
                        <button type="submit" class="butn">Send Reset Link</button> <br> <br>
                         <p>Can't remember email? <a href="#">Contact Support</a></p> 

                   </form>
                </div>
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
}
.right-side, .hero-content{
    text-align: left;
    margin-top: 50px;
}
.content{
     background-color: rgb(250, 252, 253);
     /* background:linear-gradient(360deg, rgb(250, 252, 253), rgb(243, 247, 250)); */
    text-align: left;
}
img{
    height: 410px;
}

.form-control, .container{
    background-color: white; 
   
}
.custom-nav{
background: #FFFFFF;

}
.form-side{
background-color: #ffffff;
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
    height:750px;
   
}
h2{
    color:#2D366A;
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
    margin-left: 60px;
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