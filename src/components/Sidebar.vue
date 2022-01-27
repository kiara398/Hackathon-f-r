<template>
    <div class="sidebar">
        <div class="title">
            Paymera
        </div>
        <div class="menu-item">
            <router-link to="/dashboard" class="active"> 
            <div class="link-container">
              <fas icon="th-large"/>
                <p class="iconText">Dashboard</p>
            </div>
            </router-link>
              <router-link to="/" class="active">
            <div class="link-container">
              <fas icon="file"/>
                <p class="iconText"> Inventory </p>
            </div>
            </router-link>
              <router-link to="/cart" class="active" >
            <div class="link-container">
              <fas icon="beer"/>
             <p class=""> Payments </p>
            </div>
            </router-link>
              <router-link to="/" class="active" >
            <div class="link-container">
              <fas icon="cog"/>
               <p class="iconText">Settings </p>
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
  padding: 15%; 
}
.active{
  color: rgb(68, 68, 68);
  text-decoration: none;
}
.logout{
   color: rgb(68, 68, 68);
  text-decoration: none;
  margin-top: 100px;
}
 .link-container{
  padding: 8%;
  justify-content: space-evenly;
}
</style>