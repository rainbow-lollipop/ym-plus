<template>
  <div>
    <div class="row">
    <ym-button>普通按钮</ym-button>
    <ym-button type="success">success</ym-button>
    <ym-button type="warning">success</ym-button>
    <ym-button type="primary">primary</ym-button>
    <ym-button type="danger">primary</ym-button>
    <ym-button type="info">info</ym-button>
  </div>
  <div class="row">
    <ym-button plain>普通按钮</ym-button>
    <ym-button plain type="success">success</ym-button>
    <ym-button plain type="warning">success</ym-button>
    <ym-button plain type="primary">primary</ym-button>
    <ym-button plain type="danger">primary</ym-button>
    <ym-button plain type="info">info</ym-button>
  </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  .row {
    margin-bottom: 20px;
    width: 800px;
    display: flex;
    justify-content: space-evenly;
    margin: 20px auto;
  }
</style>


