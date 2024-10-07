<template>
    <div class="nav">
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
}

.nav a {
    float: left;
    color: rgb(253, 249, 244);
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background-color: rgb(232, 231, 231);
    color: black;
}
</style>