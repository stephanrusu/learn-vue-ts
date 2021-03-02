<template>
  <div class="px-4 py-4 font-sans h-screen flex flex-col">
    <message-page />
  </div>
</template>

<script>
import MessagePage from "../components/MessagePage.vue";
export default {
  name: "Message",
  components: { MessagePage },
};
</script>
