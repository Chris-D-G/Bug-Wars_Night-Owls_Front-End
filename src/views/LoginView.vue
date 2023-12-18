<template>
  <div class="bg-red-900" id="login">
    <form
      class="flex flex-grow flex-col items-center"
      v-on:submit.prevent="login"
    >
      <h1 class="text-white text-lg font-large py-2 ml-2 text-center">
        Please Sign In
      </h1>
      <div role="alert" v-if="invalidCredentials">
        Invalid username and password!
      </div>
      <div role="alert" v-if="this.$route.query.registration">
        Thank you for registering, please sign in.
      </div>
      <div class="form-input-group">
        <label
          class="ml-2 block mb-2 text-md font-medium text-white"
          for="username"
          >Username</label
        >
        <input
          class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5"
          placeholder="Username"
          type="text"
          id="username"
          autocomplete="off"
          v-model="user.username"
          required
          autofocus
        />
      </div>
      <div class="form-input-group">
        <label
          class="ml-2 block mb-2 text-md font-medium text-white"
          for="password"
          >Password</label
        >
        <input
          class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5"
          placeholder="•••••••••"
          type="password"
          id="password"
          autocomplete="off"
          v-model="user.password"
          required
        />
      </div>
      <div class="flex p-2">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign in
        </button>

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 rounded"
        >
          <router-link v-bind:to="{ name: 'register' }"> Register</router-link>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      invalidCredentials: false,
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    },
  },
};
</script>

<style scoped>
.form-input-group {
  margin-bottom: 1rem;
}
label {
  margin-right: 0.5rem;
}
</style>
