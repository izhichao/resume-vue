<template>
  <div class="edu">
    <ContentTitle>教育经历</ContentTitle>
    <div class="content">
      <div class="content__school">
        <strong>{{ school }} | {{ major }}</strong>
        <span class="time">{{ startTime }} - {{ endTime }}</span>
      </div>

      <div class="content__course mt10">
        <strong>主修课程：</strong>
        {{ course }}
      </div>

      <hr />

      <div class="content__gpa mt10">
        <strong>GPA: {{ gpa }}</strong>
      </div>

      <div class="content__prize mt10">
        <strong>奖学金：</strong>
        {{ prize }}
      </div>

      <div class="content__certificate mt10">
        <strong>证书：</strong>
        {{ certificate }}
      </div>
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

.time {
  color: rgba(85, 85, 85, 0.9);
}

.content {
  font-size: 16px;
  color: #333;

  &__school {
    display: flex;
    justify-content: space-between;
  }

  &__course {
    font-size: 14px;
  }
}
</style>
