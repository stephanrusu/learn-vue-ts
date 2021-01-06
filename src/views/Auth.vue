<template>
  <div class="font-sans h-screen flex items-center justify-center">
    <div class="w-1/2 flex bg-white shadow-card min-h-login">
      <div class="flex-1 max-w-1/3 bg-indigo-400 rounded-tl-md rounded-bl-md flex items-center justify-center">
        <router-link :to="{ name: 'home' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-acme-logo w-20 h-20 stroke-current text-white"
          >
            <path d="M20 16V8" />
            <path d="M4 16V8" />
            <path d="M12 16V8" />
            <path d="M16 20V4" />
            <path d="M8 20V4" />
          </svg>
        </router-link>
      </div>
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
