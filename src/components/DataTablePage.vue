<template>
  <div v-frag>
    <data-table-header />
    <data-table-information />
  </div>
</template>

<script>
import DataTableHeader from "./datatable/DataTableHeader.vue";
import DataTableInformation from "./datatable/DataTableInformation.vue";
export default {
  name: "DataTablePage",
  components: { DataTableInformation, DataTableHeader },
};
</script>
