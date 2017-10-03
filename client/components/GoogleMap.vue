<template>
  <div class="google-map" :id="mapName">
  </div>
</template>
<script>

export default {
  name: 'google-map',
  props: ['name', 'videos', 'clustered'],
  data() {
    return {
      mapName: this.name + "-map",
      map: null,
      markers: null
    }
  },
  mounted() {
    console.log('clustered')
    console.log(this.clustered)

    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(51.501527, -0.1921837)
    }
    this.map = new google.maps.Map(element, options);
  },
  created() {
    this.eventHub.$on('resize', this.resize)
  },
  watch: {
    videos: function(v) {
      this.markers = []

      this.videos.forEach(video => {
        const position = new google.maps.LatLng(video.latitude, video.longitude);
        const marker = new google.maps.Marker({
          position,
          map: this.map
        })
      })
    }
  },
  methods: {
    resize() {

      const intervalId = setInterval(() => {
        google.maps.event.trigger(this.map, 'resize')
      }, 200)

      setTimeout(() => {
        clearInterval(intervalId)
      }, 1100) // 1 second animation
    }
  }
}
</script>
<style scoped>

</style>
