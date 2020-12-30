<template>
  <div class="flex flex-row flex-wrap h-screen">
    <div class="flex-auto bg-white max-w-1/2 flex items-center justify-center">
      <div class="w-3/4 flex flex-col">
        <div class="font-bold text-2xl mb-10 text-center">Hello</div>
        <div class="mb-6">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            class="focus:border-indigo-300 mt-2 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-small-2"
          />
        </div>
        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <input
            id="email"
            type="email"
            name="email"
            class="focus:border-indigo-300 mt-2 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-small-2"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            class="focus:border-indigo-300 mt-2 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-small-2"
          />
        </div>
        <div class="mb-6">
          <label for="comfirm-password" class="block text-sm font-medium text-gray-700">Comfirm Password</label>
          <input
            id="comfirm-password"
            type="password"
            name="comfirm-password"
            class="focus:border-indigo-300 mt-2 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-small-2"
          />
        </div>
        <div class="flex flex-row items-center justify-end">
          <button
            type="button"
            class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
    <div class="flex-auto bg-indigo-400 max-w-1/2 flex flex-col items-center justify-center">
      <div class="text-white text-xl font-medium mb-6">Already have an account ?</div>
      <router-link
        :to="{ name: 'sign-in' }"
        class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small border-solid border-2 border-white ease-in transition-colors hover:bg-gray-50 hover:text-indigo-500"
      >
        Sign in
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>
