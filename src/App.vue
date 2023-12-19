<template>
  <div class="bg-gray-500 h-screen" id="capstone-app">
    <div id="nav">
      <router-link
        class="text-white font-bold py-2 px-4 ml-3 rounded"
        v-bind:to="{ name: 'home' }"
        >Home</router-link
      >&nbsp;|&nbsp;
      <router-link
        class="text-white font-bold py-2 px-4 rounded"
        v-bind:to="{ name: 'login' }"
        v-if="$store.state.token == ''"
        >Login</router-link
      >
      <router-link
        class="text-white font-bold py-2 px-4 rounded"
        v-bind:to="{ name: 'logout' }"
        v-if="$store.state.token != ''"
        >Logout</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import "./assets/tailwind.css";
</script>
