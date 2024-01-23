<template>
  <div class="h-screen" id="capstone-app">
    <div class="flex justify-between">
      <div class="title flex justify-start">Bug Wars</div>
      <div class="flex justify-end content-center" id="nav">
        <button class="btns">
          <router-link v-bind:to="{ name: 'home' }">Home</router-link>
        </button>

        <button class="btns">
          <router-link
            v-bind:to="{ name: 'login' }"
            v-if="$store.state.token == ''"
            >Login</router-link
          >
        </button>

        <button>
          <router-link
            class="btns"
            v-bind:to="{ name: 'logout' }"
            v-if="$store.state.token != ''"
            >Logout</router-link
          >
        </button>

        <button class="btns">How to Play</button>
        <button class="btns">Bugs</button>
        <button class="btns">Maps</button>
        <button class="btns">Contributors</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import "./assets/tailwind.css";
</script>
