<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";

const { isAuthenticated, login } = useAuth();

const username = ref("");
const password = ref("");

const router = useRouter();

const loggingIn = () => {
    login(username.value, password.value);
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
            <button type="submit" @submit.prevent="loggingIn" class="bg-blue-900 text-white py-3">Login</button>
        </form>
        </div>
    </div>
</template>