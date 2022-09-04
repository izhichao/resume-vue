<template>
  <div class="content-title">
    <h3><slot></slot></h3>
  </div>
</template>

<script lang="ts" setup>
import useColor from '../../hooks/useColor';

const [colorOne, colorTwo] = useColor();
</script>

<style lang="scss" scoped>
.content-title {
  display: flex;
  align-items: center;
  height: 20px;
  margin-top: 10px;

  h3 {
    line-height: 20px;
    font-size: 18px;
    padding: 0 10px;
  }

  &::before {
    content: '';
    display: block;
    background-color: v-bind(colorOne);
    height: 20px;
    width: 20px;
  }

  &::after {
    flex: 1;
    content: '';
    display: block;
    background: linear-gradient(to right, v-bind(colorOne), v-bind(colorTwo));
    height: 20px;
  }
}
</style>
