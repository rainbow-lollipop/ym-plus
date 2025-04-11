<template>
  <div class="ym-card" :style="width ? { width: width + 'px' } : {}">
    <div class="ym-card-img">
      <img :src="imgSrc" alt="img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
    </div>
    <div v-if="summary" class="ym-card-summary">{{ summary }}</div>
    <div v-else class="ym-card-summary">
      <slot></slot>
    </div>
    <div class="ym-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { cardProps } from './card';

export default defineComponent({
  name: 'YmCard',
  props: cardProps,
  setup() {
    return {}
  }
})
</script>
<style scoped>
  
</style>