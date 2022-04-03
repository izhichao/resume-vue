<template>
  <div class="header">
    <img class="header__avatar" src="https://gw.alicdn.com/imgextra/i4/O1CN01tw0KKM24fUkmkolGO_!!6000000007418-2-tps-320-320.png" alt="avatar" />
  </div>

  <div class="info">
    <h2 class="mt10">{{ name }}</h2>
    <h3 class="mt10">{{ position }}</h3>
    <div class="info__text mt10">{{ school }} · {{ major }}</div>
    <div class="info__text mt10">{{ gender }} · {{ age }}岁 · {{ background }}</div>
    <div class="info__contact mt10">
      <a href="">{{ web }}</a>
    </div>
    <div class="info__contact mt10">
      <a :href="'tel:' + phone">{{ formatPhone }}</a>
      <a :href="'mailto:' + mail">{{ mail }}</a>
    </div>

    <div class="icon">
      <a :href="web" class="iconfont">&#xe61f;</a>
      <a :href="'tel:' + phone" class="iconfont">&#xe603;</a>
      <a :href="'mailto:' + mail" class="iconfont">&#xe908;</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { base, edu } from '../../data';
export default defineComponent({
  name: 'Header',
  setup() {
    const { school, major, background } = edu;

    return {
      ...base,
      school,
      major,
      background
    };
  }
});
</script>

<style lang="scss" scoped>
div {
  font-family: 'lucida grande', 'lucida sans unicode', lucida, helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
}

.mt10 {
  margin-top: 10px;
}

.header {
  background-color: black;
  height: 170px;
  position: relative;

  &__avatar {
    border: 4px solid whitesmoke;
    border-radius: 50%;
    width: 98px;
    position: absolute;
    bottom: -27%;
    left: 50%;
    transform: translate(-50%);
  }
}

.info {
  background-color: #fafafa;
  text-align: center;
  padding: 60px 0 30px 0;
  color: #333;
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 22.4px;
  }
  &__text {
    color: #666;
  }
  &__contact {
    a {
      color: #333;
      &:nth-child(1) {
        margin-right: 20px;
      }
    }
  }

  .icon {
    margin-top: 10px;
    a {
      color: #333;
      font-size: 24px;
      margin: 0 10px 0;
    }
  }
}
</style>
