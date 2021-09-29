<template>
<div class="container">
    <div class="dashboard">
    <Sidebar/>
    <div class="content">
         <div class="search-wrapper">
            <input type="text" class="search" v-model="search" placeholder="Search item.."/>
    </div>
    <fas icon="arrow-left"/>
    Back to dashboard
    <div class="dash-body">
        <div class="container">
  <div class="row">
    <div class="col-8 left-side">
        <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Item name</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Item Category</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Quantity of Item</label>
    <div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Packs</button>
  <ul class="dropdown-menu dropdown-menu-end">
    
  </ul>
</div>
  </div>
  <div class="col-md-6">
    <label for="inputZip" class="form-label">Price per unit</label>
    <div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">NGN</button>
  <ul class="dropdown-menu dropdown-menu-end">
   
  </ul>
</div>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Quantity of Item</label>
    <div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Packs</button>
  <ul class="dropdown-menu dropdown-menu-end">
    
  </ul>
</div>
  </div>
  <div class="col-md-6">
    <label for="inputZip" class="form-label">Price per unit</label>
    <div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">NGN</button>
  <ul class="dropdown-menu dropdown-menu-end">
   
  </ul>
</div>
  </div>
  <div class="col-6">
    <button type="submit" class="btn btn-primary">Cancel</button>
  </div>
  <div class="col-6">
    <button type="submit" class="btn btn-primary">Cancel</button>
  </div>
</form>
    </div>
    <div class="col-4 right-side">
        col-4
    </div>
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
    
}

.content{
    background-color: white;
}


.search{
    width: 40%;
    display: block;
    border-radius: 4px;
    padding: 5px;
    border: none;
    background: #E5E5E5;
    margin: 20px;
}

.btn-link{
    color: white;
    text-decoration: none;
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
.left-side{
    width: 50%;
    height: 450px;
    padding: 10px;
    text-align: center;
    box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.03);
    margin-top: 30px;
     margin-left: 15px;
}
.right-side{
    width: 45%;
    height: 450px;
    padding: 10px;
    text-align: center;
    box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.03);
    margin-top: 30px;
    margin-left: 15px;
}
.dash-body{
    height: 90%;
    box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.03);
}
    /* box-shadow: 0px -15px 22px rgba(0, 0, 0, 0.03); */

.search-wrapper{
width: 970px;
height: 50px;
background: #FFFFFF;
box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.03);
}
</style>
 