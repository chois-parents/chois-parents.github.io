<template>
  <div id="start-page">
    <section class="start-page__title">
      <p class="wedding-text">Wedding D-Day</p>
      <h1>08. 27</h1>
      <h5>3:00 PM</h5>
    </section>
    <section class="start-page__img">
      <img src="@/assets/imgs/main-img.jpeg" />
    </section>
    <section class="start-page__contents">
      <p class="text-info">최성욱 & 김지은</p>
      <div class="vertical-divider"></div>
      <p class="text-info">2023. 08. 27</p>
    </section>
    <section class="detail-info">
      <p class="detail-info__date">2023년 8월 27일 일요일 오후 3시</p>
      <p class="detail-info__loc">세빛섬 플로팅 아일랜드</p>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class StartPage extends Vue {}
</script>
<style lang="scss" scoped>
$vertical-line-size: 70px;
#start-page {
  display: flex;
  flex-direction: column;
  // background-image: url('../assets/imgs/main-img.jpeg');
  // position: relative;
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-color: #c2c3bd !important;
  // background-position-x: 41%;
  // height: 812px;
  // left: 0;
  // top: 0;
  // width: 100%;
  // height: 43vh;
}
.start-page__title {
  text-align: left;
  align-self: start;
  margin: 40px 20px 20px;
  h1 {
    font-size: 1.95rem;
    font-weight: 400;
    margin: 0px;
  }
  h5 {
    margin: 0px;
    font-weight: 400;
  }
}

.wedding-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  position: absolute;
  right: -10px;
  top: 0;
  font-size: 1.4rem;
  padding: 56px 8px 0;
  height: 200px;
  // background: #fff0f06e;
  font-weight: 400;
}
.start-page__img {
  img {
    width: 100%;
  }
}
.start-page__contents {
  margin-top: 1.6em;
  align-self: center;
  font-size: 1.25rem;
  font-weight: 400;
  .vertical-divider {
    width: 0px;
    margin: 0 auto;
    border-left: 1.4px solid black;
    height: $vertical-line-size;
  }
  .text-info {
    margin: 1.2em;
    font-size: 1.3rem;
    font-weight: 400;
  }
}
.detail-info {
  font-size: 0.82rem;

  .detail-info__date {
    font-weight: bold;
    margin: 8px 0;
  }
  .detail-info__loc {
    margin: 0px;
  }
}
</style>
