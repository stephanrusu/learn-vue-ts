<template>
  <div
    class="bg-indigo-400 hover:z-10 flex items-center justify-center rounded shadow-small px-2 py-1 text-md text-white font-medium cursor-default"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "UserAvatar",
};
</script>
