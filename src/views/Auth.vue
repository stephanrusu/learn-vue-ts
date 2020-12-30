<template>
  <div class="flex-auto h-full font-sans">
    <transition name="fade" mode="out-in" :duration="300" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "Auth",
};
</script>
