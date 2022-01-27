<template>
<div>
     <Nav/>
            <div class="row contentDiv">
                <div class="col-md-6 sm-12 content">
                    <div class="hero-content">
                        <h2>Welcome Back</h2>
                        <p>Receive and track payements from your shoppers, all on your dashboard. Login to access your dashboard.
                            <img :src="require('@/assets/Mask Group.png')" alt="" class="anime">
                        </p>
                    </div>
                </div>
                 <div class="col-md-6 sm-12">
                 <h4>Login to Vendor Account</h4>
                   <p>Enter your Login details to access your store dashboard</p>
                   <form class='frm' action="" method="post" @submit="checkForm">
                         <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <p v-if="errors.length" class="error">
                            <b>Email is required!:</b> </p>
                            <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" name="email"> 
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <p v-if="errors.length" class="error">
                            <b>password is required!:</b> </p>
                            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" name="password">
                        </div>
                         <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Keep me Logged in</label>
                        </div>
                        <p>Forgot Password? <router-link to="/recover">Recover Password</router-link></p>
                        
                        <button type="submit" class="btn">Login</button> <br> <br>
                         <p>Have no account yet? <router-link to="/signup">Create Account</router-link></p> 
                   </form>
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
  },
   data() {
       return{
    errors: [],
    email: null,
    password: null
       }
    
  },
  methods:{
    checkForm: function (e) {
      if (this.email && this.password) {
        return true;
      }

      this.errors = [];

      if (!this.email || !this.password) {
        this.errors.push('fields required.');
      }

      e.preventDefault();
    }
  }
}
    

</script>

<style>
.form-label{
    float: left;
}


 h4{
    margin-top: 40px;
    text-align: center;
}
.frm{
    padding: 5%;
}

.form-check-label{
    float: left;
}

h2{
    color:navy;
}
.contentDiv{
    max-width: 100%;
}

.btn{
    background-color: #2D366A;
    color: white;
    width: 50%;
    border-radius: 8px;
    padding: 5px 20px;
}


</style>