<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";

const { isAuthenticated, login, signup, googleLogin } = useAuth();

const username = ref("");
const password = ref("");

const router = useRouter();

const loggingIn = async () => {
    await login(username.value, password.value);
    goToHome();
};

const signingUp = async () => {
    await signup(username.value, password.value);
    goToHome();
};

const google = async () => {
    await googleLogin();
    goToHome();
};

const goToHome = () => {
    if (isAuthenticated.value) {
        router.push("/");
    }
};
</script>
<template>
    <h1>Login page</h1>
    <div class="flex flex-col items-center justify-center mt-20">
        <div class="flex rounded-lg justify-center items-center">
        <img class="h-72" src="../assets/loginC.jpeg" alt="coffee clipart">
        <form @submit.prevent="loggingIn" class="flex flex-col space-y-7 p-4 bg-slate-600 h-72">
            <input type="text" v-model="username" class="border-2 rounded-xl p-3" placeholder="Username"/>
            <input type="password" v-model="password" class="border-2 rounded-xl p-3" placeholder="Password"/>
            <div class="flex space-x-2">
            <button type="submit" @submit.prevent="loggingIn" class="bg-blue-900 text-white py-3 w-1/2 ">Login</button>
            <button @click="signingUp" class="bg-blue-900 text-white py-3 w-1/2 ">Sign Up</button>
            </div>
        <button @click="google" class="bg-white rounded-xl p-1 flex justify-center hover:bg-blue-900">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google logo">
        </button>
        </form>
        </div>
    </div>
</template>