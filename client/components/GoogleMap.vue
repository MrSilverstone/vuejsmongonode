<template>
  <div class="google-map" :id="mapName">
  </div>
</template>
<script>

export default {
  name: 'google-map',
  props: ['name', 'videos'],
  data() {
    return {
      mapName: this.name + "-map",
      map: null,
      markers: null
    }
  },
  mounted() {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(51.501527, -0.1921837)
    }
    this.map = new google.maps.Map(element, options);
  },
  watch: {
    videos: function(v) {
      console.log(this.videos)

      this.markers = []

      this.videos.forEach(video => {
        const position = new google.maps.LatLng(video.latitude, video.longitude);
        const marker = new google.maps.Marker({
          position,
          map: this.map
        })
      })
    }
  }
}
</script>
<style scoped>

</style>
