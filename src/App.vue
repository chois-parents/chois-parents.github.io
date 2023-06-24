<template>
  <div id="app">
    <StartPage />
    <Introduction />
    <Calendar />
    <Gallery />
    <LocationInfo />
    <Contact />
    <Comment />
    <footer>
      © All rights reserved by 2jerry
    </footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StartPage from './views/StartPage.vue';
import Introduction from './views/Introduction.vue';
import Calendar from './views/Calendar.vue';
import Gallery from './views/Gallery.vue';
import LocationInfo from './views/LocationInfo.vue';
import Contact from './views/Contact.vue';
import Comment from './views/CommentPage.vue';

@Component({
  components: { StartPage, Introduction, Calendar, Gallery, LocationInfo, Contact, Comment },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/style/main.scss';
</style>
