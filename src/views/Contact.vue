<template>
  <div id="contact" class="page">
    <h3>혼주 연락처</h3>
    <section class="info-text" style="margin-bottom: 2em;">
      신랑 & 신부 혼주에게 <br />
      축하메시지를 전달해 보세요
    </section>
    <article class="contact-info">
      <section class="contact-list">
        <section v-for="(data, idx) in contactData" :key="idx" class="contact-detail">
          <div v-for="(value, idx2) in data" :key="idx2">
            <a :href="`tel:${value.tel}`" class="contact-detail-contents">
              <span class="contact-detail__title">{{ value.title }}</span>
              {{ value.name }} <i class="fas fa-phone-square" />
            </a>
            <div v-if="idx2 === 0" class="contact-detail__title">🤍혼주🤍</div>
          </div>
        </section>
      </section>
    </article>
    <article class="page">
      <h3>마음을 담은 축의금</h3>
      <section class="info-text">
        신랑 & 신부에게 축하의 마음을 전해주세요
      </section>
      <section class="account-list">
        <div
          v-for="({ label, name, account }, idx) in accountList"
          :key="idx"
          class="account info-text"
          :style="{ 'margin-top': idx === 3 ? '2.3em' : '5px' }"
        >
          <span>{{ label }}</span>
          <span class="account-name">{{ name }}</span>
          <span>{{ account }}</span>
          <button class="btn" @click="copyAccount(account)">복사</button>
        </div>
      </section>
    </article>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Contact extends Vue {
  contactData = {
    bride: [
      { title: '🤵🏻신랑', name: '최성욱', tel: '010-0000-0000' },
      { title: '아버지', name: '최용산', tel: '010-0000-0000' },
      { title: '어머니', name: '강연숙', tel: '010-0000-0000' },
    ],
    groom: [
      { title: '👰🏻‍♀️신부', name: '김지은', tel: '010-0000-0000' },
      { title: '아버지', name: '김윤석', tel: '010-0000-0000' },
      { title: '어머니', name: '이정심', tel: '010-0000-0000' },
    ],
  };
  accountList = [
    {
      label: '신랑',
      name: '최성욱',
      account: '우리은행 00000000000',
    },
    {
      label: '혼주',
      name: '최용산',
      account: '우리은행 00000000000',
    },
    {
      label: '혼주',
      name: '강연숙',
      account: '우리은행 00000000000',
    },
    {
      label: '신부',
      name: '김지은',
      account: '우리은행 00000000000',
    },
    {
      label: '혼주',
      name: '김윤석',
      account: '우리은행 00000000000',
    },
    {
      label: '혼주',
      name: '이정심',
      account: '우리은행 00000000000',
    },
  ];

  copyAccount(account: string) {
    const temp = document.createElement('textarea');
    temp.value = account;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    alert('복사 되었습니다');
  }
}
</script>
<style lang="scss">
.contact-info {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #c2c3bd !important;
  background-position-x: 41%;
  background-image: url('../assets/imgs/contact-img.jpeg');
  height: 812px;
  left: 0;
  top: 0;
  width: 100%;
  height: 43vh;
}
.contact-list {
  bottom: 0;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  background-color: #ffffff52;
}
.contact-detail {
  margin: 10px;
  .contact-detail__title {
    margin-top: 20px;
    margin-bottom: 8px;
  }
  .contact-detail-contents {
    color: #000 !important;
    text-decoration: none;
    font-size: 0.8rem;
    display: block;
    cursor: pointer;
    margin: 5px 0;
    .fas {
      font-size: 1.25rem;
      vertical-align: middle;
    }
  }
}

.contact-detail-contents {
  text-decoration: none;
}

.contact-detail__title {
  font-weight: 800;
  font-size: 0.85rem;
}
.account-list {
  margin: 30px 0px;
}
.account {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;

  span {
    margin: 0 5px;
  }
  .account-name {
    font-weight: bold;
  }
  .btn {
    padding: 0.5em 1em;
  }
}
</style>
