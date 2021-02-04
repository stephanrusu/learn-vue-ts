<template>
  <div class="px-4 pb-4 font-sans">
    <data-table-page />
  </div>
</template>

<script>
import DataTablePage from "../components/DataTablePage.vue";
export default {
  name: "DataTable",
  components: { DataTablePage },
};
</script>
