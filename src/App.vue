<template>
  <div class="h-screen" id="capstone-app">
    <div id="nav">
      <button
        class="bg-gray-400 text-white font-bold py-2 px-4 ml-3 rounded-3xl"
      >
        <router-link v-bind:to="{ name: 'home' }">Home</router-link>
      </button>
      &nbsp;|&nbsp;
      <button class="bg-gray-400 text-white font-bold py-2 px-4 rounded-3xl">
        <router-link
          v-bind:to="{ name: 'login' }"
          v-if="$store.state.token == ''"
          >Login</router-link
        >
      </button>
      <button>
        <router-link
          class="text-white font-bold py-2 px-4 rounded"
          v-bind:to="{ name: 'logout' }"
          v-if="$store.state.token != ''"
          >Logout</router-link
        >
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
import "./assets/tailwind.css";
</script>
