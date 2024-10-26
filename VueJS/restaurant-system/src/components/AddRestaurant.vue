<template>
    <PageHeader />
    <div class="addRestoPage">
        <h1 class="text-2xl font-bold text-center font-sans pt-4">Add Restaurant</h1>
        <form class="addNewResto">
            <input class="rounded-md focus:bg-yellow-50" type="text" required name="name"
                placeholder="Enter Restaurant name..." v-model="restaurant.name">
            <input class="rounded-md focus:bg-yellow-50" type="text" name="contact" required
                placeholder="Enter contacts..." v-model="restaurant.contact">
            <input class="rounded-md focus:bg-yellow-50" type="text" name="address" required
                placeholder="Enter address..." v-model="restaurant.address">
            <div class="flex flex-row justify-center items-center font-normal font-sans" id="addRestoBtns">
                <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
                <button id="resetbtn" type="reset">Reset</button>

                <RouterLink id="cancelbtnRouter" to="/HomePage">
                    <button id="cancelbtn">Cancel</button>
                </RouterLink>
                
            </div>
        </form>
    </div>
    <html>

    <body>

    </body>

    </html>
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



<style scoped>
body {
    background-image: url(../assets/backgroundImages/signupBackground.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
}

/*#home-h1 {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}*/
</style>