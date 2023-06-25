<template>
  <div id="contact" class="page">
    <h3>☎️ 혼주 연락처</h3>
    <section class="info-text" style="margin-bottom: 2em;">
      신랑 & 신부 혼주에게 <br />
      축하메시지를 전달해 보세요
    </section>
    <article class="contact-info">
      <section class="contact-list">
        <section v-for="(data, idx) in contactData" :key="idx" class="contact-detail">
          <div v-for="(value, idx2) in data" :key="idx2">
            <div class="contact-detail-contents">
              <span class="contact-detail__title">{{ value.title }}</span>
              <span class="contact-detail__name">{{ value.name }}</span>
              <a :href="`sms:${value.tel}`" class="link"><i class="fa-solid fa-comment fa-lg"/></a>
              <a :href="`tel:${value.tel}`" class="link"><i class="fas fa-phone-square"/></a>
            </div>
            <div v-if="idx2 === 0" class="contact-detail__title">🤍혼주🤍</div>
          </div>
        </section>
      </section>
    </article>
    <article class="page">
      <h3>💌 마음을 담은 축의금</h3>
      <section class="info-text">
        신랑 & 신부에게 축하의 마음을 전해주세요
      </section>
      <section class="account-btn-group">
        <button class="default-btn" @click="showAccountList('bride')">
          신랑측 계좌번호 확인하기
        </button>
        <button class="default-btn" @click="showAccountList('groom')">
          신부측 계좌번호 확인하기
        </button>
      </section>
      <!-- <section class="account-list">
        <div
          v-for="({ label, name, account }, idx) in accountList"
          :key="idx"
          class="account info-text"
          :style="{ 'margin-top': idx === 3 ? '2.3em' : '5px' }"
        >
          <span class="account-label">{{ label }}</span>
          <span class="account-name text-semi-bold">{{ name }}</span>
          <span class="account-number">{{ account }}</span>
          <button class="default-btn" @click="copyAccount(account)">복사</button>
        </div>
      </section> -->
    </article>
    <b-modal v-model="modal" hide-footer :title="modalTitle" centered>
      <section class="account-list">
        <div
          v-for="({ label, name, account }, idx) in showAccountData"
          :key="idx"
          class="account info-text"
          :style="{ 'margin-top': idx === 3 ? '2.3em' : '5px' }"
        >
          <div class="account-name-group">
            <span class="account-label">{{ label }}</span>
            <span class="account-name text-semi-bold">{{ name }}</span>
          </div>
          <div class="account-number-group">
            <span class="account-number">{{ account }}</span>
            <button class="default-btn" @click="copyAccount(account)">복사</button>
          </div>
        </div>
      </section>
    </b-modal>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Contact extends Vue {
  modal = false;
  contactData = {
    bride: [
      { title: '🤵🏻신랑', name: '최성욱', tel: '010-3476-2922' },
      { title: '아버지', name: '최용산', tel: '010-6503-6110' },
      { title: '어머니', name: '강연숙', tel: '010-3910-2922' },
    ],
    groom: [
      { title: '👰🏻‍♀️신부', name: '김지은', tel: '010-3344-2225' },
      { title: '아버지', name: '김윤석', tel: '010-9326-9080' },
      { title: '어머니', name: '이정심', tel: '010-9811-1588' },
    ],
  };
  accountList: { [key: string]: any[] } = {
    bride: [
      {
        label: '신랑',
        name: '최성욱',
        account: '카카오뱅크 3333-09-9950803',
      },
      {
        label: '혼주',
        name: '최용산',
        account: '국민은행 070-102-04-205860',
      },
      {
        label: '혼주',
        name: '강연숙',
        account: '하나은행 407-910848-23007',
      },
    ],
    groom: [
      {
        label: '신부',
        name: '김지은',
        account: '우리은행 1002-454-418188',
      },
      {
        label: '혼주',
        name: '김윤석',
        account: '부산은행 094-01-027432-9',
      },
      {
        label: '혼주',
        name: '이정심',
        account: '부산은행 036-12-129766-1',
      },
    ],
  };
  modalTitle = '';

  showAccountData = [
    {
      label: '신부',
      name: '김지은',
      account: '우리은행 1002-454-418188',
    },
    {
      label: '혼주',
      name: '김윤석',
      account: '부산은행 094-01-027432-9',
    },
    {
      label: '혼주',
      name: '이정심',
      account: '부산은행 036-12-129766-1',
    },
  ];

  showAccountList(label: string) {
    this.modalTitle =
      label === 'groom' ? ' 👰🏻‍♀️ 신부측 계좌번호 확인하기' : ' 🤵🏻 신랑측 계좌번호 확인하기';
    this.showAccountData = this.accountList[label];
    this.modal = true;
  }

  async copyAccount(account: string) {
    await navigator.clipboard.writeText(account);
    alert('복사 되었습니다');
  }
}
</script>
<style lang="scss">
#contact {
  h3 {
    margin-bottom: 20px;
  }
}
.account-btn-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  .default-btn {
    width: 300px;
    margin: 5px 20px;
    font-weight: 800;
    padding: 15px 25px;
    font-size: 0.9rem;
    color: #000;
    border-radius: 15px;
  }
}
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
  .contact-detail-contents {
    color: #000 !important;
    text-decoration: none;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
.contact-detail__name {
  margin: 0 6px;
}
.account-list {
  width: fit-content;
  text-align: center;
  margin: 0 auto;
}
.account {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  flex-direction: column;
  align-items: baseline;
  span {
    margin: 0 5px;
  }
  .account-name {
    font-weight: bold;
    font-size: 1rem;
  }
  .account-number {
    width: 215px;
  }
  .default-btn {
    padding: 5px 13px;
  }
}
.link {
  color: #000 !important;
  margin: 0 4px;
}
.account-label,
.account-number {
  font-size: 0.95rem;
}
.account-number-group {
  display: flex;
  text-align: justify;
  align-items: center;
}
.modal-title {
  font-size: 1.1rem;
}
</style>
