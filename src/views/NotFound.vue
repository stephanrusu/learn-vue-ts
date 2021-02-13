<template>
  <div class="relative h-screen w-full">
    <div class="flex flex-col justify-center w-full items-center h-1/2">
      <div class="flex flex-row items-center divide-x-2 divide-gray-600">
        <div class="text-gray-600 text-2xl pr-4">404</div>
        <div class="text-gray-500 text-xl pl-4">Not found</div>
      </div>
    </div>
    <div class="text-center">
      <router-link :to="{ name: 'home' }" class="text-sm text-indigo-600 font-medium tracking-wide hover:underline">
        Go home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoud",
};
</script>
