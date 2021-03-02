<template>
  <div>
    <div class="flex items-center p-4 bg-gray-50 hover:bg-gray-50 group relative rounded-md cursor-pointer">
      <div class="absolute w-1 left-0 bottom-0 top-0 rounded-sm bg-cyan-500 shadow-medium" />
      <div
        class="hover:z-10 flex items-center justify-center rounded shadow-small w-10 h-8 text-md bg-indigo-400 text-white font-medium cursor-default group-hover:shadow-large ease-in transition-shadow"
      >
        BC
      </div>
      <div class="ml-4 font-medium tracking-wide space-y-1">
        <div class="text-sm text-gray-800">Bianca Cruz</div>
        <div class="text-xs text-gray-600 w-64 overflow-hidden overflow-ellipsis whitespace-nowrap">
          Muffin apple pie cherry pie gingerbread
        </div>
      </div>
      <div class="ml-auto text-xs border rounded-md text-gray-400 bg-white p-1 w-16 text-center">42 sec</div>
    </div>
    <div class="flex items-center p-4 bg-white hover:bg-gray-50 group relative rounded-md cursor-pointer">
      <div
        class="hover:z-10 flex items-center justify-center rounded shadow-small w-10 h-8 text-md bg-orange-400 text-white font-medium cursor-default group-hover:shadow-large ease-in transition-shadow"
      >
        MR
      </div>
      <div class="ml-4 font-medium tracking-wide space-y-1">
        <div class="text-sm text-gray-600">Mia Russo</div>
        <div class="text-xs text-gray-400 w-64 overflow-hidden overflow-ellipsis whitespace-nowrap">
          Pastry chupa chups liquorice chocolate cupcake
        </div>
      </div>
      <div class="ml-auto text-xs border rounded-md text-gray-400 bg-gray-50 p-1 w-16 text-center">12 min</div>
    </div>
    <div class="flex items-center p-4 bg-white hover:bg-gray-50 group relative rounded-md cursor-pointer">
      <div
        class="hover:z-10 flex items-center justify-center rounded shadow-small w-10 h-8 text-md bg-green-400 text-white font-medium cursor-default group-hover:shadow-large ease-in transition-shadow"
      >
        CS
      </div>
      <div class="ml-4 font-medium tracking-wide space-y-1">
        <div class="text-sm text-gray-600">Cameron Simmons</div>
        <div class="text-xs text-gray-400 w-64 overflow-hidden overflow-ellipsis whitespace-nowrap">
          Candy canes candy fruitcake lollipop danish toffee powder.
        </div>
      </div>
      <div class="ml-auto text-xs border rounded-md text-gray-400 p-1 w-16 text-center bg-gray-50">2 hours</div>
    </div>
    <div class="flex items-center p-4 bg-white hover:bg-gray-50 group relative rounded-md cursor-pointer">
      <div
        class="hover:z-10 flex items-center justify-center rounded shadow-small w-10 h-8 text-md bg-blue-400 text-white font-medium cursor-default group-hover:shadow-large ease-in transition-shadow"
      >
        ZR
      </div>
      <div class="ml-4 font-medium tracking-wide space-y-1">
        <div class="text-sm text-gray-600">Zoey Ryan</div>
        <div class="text-xs text-gray-400 w-64 overflow-hidden overflow-ellipsis whitespace-nowrap">
          Cheesecake icing cheesecake pie sesame snaps cake.
        </div>
      </div>
      <div class="ml-auto text-xs border rounded-md text-gray-400 p-1 w-16 text-center bg-gray-50">2 hours</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListUsers",
};
</script>
