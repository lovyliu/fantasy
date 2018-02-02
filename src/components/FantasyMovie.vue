<template>
  <div class="">
    <!-- <el-tabs v-model="movieTab" @tab-click="handleClickTab">
      <el-tab-pane label="高分电影" name="top">高分电影</el-tab-pane>
      <el-tab-pane label="正在热映" name="current">正在热映</el-tab-pane>
      <el-tab-pane label="即将上映" name="next">即将上映</el-tab-pane>
    </el-tabs> -->
    <ul>
      <li v-for="(movie,index) in movieList"
        :key="index">
        <el-row>
          <el-col :span="6">
            <img :src="movie.cover_url">
          </el-col>
          <el-col :span="18">
            <h4>{{ movie.title }}</h4>
            <p class="info">
              <span v-for="(type,type_index) in movie.types"
                :key="type_index">
                {{ type }}
              </span>
              {{ movie.release_date }}
            </p>
            <p class="actors">
              主演：{{ movie.actors.toString() }}
            </p>
            <el-rate
              v-model="movie.rating[0]"
              disabled
              show-score
              :allow-half="true"
              text-color="#ff9900"
              :score-template="(movie.rating[0]*2).toString()">
            </el-rate>

          </el-col>
        </el-row>

      </li>
    </ul>
  </div>

</template>

<script>
import request from '@/util/request'
export default {
  name: 'FantasyMovie',
  data () {
    return {
      loading: false,
      limit: 10,
      offset: 0,
      movieList: [],
      scrollContainer: null,
      scrollContent: null,
      eleH: 0
    }
  },
  methods: {
    loadMore () {
      if (this.loading) {
        return
      }
      this.offset = this.movieList.length
      this.loading = true
      const loading = this.$loading({
        lock: true,
        text: '拼命加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      let params = '?limit=' + this.limit + '&offset=' + this.offset
      request.requestMovie(params)
        .then(function (response) {
          console.log(response.data.data)
          response.data.data.forEach(movie => {
            movie.rating[0] = Number(movie.rating[0]) / 2
            this.movieList.push(movie)
          })
          this.loading = false
          loading.close()
          // movieObj.movieList = moresponse.data.data
        }.bind(this))
        .catch(function (error) {
          console.log(error)
          this.loading = false
          loading.close()
        })
    }
  },
  // computed: {
  //   async movieList () {
  //     let params = '?limit=' + this.limit + '&offset=' + this.offset
  //     let movieList = await requestMovie(params).data
  //     return movieList
  //   }
  // },
  mounted () {
    this.scrollContainer = this.$el
    console.log(this.scrollContainer)
    this.scrollContent = this.$el.querySelector('ul')
    this.eleH = this.scrollContent.offsetHeight
    console.log(this.$el.offsetHeight)
    this.loadMore()

    // let movieObj = this
    // let params = '?limit=' + this.limit + '&offset=' + this.offset
    // request.requestMovie(params)
    //   .then(function (response) {
    //     console.log(response.data.data)
    //     console.log(movieObj)
    //     response.data.data.forEach(movie => {
    //       movie.rating[0] = Number(movie.rating[0]) / 2
    //     })
    //     movieObj.movieList = response.data.data
    //   })
    // return movieList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  padding: 10px 0 0 10px;
  height: auto;
}
ul li{
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
  padding-left: 0;
  text-align: left;
}
ul li .el-row{
  overflow: hidden;
}
ul li .el-col-6{
  padding-right: 10px;
}
ul li img{
  width: 100%;
}
ul li h4{
  font-size: 14px;
  font-weight: normal;
  color: #333;
  margin-top: 0;
  margin-bottom: 5px;
}
ul li p{
  margin: 5px 0;
  font-size: 12px;
  line-height: 14px;
  color: #666;
}
ul li p.info{
  margin-bottom: 15px;
}
ul li p.actors{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
