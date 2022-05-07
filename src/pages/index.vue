<script setup>
import { onUnmounted, ref } from 'vue'

import useCoffees from '../composables/useCoffees';

const { coffees, unsubscribe, buyAgainStatusT } = useCoffees()

onUnmounted(() => {
    unsubscribe()
})
</script>

<template>
<div class="text-center">
    <div class="bg-red-300 text-center">
        <ul class="flex mx-auto space-x-10 justify-center">
            <li>Brand</li>&emsp; &emsp; &emsp;
            <li>Name</li>&emsp; &emsp; &emsp;
            <li>Roast</li>&emsp; &emsp; &emsp;
            <li>Rating</li>
        </ul>
    </div>
    
    <ul class="flex flex-col">
        <li v-for="coffee in coffees" :key="coffee.id" @click="buyAgainStatusT(coffee.id)" class="bg-blue-900 text-white w-full mt-8 p-4 hover:cursor-pointer hover:text-black hover:bg-blue-200">{{ coffee.Brand }} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; {{ coffee.Name }} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{{ coffee.Roast }} &emsp; &emsp; &emsp; &emsp; &emsp;{{ coffee.Rating }}</li>
    </ul>
   </div> 
</template>