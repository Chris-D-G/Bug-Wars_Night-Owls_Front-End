<template>
  <div class="home">
    <div>
      <p class="text-center text-2xl font-bold">
        Please wait... the <a class="underline decoration-sky-500">bugs</a> have
        taken over and our website isn't done yet
      </p>
    </div>
    <div class="flex flex-col items-center">
      <button
        class="text-8xl text-red-600 font-bold font-outline-2 custom-font"
      >
        Start Game
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.custom-font {
  font-family: "nico-moji";
  text-align: center;
}
p {
  font-family: "Orbitron", sans-serif;
}
body {
  /* background-image: url("src/images/background_img.jpg"); */
  background-image: url("https://img.freepik.com/free-vector/blank-meadow-landscape-scene_1308-59927.jpg?w=1380&t=st=1706046728~exp=1706047328~hmac=80d2f2ee85cf717fa1b7a04f096fb35ae6b6809efbaa837f9f66ba0d7751e93a");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
