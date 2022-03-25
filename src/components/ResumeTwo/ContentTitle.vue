<template>
  <hr />
  <div class="title">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ContentTitle',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
hr {
  width: 90%;
  margin: 20px auto 0;
  border-top: 1px solid #ccc;
}

.title {
  text-align: center;
  background-color: #eee;
  border-radius: 26px;
  width: 110px;
  margin: 20px auto;
  font-size: 19.2px;
  height: 28px;
}
</style>
