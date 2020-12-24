import Vue from "vue";
import { format } from "date-fns";

Vue.filter("taskDate", (value) => {
  return format(new Date(value), "dd MMM yyyy");
});
