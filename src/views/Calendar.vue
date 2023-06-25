<template>
  <div id="calendar">
    <section class="img-frame">
      <v-date-picker
        v-model="date"
        trim-weeks
        :min-date="new Date(2023, 7, 27)"
        :max-date="new Date(2023, 7, 27)"
        is-expanded
      >
        <template #header-title>2023년 8월</template>
      </v-date-picker>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Callendar extends Vue {
  themeStyles = {
    dayNotInMonth: 'not-in-month',
  };

  date = new Date(2023, 7, 27);
  onDayClick() {
    // TODO
  }
}
</script>
<style lang="scss">
@import '@/style/calendar.scss';
#calendar {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #c2c3bd !important;
  background-position-x: 52%;
  background-image: url('../assets/imgs/cal-img.jpeg');
  height: 812px;
  left: 0;
  top: 0;
  width: 100%;
  height: 79vh;
}
.img-frame {
  bottom: 0;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  background-color: #ffffff52;
  padding-bottom: 10px;
}
</style>
