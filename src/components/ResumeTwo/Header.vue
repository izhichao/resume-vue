<template>
  <div class="header">
    <div class="header__avatar"></div>
  </div>

  <div class="info">
    <h2 class="mt10">{{ base.name }}</h2>
    <h3 class="mt10">{{ base.position }}</h3>
    <div class="info__text mt10">{{ edu.school }} · {{ edu.major }}</div>
    <div class="info__text mt10">{{ base.gender }} · {{ base.age }}岁 · {{ edu.background }}</div>
    <div class="info__contact mt10">
      <a href="">
        <i class="iconfont">&#xe61f;</i>
        {{ base.web }}
      </a>
    </div>
    <div class="info__contact mt10">
      <a :href="'tel:' + base.phone">
        <i class="iconfont">&#xe603;</i>
        {{ base.formatPhone }}
      </a>
      <a :href="'mailto:' + base.mail">
        <i class="iconfont">&#xe908;</i>
        {{ base.mail }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUser } from '../../composables/useUser';

const { base, edu } = useUser();
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
  height: 120px;
  position: relative;

  &__avatar {
    box-sizing: content-box;
    border: 3px solid whitesmoke;
    border-radius: 50%;
    height: 98px;
    width: 98px;
    position: absolute;
    bottom: -40%;
    left: 50%;
    transform: translate(-50%);
    background: url('../../assets/avatar.png') no-repeat;
    background-size: 105px 105px;
  }
}

.info {
  text-align: center;
  padding-top: 50px;
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
      line-height: 24.8px;
      i {
        font-size: 20px;
        margin-right: 5px;
        vertical-align: bottom;
      }
      &:nth-child(1) {
        margin-right: 30px;
      }
    }
  }
}
</style>
