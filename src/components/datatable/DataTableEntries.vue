<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <template v-for="column in columns">
          <th
            :key="column.key"
            scope="col"
            class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ column.name }}
          </th>
        </template>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <template v-for="entry in entries.slice(60, 70)">
        <tr :key="entry.id">
          <td class="p-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="text-sm font-medium text-gray-700">{{ entry.title }}</div>
              <!-- <div class="text-sm text-gray-500">jane.cooper@example.com</div> -->
            </div>
          </td>
          <td class="p-4 whitespace-nowrap">
            <div class="text-sm text-gray-700">{{ entry.director }}</div>
          </td>
          <td class="p-4 whitespace-nowrap text-sm text-gray-500">{{ entry.year }}</td>
          <td class="p-4 whitespace-nowrap space-x-2">
            <template v-for="(genre, index) in entry.genres">
              <span
                :key="index"
                class="py-1 px-2 inline-flex text-xs font-semibold rounded-sm bg-cyan-100 text-cyan-500"
              >
                {{ genre }}
              </span>
            </template>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import { initialDataTable } from "@/constants/initialDataTable";
export default {
  name: "DataTableEntries",
  data() {
    return {
      columns: [
        {
          name: "Title",
          key: "title",
        },
        {
          name: "Director",
          key: "director",
        },
        {
          name: "Year",
          key: "year",
        },
        {
          name: "Genre",
          key: "genre",
        },
      ],
      entries: initialDataTable,
    };
  },
};
</script>
