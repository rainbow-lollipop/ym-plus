<template>
  <button 
    class="ym-button"
    :class="[
      `ym-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      },
    ]"
    :disabled="disabled"
    @click="clickHandle"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { buttonProps } from './button';

export default defineComponent({
  name: 'YmButton',
  props: buttonProps,
  emits: ['click'],
  setup(_, { emit }) {
    function clickHandle(e: Event) {
      emit("click", e);
    }
    return {
      clickHandle
    };
  }
});

</script>
<style scoped>
  
</style>