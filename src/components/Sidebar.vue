<template>
    <div class="sidebar">
        <div class="title">
            Paymera
        </div>
        <div class="menu-item">
            <router-link to="/" active-class="active" tag="button">
            <div class="link-container">
                Dashboard
            </div>
            </router-link>
              <router-link to="/" active-class="active" tag="button">
            <div class="link-container">
                Inventory
            </div>
            </router-link>
              <router-link to="/" active-class="active" tag="button">
            <div class="link-container">
             Payments
            </div>
            </router-link>
              <router-link to="/" active-class="active" tag="button">
            <div class="link-container">
              Settings
            </div>
            </router-link>
              <router-link to="/" active-class="active" tag="button">
            <div class="link-container">
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

</style>