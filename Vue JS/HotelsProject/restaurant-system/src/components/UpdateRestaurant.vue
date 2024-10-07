<template>
    <PageHeader />
    <h1 id="home-h1">Update Restaurant</h1>
    <form class="addNewResto">
        <input type="text" name="name" placeholder="Enter Restaurant name..." v-model="restaurant.name">
        <input type="text" name="contact" placeholder="Enter contacts..." v-model="restaurant.contact">
        <input type="text" name="address" placeholder="Enter address..." v-model="restaurant.address">
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import PageHeader from './PageHeader.vue';
import axios from 'axios';

export default {
    name: 'UpdateRestaurant',
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
        async updateRestaurant() {
            console.warn(this.restaurant)
            const result = await axios.put("http://localhost:3000/restaurants/"+ this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 200) {
                this.$router.push({ name: 'HomePage' })
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id)
        //console.warn(this.$route.params.id)
        console.warn(result)
        this.restaurant = result.data
    }
}
</script>



<style scoped>
#home-h1 {
    text-align: center;
    font-size: large;
}
</style>