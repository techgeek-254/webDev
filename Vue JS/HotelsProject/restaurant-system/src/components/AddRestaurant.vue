<template>
    <PageHeader />
    <h1 class="text-2xl font-bold text-center text-inherit font-sans text-amber-700">Add Restaurant</h1>
    <form class="addNewResto">
        <input type="text" name="name" placeholder="Enter Restaurant name..." v-model="restaurant.name">
        <input type="text" name="contact" placeholder="Enter contacts..." v-model="restaurant.contact">
        <input type="text" name="address" placeholder="Enter address..." v-model="restaurant.address">
        <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
    </form>
</template>

<script>
import PageHeader from './PageHeader.vue';
import axios from 'axios';

export default {
    name: 'AddRestaurant',
    components: {
        PageHeader
    },
    data() {
        return {
            restaurant: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    methods: {
        async addRestaurant() {
            console.log(this.restaurant)
            const result = await axios.post("http://localhost:3000/restaurants", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 201) {
                this.$router.push({ name: 'HomePage' })
            }
            console.warn("result", result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>



<style>
#home-h1 {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>