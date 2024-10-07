<template>
  <router-view />
</template>


<script>
//import { RouterLink, RouterView } from 'vue-router';
//import SignUp from './components/SignUp.vue';
export default {
  name: 'App',
}

</script>



<!-- Start of Styling here -->

<style>
body {
  padding: 0;
  margin: 0;
  background-color: rgb(253, 253, 253);
}

#theSignupForm {
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
}

.loginPageElements, .signUpPageElements {
  position: absolute !important;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  top: 15%;
  border: 1px solid rgb(233, 233, 233);
  padding: 10px 0;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  
}

.theSignupForm input,
.theLoginForm input,
.addNewResto input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid rgb(164, 123, 1);
  color: rgb(69, 69, 69);
}

.theSignupForm button,
.theLoginForm button,
.addNewResto button {
  width: 300px;
  height: 40px;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  background: rgb(158, 82, 1);
  margin: auto;
  display: block;
  border-radius: 5px;
}

.theSignupForm button:hover,
.theLoginForm button:hover,
.addNewResto button:hover {
  background: rgb(173, 89, 0);

}

.logo {

  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  padding-bottom: 10px;

}

.h1-signUp,
.h1-login {
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family:Arial, Helvetica, sans-serif;
  padding: 10px;
}

.theSignupForm p,
.theLoginForm p {
  width: 300px;
  height: 40px;
  outline: none;
  cursor: pointer;
  margin: auto;
  display: block;
  border-radius: 5px;
  padding-top: 10px;
  text-align: center;
}

.addNewResto {
  margin-top: 20px;
}
</style>