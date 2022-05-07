<script setup>

import { onUnmounted, ref, computed } from 'vue'

import useCoffees from '../composables/useCoffees';

const { coffees, lnum, mnum, mdnum, dnum, lavg, mavg, mdavg, davg } = useCoffees()

</script>
<template>
    <div class="text-center">
        <div class="bg-black text-white mt-10 rounded-full">
            <h1>Roast Count</h1>
        </div>
    <ul class="flex justify-between mt-3">
        <li class="bg-yellow-500 p-4 rounded-2xl"><span class="text-xl">Light Roasts</span><br>{{lnum}}</li>
        <li class="bg-yellow-600 p-4 rounded-2xl"><span class="text-xl">Medium Roasts</span><br>{{mnum}}</li>
        <li class="bg-yellow-800 p-4 rounded-2xl"><span class="text-xl">Medium-Dark Roasts</span><br>{{mdnum}}</li>
        <li class="bg-stone-800 p-4 rounded-2xl text-white"><span class="text-xl">Dark Roasts</span><br>{{dnum}}</li>
    </ul>
    <div class="bg-black text-white mt-10 rounded-full">
            <h1>Roast Averages</h1>
        </div>
    <ul class="flex justify-between mt-3">
        <li class="bg-yellow-500 p-4 rounded-2xl"><span class="text-xl">Light Roasts</span><br>{{ lavg.toFixed(2) }}</li>
        <li class="bg-yellow-600 p-4 rounded-2xl"><span class="text-xl">Medium Roasts</span><br>{{ mavg.toFixed(2) }}</li>
        <li class="bg-yellow-800 p-4 rounded-2xl"><span class="text-xl">Medium-Dark Roasts</span><br>{{ mdavg.toFixed(2) }}</li>
        <li class="bg-stone-800 p-4 rounded-2xl text-white"><span class="text-xl">Dark Roasts</span><br>{{ davg.toFixed(2) }}</li>
    </ul>
   </div>
</template>