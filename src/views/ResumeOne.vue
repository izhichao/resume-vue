<template>
  <Header />
  <div class="content">
    <Edu />
    <Skill />
    <Project />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/ResumeOne/Header.vue';
import Edu from '../components/ResumeOne/Edu.vue';
import Skill from '../components/ResumeOne/Skill.vue';
import Project from '../components/ResumeOne/Project.vue';

export default defineComponent({
  name: 'ResumeOne',
  components: {
    Header,
    Edu,
    Skill,
    Project
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  padding: 20px 50px 10px;
}
</style>
