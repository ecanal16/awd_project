<template>
   <div class="bg-blue-900 text-white">
       <div class="container mx-auto flex justify-between items-center">
           <h1 class="text-3xl">Coffee Reviewer</h1>
           <nav>
               <ul class="flex space-x-4">
                   <router-link to="/"><li class="py-7 px-3 hover:cursor-pointer hover:bg-red-300">My Coffees</li></router-link>
                   <router-link to="/addC"><li class="py-7 px-3 hover:cursor-pointer hover:bg-red-300">Add a Coffee</li></router-link>
                   <router-link to="/stats"><li class="py-7 px-3 hover:cursor-pointer hover:bg-red-300">Statistics</li></router-link>
                   <router-link to="/buyAgain"><li class="py-7 px-3 hover:cursor-pointer hover:bg-red-300">Buy Again</li></router-link>
                   <router-link to="/info"><li class="py-7 px-3 hover:cursor-pointer hover:bg-red-300">Information</li></router-link>
               </ul>
           </nav>
       </div>
    </div> 
</template>