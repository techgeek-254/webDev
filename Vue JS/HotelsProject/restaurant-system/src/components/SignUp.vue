<template>
    <div class="signUpPageElements">
    <img class="logo" src="../assets/mainLogo.jpg" alt="faeva_foods_logo">
    <h1 class="h1-signUp">Sign Up</h1>
    <div class="theSignupForm">
        <input type="text" v-model="name" placeholder="Enter your Name">
        <input type="email" v-model="email" placeholder="Enter your Email">
        <input type="password" v-model="password" placeholder="Enter your Password">
        <button class="signupbtn" v-on:click="signUp">Sign Up</button>
        <p>
            <RouterLink to="/login">Login</RouterLink>
        </p>
    </div>
    </div>
    <html>
        <body>
            
        </body>
    </html>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            //console.warn("signup",this.name,this.email,this.password)
            let result = await axios.post("http://localhost:3000/users",
                {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
            console.warn(result);
            if(result.status==201)
            {
                //alert("Sign Up Successful");
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({ name: 'HomePage' })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    }
}
</script>


<!-- START OF STYLING FOR THIS PAGE ONLY -->
<style scoped>
body{
    background-image: url(../assets/backgroundImages/signupBackground.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    
}
</style>