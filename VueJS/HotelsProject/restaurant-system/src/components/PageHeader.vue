<template>
    <div class="nav">
        <img class="float-left h-10 object-center items-center mt-1 mr-2 ml-1 opacity-45 pl-1 rounded-sm " src="../assets/mainLogo.jpg" alt="faeva_foods_logo">
        <RouterLink to="/HomePage">Home</RouterLink>
        <RouterLink to="/add-restaurant">Add Restaurant</RouterLink>
        <!--<RouterLink to="/update-restaurant">Update Restaurant</RouterLink>  *** NOT IN USE *** -->
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
    name: 'PageHeader',
    //Method below clears the local storage and logouts the user and redirects to the login page
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'LoginPage' })

        }
    }
}
</script>



<!--Styling for the Page header starts here-->

<style>
.nav {
    background-color: black;
    overflow: hidden;
    display: flex;
    border-bottom: 1px solid rgb(58, 58, 58);
    
}

.nav a {
    float: right;
    color: rgb(253, 249, 244);
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background-color: rgb(245, 245, 245);
    color: black;
    transition: 0.7s;
    border-radius: 1px;
    text-align: center;
}
</style>