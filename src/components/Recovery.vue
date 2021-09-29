<template>
<div class="body-bg">
    <section class="hero-area">
        <Nav/>
        <div class="container">
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
                        <button type="submit" class="btn butn">Send Reset Link</button> <br> <br>
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
import Nav from '../components/Nav.vue'
export default {
    name: 'Login',
    components:{
    Nav
  }
}
</script>

<style>
.form-label{
    float: left;
}
.right-side, .hero-content{
    text-align: left;
    padding-top: 50px;
    
}
.content{
      background: rgba(226, 231, 255, 0.16);
    text-align: left;
    
    
}
img{
    height: 410px;
}

.form-control, .container{
    background-color: white;  
}

.form-side{
background-color: rgba(225, 225, 255, 0);
 
}
.form-check-label{
    float: left;
}

.body-bg{
    background-color: #E5E5E5;
    height:750px;
}
h2{
    color:#2D366A;
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


</style>