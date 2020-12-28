<template>
  <main class="shadow-card bg-white py-1 flex flex-col rounded-md">
    <div class="flex items-center justify-between py-3 px-4 border-b">
      <div class="rounded px-3 py-1 bg-blue-500 text-xs font-medium tracking-wider text-white">In Progress</div>
      <div class="text-md text-gray-800 font-medium tracking-wide">Kanban - 98t5ma5pg</div>
      <div class="flex flex-row">
        <div class="rounded-tl rounded-bl px-3 py-1 bg-cyan-400 text-xs font-medium text-white">Minor</div>
        <div class="rounded-tr rounded-br px-3 py-1 bg-red-600 text-xs font-medium text-white">Bug</div>
      </div>
    </div>
    <div class="flex flex-col py-3 px-4 border-b">
      <div class="flex items-start justify-between">
        <div>
          <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div class="text-xs text-gray-400">06 Nov 2020</div>
        </div>
        <div class="bg-teal-400 p-2 rounded shadow-small">
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
            class="feather feather-user stroke-current text-white stroke-2 w-5 h-5"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      <div class="py-4 text-md text-gray-500">
        Carrot cake chocolate bar liquorice muffin. Gummies chocolate donut marzipan lollipop. Cheesecake danish danish
        pastry cupcake. Powder icing gummi bears. Macaroon cake cookie tiramisu cheesecake toffee marzipan donut. Sweet
        marshmallow tart tiramisu wafer chocolate. Sweet gingerbread bonbon dessert jujubes sweet chupa chups pastry.
      </div>
      <div class="flex flex-row py-3">
        <button
          type="button"
          class="flex flex-1 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 items-center justify-center"
        >
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            class="feather chevron-left w-5 h-5 stroke-current text-indigo-600"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <div class="font-medium text-indigo-500">To Do</div>
        </button>
        <div class="flex-none mx-3 border"></div>
        <button type="button" class="flex flex-1 px-3 py-2 bg-cyan-50 hover:bg-cyan-100 items-center justify-center">
          <div class="font-medium text-cyan-500">In Review</div>
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            class="feather chevron-right w-5 h-5 stroke-current text-cyan-600"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "DummyCard",
};
</script>
