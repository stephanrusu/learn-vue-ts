<template>
  <div v-frag>
    <data-table-pagination>
      <div class="flex flex-col py-4">
        <div class="align-middle inline-block min-w-full shadow-card border-b border-gray-200 sm:rounded-lg">
          <data-table-entries />
        </div>
      </div>
    </data-table-pagination>
    <div class="hidden">sanity check</div>
  </div>
</template>

<script>
import DataTableEntries from "./DataTableEntries.vue";
import DataTablePagination from "./DataTablePagination.vue";
export default {
  name: "DataTableInformation",
  components: { DataTableEntries, DataTablePagination },
};
</script>
