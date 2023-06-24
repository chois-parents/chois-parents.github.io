<template>
  <div id="location-info" class="page">
    <h3>오시는 길</h3>
    <section class="address">
      <h4>새빛섬 플로팅 아일랜드</h4>
      <p class="info-text">{{ address }}</p>
      <button class="btn" @click="copyAddress">주소 복사</button>
    </section>
    <div id="map" />
    <section class="transport-info-container">
      <div v-for="{ title, content } in transports" :key="title" class="transport">
        <h4>{{ title }}</h4>
        <p class="info-text">
          {{ content }}
        </p>
      </div>
    </section>
    <img class="rough-map" src="@/assets/imgs/rough-map.jpeg" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class LocationInfo extends Vue {
  address = '서울특별시 서초구 올림픽대로 2085-14';
  lat = 37.51163976804685;
  lon = 126.99497238581128;
  transports = [
    {
      title: '지하철',
      content: `고속터미널역 6번 출구. 10분 간격 셔틀운행.
      (고속터미널 역이 커서 출구간 간격이 넓어요)`,
    },
    {
      title: '자가용',
      content: `네비 - 세빛섬 플로팅아일랜드
      도착 시 하객 전용 주차장으로 안내
      (약도사진 참고)`,
    },
  ];
  copyAddress() {
    const temp = document.createElement('textarea');
    temp.value = this.address;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    alert('복사 되었습니다');
  }

  get tmapLink() {
    return `https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx02af9c76eb7b4feab1b2c701cd1ac676&name=빌라드지디 수서점&lat=${this.lat}&lon=${this.lon}`;
  }
  mounted() {
    window.kakao && window.kakao.maps ? this.initMap() : this.addKakaoMapScript();
  }
  addKakaoMapScript() {
    const script = document.createElement('script');
    /* global kakao */
    script.onload = () => kakao.maps.load(this.initMap);
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cbded3bc9818521bf94902ed10957d96';
    document.head.appendChild(script);
  }
  initMap() {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(this.lat, this.lon),
      level: 5,
    };
    const imageSrc = 'https://www.pngfind.com/pngs/b/162-1626626_love-symbol-images-png.png', // 마커이미지
      imageSize = new kakao.maps.Size(30, 40),
      imageOption = { offset: new kakao.maps.Point(15, 45) };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(this.lat, this.lon);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(map);
  }
}
</script>
<style lang="scss">
#map {
  width: 100%;
  height: 150px;
  margin: 30px auto;
}

.address {
  h4 {
    margin: 3em 0 0.7em;
  }
}

.rough-map {
  width: 100%;
}
.transport-info-container {
  text-align: left;
  margin: 30px;
}
.transport {
  margin: 20px 0px;
  h4,
  p {
    margin: 0;
    line-height: 2;
  }
}
</style>
