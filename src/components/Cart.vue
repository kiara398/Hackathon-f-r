<template>
    <div class="container">
           <div class="search-wrapper">
            <input type="text" class="search" v-model="search" placeholder="Search item.."/>
    </div>
    <div class="info">
        <fas icon="arrow-left"/>
    Back to dashboard
     <h3>No Items Added</h3>
<p>
 You currently do not have any product here. <br> You can search to add to your cart or scan each product to add here.
</p>
    </div>
    <button class="btn butn">Start Scanning</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.search{
    width: 60%;
    display: block;
    border-radius: 4px;
    padding: 5px;
    border: none;
    background: #E5E5E5;
    margin: 20px;
}
.search-wrapper{
width: 100%;
height: 70px;
padding-top: 5px;
background: #FFFFFF;
box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.03);
}
.container{
    width: 50%;
    height: 600px;
}
</style>