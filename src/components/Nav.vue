<template>
  <div class="nav">
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
                        
                         <button class="button-nav" type="button"><router-link to="/signup" class="btn-link">Create Vendor Account</router-link></button>
                    </ul>
                </div>
            </div> 
        </nav>
  </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ml-auto{
    float: right;
    margin-left: 350px;
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
.btn-link{
  color: white;
  text-decoration: none;
}

.brandname{
    color:#2D366A;
}

.nav-link{
    color: gray;
}
.custom-nav{
  background-color: white;
  width: 84.6%;
}

</style>
