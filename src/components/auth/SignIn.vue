<template>
  <div class="flex flex-row flex-wrap space-x-4 h-full">
    <div class="flex-auto bg-indigo-400 max-w-1/2 shadow-tiny"></div>
    <div class="flex-auto max-w-1/2 flex items-center justify-center">
      <div class="bg-white px-4 py-8 shadow-card rounded-md w-3/4">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            class="focus:border-indigo-300 mt-2 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-small-2"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            class="focus:border-indigo-300 mt-2 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-small-2"
          />
        </div>
        <div class="flex flex-row items-center justify-between">
          <div class="text-xs text-gray-600">Forgot your password ?</div>
          <button
            type="button"
            class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>
