<template>
<div class="body-bg">
    <h4>SIGN UP</h4>
     <Nav/>
    <section class="hero-area">
        <div class="container">
         <div class="row">
                <div class="col-sm-6 align-items-left content">
                    <div class="hero-content">
                        <h2>Fastest Payement For Your Business</h2>
                        <p>Receive and track payements from your shoppers, all on your dashboard. <br> Create an account to get started.
                            <img :src="require('@/assets/team work.png')" alt="">
                        </p>
                    </div>
                </div>
                 <div class="col-sm-6 form-side">
                   <h4>Create Account</h4>
                   <p>Fill your business information in the required fields</p>
                   <form action="" method="post">
                       <form>
                        <div class="mb-3">
                            <label for="fullname" class="form-label">Full Names</label>
                            <input type="text" class="form-control"> 
                        </div>
                         <div class="mb-3">
                            <label for="businessname" class="form-label">Business Name</label>
                            <input type="text" class="form-control"> 
                        </div>
                         <div class="mb-3">
                            <label for="phone" class="form-label">Phone Number</label>
                            <input type="number" class="form-control"> 
                        </div>
                         <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="email" class="form-control"> 
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                         <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">By signing up, you agree to Paymera Terms of use and privacy policy</label>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">I would like to receive promotional emails and offers from Paymera</label>
                        </div>
                        
                        <button type="submit" class="butn">Create Vendor Account</button>
</form>
                   </form>
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
    /* font: size 1px; */
}
p, h4{
    text-align: center;
}
.content{
    /* background-color: #E2E7FF; */
     background-color: rgb(250, 252, 253);
    text-align: center;
    
}
 .container{
    background-color:#ffffff;
}
.form-side, .form-control{
    background-color: white; 
}


.body-bg{
    background-color: #E5E5E5;
}
h2{
    color:rgb(2, 27, 12);
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

img{
    height: 510px;
    width: 110%;
}

</style>