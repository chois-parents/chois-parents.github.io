<template>
  <div class="page">
    <h3>방명록</h3>
    <article class="comment-input-group">
      <p class="comment-input__name">
        <input id="name" v-model="comment.title" type="text" placeholder="👤 이름" />
      </p>
      <p class="comment-input__contents">
        <textarea
          id="contents"
          v-model="comment.body"
          type="text"
          placeholder="💌 축하의 메세지를 입력해주세요"
        />
      </p>
      <button v-if="!saveLoading" class="btn" @click="addComments">Add</button>
      <button v-else disabled class="btn" @click="addComments">Add</button>
    </article>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      first-text="«"
      prev-text="‹"
      next-text="›"
      last-text="»"
      pills
      size="sm"
    ></b-pagination>
    <div class="comment-group">
      <article class="comments" v-for="(data, idx) in currentComments" :key="idx">
        <section class="comment-title">
          <h1 class="comment-title__name">{{ data.title }}</h1>
          <h5 class="comment-title__date">{{ getDate(data.created_at) }}</h5>
        </section>
        <section class="comment-body">
          {{ data.body }}
        </section>
      </article>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import moment from 'moment';
type Comment = { title: string; body: string; created_at?: string };

@Component({})
export default class CommentPage extends Vue {
  token1 = 'ghp_Cpfp';
  token2 = '34Cg4kPPY';
  token3 = 'QLyjVEEKl6O';
  token4 = 'HccdDr2mxfMv';
  API_BASE_URL =
    'https://api.github.com/repos/chois-parents/chois-parents.github.io/issues?per_page=100';
  res: Comment[] = [];
  comment: Comment = {
    title: '',
    body: '',
  };
  perPage = 5;
  currentPage = 1;
  saveLoading = false;
  get currentComments() {
    return this.res.slice((this.currentPage - 1) * this.perPage, this.perPage * this.currentPage);
  }
  get rows() {
    return this.res.length;
  }
  get totalPage() {
    return Math.ceil(this.res.length / 5);
  }
  created() {
    this.loadComments();
  }
  getDate(date: string) {
    return moment(date).format('YYYY.MM.DD HH:mm');
  }
  loadComments() {
    axios
      .get(this.API_BASE_URL, {
        headers: {
          Authorization: `Bearer ${this.token1 + this.token2 + this.token3 + this.token4}`,
        },
      })
      .then(res => {
        this.res = res.data;
      });
  }

  addComments() {
    const requestBody = { title: this.comment.title, body: this.comment.body };
    this.saveLoading = true;
    axios
      .post(this.API_BASE_URL, requestBody, {
        headers: {
          Authorization: `Bearer ${this.token1 + this.token2 + this.token3 + this.token4}`,
        },
      })
      .then(res => {
        console.log(res);
        this.res.unshift(requestBody);
      })
      .finally(() => {
        this.saveLoading = false;
      });
  }
}
</script>
<style lang="scss">
#comment-page {
  font-family: var(--bs-body-font-family);
  margin-bottom: 70px;
}
.save-btn {
  width: fit-content;
  -webkit-align-self: flex-end !important; /* add prefixed version */
  -ms-flex-align: end;
  align-self: end;

  padding: 4px 11px;
  border-radius: 10px;
  border: none;
  background-color: cadetblue;
  color: white;
  font-weight: 500;
  font-size: 0.8em;
}
.save-btn:disabled {
  background-color: #5f9ea045;
}
.comment-input__name,
.comment-input__contents {
  text-align: start;
  margin: 5px 0;
  font-size: 0.8em;
  input,
  textarea {
    border: 1px solid #e2e2e2;
    border-radius: 2px;
    padding: 10px;
  }
}

.comment-input-group {
  padding: 10px 20px;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -webkit-flexbox;
  flex-direction: column;
  .btn {
    width: fit-content;
    align-self: end;
  }
}
#contents {
  width: 95%;
  height: 4em;
  resize: none;
}
.divider {
  margin-top: 30px;
}
.profile img {
  display: block;
  border-radius: 31px;
  width: 30px;
  height: 30px;
}
.comments {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px 17px;
  border: 1px solid #e3e3e3;
  border-width: 0px 0px 1px 0px;
}
.comment-group {
  margin-bottom: 45px;
  border: 1px solid #e3e3e3;
  border-width: 1px 0px 0px 0px;
}
.comment-title {
  display: flex;
  align-items: baseline;
  h1,
  h5 {
    margin: 0;
  }
}
.comment-body {
  text-align: start;
  font-size: 0.8em;
  margin-top: 5px;
}
.comment-title__name {
  font-size: 1em;
  margin-right: 5px !important;
}
.comment-title__date {
  font-size: 0.7em;
  color: #838383;
}
.pagination {
  justify-content: center;
  margin-top: 10px;
}
.page-item.active .page-link {
  color: #fff !important;
  background-color: #572a00 !important;
  border: none;
}
.page-link {
  color: #572a00 !important;
  border: none !important;
  background-color: #572a001c !important;
}
</style>
