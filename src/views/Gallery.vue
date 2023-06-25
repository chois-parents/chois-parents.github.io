<template>
  <div id="gallery" class="page">
    <h3>🎞️ 갤러리</h3>
    <p class="text-small">더 많은 사진을 보려면 아래 사진을 클릭해주세요 🥰</p>
    <section class="gallery-group">
      <a href="https://www.icloud.com/sharedalbum/#B0rJtdOXmKM1LFN" class="images">
        <div v-for="(img, idx) in images" :key="idx" class="image-frame">
          <img :src="img" />
        </div>
      </a>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Gallery extends Vue {
  get images() {
    const result: NodeRequire[] = [];
    for (let index = 1; index <= 9; index++) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      result.push(require(`@/assets/imgs/gallery/${index}.png`));
    }
    return result;
  }
}
</script>
<style lang="scss">
$image-size: 125px;
.gallery-group {
  display: flex;
  position: relative;
  top: 8%;
  p {
    font-size: 0.85em;
    margin-bottom: 5px;
  }
}
.images {
  display: grid;
  grid-template-columns: repeat(3, $image-size);
  grid-template-rows: repeat(3, $image-size);
  margin: 0 auto;
  .image-frame {
    overflow: hidden;
    position: relative;
  }
  img {
    position: absolute;
    left: 0;
    margin: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (min-width: 500px) and (max-width: 800px) {
  // 800보다 크면
  .images {
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(3, 200px);
  }
}

@media (min-width: 800px) {
  // 800보다 크면
  .images {
    grid-template-columns: repeat(3, 250px);
    grid-template-rows: repeat(3, 250px);
  }
}
// @media (min-width: 500px) {
//   .images {
//     grid-template-columns: repeat(3, 250px);
//     grid-template-rows: repeat(3, 250px);
//   }
// }
</style>
