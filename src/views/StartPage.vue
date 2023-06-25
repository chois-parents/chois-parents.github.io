<template>
  <div id="start-page">
    <section class="start-page__img">
      <img src="@/assets/imgs/main-img.png" />
    </section>
    <section class="start-page__contents">
      <p class="info-text">최성욱 & 김지은</p>
      <div class="vertical-divider"></div>
      <p class="info-text">2023. 08. 27</p>
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
  margin-top: 30px;
  align-self: center;
  font-size: 1.25rem;
  font-weight: 400;
  .vertical-divider {
    width: 0px;
    margin: 0 auto;
    border-left: 1.4px solid black;
    height: $vertical-line-size;
  }
  .info-text {
    margin: 30px;
    font-size: 1.3rem;
    font-weight: 800;
  }
}
.detail-info {
  font-size: 0.88rem;

  .detail-info__date {
    font-weight: 800;
    margin: 8px 0;
  }
  .detail-info__loc {
    margin: 0px;
    font-weight: bold;
  }
}
</style>
