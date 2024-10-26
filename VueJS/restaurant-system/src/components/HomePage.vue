<template>
    <PageHeader />

    <html>

    <body>
        <div id="homePageElements">
            <h1 class="text-2xl font-bold text-center font-sans pt-3 text-white">Hello {{ name }}, welcome to the Home
                Page.</h1>
            <table id="restaurant">
                <tr>
                    <th>ID</th>
                    <th>Restaurant Name</th>
                    <th>Telephone Contacts</th>
                    <th>Location / Address</th>
                    <th>Actions</th>

                </tr>
                <tr v-for="item in restaurants" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.contact }}</td>
                    <td>{{ item.address }}</td>
                    <td id="update">
                        <router-link :to="'/update-restaurant/' + item.id">Update</router-link>
                        <button @click="deleteRestaurant(item.id)">Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    </body>

    </html>
</template>

<script>
import PageHeader from './PageHeader.vue';
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurants: [],
        }
    },
    components: {
        PageHeader
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restaurants/" + id);
            console.warn(result)
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }
            let result = await axios.get("http://localhost:3000/restaurants");
            console.warn(result)
            this.restaurants = result.data;
        }
    },
    async mounted() {
        this.loadData();
    }
}
</script>


<!-- Styling for this page starts here-->

<style scoped>
body {
    background-image: url(../assets/backgroundImages/signupBackground.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
}

#restaurant {
    border-collapse: collapse;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    table-layout: auto;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    background-color: rgba(255, 255, 255, 0.767);
    box-shadow: rgba(253, 253, 253, 0.743) 5px 5px 15px;
}

#restaurant,
th,
td {
    border: 0.5px solid rgb(0, 14, 86);
    border-collapse: collapse;
    padding: 8px;
}

#restaurant th {
    font-weight: bold;
    font-size: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #000000;
    color: white;
    border: 1px solid rgb(88, 88, 88);
}

#restaurant tr:nth-child(even) {
    background-color: #f2f2f2;
}

#restaurant tr:hover {
    background-color: #f9f69ff0;
    transition: 0.8s;
    cursor: pointer;
}

button {
    border: 1px solid rgb(255, 114, 114);
    font-size: 14px;
    margin-left: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background: rgb(255, 227, 227);
    color: rgb(252, 53, 53);
    padding: 2px 8px;
    border-radius: 5px;
}

button:hover {
    cursor: pointer;
}

#update a {
    font-size: 14px;
    border: 1px solid rgb(28, 237, 28);
    margin-left: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: rgb(215, 254, 215);
    color: rgb(51, 134, 4);
    padding: 2px 8px;
    border-radius: 5px;

}
</style>