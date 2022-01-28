<template>

    <div class="dashboard">
        <Sidebar/>
        <div class="content">
        <div class="search-wrapper">
            <input type="text" v-model="search" placeholder="Search item.."/> 
            <div class="icon">
                <fas icon="user-circle"/> 
              Winnie Kiara
                </div> 
    </div>
    <div class="dash-body">
        <h5>Hey, Winnie</h5>
        Ready to get paid Faster?
        <br>
            <div class="row">
            <div class="col-md-8 rect1">
                <h5>Account Balance</h5> 
               <h3>N 0.00 <button class="btn1">Add New Item</button></h3>
                </div>
            <div class="col-md-4 rect2" >
            </div>
             </div> 
<div class="contents">
        <p>You currently do not have any products listed. <br> Kindly add items to your inventory to start <br> receiving payements</p>
        <button class="btn"><router-link to="/scan" class="btn-link">New Item </router-link></button>
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
     /* box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    margin: auto;
    margin-top: 2%; */
}

.content{
    background-color: white;
}
.btn{
    background-color: #2D366A;
    color: white;
    width: 10%;
    border-radius: 8px;
    padding: 1%;
    width: auto;
   
}
.rect1{
height: 100px;
color: white;
padding: 10px;
background: #2D366A;
border-radius: 10px;
margin-top: 10px;
}
.rect2{
height: 100px;
padding: 10px;
background: #F5A623;
border-radius: 10px;
margin-top: 10px;
}
input{
    width: 40%;
    /* display: block; */
    border-radius: 4px;
    padding: 5px;
    border: none;
    background: #E5E5E5;
    margin: 2%;
}
.contents{
    margin-top: 12%;
    padding-bottom: 18%;
    text-align: center;
}
.btn-link{
    color: white;
    text-decoration: none;
}
.container{
    margin-top: 40px;
}

.btn1{
    background-color: white;
    color: black;
    border: none;
    border-radius: 8px;
    float: right;
    font-size: medium;
    padding: 1%;
    height: auto;
    width: 30%;
}
.dash-body{
    padding: 15px;
    height: 90%;
    box-shadow: 0px -15px 22px rgba(0, 0, 0, 0.03);
}
.search-wrapper{
width: 100%;
display: flex;
justify-content: space-evenly;
flex-direction: row;
height: 70px;
background: #FFFFFF;
box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.03);
}
.icon{
padding: 2%;
}

</style>