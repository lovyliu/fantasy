<template>
  <ul>
    <li v-for="(book,index) in bookList"
      :key="index">
      <el-row>
        <el-col :span="6">
          <img :src="book.cover_url">
        </el-col>
        <el-col :span="18">
          <h4>{{ book.title }}</h4>
          <div>
            {{ book.info}}
          </div>
          <p>
            {{ book.abstract }}
          </p>
          <el-rate
            v-model="book.star"
            disabled
            show-score
            :allow-half="true"
            text-color="#ff9900"
            :score-template="(book.star*2).toString()">
          </el-rate>
        </el-col>
      </el-row>

    </li>
  </ul>
</template>

<script>
import request from '@/util/request'
export default {
  name: 'FantasyBook',
  data () {
    return {
      limit: 10,
      offset: 0,
      bookList: []
    }
  },
  mounted () {
    let bookObj = this
    let params = '?limit=' + this.limit + '&offset=' + this.offset
    request.requestBook(params)
      .then(function (response) {
        console.log(response.data.data)
        console.log(bookObj)
        response.data.data.forEach(book => {
          book.star = Number(book.star) / 2
          book.info = book.info ? book.info.join(' / ') : ''
        })
        bookObj.bookList = response.data.data
      })
    // return movieList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
