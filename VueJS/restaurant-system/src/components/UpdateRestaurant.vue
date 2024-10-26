<template>
    <PageHeader />
    <div class="updateRestoWrapper">
        <h1 class="text-2xl font-bold text-center font-sans pt-4">Update Restaurant</h1>
        <form class="addNewResto">
            <input class="rounded-md focus:bg-yellow-50" type="text" name="name" placeholder="Enter Restaurant name..."
                v-model="restaurant.name">
            <input class="rounded-md focus:bg-yellow-50" type="text" name="contact" placeholder="Enter contacts..."
                v-model="restaurant.contact">
            <input class="rounded-md focus:bg-yellow-50" type="text" name="address" placeholder="Enter address..."
                v-model="restaurant.address">

            <div class="flex flex-row justify-center items-center font-normal font-sans"  id="updateRestoBtns">
                <button type="button" @click="updateRestaurant">Update Restaurant</button>
                <button type="reset" id="resetbtn">Reset</button>

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
            const result = await axios.put("http://localhost:3000/restaurants/" + this.$route.params.id, {
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
body {
    background-image: url(../assets/backgroundImages/signupBackground.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
}


</style>