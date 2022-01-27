<template>
<div>
     <Nav/>
         <div class="row contentDiv">
                <div class="col-sm-6 align-items-left content">
                    <div class="hero-content">
                        <h2>Fastest Payement For Your Business</h2>
                        <p>Receive and track payements from your shoppers, all on your dashboard. <br> Create an account to get started.
                            <img :src="require('@/assets/team work.png')" alt="" class="anime">
                        </p>
                    </div>
                </div>
                 <div class="col-sm-6 form-side">
                   <h4>Create Account</h4>
                   <p>Fill your business information in the required fields</p>
                   <form class="frm" action="/registerUser" method="post"  @submit="checkForm">
                        <div class="mb-3">
                            <label for="fullname" class="form-label">Full Names</label>
                            <p v-if="errors.length" class="error">
                            <b>full name is required!:</b> </p>
                            <input type="text" class="form-control" name="fullName" v-model="fullName"> 
                        </div>
                         <div class="mb-3">
                            <label for="businessname" class="form-label">Business Name</label>
                             <p v-if="errors.length" class="error">
                            <b>Business name is required!:</b> </p>
                            <input type="text" class="form-control" name="shopName" v-model="shopName"> 
                        </div>
                         <div class="mb-3">
                            <label for="phone" class="form-label">Phone Number</label>
                               <p v-if="errors.length" class="error">
                            <b>Phone number is required!:</b> </p>
                            <input type="number" class="form-control" name="phoneNumber" v-model="phoneNumber"> 
                        </div>
                         <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                              <p v-if="errors.length" class="error">
                            <b>Email is required!:</b> </p>
                            <input type="email" class="form-control" name="email" v-model="email"> 
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <p v-if="errors.length" class="error">
                            <b>password is required!:</b> </p>
                            <input type="password" class="form-control" v-model="password" name="password">
                        </div>
                         <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">By signing up, you agree to Paymera Terms of use and privacy policy</label>
                        </div> <br />
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">I would like to receive promotional emails and offers from Paymera</label>
                        </div>
                        
                        <button type="submit" class="btn">Create Vendor Account</button>
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
    fullName: null,
    shopName: null,
    phoneNumber: null,
    email: null,
    password: null
       }
    
  },
  methods:{
    checkForm: function (e) {
      if (this.fullName && this.shopName && this.phoneNumber && this.email && this.password) {
        return true;
      }

      this.errors = [];

      if (!this.fullName || !this.shopName || !this.phoneNumber || !this.email || !this.password) {
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
p, h4,h2{
    text-align: center;
}
.content{
     background: rgba(226, 231, 255, 0.16);
    text-align: center;
    
}
 .container{
    background-color:#ffffff;
}
.form-side{
    padding-bottom: 10px;
    background-color: rgba(225, 225, 255, 0);
}
.form-control{
    background-color: rgba(225, 225, 255, 0);
}

.body-bg{
    /* background-color: #E5E5E5; */
    background-color: white;
}
h2{
    color:rgb(2, 27, 12);
}
.error{
    color: rgb(211, 9, 9);
    font-weight: lighter;
}

.butn{
    background-color: #2D366A;
    color: white;
    /* height: 36px;
    width: 400px;
    left: 0px;
    top: 729.16650390625px; */
    border-radius: 8px;
    padding: 5px;
}

img{
    height: 100vh;
    width: 100%;
}

</style>