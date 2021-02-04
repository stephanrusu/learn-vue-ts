<template>
  <div v-frag>
    <data-table-information />
  </div>
</template>

<script>
import DataTableInformation from "./datatable/DataTableInformation.vue";
export default {
  name: "DataTablePage",
  components: { DataTableInformation },
};
</script>
