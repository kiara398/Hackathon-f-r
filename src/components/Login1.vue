<template>
<div class="body-bg">
    <h4>SIGN UP</h4>
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
                        <li class="nav-item"><a href="#" class="nav-link item">Login</a></li>
                         <button class="button-nav" type="button">Create Vendor Account</button>
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
                        </p>
                    </div>
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
                        <p>Forgot Password? <a href="#">Create Account</a></p>
                        
                        <button type="submit" class="butn">Login</button> <br> <br>
                         <p>Have no account yet? <a href="#">Create Account</a></p> 
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
p, h4{
    text-align: left;
}
.content{
    /* background-color: #E2E7FF; */
     background-color: rgb(250, 252, 253);
    text-align: left;
}
.custom-nav, .container{
    background-color:#ffffff;
   
        /* background-color: rgb(250, 252, 253); */
}
.form-side, .form-control{
    background-color: white; 
}
.brandname{
    color: black;
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
    height: 56px;
    width: 488px;
    left: 0px;
    top: 729.16650390625px;
    border-radius: 8px;
    padding: 8px;
}
.button-nav{
      background-color: #2D366A;
    color: white;
      border-radius: 8px;
      margin-left: 60px;
      padding: 5px;
}

</style>