<template>
  <div id="index">
    <carousel></carousel>
    <pop-show></pop-show>
  </div>
</template>

<script>
import Carousel from '../components/carousel'
import movieItem from '../components/item-collapse'
import popShow from '../components/pop-show'
import {getHotMovies} from '../api/api'
export default {
  name: 'index',
  components: {
    Carousel,
    movieItem,
    popShow
  },
  data () {
    return {
      hotMovies: []
    }
  },
  created () {
    this.getHotMovies()
  },
  methods: {
    getHotMovies () {
      getHotMovies().then((response) => {
        this.hotMovies = response.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
