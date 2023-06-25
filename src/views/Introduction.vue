<template>
  <div id="intro" class="text-normal">
    <section class="intro__main-content">
      하나로 이어지다.<br />
      이태원의 문화공간 <span class="impact-text">connect1</span> 에서 <br />
      비슷한 취향의 두 사람이 만나,<br />
      두 개의 세상을 하나로 이으려 합니다. <br />
      2023년 8월 27일 저희 파티에 오셔서 축하해 주세요!
    </section>
    <hr />
    <section class="intro__sub-content">
      <p>최용산 ・ 강연숙의 막내 아들 <b class="text-bold">최성욱</b></p>
      <p>김윤석 ・ 이정심의 첫째 딸 <b class="text-bold"> 김지은</b></p>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Introduction extends Vue {
  data() {
    return {
      text: `하나로 이어지다.
      이태원의 문화공간 connect1에서
      비슷한 취향의 두 사람이 만나, 
      두 개의 세상을 하나로 이으려 합니다.
      2023년 8월 27일 저희 파티에 오셔서 축하해 주세요!`,
    };
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/_variables.scss';
#intro {
  margin: 55px 15px;
  hr {
    margin: 40px 0;
  }
}
.intro__main-content {
  white-space: pre-line;
  line-height: 2;
  font-size: 0.93rem;
}
.intro__sub-content {
  font-size: 0.95rem;
}
</style>
