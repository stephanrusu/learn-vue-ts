<template>
  <div>
    <kanban-boards />
    <!-- <modal-container>
      <dummy-card />
    </modal-container> -->
    <slider-overlay />
  </div>
</template>

<script>
import KanbanBoards from "./kanban/KanbanBoards.vue";
import SliderOverlay from "./SliderOverlay.vue";
// import DummyCard from "./DummyCard.vue";
// import ModalContainer from "./kanban/ModalContainer.vue";

export default {
  name: "KanbanPage",
  components: { KanbanBoards, SliderOverlay },
};
</script>

ModalContainer
