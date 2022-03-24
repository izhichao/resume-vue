<template>
  <ContentTitle>教育经历</ContentTitle>
  <div class="content">
    <div class="content__school mt10">
      <strong>{{ startTime }} - {{ endTiem }}</strong>
      <strong>{{ school }}</strong>
      <strong>{{ major }} | {{ background }}</strong>
    </div>

    <div class="content__course mt10">
      <strong>主修课程：{{ course }}</strong>
    </div>

    <hr />

    <div class="content__gpa mt10">
      <strong>GPA: {{ gpa }}</strong>
    </div>

    <div class="content__prize mt10">
      <strong>奖学金：{{ prize }}</strong>
    </div>

    <div class="content__certificate mt10">
      <strong>证书：{{ certificate }}</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentTitle from './ContentTitle.vue';
import { edu } from '../../data';
export default defineComponent({
  name: 'Edu',
  components: {
    ContentTitle
  },
  setup() {
    return {
      ...edu
    };
  }
});
</script>

<style lang="scss" scoped>
.mt10 {
  margin-top: 10px;
}

.content {
  hr {
    margin-top: 10px;
    border-bottom: 2px dashed #ccc;
  }

  &__school {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  &__course {
    margin-top: 10px;
    font-size: 14px;
  }
}
</style>
