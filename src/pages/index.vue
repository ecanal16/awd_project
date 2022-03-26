<script setup>
import {ref} from 'vue';

import {coffees} from '../composables/useCoffees';

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
        <li v-for="coffee in coffees" :key="coffee.id" class="bg-yellow-200 w-full mt-8 p-4">{{ coffee.Brand }} &emsp; &emsp; &emsp; {{ coffee.Name }} &emsp; &emsp; &emsp; {{ coffee.Roast }} &emsp; &emsp; &emsp; {{ coffee.Rating }}</li>
    </ul>
   </div> 
</template>