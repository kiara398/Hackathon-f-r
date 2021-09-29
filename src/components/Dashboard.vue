<template>
<div class="container">
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
        <div class="search-wrapper">
            <input type="text" v-model="search" placeholder="Search item.."/> 
            <div class="icon">
                <fas icon="user-circle"/> 
                Quennette Onyekachi
                </div> 
    </div>
    <div class="dash-body">
        <h5>Hey, Queennette</h5>
        Ready to get paid Faster?
        <div class="container">
            <div class="row">
            <div class="col-8">
                <div class="rect1">
                <h5>Account Balance</h5> 
               <h3>N 0.00 <button class="btn btn1">Add New Item</button></h3>
                </div>
            </div>
            <div class="col-4">
                <div class="rect2">
                </div>
            </div>
</div>
<div class="contents">
        <p>You currently do not have any products listed. <br> Kindly add items to your inventory to start <br> receiving payements</p>
        <button class="btn butn"><router-link to="/scan" class="btn-link">New Item </router-link></button>
    </div>
        </div> 
    </div>
  </div>
</div>
</div>
    
</template>

<script> 

import Sidebar from '../components/Sidebar.vue'
export default {
    components:{
        Sidebar
    }
    
}
</script>

<style scoped>
.dashboard{
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: rgb(250, 252, 253);
    height: 100vh;
    width: 85vw;
    margin: auto;
    margin-top: 40px;
}

.content{
    background-color: white;
}
.rect1{
position: absolute;
width: 580px;
height: 100px;
color: white;
padding: 10px;
background: #2D366A;
border-radius: 10px;
}
.rect2{
position: absolute;
width: 300px;
height: 100px;
padding: 10px;
background: #F5A623;
border-radius: 10px;
}
input{
    width: 40%;
    display: block;
    border-radius: 4px;
    padding: 5px;
    border: none;
    background: #E5E5E5;
    margin: 20px;
}
.contents{
    margin-top: 220px;
}
.btn-link{
    color: white;
    text-decoration: none;
}
.container{
    margin-top: 40px;
}
.butn{
    background-color: #2D366A;
    color: white;
    height: 40px;
    width: 150px;
    margin-left: 410px;
    margin-top: 40px;
    border-radius: 8px;
    padding: 5px;
}
.btn1{
    background-color: white;
    color: black;
    border-radius: 8px;
    float: right;
    font-size: medium;
    padding: 0;
    height: 30px;
    width: 200px;
}
.dash-body{
    padding: 15px;
    height: 90%;
    box-shadow: 0px -15px 22px rgba(0, 0, 0, 0.03);
}
.search-wrapper{
width: 100%;
height: 70px;
background: #FFFFFF;
box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.03);
}
.icon{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 231px;
height: 40px;
left: 1000px;
top: 55px;
}

</style>