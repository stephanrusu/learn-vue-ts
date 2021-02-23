<template>
  <div v-frag>
    <message-header />
    <message-container />
  </div>
</template>

<script>
import MessageContainer from "./message/MessageContainer.vue";
import MessageHeader from "./message/MessageHeader.vue";
export default {
  name: "MessagePage",
  components: { MessageHeader, MessageContainer },
};
</script>
