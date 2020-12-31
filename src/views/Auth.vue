<template>
  <div class="font-sans h-screen flex items-center justify-center">
    <div class="w-1/2 flex bg-white shadow-card">
      <div class="flex-1 max-w-1/3 bg-indigo-400 rounded-tl-md rounded-bl-md"></div>
      <div class="flex-1 max-w-2/3 rounded-tr-md rounded-br-md">
        <transition name="fade" mode="out-in" :duration="300" appear>
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
};
</script>
