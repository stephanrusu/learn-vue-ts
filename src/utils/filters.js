import Vue from "vue";
import { format } from "date-fns";

Vue.filter("taskDate", (value) => {
  return format(new Date(value), "dd MMM yyyy");
});

Vue.filter("avatarId", (value) => {
  let nameparts = value.split(" ");
  let initials = nameparts[0].charAt(0).toUpperCase() + nameparts[1].charAt(0).toUpperCase();

  return initials;
});
