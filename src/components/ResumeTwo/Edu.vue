<template>
  <div class="edu">
    <ContentTitle>教育经历</ContentTitle>
    <div class="content">
      <div class="content__school">
        <strong>{{ edu.school }} | {{ edu.major }}</strong>
        <span class="time">{{ edu.startTime }} - {{ edu.endTime }}</span>
      </div>

      <div class="content__course mt10">
        <strong>主修课程：</strong>
        {{ edu.course }}
      </div>

      <hr />

      <div class="content__gpa mt10">
        <strong>GPA: {{ edu.gpa }}</strong>
      </div>

      <div class="content__prize mt10">
        <strong>奖学金：</strong>
        {{ edu.prize }}
      </div>

      <div class="content__certificate mt10">
        <strong>证书：</strong>
        {{ edu.certificate }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContentTitle from './ContentTitle.vue';
import { mainStore } from '../../store';
import { storeToRefs } from 'pinia';

const store = mainStore();
const { edu } = storeToRefs(store);
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
