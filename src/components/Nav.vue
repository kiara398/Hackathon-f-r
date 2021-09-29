<template>
  <div class="gen-nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Paymera</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Features</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">How it works</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">About Paymera</router-link>
        </li>
        <li class="nav-item">
        <router-link to="/dashboard" class="nav-link">Paymera Vendor</router-link>
        </li>
      </ul>
      <ul class="d-flex">
       <router-link to="/login" class="nav-link">Login</router-link>
         <button class="btn button-nav" type="button"><router-link to="/signup" class="btn-link">Create Vendor Account</router-link></button>
      </ul>
    </div>
  </div>
</nav>
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
.gen-nav{
  margin: auto;
  width: 84.6%;
box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;  
}

</style>
