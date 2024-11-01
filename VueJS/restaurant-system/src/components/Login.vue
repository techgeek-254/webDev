<template>
    <div class="loginPageElements">
        <img class="logo" src="../assets/mainLogo.jpg" alt="faeva_foods_logo">
        <h1 class="h1-login">Login</h1>
        <div class="theLoginForm">
            <input type="email" v-model="email" placeholder="Enter your Email">
            <input type="password" v-model="password" placeholder="Enter your Password">
            <button v-on:click="login" class="loginbtn">Login</button>
            <p>
                <RouterLink to="/sign-up">Sign Up</RouterLink>
            </p>
        </div>
    </div>
    <Html>

    <body>

    </body>

    </Html>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'HomePage' })
            }
            console.warn(result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    }
};
</script>

<!-- START OF STYLING FOR THIS PAGE ONLY -->

<style scoped>
body {
    background-image: url(../assets/backgroundImages/signupBackground.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: repeat;

}
</style>
