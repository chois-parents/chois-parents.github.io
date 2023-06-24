<template>
  <div class="page">
    <h3>갤러리</h3>
    <section class="gallery-group">
      <section class="images">
        <div v-for="(img, idx) in images" :key="idx" class="image-frame">
          <img :src="img" />
        </div>
      </section>
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
$image-size: 120px;
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
</style>
