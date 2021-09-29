<template>
    <div class="sidebar">
        <div class="title">
            Paymera
        </div>
        <div class="menu-item">
            <router-link to="/dashboard" class="active"> 
            <div class="link-container">
              <fas icon="th-large"/>
                Dashboard
            </div>
            </router-link>
              <router-link to="/" class="active">
            <div class="link-container">
              <fas icon="file"/>
                Inventory
            </div>
            </router-link>
              <router-link to="/cart" class="active" >
            <div class="link-container">
             Payments
            </div>
            </router-link>
              <router-link to="/" class="active" >
            <div class="link-container">
              <fas icon="cog"/>
              Settings
            </div>
            </router-link>
              <router-link to="/" class="active" >
            <div class="link-container logout">
              <fas icon="sign-out"/>
                 Logout
            </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.sidebar{
  padding: 25px;
}
.active{
  color: rgb(68, 68, 68);
  text-decoration: none;
  padding: 25px;
}
.logout{
   color: rgb(68, 68, 68);
  text-decoration: none;
  margin-top: 100px;
}
.menu-item, .link-container{
  padding: 10px;
}
</style>