<template>
  <Header />
  <div class="detail">
    <hr />
    <Edu />
    <hr />
    <Skill />
    <hr />
    <Project />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/ResumeTwo/Header.vue';
import Edu from '../components/ResumeTwo/Edu.vue';
import Skill from '../components/ResumeTwo/Skill.vue';
import Project from '../components/ResumeTwo/Project.vue';

export default defineComponent({
  components: { Header, Edu, Skill, Project },
  name: 'ResumeTwo',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.detail {
  padding: 0 60px 30px;
  color: #333;
  hr {
    margin-top: 20px;
    border-top: 1px solid #ccc;
  }
}

@media screen and (max-width: 1024px) {
    .detail {
      padding: 0 30px 30px !important;
    }
  }
</style>
