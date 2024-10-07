<template>
    <PageHeader />
    <h1 class="text-2xl font-bold text-center text-inherit font-sans text-amber-700">Hello {{ name }}, welcome home</h1>
    <table id="restaurant">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>

        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td id="update">
                <router-link :to="'/update-restaurant/' + item.id">Update</router-link>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
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


<!-- Stylign for this page starts here-->
<style scoped>
#home-h1 {
    text-align: center;
}

#restaurant {
    border-collapse: collapse;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    table-layout: auto;
    margin-top: 20px;
    font-family:Arial, Helvetica, sans-serif;
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
    font-size: medium;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #0a0a0acd;
    color: white;
}

#restaurant tr:nth-child(even) {
    background-color: #f2f2f2;
}

#restaurant tr:hover {
    background-color: #ddd;
}
button{
    border: 1px solid rgb(248, 41, 41);
    font-size: 14px;
    margin-left: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background:rgb(255, 227, 227);
    color: red;
    padding: 2px 8px;
    border-radius: 5px;
}
button:hover{
    cursor: pointer;
}
#update a{
    font-size: 14px;
    border: 1px solid rgb(28, 237, 28);
    margin-left: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: rgb(215, 254, 215);
    color: black;
    padding: 2px 8px;
    border-radius: 5px;
    
}
</style>