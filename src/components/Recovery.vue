<template>
<div>
        <Nav/>
            <div class="row contentDiv">
                <div class="col-sm-6 align-items-left content">
                    <div class="hero-content">
                        <h2>Password Recovery</h2>
                       
                            <img :src="require('@/assets/lady.png')" alt="" class="anime">
        
                    </div>
                </div> 
                 <div class="col-sm-6 form-side">
                 <div class="right-side">
                 <h4>Let's help you recover your password</h4> <br>
                   <p>We will send a link to your email to help you recover your password. Click the link to reset your password.</p> <br>
                   <form class="frm" action="" method="post">
                         <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> 
                        </div>
                        <br>
                        <button type="submit" class="btn">Send Reset Link</button> <br> <br>
                         <p>Can't remember email? <a href="#">Contact Support</a></p> 

                   </form>
                </div>
            </div>
            </div>
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
 .hero-content{
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
    /* background-color: #E5E5E5; */
    height:750px;
}
h2{
    color:#2D366A;
}

</style>