<template>
  <div class="flex flex-col h-full">
    <div class="font-medium text-xl mb-8 mt-auto px-4 text-gray-800">Forgot your password</div>
    <div class="px-4 space-y-4">
      <div class="">
        <label for="email" class="text-sm font-medium text-gray-500">Email address</label>
        <input
          id="email"
          type="email"
          name="email"
          class="focus:border-indigo-300 mt-2 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-small-2"
        />
      </div>
      <div class="flex flex-row items-center">
        <button
          type="button"
          class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
    <div class="bg-gray-50 p-4 border-t flex mt-auto">
      <div class="text-sm text-gray-600 mr-2">Already have an account?</div>
      <router-link :to="{ name: 'sign-in' }" class="text-sm text-indigo-600 font-medium tracking-wide hover:underline">
        Sign in
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
};
</script>
