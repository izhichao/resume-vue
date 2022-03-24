<template>
  <div>
    <h3><slot></slot></h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ContentTitle',
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  height: 20px;

  h3 {
    line-height: 20px;
    font-size: 18px;
    padding: 0 10px;
  }

  &::before {
    content: '';
    display: block;
    background-color: #00c9b8;
    height: 20px;
    width: 20px;
  }

  &::after {
    flex: 1;
    content: '';
    display: block;
    background: linear-gradient(to right, #00c9b8, #00bdc4);
    height: 20px;
  }

  &:nth-of-type(n + 1) {
    margin-top: 20px;
  }
}
</style>
